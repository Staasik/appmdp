export class AnswerDTO {
    id
    type
    text
    value

    constructor(model) {
        this.id = model.id
        this.type = model.type
        this.text = model.text
        this.value = model.value
    }
}