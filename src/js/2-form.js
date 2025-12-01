// Додай у HTML розмітку форми. У JS напиши скрипт, який буде зберігати значення полів у локальне сховище, коли користувач щось друкує.

// Виконуй це завдання у файлах 2-form.html і 2-form.js. Розбий його на декілька підзавдань:

// Оголоси поза будь-якими функціями об’єкт formData з полями email та message, які спочатку мають порожні рядки як значення: { email: "", message: "" }.
// Використовуй метод делегування для відстеження змін у формі через подію input. Зберігай актуальні дані з полів email та message у formData та записуй цей об’єкт у локальне сховище. Використовуй ключ "feedback-form-state" для зберігання даних у сховищі.
// При завантаженні сторінки перевір, чи є дані у локальному сховищі. Якщо так, використовуй їх для заповнення форми та об'єкта formData. Якщо ні, залиш поля форми порожніми.
// Перед відправленням форми переконайся, що обидва поля форми заповнені. Якщо будь-яке з полів (властивостей об’єкта formData) порожнє, показуй сповіщення з текстом «Fill please all fields». Якщо всі поля заповнені, виведи у консоль об’єкт formData з актуальними значеннями, очисти локальне сховище, об’єкт formData і поля форми.

// На живій сторінці відображається форма з двома елементами форми і кнопкою типу submit
// Форма стилізована згідно з макетом
// На формі прослуховуються події input і submit
// При введенні даних у будь-який елемент форми вони записуються у локальне сховище під ключем "feedback-form-state", збережені дані не містять пробіли по краях
// Введення даних в одне поле форми не видаляє дані в сховищі для іншого
// При оновленні сторінки дані з локального сховища підставляються в елементи форми, у полях форми відсутні undefined
// При сабміті форми є перевірка, щоб обидва елементи форми були заповнені
// Під час сабміту форми, якщо обидва елементи форми заповнені, виводиться у консоль об'єкт з полями email, message та їхніми поточними значеннями, а також очищаються сховище і поля форми
// Якщо після сабміту форми ввести в будь-який елемент форми дані, то в локальному сховищі не з’являються дані від попереднього сабміта

const li = document.createElement('li');
li.innerHTML = `<form class="feedback-form" autocomplete="off">
    <label>
      Email
      <input type="email" name="email" autofocus />
    </label>
    <label>
      Message
      <textarea name="message" rows="8"></textarea>
    </label>
    <button type="submit">Submit</button>
  </form>
  `;
document.querySelector('ul.gallery').append(li);

const formData = {
    email: "",
    message: "",
}

const form = document.querySelector("form.feedback-form");
form.addEventListener("input", (event) => {
    const item = localStorage.getItem('feedback-form-state'); try {
    if(JSON.parse(localStorage.getItem('feedback-form-state')).email && localStorage.getItem('feedback-form-state').message !== ""){
        form.formElement.email.value = localStorage.parse(getItem('feedback-form-state')).email;
        form.formElement.message.value = localStorage.parse(getItem('feedback-form-state')).message
    }}
});

form.addEventListener("submit", (event) => {
    if(form.email === "" && form.message === ""){
return alert("Fill please all fields");
    } else {
    formData.email = trim(form.formElement.email.value);
    formData.message = trim(form.formElement.message.value);
    console.log(formData);
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
    //очистити лок схов, об'єкт, поля форми;
    form.elements.email.value = "";
    form.elements.message.value = "";
    document.querySelector(".feedback-form").reset;
    localStorage.clear();
    }
});

// перевірити при завантаженні сторінки чи є данні в локальному сховищі і підставити їх до полів.