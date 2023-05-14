export class QuestionDTO {
    id
    text
    diagnosticID

    constructor(model) {
        this.id = model.id
        this.text = model.text
        this.diagnosticID = model.diagnosticID
    }
}