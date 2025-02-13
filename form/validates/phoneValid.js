export default class phoneValidation {
    constructor(phone) {
        this.phone = phone;
        this.errors = {};
        this.validate();
    }

    validate() {
        this.validatePhone();
    }

    getErrors() {
        return this.errors;
    }

    validatePhone() {
        if (this.phone.length < 10) {
            this.errors.phone = "Phone number must be at least 10 characters long";
        }
    }
}