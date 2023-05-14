export class UserDTO {
    name
    login
    id
    role

    constructor(model) {
        this.name = model.name
        this.login = model.login
        this.id = model.id
        this.role = model.role
    }
}