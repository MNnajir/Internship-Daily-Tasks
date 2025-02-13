class passwordValid {
    constructor(password, confirmPassword) {
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.namepattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum eight characters, at least one letter and one number
    }
    getErrors() {
        const errors = {};
        if (!this.password) {
            errors.password = "Password is required";
        } else if (!this.namepattern.test(this.password)) {
            errors.password = "Password must contain at least 8 characters, including at least one letter and one number";
        }
        if (!this.confirmPassword) {
            errors.confirmPassword = "Confirm Password is required";
        } else if (this.password !== this.confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
        }
        return errors;
    }
    
}