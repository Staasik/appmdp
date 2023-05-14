export class DiagnosticDTO {
    id
    title
    image
    discription
    answersDescription
    published

    constructor(model) {
        this.id = model.id
        this.title = model.title
        this.image = model.image
        this.discription = model.discription
        this.answersDescription = model.answersDescription
        this.published = model.published
    }
}