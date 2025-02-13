export default class usernameValidation {
    constructor(username) {
        this.username = username;
        this.errors = {};
        this.validate();
    }

    validate() {
        this.validateUsername();
    }

    getErrors() {
        return this.errors;
    }

    validateUsername() {
        if (this.username.length < 6) {
            this.errors.username = "Username must be at least 6 characters long";
        }
    }
}
//moduke.exports = usernameValidation;