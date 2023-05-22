export class QuestionDTO {
    id
    text
    type
    diagnosticID

    constructor(model) {
        this.id = model.id
        this.text = model.text
        this.type = model.type
        this.diagnosticID = model.diagnosticID
    }
}

export class UserQuestionDTO {
    id
    text
    type

    constructor(model) {
        this.id = model.id
        this.text = model.text
        this.type = model.type
    }
}