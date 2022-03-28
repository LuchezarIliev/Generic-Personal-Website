function validateName() {
    var name = document.getElementById('contact-name').value;
    if(name.length == 0) {
        producePrompt('Полето за Име е задължително!', 'name-error' , 'red')
        return false;
    }

    if (!name.match(/^[A-Za-zА-Яа-я]*\s{1}[A-Za-zА-Яа-я]+$/)) {
        producePrompt('Моля, въведете Име и Фамилия!','name-error', 'red');
        return false;
    }

    producePrompt('OK', 'name-error', 'green');
    return true;
}

function validatePhone() {
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0) {
        return true;
    }

    if(phone.length != 10) {
        producePrompt('Въведете валиден телефон за района!', 'phone-error', 'red');
        return false;
    }

    if(!phone.match(/^[0-9]{10}$/)) {
        producePrompt('Моля, въведете само цифри!' ,'phone-error', 'red');
        return false;
    }

    producePrompt('OK', 'phone-error', 'green');
    return true;
}

function validateEmail () {
    var email = document.getElementById('contact-email').value;
    if(email.length == 0) {
        producePrompt('Полето за Email е задължително!','email-error', 'red');
        return false;
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        producePrompt('Невалиден Email!', 'email-error', 'red');
       return false;
    }

    producePrompt('OK', 'email-error', 'green');
    return true;
}

function validateMessage() {
    var required = 30;
    var message = document.getElementById('contact-message').value;
    var left = required - message.length;
    if(message.length == 0) {
        producePrompt('Полето за Съобщение е задължително!','message-error', 'red');
        return false;
    }

    if (left > 0) {
        producePrompt('Още ' + left + ' символа за необходими','message-error','red');
        return false;
    }

    producePrompt('OK', 'message-error', 'green');
    return true;
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        jsShow('submit-error');
        producePrompt('Моля, поправете невалидните полета преди да изпратите формата!', 'submit-error', 'red');
        setTimeout(function(){jsHide('submit-error');}, 2000);
        return false;
    }
    else { 
        alert('Form submitted');
    }
}

function jsShow(id) {
  document.getElementById(id).style.display = 'block';
}

function jsHide(id) {
  document.getElementById(id).style.display = 'none';
}

function producePrompt(message, promptLocation, color) {
  document.getElementById(promptLocation).innerHTML = message;
  document.getElementById(promptLocation).style.color = color;
}