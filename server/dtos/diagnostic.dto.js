export class DiagnosticDTO {
    id
    title
    image
    description
    answersDescription
    published

    constructor(model) {
        this.id = model.id
        this.title = model.title
        this.image = model.image
        this.description = model.description
        this.answersDescription = model.answersDescription
        this.published = model.published
    }
}

export class UserDiagnosticDTO {
    id
    title
    image
    description

    constructor(model) {
        this.id = model.id
        this.title = model.title
        this.image = model.image
        this.description = model.description
    }
}