export default class ageValidation {
    constructor(age) {
        this.age = age;
        this.errors = {};
        this.validate();
    }

    validate() {
        this.validateAge();
    }

    getErrors() {
        return this.errors;
    }

    validateAge() {
        if (this.age < 18) {
            this.errors.age = "You must be 18 years or older to register";
        }
    }
}