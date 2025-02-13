export default class emailValidation {
    constructor(email) {
        this.email = email;
        this.errors = {};
        this.validate();
    }

    validate() {
        this.validateEmail();
    }

    getErrors() {
        return this.errors;
    }

    validateEmail() {
        if (!this.email.includes('@')) {
            this.errors.email = "Email must contain @";
        }
    }
}