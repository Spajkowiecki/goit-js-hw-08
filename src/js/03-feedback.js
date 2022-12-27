import _ from 'lodash';

const form = document.querySelector('form');
//input listener

//listening for changes in input fields
form.addEventListener(
  'input',
  _.throttle(e => {
    const {
      elements: { email, message },
    } = e.currentTarget;
    let data = { email: email.value, message: message.value };
    localStorage.setItem('feedback-form-state', JSON.stringify(data));
  }, 500)
);
