export class ResultDTO {
    diagnosticID
    answers

    constructor(model) {
        this.diagnosticID = model.diagnosticID
        this.answers = model.answers
    }
}