// form and table elements 
const userForm = document.getElementById('userForm');
const userTable = document.getElementById('userTable').getElementsByTagName('tbody')[0];
const loading = document.getElementById('loading');

// form validation and submission 
userForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents form submission from refreshing the page.

    // Reset error messages 
    clearErrors();
    // Get form data
    const formData = {
    name: document.getElementById('name').value.trim(),
    email: document.getElementById('email').value.trim(),
    role: document.getElementById('role').value
    };
    // Validate form data
    if (!validateForm(formData)) {
        return
    };
    // Simulate AJAX Request 
    addUser(formData);
});
// form validation 
function validateForm(data) {
    let isValid = true; 
    // Name Validation
    if (data.name.length < 3) {
        document.getElementById('nameError').innerHTML = 'Name must be at least 3 characters long';
        isValid = false;
    }
    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        document.getElementById('emailError').innerHTML = 'Invalid email address';
        isValid = false;
    }
    // Role Validation
    if (!data.role) {
        document.getElementById('roleError').innerHTML = 'Please select a role';
        isValid = false;
    }
    return isValid;
}
// show error message 
function showError(elementId,message) {
    document.getElementById(elementId).innerHTML = message;
}
// clear all error message
function clearErrors() {
    const errors = document.getElementsByClassName('error');
    for (let error of errors) {
        error.textContent = '';
    }
}

// Simulation AJAX request to add user 
function addUser(userData){
    loading.style.display ='block';

    // simulate API call delay 
    setTimeout(() => {
        // Add user to table 
        const row = userTable.insertRow();
        row.innerHTML = `
        <td>${userData.name}</td>
        <td>${userData.email}</td>
        <td>${userData.role}</td>
        <td>
            <button onclick="editUser(this)">Edit</button>
            <button onclick="deleteUser(this)" style="background: #ff4444;">Delete</button>
        </td>
        `;
        // Reset form 
        userForm.reset();
        loading.style.display = 'none';
    }, 1000);
}

// Edit user 
function editUser(button) {
    const row = button.parentNode.parentNode;
    const cells = row.getElementsByTagName('td');
        
    // fill form with user data 
    document.getElementById('name').value = cells[0].textContent;
    document.getElementById('email').value = cells[1].textContent;
    document.getElementById('role').value = cells[2].textContent;

    // Remove the row 
    row.remove();
}
    
// Delete user
function deleteUser(button) {
if(confirm('Are you sure you want to delete this user?')) {
    const row = button.parentNode.parentNode;
    row.remove();
    }
}
