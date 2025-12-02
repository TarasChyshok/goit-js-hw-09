
const formData = {
    email: "",
    message: "",
};

const form = document.querySelector("form.feedback-form");
form.addEventListener("input", () => {
    form.elements.email.value.trim() = formData.email;
    form.elements.message.value.trim() = formData.message;
    localStorage.setItem('feedback-form-state', formData.stringify())
});

form.addEventListener("submit", () => {
    if(form.elements.email.value.trim() === "" && form.elements.message.value.trim() === ""){
return alert("Fill please all fields");
    } else {
        if(form.elements.email.value.trim() !== "" ){
            formData.email = form.elements.email.value.trim();
        } 
        if(form.elements.message.value.trim() !== ""){
            formData.message = form.elements.message.value.trim();
        }
    localStorage.setItem("feedback-form-state", formData.stringify());
    //очистити лок схов, об'єкт, поля форми;
    document.querySelector(".feedback-form").reset();
    localStorage.removeItem('feedback-from-state');
    }
});