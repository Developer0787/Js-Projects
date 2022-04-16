let nameError = document.getElementById('nameError');
let phoneError = document.getElementById('phoneError');
let emailError = document.getElementById('emailError');
let messageError = document.getElementById('messageError');
let submitError = document.getElementById('submitError');

function validateName(){
    let name = document.getElementById('contactName').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name'
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validatePhone(){
    let phone = document.getElementById('contactPhone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone no is required';
        return false;
    }
    if(phone.length !== 9){
        phoneError.innerHTML = 'Phone no should be 9 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{9}$/)){
        phoneError.innerHTML = 'Only digits please';
        return false;
    }

    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateEmail(){
    let email = document.getElementById('contactEmail').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }

    if(!email.match(/^[A-Za-z]*[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email invalid';
        return false;
    }

    // if(!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    //     emailError.innerHTML = 'Email invalid';
    //     return false;
    // }

    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}


function validateMessage(){
    let message = document.getElementById('contactMessage').value;
    let number = 30;
    let count = number - message.length;

    if(count>0){
        messageError.innerHTML = count + ' more characters required';
        return false;
    }

    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;

}

function validateForm(){
    if(!validateName() || !validateForm() || !validateEmail() || !validateMessage){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none';},3000)
        return false
    }
}