export class Cat {

    //private fields
    #name;
    #breed;
    #color;
    constructor(name,  breed, color) {
        this.#name = name;
        this.#color = color;
        this.#breed = breed;
    }

    getCat() {
        return [this.#name, this.#breed, this.#color];
    }
    setName(name) {
        this.#name = name;
    }
}
