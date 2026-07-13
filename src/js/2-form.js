const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('form');
let dataObject;
if (localStorage.getItem('feedback-form-state') !== null) {
  dataObject = JSON.parse(localStorage.getItem('feedback-form-state'));
  formData.email = dataObject.email;
  formData.message = dataObject.message;

  form.email = formData.email;
  form.message = formData.message;
}

form.addEventListener('input', e => {
  formData.email = form.email;
  formData.message = form.message;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', e => {
  e.preventDefault();
  if (form.email === '' && form.message === '') {
    window.alert('Fill please all fields');
  } else {
    console.log(formData);
  }
  localStorage.removeItem('feedback-form-state');
  form.email = '';
  form.message = '';
  formData.email = '';
  formData.message = '';
});
