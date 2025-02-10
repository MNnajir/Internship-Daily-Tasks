
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const dob = document.getElementById('dob');
    const age = document.getElementById('age');
    const terms = document.getElementById('terms');
    const provinceSelect = document.getElementById('province');
    const districtSelect = document.getElementById('district');
    const municipalitySelect = document.getElementById('municipality');
    

    // show error message
    function showError(input, message) {
        const errorElement = input.nextElementSibling;
        errorElement.innerText = message;
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
    // show success message
    function showSuccess(input) {
        const errorElement = input.nextElementSibling;
        errorElement.innerText = '';
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
    
    form.addEventListener('submit', function(e) {
        e.prevnentDefault(); // prevent the form from submitting
        let isValid = true;

        // first name
     if (firstName.value.trim() === '') {
        showError(firstName, 'First name is required');// show error message
        isValid = false;
        } else {
        showSuccess(firstName);
        }
        console.log(firstName.value.trim());
        // last name
        if (lastName.value.trim() === '') {
        showError(lastName, 'Last name is required');
        isValid = false;
        } else {
        showSuccess(lastName);
        }

        // validate username 
        if (username.value.trim() === '') {
        showError(username, 'Username is required');
        isValid = false;
        } else if ((username.value)) {
        showError(username, 'Username must be 3-20 characters and can only contain letters, numbers, and underscores');
        isValid = false;
        } else {
        showSuccess(username);
        }

        // validate password
        if (password.value.trim() === '') {
        showError(password, 'Password is required');
        isValid = false;
        } else if ((password.value)) {
        showError(password, 'Password must be at least 8 characters and include uppercase, lowercase, number and special character');
        isValid = false;
        } else {
        showSuccess(password);
        }

        // validate confirm password
        if (confirmPassword.value.trim() === '') {
        showError(confirmPassword, 'Confirm password is required');
        isValid = false;
        } else if ((confirmPassword.value)) {
        showError(confirmPassword, 'Passwords do not match');
        isValid = false;
        } else {
        showSuccess(confirmPassword);
        }

        // validate email
        if (email.value.trim() === '') {
        showError(email, 'Email is required');
        isValid = false;
        } else if ((email.value)) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
        } else {
        showSuccess(email);
        }

        // validate phone
        if (phone.value.trim() === '') {
        showError(phone, 'Phone is required');
        isValid = false;
        } else if ((phone.value)) {
        showError(phone, 'Please enter a valid phone number');
        isValid = false;
        } else {
        showSuccess(phone);
        }

        // validate dob
        if (dob.value.trim() === '') {
        showError(dob, 'Date of birth is required');
        isValid = false;
        } else if ((dob.value)) {
        showError(dob, 'Please enter a valid date');
        isValid = false;
        } else {
        showSuccess(dob);
        }

        // validate age
        if (age.value.trim() === '') {
        showError(age, 'Age is required');
        isValid = false;
        } else if ((age.value)) {
        showError(age, 'Age must be between 18 and 100');
        isValid = false;
        } else {
        showSuccess(age);
        }

        // validate terms
        if (!terms.checked) {
        showError(terms, 'You must agree to the terms and conditions');
        isValid = false;
        } else {
        showSuccess(terms);
        }

        if (isValid) {
        alert('Form submitted successfully!');
        console.log('Form data:', new FormData(form));
        form.reset();
        }
    });

const districts = {
    "Province 1": ["Jhapa", "Morang", "Sunsari"],
    "Madhesh": ["Saptari", "Siraha", "Dhanusha", "Mahottari"],
    "Bagmati": ["Kathmandu", "Lalitpur", "Bhaktapur"],
    "Gandaki": ["Kaski", "Tanahun", "Gorkha"],
    "Lumbini": ["Rupandehi", "Kapilvastu", "Nawalparasi"],
    "Karnali": ["Jumla", "Kalikot", "Mugu"]
};

const municipalities = {
    "Jhapa": ["Birtamod", "Damak"],
    "Kathmandu": ["Kathmandu Metropolitan", "Kirtipur"],
    "Kaski": ["Pokhara", "Lekhnath"],
    "Mahottari": ["Gaushala", "Bardibas", "Jaleshwor"],
};

function updateDistricts() {
    let province = provinceSelect.value;
    districtSelect.innerHTML = '<option value="">Select District</option>';
    if (province && districts[province]) {
        districts[province].forEach(district => {
            let option = document.createElement("option");
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
}

function updateMunicipalities() {
    let district = districtSelect.value;
    municipalitySelect.innerHTML = '<option value="">Select Municipality</option>';
    if (district && municipalities[district]) {
        municipalities[district].forEach(municipality => {
            let option = document.createElement("option");
            option.value = municipality;
            option.textContent = municipality;
            municipalitySelect.appendChild(option);
        });
    }
}

provinceSelect.addEventListener('change', updateDistricts);
districtSelect.addEventListener('change', updateMunicipalities);
});

// rendering this form in the browser