const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('form .feedback-form');
let dataObject;
if (localStorage.getItem('feedback-form-state') !== null) {
  dataObject = JSON.parse(localStorage.getItem('feedback-form-state'));
  formData.email = dataObject.email;
  formData.message = dataObject.message;

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', e => {
  formData[e.target.name] = form[e.target.name];
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', e => {
  e.preventDefault();
  if (form.elements.email.value === '' || form.elements.message.value === '') {
    window.alert('Fill please all fields');
  } else {
    console.log(formData);

    localStorage.removeItem('feedback-form-state');
    form.elements.email.value = '';
    form.elements.message.value = '';
    formData.email = '';
    formData.message = '';
  }
});
