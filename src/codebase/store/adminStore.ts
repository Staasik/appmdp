import DiagnosticsService from "codebase/services/DiagnosticsService";
import { makeAutoObservable } from "mobx";

export interface IDiagnItem {
    id: number,
    title: string,
    image: string,
    description: string,
    answersDescription: string,
    published: boolean
}

export interface IAnswer {
    text: string,
    value: number,
    questionID: number
}

export interface IQuestion {
    id: number | null,
    tempid: number,
    text: string,
    diagnosticID: number,
    answers: IAnswer[],
    type: 'oneAnswer' | 'someAnswers' | 'numbersList'
}

export interface IOption {
    id: number | null,
    tempid: number,
    diagnosticID: number,
    description: string,
    minValue?: number,
    maxValue?: number,
    hasError?: boolean
}

export interface IDiagnData extends IDiagnItem {
    questions: IQuestion[],
    options: IOption[]
}

export default class AdminStore {
    diagnosticsList: IDiagnItem[] = []
    diagnosticData: IDiagnData | null = null
    answersOption: number | undefined
    isSaved: boolean = false
    isError: boolean = false
    optionsError: false | string = false

    constructor() {
        makeAutoObservable(this)
    }

    setIsSaved(value: boolean) {
        this.isSaved = value;
    }

    setIsError(value: boolean) {
        this.isError = value;
    }

    setOptionsError(value: false | string) {
        this.optionsError = value;
    }

    getPublishedList() {
        return this.diagnosticsList.filter((d) => d.published)
    }

    getUnpublishedList() {
        return this.diagnosticsList.filter((d) => !d.published)
    }

    getAnswersOption(): number | undefined {
        return this.answersOption
    }

    mergeIntervals(intervals: number[][]) {
        const sortedIntervals = intervals.sort((a, b) => a[0] - b[0])

        let main: number[][] = []
        sortedIntervals.forEach((int) => {
            const length = main.length
            if (length === 0) {
                main[0] = int
            }
            else {
                if (+main[length - 1][1] + 1 == int[0]) main[length - 1][1] = int[1]
                else main.push(int)
            }

        })

        return main
    }

    getIntervals(options: IOption[]) {
        if (options.length === 0) return undefined

        if (options.some((value) => value.maxValue === undefined || value.minValue === undefined)) return undefined

        return options.map((value) => [value.minValue || 0, value.maxValue || 0])
    }

    checkIntervals(neededInterval: number[], options: IOption[]): { error: string | false, options: IOption[] } {
        const intervals = this.getIntervals(options)

        if (!intervals || intervals.length === 0) return { error: 'Нет результатов или есть не заполненные!', options }

        const tempInt = this.mergeIntervals(intervals)

        if (tempInt.length === 1) {
            if (tempInt[0][0] <= neededInterval[0] && tempInt[0][1] == neededInterval[1]) return { error: false, options }
            if (tempInt[0][1] > neededInterval[1]) return { error: 'Превышен максимальный результат!', options }
            return { error: 'Не все результаты обработаны!', options }
        }

        for (let index = 1; index < tempInt.length; index++) {
            const prevInt = tempInt[index-1];
            const currInt = tempInt[index];
            if(+prevInt[1] + 1 < +currInt[0]){
                return { error: 'Не все результаты обработаны!', options }
            }
            
        }

        options.forEach((option) => {
            if (tempInt.some((int) => int[0] === option.minValue)) {
                option.hasError = true
            }
        })

        return { error: 'Интервалы результатов пересекаются!', options }
    }

    checkOptions(){
        if (!this.diagnosticData || this.diagnosticData.options.length === 0) throw new Error('Error')

            const questions = this.diagnosticData.questions
            const questionsLength = questions.length
            const answerValue = questions[0].answers[0].value
            const mainInterval = [questionsLength, questionsLength * answerValue]

            const { error, options } = this.checkIntervals(mainInterval, this.diagnosticData.options)
            this.diagnosticData.options = options
            this.setOptionsError(error)
            return !!error
    }

    setAnswersOption(value: number) {
        this.answersOption = value
        this.diagnosticData?.questions.forEach((question) => question.answers[0].value = value)
    }

    setTitle(text: string) {
        if (this.diagnosticData) this.diagnosticData.title = text
    }

    setDescription(text: string) {
        if (this.diagnosticData) this.diagnosticData.description = text
    }

    setAnswersDescription(text: string) {
        if (this.diagnosticData) this.diagnosticData.answersDescription = text
    }

    async getDiagnosticsList() {
        try {
            const response = await DiagnosticsService.getDiagnosticsForAdmin()
            this.diagnosticsList = response.data
            return response.data
        } catch (error) {
            return undefined
        }
    }

    async createDiagnostic() {
        try {
            const response = await DiagnosticsService.createDiagnostic()
            this.diagnosticsList.push(response.data)
            return response.data
        } catch (error) {
            return undefined
        }
    }

    async deleteDiagnostic(id: number) {
        try {
            const response = await DiagnosticsService.deleteDiagnostic(id)
            this.diagnosticsList = this.diagnosticsList.filter(obj => obj.id !== id)
            return response.data
        } catch (error) {
            return undefined
        }
    }

    async getDiagnosticData(id: number) {
        try {
            const response = await DiagnosticsService.getDiagnosticData(id)
            response.data?.questions.forEach((quesion, index) => quesion.tempid = index + 1)
            response.data?.options.forEach((option, index) => option.tempid = index + 1)
            this.diagnosticData = response.data
            if (this.diagnosticData && this.diagnosticData.questions.length !== 0 && this.diagnosticData.questions[0].type === 'numbersList') {
                this.answersOption = +this.diagnosticData.questions[0].answers[0].value
            }
            return response.data
        } catch (error) {
            window.location.href = '../diagnostics'
            return undefined
        }
    }

    async saveDiagnosticData() {
        try {
            if (!this.diagnosticData || this.diagnosticData.options.length === 0) throw new Error('Error')

            if(this.checkOptions()) return

            const response = await DiagnosticsService.updateDiagnostic(this.diagnosticData)
            this.isSaved = true;
            return response.data
        } catch (error) {
            this.isError = true;
            return undefined
        }
    }

    async publishDiagnostic(data: boolean, diagnosticID: number) {
        try {
            const response = await DiagnosticsService.publishDiagnostic(data, diagnosticID)
            let diagn = this.diagnosticsList.find((v) => diagnosticID === v.id)
            if (diagn) {
                diagn.published = data
            }
            return response.data
        } catch (error) {
            return undefined
        }
    }

    addQuestion() {
        if (this.diagnosticData !== null) {
            const maxID = this.diagnosticData.questions.length !== 0 ? this.diagnosticData.questions[this.diagnosticData.questions.length - 1].tempid : 0
            this.diagnosticData.questions.push({
                id: null,
                tempid: maxID + 1,
                type: 'numbersList',
                text: '',
                diagnosticID: this.diagnosticData.id,
                answers: [
                    {
                        text: '',
                        value: this.answersOption || 0,
                        questionID: maxID + 1
                    }
                ]
            })
        }
    }

    deleteQuestion(id: number) {
        if (this.diagnosticData !== null) {
            this.diagnosticData.questions = this.diagnosticData?.questions.filter((question) => question.tempid !== id)
        }
    }

    changeQuestionText(id: number, text: string) {
        if (this.diagnosticData !== null) {
            let question = this.diagnosticData.questions.find((v) => v.tempid === id)
            if (question) question.text = text
        }
    }

    addOption() {
        if (this.diagnosticData !== null) {
            const maxID = this.diagnosticData.options.length !== 0 ? this.diagnosticData.options[this.diagnosticData.options.length - 1].tempid : 0
            this.diagnosticData.options.push({
                id: null,
                tempid: maxID + 1,
                diagnosticID: this.diagnosticData.id,
                description: ''
            })
        }
    }

    changeOptionsDiscription(text: string, id: number) {
        if (this.diagnosticData !== null) {
            let option = this.diagnosticData.options.find((v) => v.tempid === id)
            if (option) option.description = text
        }
    }

    changeOptionsValues(value: number, id: number, type: 'min' | 'max') {
        if (this.diagnosticData !== null) {
            let option = this.diagnosticData.options.find((v) => v.tempid === id)
            if (option) {
                if (type === 'max') option.maxValue = value < 0 ? 0 : value
                else option.minValue = value < 0 ? 0 : value
            }
        }
    }

    deleteOption(id: number) {
        if (this.diagnosticData !== null) {
            this.diagnosticData.options = this.diagnosticData?.options.filter((option) => option.tempid !== id)
        }
    }
}