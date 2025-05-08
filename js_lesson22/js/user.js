export default class User {
    constructor(email, name, food) {
        this._id = email;
        this._name = name;
        this._food = food;
    }

    greeting() {
        return `Hi, my name is ${this._name}.`;
    }

    favouriteFood(){
        return `My favourite food is ${this._food}.`;
    }
}