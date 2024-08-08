function nextStep(step) {
  if (validateStep(step)) {
      var currentStep = document.getElementById('step-' + step);
      var nextStep = document.getElementById('step-' + (step + 1));
    
      nextStep.classList.remove('hidden'); 
  }
}

function validateStep(step) {
  switch (step) {
      case 1:
          return validateEmail();
      case 2:
          return validateUsername();
      case 3:
          return validateMessage();
      default:
          return true;
  }
}

function validateEmail() {
  var email = document.getElementById('email').value.trim();
  var emailError = document.getElementById('emailError');
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
      emailError.textContent = 'Email is required.';
      return false;
  } else if (!emailPattern.test(email)) {
      emailError.textContent = 'Please enter a valid email address.';
      return false;
  } else {
      emailError.textContent = '';
      return true;
  }
}

function validateUsername() {
  var username = document.getElementById('username').value.trim();
  var usernameError = document.getElementById('usernameError');

  if (!username) {
      usernameError.textContent = 'Username is required.';
      return false;
  } else {
      usernameError.textContent = '';
      return true;
  }
}

function validateMessage() {
  var message = document.getElementById('message').value.trim();
  var messageError = document.getElementById('messageError');

  if (!message) {
      messageError.textContent = 'Message cannot be empty.';
      return false;
  } else {
      messageError.textContent = '';
      return true;
  }
}

function submitForm() {
  if (validateMessage()) {
      alert('Form submitted successfully!');
      resetForm(); 
  }
}

function resetForm() {
  document.getElementById('email').value = '';
  document.getElementById('username').value = '';
  document.getElementById('message').value = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('usernameError').textContent = '';
  document.getElementById('messageError').textContent = '';
  document.getElementById('step-1').classList.remove('hidden');
  document.getElementById('step-2').classList.add('hidden');
  document.getElementById('step-3').classList.add('hidden');
}

document.getElementById('email').addEventListener('input', function() {
  var email = this.value.trim();
  var emailButton = this.nextElementSibling;
  if (email) {
      emailButton.style.color = '#00ff00'; 
      emailButton.style.borderColor = '#00ff00'; 
      emailButton.style.display = 'inline-block'; 
  } else {
      emailButton.style.color = '#20bb3d';
      emailButton.style.borderColor = '#20bb3d'; 
      emailButton.style.display = 'none'; 
  }
  validateEmail(); 
});

document.getElementById('username').addEventListener('input', function() {
  var username = this.value.trim();
  var usernameButton = this.nextElementSibling;
  if (username) {
      usernameButton.style.color = '#00ff00'; 
      usernameButton.style.borderColor = '#00ff00';
      usernameButton.style.display = 'inline-block'; 
  } else {
      usernameButton.style.color = '#20bb3d'; 
      usernameButton.style.borderColor = '#20bb3d'; 
      usernameButton.style.display = 'none'; 
  }
  validateUsername(); 
});

document.getElementById('message').addEventListener('input', function() {
  var message = this.value.trim();
  var messageButton = document.getElementById('submitButton');
  if (message) {
      messageButton.style.color = '#00ff00'; 
      messageButton.style.borderColor = '#00ff00'; 
      messageButton.style.display = 'inline-block';
  } else {
      messageButton.style.color = '#20bb3d'; 
      messageButton.style.borderColor = '#20bb3d'; 
      messageButton.style.display = 'none';
  }
  validateMessage(); 
});

const texts = ["Welcome to Sarthak's Portfolio!  Let's get started"];
const welcomeText = document.querySelector('.signup-content');
let index = 0;
let textIndex = 0;

function typeText() {
  if (index < texts[textIndex].length) {
      welcomeText.innerHTML += texts[textIndex][index];
  } else {
      textIndex++;
      welcomeText.innerHTML += "<br>"; 
  }

  index++;

  if (textIndex < texts.length && index < texts[textIndex].length) {
      setTimeout(typeText, 100); 
  }
}

typeText();
