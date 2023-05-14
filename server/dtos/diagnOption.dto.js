export class DiagnOptionDTO {
    id
    description
    minValue
    maxValue

    constructor(model) {
        this.id = model.id
        this.description = model.description
        this.minValue = model.minValue
        this.maxValue = model.maxValue
    }
}