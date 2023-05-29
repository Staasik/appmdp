export class AnswerDTO {
    id
    text
    value
    questionID

    constructor(model) {
        this.id = model.id
        this.text = model.text
        this.value = model.value
        this.questionID = model.questionID
    }
}

export class UserAnswerDTO {
    id
    text
    value

    constructor(model) {
        this.id = model.id
        this.text = model.text
        this.value = model.value
    }
}