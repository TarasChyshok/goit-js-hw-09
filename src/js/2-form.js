

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
    console.log(formData);
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
        if(form.elements.email.value.trim() !== "" ){
            formData.email = form.elements.email.value.trim();
        } 
        if(form.elements.message.value.trim() !== ""){
            formData.message = form.elements.message.value.trim();
        }
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
    console.log(localStorage);
    //очистити лок схов, об'єкт, поля форми;
    document.querySelector(".feedback-form").reset();
    localStorage.removeItem('feedback-form-state');
    console.log(formData);
    console.log(localStorage);
    delete formData.email;
    delete formData.message;
    }
});