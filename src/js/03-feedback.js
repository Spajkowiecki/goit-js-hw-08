import _ from 'lodash';

const form = document.querySelector('form');
const emailInput = form.querySelector('label > input');
let textInput = form.querySelector('label > textarea');
//input listener

//listening for changes in input fields
form.addEventListener(
  'input',
  _.throttle(e => {
    let data = {
      email: emailInput.value,
      message: textInput.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(data));
  }, 500)
);

let getData = JSON.parse(localStorage.getItem('feedback-form-state'));

if (localStorage.getItem('feedback-form-state') === null) {
  emailInput.value = '';
  textInput.value = '';
} else {
  emailInput.value = getData.email;
  if (getData.textInput === '') textInput.value = '';
}

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(localStorage.getItem('feedback-form-state'));
  emailInput.value = '';
  textInput.value = '';
  localStorage.removeItem('feedback-form-state');
});
