// // This code validates the form inputs and displays the form data in the HTML section
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const firstName = document.getElementById('firstName');
   // const midleName = document.getElementById('midleName');
    const lastName = document.getElementById('lastName');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    //const confirmPassword = document.getElementById('confirmPassword');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const profilePicture = document.getElementById('profile_pic');
    const Interests = document.getElementById('interests');
    const bio = document.getElementById('bio');
    const Gender = document.getElementById('gender')
    const dob = document.getElementById('dob');
    const age = document.getElementById('age');
    const terms = document.getElementById('terms');
    const provinceSelect = document.getElementById('province');
    const districtSelect = document.getElementById('district');
    const municipalitySelect = document.getElementById('municipality');
    const formDataDisplay = document.getElementById('formDataDisplay');

   // Validation patterns
    const patterns = {
        username: /^[a-zA-Z0-9_]{4,20}$/,
        password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        phone: /^[0-9]{10}$/,
        name: /^[a-zA-Z\s]{2,30}$/
    };


    // Provinces, Districts, and Municipalities Data
    const districts = {
        "Province 1": ["Jhapa", "Morang", "Sunsari"],
        "Madhesh": ["Saptari", "Siraha", "Dhanusha", "Mahottari"],
        "Bagmati": ["Kathmandu", "Lalitpur", "Bhaktapur"],
        "Gandaki": ["Kaski", "Tanahun", "Gorkha"],
        "Lumbini": ["Rupandehi", "Kapilvastu", "Nawalparasi"],
        "Karnali": ["Jumla", "Kalikot", "Mugu"],
        "Sudurpashchim": ["Kanchanpur", "Kailali", "Dadeldhura"]
    };

    const municipalities = {
        "Jhapa": ["Birtamod", "Damak"],
        "Kathmandu": ["Kathmandu Metropolitan", "Kirtipur"],
        "Kaski": ["Pokhara", "Lekhnath"],
        "Mahottari": ["Gaushala", "Bardibas", "Jaleshwor"],
        "Rupandehi": ["Butwal", "Sainamaina", "Tilottama"],
        "Kapilvastu": ["Taulihawa", "Banganga", "Krishnanagar"],
        "Nawalparasi": ["Bardaghat", "Parasi", "Sunwal"],
        "Jumla": ["Chandannath", "Hima"],
        "Kalikot": ["Manma", "Khandachakra"],
        "Mugu": ["Chhayanath Rara", "Soru"],
        "Saptari": ["Rajbiraj", "Kanchanrup"],
        "Siraha": ["Lahan", "Dhangadhi"],
        "Dhanusha": ["Janakpur", "Dhalkebar"],
        "Morang": ["Biratnagar", "Urlabari"],
        "Sunsari": ["Inaruwa", "Dharan"],
        "lalitpur": ["Lalitpur Metropolitan", "Mahalaxmi"],
        "Bhaktapur": ["Bhaktapur Metropolitan", "Changunarayan"],
        "tanahun": ["Bhanu", "Byas"],
        "Gorkha": ["Gorkha", "Palungtar"],
        "kanchnpur": ["Bhimdatta", "Shuklaphanta"],
        "Kailali": ["Dhangadhi", "Tikapur"],
        "Dadeldhura": ["Amargadhi", "Parshuram"],

    };

    // Update Districts Dropdown
    function updateDistricts() {
        let province = provinceSelect.value;
        districtSelect.innerHTML = '<option value="">Select District</option>';
        municipalitySelect.innerHTML = '<option value="">Select Municipality</option>';

        if (province in districts) {
            districts[province].forEach(district => {
                let option = document.createElement("option");
                option.value = district;
                option.textContent = district;
                districtSelect.appendChild(option);
            });
        }
    }

    // Update Municipalities Dropdown
    function updateMunicipalities() {
        let district = districtSelect.value;
        municipalitySelect.innerHTML = '<option value="">Select Municipality</option>';

        if (district in municipalities) {
            municipalities[district].forEach(municipality => {
                let option = document.createElement("option");
                option.value = municipality;
                option.textContent = municipality;
                municipalitySelect.appendChild(option);
            });
        }
    }

    // Event Listeners for Dropdown Updates
    provinceSelect.addEventListener('change', updateDistricts);
    districtSelect.addEventListener('change', updateMunicipalities);

    
    // Show error message
    function showError(input, message) {
        const errorElement = input.nextElementSibling;
        errorElement.innerText = message;
        input.classList.add('invalid');
        input.classList.remove('valid');
        return false;
    }

    // Show success message
    function showSuccess(input) {
        let errorElement = input.nextElementSibling;
        errorElement.innerText = '';
        input.classList.remove('invalid');
        input.classList.add('valid');
        return true;
    }
    

    // Validate text input
    function validateInput(input, pattern, message) {
        if (input.value.trim() === '') {
            return showError(input, `${input.previousElementSibling.textContent.slice(0, -1)} is required`);
        }
        if (pattern && !pattern.test(input.value.trim())) {
            return showError(input, message);
        }
        return showSuccess(input);
    }

    // Validate select input
    function validateSelect(select) {
        if (select.value === '') {
            return showError(select, `Please select a ${select.previousElementSibling.textContent.slice(0, -1)}`);
        }
        return showSuccess(select);
    }
    // Add validation on input
    form.querySelectorAll('input, select').forEach(element => {
        element.addEventListener('input', () => {
            validateField(element);
        });
    });
    // validate individual field
    function validateField(element){
        switch (element.id) {
            case 'firstName':
            case 'lastName':
                return validateInput(element, patterns.name, "Please enter a valid name");
            case'username':
                return validateInput(element, patterns.username, "Username must be 4-20 characters (letters, numbers, underscores)");
            case 'password':
                return validateInput(element, patterns.password, 'Password must be at least 8 characters and include letters, numbers, and special characters');
            case 'confirmPassword':
                return validateInput(element, null, '') && 
                    (element.value === document.getElementById('password').value || 
                    showError(element, 'Passwords do not match'));
            case 'email':
                return validateInput(element, patterns.email, 'Please enter a valid email address');
            case 'phone':
                return validateInput(element, patterns.phone, 'Please enter a valid 10-digit phone number');
            case 'dob':
                return validateInput(element, null, 'please enter your date of birth');
            case 'age':
                const age = parseInt(element.value);
                    return validateInput(element, null, '') && 
                        (age >= 18 && age <= 120 || 
                        showError(element, 'Age must be between 18 and 120'));
            case 'terms':
                return element.checked || showError(element, 'You must agree to the terms and conditions');
                case 'province':
                case 'district':
                case 'municipality':
                    return validateSelect(element);
        }
        return true;

    }

    // form submission 
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        const formElements = form.querySelectorAll('input, select');
        formElements.forEach(element => {
            if(!validateField(element)){
                isValid = false;
            }
        });
        if (isValid) {
            const formData = {
                firstName: firstName.value,
               // MidleName: midleName.value,
                lastName: lastName.value,
                username: username.value,
                password: password.value,
                email: email.value,
                phone: phone.value,
                dob: dob.value,
                age: age.value,
                terms: terms.checked,
                province: provinceSelect.value,
                district: districtSelect.value,
                municipality: municipalitySelect.value,
                profilePicture: profilePicture.value,
                Gender: Gender.value,
                bio: bio.value,
                Interests: Interests.value,
            };
             // Display form data in the HTML section
            document.getElementById('displayFirstName').innerText = formData.firstName;
            //document.getElementById('displayMidleName').innerText = formData.MidleName;
            document.getElementById('displayLastName').innerText = formData.lastName;
            document.getElementById('displayUsername').innerText = formData.username;
            document.getElementById('displayEmail').innerText = formData.email;
            document.getElementById('displayPhone').innerText = formData.phone;
            document.getElementById('displayDob').innerText = formData.dob;
            document.getElementById('displayAge').innerText = formData.age;
            document.getElementById('displayGender').innerText = formData.Gender;
            document.getElementById('displayProvince').innerText = formData.province;
            document.getElementById('displayDistrict').innerText = formData.district;
            document.getElementById('displayMunicipality').innerText = formData.municipality;
            document.getElementById('displayInterests').innerText = formData.Interests;
            document.getElementById('displayBio').innerText = formData.bio;

            if (profilePicture.files.length > 0) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    document.getElementById('profile_pic_display').src = e.target.result;
                    document.getElementById('profile_pic_display').style.display = 'block'; // Make the image visible
                };
                reader.readAsDataURL(profilePicture.files[0]);
            } else {
                document.getElementById('profile_pic_display').style.display = 'none'; // Hide image if no file is selected
            }
             // Make the form data section visible
             formDataDisplay.style.display = 'block';
             //console.log('sending date',formData);
             alert("Form submitted successfully!");
             form.reset();
         }
    });
});

// // This code validates the form inputs and displays the form data in the HTML section
// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('registrationForm');
//     const formDataDisplay = document.getElementById('formDataDisplay');
//     const provinceSelect = document.getElementById('province');
//      const districtSelect = document.getElementById('district');
//      const municipalitySelect = document.getElementById('municipality');
//    // Validation patterns
//     const patterns = {
//         username: /^[a-zA-Z0-9_]{4,20}$/,
//         password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
//         email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//         phone: /^[0-9]{10}$/,
//         name: /^[a-zA-Z\s]{2,30}$/
//     };


//     // Provinces, Districts, and Municipalities Data
//     const districts = {
//         "Province 1": ["Jhapa", "Morang", "Sunsari"],
//         "Madhesh": ["Saptari", "Siraha", "Dhanusha", "Mahottari"],
//         "Bagmati": ["Kathmandu", "Lalitpur", "Bhaktapur"],
//         "Gandaki": ["Kaski", "Tanahun", "Gorkha"],
//         "Lumbini": ["Rupandehi", "Kapilvastu", "Nawalparasi"],
//         "Karnali": ["Jumla", "Kalikot", "Mugu"],
//         "Sudurpashchim": ["Kanchanpur", "Kailali", "Dadeldhura"]
//     };

//     const municipalities = {
//         "Jhapa": ["Birtamod", "Damak"],
//         "Kathmandu": ["Kathmandu Metropolitan", "Kirtipur"],
//         "Kaski": ["Pokhara", "Lekhnath"],
//         "Mahottari": ["Gaushala", "Bardibas", "Jaleshwor"],
//         "Rupandehi": ["Butwal", "Sainamaina", "Tilottama"],
//         "Kapilvastu": ["Taulihawa", "Banganga", "Krishnanagar"],
//         "Nawalparasi": ["Bardaghat", "Parasi", "Sunwal"],
//         "Jumla": ["Chandannath", "Hima"],
//         "Kalikot": ["Manma", "Khandachakra"],
//         "Mugu": ["Chhayanath Rara", "Soru"],
//         "Saptari": ["Rajbiraj", "Kanchanrup"],
//         "Siraha": ["Lahan", "Dhangadhi"],
//         "Dhanusha": ["Janakpur", "Dhalkebar"],
//         "Morang": ["Biratnagar", "Urlabari"],
//         "Sunsari": ["Inaruwa", "Dharan"],
//         "lalitpur": ["Lalitpur Metropolitan", "Mahalaxmi"],
//         "Bhaktapur": ["Bhaktapur Metropolitan", "Changunarayan"],
//         "tanahun": ["Bhanu", "Byas"],
//         "Gorkha": ["Gorkha", "Palungtar"],
//         "kanchnpur": ["Bhimdatta", "Shuklaphanta"],
//         "Kailali": ["Dhangadhi", "Tikapur"],
//         "Dadeldhura": ["Amargadhi", "Parshuram"],

//     };

//     // Update Districts Dropdown
//     function updateDistricts() {
//         let province = provinceSelect.value;
//         districtSelect.innerHTML = '<option value="">Select District</option>';
//         municipalitySelect.innerHTML = '<option value="">Select Municipality</option>';

//         if (province in districts) {
//             districts[province].forEach(district => {
//                 let option = document.createElement("option");
//                 option.value = district;
//                 option.textContent = district;
//                 districtSelect.appendChild(option);
//             });
//         }
//     }

//     // Update Municipalities Dropdown
//     function updateMunicipalities() {
//         let district = districtSelect.value;
//         municipalitySelect.innerHTML = '<option value="">Select Municipality</option>';

//         if (district in municipalities) {
//             municipalities[district].forEach(municipality => {
//                 let option = document.createElement("option");
//                 option.value = municipality;
//                 option.textContent = municipality;
//                 municipalitySelect.appendChild(option);
//             });
//         }
//     }

//     // Event Listeners for Dropdown Updates
//     provinceSelect.addEventListener('change', updateDistricts);
//     districtSelect.addEventListener('change', updateMunicipalities);

    
//     // Show error message
//     function showError(input, message) {
//         const errorElement = input.nextElementSibling;
//         errorElement.innerText = message;
//         input.classList.add('invalid');
//         input.classList.remove('valid');
//         return false;
//     }

//     // Show success message
//     function showSuccess(input) {
//         let errorElement = input.nextElementSibling;
//         errorElement.innerText = '';
//         input.classList.remove('invalid');
//         input.classList.add('valid');
//         return true;
//     }
    

//     // Validate text input
//     function validateInput(input, pattern, message) {
//         if (input.value.trim() === '') {
//             return showError(input, `${input.previousElementSibling.textContent.slice(0, -1)} is required`);
//         }
//         if (pattern && !pattern.test(input.value.trim())) {
//             return showError(input, message);
//         }
//         return showSuccess(input);
//     }

//     // Validate select input
//     function validateSelect(select) {
//         if (select.value === '') {
//             return showError(select, `Please select a ${select.previousElementSibling.textContent.slice(0, -1)}`);
//         }
//         return showSuccess(select);
//     }
//     // Add validation on input
//     form.querySelectorAll('input, select').forEach(element => {
//         element.addEventListener('input', () => {
//             validateField(element);
//         });
//     });
//     // validate individual field
//     function validateField(element){
//         switch (element.id) {
//             case 'firstName':
//             case 'lastName':
//                 return validateInput(element, patterns.name, "Please enter a valid name");
//             case'username':
//                 return validateInput(element, patterns.username, "Username must be 4-20 characters (letters, numbers, underscores)");
//             case 'password':
//                 return validateInput(element, patterns.password, 'Password must be at least 8 characters and include letters, numbers, and special characters');
//             case 'confirmPassword':
//                 return validateInput(element, null, '') && 
//                     (element.value === document.getElementById('password').value || 
//                     showError(element, 'Passwords do not match'));
//             case 'email':
//                 return validateInput(element, patterns.email, 'Please enter a valid email address');
//             case 'phone':
//                 return validateInput(element, patterns.phone, 'Please enter a valid 10-digit phone number');
//             case 'dob':
//                 return validateInput(element, null, 'please enter your date of birth');
//             case 'age':
//                 const age = parseInt(element.value);
//                     return validateInput(element, null, '') && 
//                         (age >= 18 && age <= 120 || 
//                         showError(element, 'Age must be between 18 and 120'));
//             case 'terms':
//                 return element.checked || showError(element, 'You must agree to the terms and conditions');
//                 case 'province':
//                 case 'district':
//                 case 'municipality':
//                     return validateSelect(element);
//         }
//         return true;

//     }
    
//     // form submission 
//     form.addEventListener('submit', function(e) {
//         e.preventDefault();
//         let isValid = truedocument.getElementById('bio');
//         const formElements = form.querySelectorAll('input, select');
//         formElements.forEach(element => {
//             if(!validateField(element)){
//                 isValid = false;
//             }
//         });
//         if (isValid) {
//             const formData = {
//                 firstName:document.getElementById('firstName').value,
//                // MidleName: midleName.value,
//                 lastName: document.getElementById('lastName').value,
//                 username: document.getElementById('username').value,
//                 password:  document.getElementById('password').value,
//                 email:  document.getElementById('email').value,
//                 phone: document.getElementById('phone').value,
//                 dob:document.getElementById('dob').value,
//                 age: document.getElementById('age').value,
//                 terms:document.getElementById('terms').checked,
//                 province: document.getElementById('province').value,
//                 district: document.getElementById('district').value,
//                 municipality: document.getElementById('municipality').value,
//                 profilePicture: document.getElementById('profile_pic').value,
//                 Gender:document.getElementById('gender').value,
//                 bio: document.getElementById('bio').value,
//                 Interests: document.getElementById('interests').value,
//             };
//              // Display form data in the HTML section
//             document.getElementById('displayFirstName').innerText = formData.firstName;
//             //document.getElementById('displayMidleName').innerText = formData.MidleName;
//             document.getElementById('displayLastName').innerText = formData.lastName;
//             document.getElementById('displayUsername').innerText = formData.username;
//             document.getElementById('displayEmail').innerText = formData.email;
//             document.getElementById('displayPhone').innerText = formData.phone;
//             document.getElementById('displayDob').innerText = formData.dob;
//             document.getElementById('displayAge').innerText = formData.age;
//             document.getElementById('displayGender').innerText = formData.Gender;
//             document.getElementById('displayProvince').innerText = formData.province;
//             document.getElementById('displayDistrict').innerText = formData.district;
//             document.getElementById('displayMunicipality').innerText = formData.municipality;
//             document.getElementById('displayInterests').innerText = formData.Interests;
//             document.getElementById('displayBio').innerText = formData.bio;

//             if (profilePicture.files.length > 0) {
//                 const reader = new FileReader();
//                 reader.onload = function (e) {
//                     document.getElementById('profile_pic_display').src = e.target.result;
//                     document.getElementById('profile_pic_display').style.display = 'block'; // Make the image visible
//                 };
//                 reader.readAsDataURL(profilePicture.files[0]);
//             } else {
//                 document.getElementById('profile_pic_display').style.display = 'none'; // Hide image if no file is selected
//             }
//              // Make the form data section visible
//              formDataDisplay.style.display = 'block';
//              //console.log('sending date',formData);
//              alert("Form submitted successfully!");
//              form.reset();
//          }
//     });
// });
