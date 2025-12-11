

let formData = {
    email: "",
    message: "",
};

const form = document.querySelector("form.feedback-form");
const getItemFromLocalStorage = localStorage.getItem('feedback-form-state');
const parsedItemFromLocalStorage = JSON.parse(localStorage.getItem("feedback-form-state"));
if(getItemFromLocalStorage !== null){
    formData.email = parsedItemFromLocalStorage.email;
    formData.message = parsedItemFromLocalStorage.message;
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}

form.addEventListener("input", () => {
    formData.email = form.elements.email.value;
    formData.message = form.elements.message.value;
    formData.email = formData.email.trim();
    formData.message = formData.message.trim()
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if(form.elements.email.value.trim() === "" || form.elements.message.value.trim() === ""){
return alert("Fill please all fields");
    } else {
    document.querySelector(".feedback-form").reset();
    localStorage.removeItem('feedback-form-state');
    console.log(formData);
    formData.email = "";
    formData.message = "";
    }
});