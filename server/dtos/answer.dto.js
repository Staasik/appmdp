export class AnswerDTO {
    id
    text
    value

    constructor(model) {
        this.id = model.id
        this.text = model.text
        this.value = model.value
    }
}