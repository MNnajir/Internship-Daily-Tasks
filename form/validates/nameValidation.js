 export default class nameValidation {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.namepattern = /^[a-zA-Z\s]{2,30}$/; // Only letters and spaces allowed (2-30 characters)
}
    validateFirstName(){
        return this.namepattern.test(this.firstName);
    };
    validateLastName(){
        return this.namepattern.test(this.lastName);
    };
    getErrors(){
        let errors = [];
        if(!this.validateFirstName()){
            errors.push("First name must be 2-30 characters long and contain only letters and spaces.");
        }
        if(!this.validateLastName()){
            errors.push("Last name must be 2-30 characters long and contain only letters and spaces.");
        }
        return errors;
    }

}
// module.exports = nameValidation;