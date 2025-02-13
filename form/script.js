// import nameValidation from "./validates/nameValidation.js";
// import emailValidation from "./validates/emailValid.js";
// import usernameValidation from "./validates/usernameValid.js";
// import passwordValidation from "./validates/passwordValid.js";
// import phoneValidation from "./validates/phoneValid.js";
// import ageValidation from "./validates/ageValid.js";
// import locationValidation from "./validates/locationValid.js";
// import phoneValidation from "./validates/phoneValid.js";


// document.addEventListener("DOMContentLoaded", () => {
// const form = document.getElementById('registrationForm');
// //const formDataDisplay = document.getElementById('formDataDisplay');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     // get user input values
//     const firstName = form.firstName.value;
//     const lastName = form.lastName.value;
//     const email = form.email.value;
//     const password = form.password.value;
//     const phone = form.phone.value;
//     const username = form.username.value;
//     const age = form.age.value;
//     const location = form.location.value;
//     const confirmPassword = form.confirmPassword.value;

//     // create new nameValidation classes
//     const firstNameValidation = new nameValidation(firstName);
//     const lastNameValidation = new nameValidation(lastName);
//     const emailValidation = new emailValidation(email);
//     const usernameValidation = new usernameValidation(username);
//     const passwordValidation = new passwordValidation(password, confirmPassword);  
//     const phoneValidation = new phoneValidation(phone);
//     const ageValidation = new ageValidation(age);
//     const locationValidation = new locationValidation(location);


//     // collect validate errors 
//     const errors = {
//         ...firstNameValidation.getErrors(),
//         ...lastNameValidation.getErrors(),
//         ...emailValidation.getErrors(),
//         ...usernameValidation.getErrors(),
//         ...passwordValidation.getErrors(),
//         ...phoneValidation.getErrors(),
//         ...ageValidation.getErrors(),
//         ...locationValidation.getErrors()
//     }
//     // display errors
    
//     errorsList.innerHTML = ""; // Clear previous errors
//     if (Object.keys(errors).length > 0) {
//         for (const error in errors) {
//             const listItem = document.createElement("li");
//             listItem.textContent = errors[error];
//             errorsList.appendChild(listItem);
//         }
//         return;
//     }
   
//     // display results
//     const displaySection = document.getElementById("formDataDisplay");
//     const formDataList = document.getElementById("formDataList");
//     formDataList.innerHTML = ""; // Clear previous data

//     const formData = new FormData(document.getElementById("registrationForm"));
//     formData.forEach(function(value, key) {
//             const listItem = document.createElement("li");
//             listItem.textContent = key + ": " + value;
//             formDataList.appendChild(listItem);
//         });

//        displaySection.style.display = "block"; // Show the form data display section
    
// });
// });


// import nameValidation from "./validates/nameValidation.js";
// import emailValidation from "./validates/emailValid.js";
// import usernameValidation from "./validates/usernameValid.js";
// import passwordValidation from "./validates/passwordValid.js";
// import phoneValidation from "./validates/phoneValid.js";
// import ageValidation from "./validates/ageValid.js";
// import nepal_location from "./validates/locationValid.js";
// document.addEventListener("DOMContentLoaded", () => {
//     const form = document.getElementById('registrationForm');
//     const errorsList = document.getElementById("errorsList");
//     const displaySection = document.getElementById("formDataDisplay");
//     const formDataList = document.getElementById("formDataList");

//         const province = document.getElementById('province');
//         const district = document.getElementById('district');
//         const municipality = document.getElementById('municipality');
      
//         nepal_location.provinceList.forEach((prov) => {
//           const option = document.createElement('option');
//           option.value = prov.name;
//           option.textContent = prov.name;
//           province.appendChild(option);
//         })
      
//         function updateDistrict() {
//           let selectedProvince = province.value;
//           let prov = nepal_location.provinceList.find((p) => p.name === selectedProvince);
      
//           if(prov){
//             prov.districtList.forEach((dist) => {
//               const option = document.createElement('option');
//               option.value = dist.name;
//               option.textContent = dist.name;
//               district.appendChild(option);
//           })
//         }
//         }
      
//         function updateMunicipality() {
//           let selectedDistrict = district.value;
//           for(let i=0; i < nepal_location.provinceList.length; i++){
//             let dist = nepal_location.provinceList[i].districtList.find((d) => d.name === selectedDistrict );
//             if(dist) {
//               dist.municipalityList.forEach((mun) => {
//                 const option = document.createElement('option');
//                 option.value = mun.name;
//                 option.textContent = mun.name;
//                 municipality.appendChild(option);
//               })
//             }
//           }
//         }
      
//         province.addEventListener('change', updateDistrict);
//         district.addEventListener('change', updateMunicipality);
      

//     form.addEventListener('submit', (e) => {
//         e.preventDefault();

//         // Get user input values
//         const firstName = form.querySelector("[name='firstName']").value;
//         const lastName = form.querySelector("[name='lastName']").value;
//         const email = form.querySelector("[name='email']").value;
//         const password = form.querySelector("[name='password']").value;
//         const confirmPassword = form.querySelector("[name='confirmPassword']").value;
//         const phone = form.querySelector("[name='phone']").value;
//         const username = form.querySelector("[name='username']").value;
//         const age = form.querySelector("[name='age']").value;
//         const location = form.querySelector("[name='location']").value;

//         // Create validation class instances
//         const firstNameValidator = new nameValidation(firstName);
//         const lastNameValidator = new nameValidation(lastName);
//         const emailValidator = new emailValidation(email);
//         const usernameValidator = new usernameValidation(username);
//         const passwordValidator = new passwordValidation(password, confirmPassword);
//         const phoneValidator = new phoneValidation(phone);
//         const ageValidator = new ageValidation(age);
//         const locationValidator = new locationValidation(location);

//         // // Collect validation errors
//         const errors = {
//             ...firstNameValidator.getErrors(),
//             ...lastNameValidator.getErrors(),
//             ...emailValidator.getErrors(),
//             ...usernameValidator.getErrors(),
//             ...passwordValidator.getErrors(),
//             ...phoneValidator.getErrors(),
//             ...ageValidator.getErrors(),
//             ...locationValidator.getErrors()
//         };

//         // // Display errors
//         errorsList.innerHTML = ""; // Clear previous errors
//         if (Object.keys(errors).length > 0) {
//             for (const key in errors) {
//                 const listItem = document.createElement("li");
//                 listItem.textContent = errors[key];
//                 errorsList.appendChild(listItem);
//             }
//             return;
//         }

//         // Display submitted form data
//         formDataList.innerHTML = ""; // Clear previous data
//         const formData = new FormData(form);
//         formData.append("Location", `${location}, ${district.value}, ${municipality.value}, ${province.value}`);
//         formData.forEach((value, key) => {
//             const listItem = document.createElement("li");
//             listItem.textContent = `${key}: ${value}`;
//             formDataList.appendChild(listItem);
//         });

//         displaySection.style.display = "block"; // Show the form data display section
//     });
// });
