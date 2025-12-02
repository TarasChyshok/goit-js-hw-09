import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const t=document.createElement("li");t.innerHTML=`<form class="feedback-form" autocomplete="off">
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
  `;document.querySelector("ul.gallery").insertAdjacentElement("afterend",t);const a={email:"",message:""};localStorage.getItem("feedback-form-state").email&&localStorage.getItem("feedback-form-state").message!==""&&(e.elements.email.value=localStorage.feedback-e-state.email.parse(),e.elements.message.value=localStorage.feedback-e-state.message.parse());const e=document.querySelector("form.feedback-form");e.addEventListener("input",l=>{localStorage.getItem("feedback-form-state");try{JSON.parse(localStorage.getItem("feedback-form-state")).email&&localStorage.getItem("feedback-form-state").message}catch{console.log("error with JSON.parse")}});e.addEventListener("submit",l=>{if(e.email===""&&e.message==="")return alert("Fill please all fields");a.email=e.elements.email.value.trim(),a.message=e.elements.message.value.trim(),console.log(a),localStorage.setItem("feedback-form-state",JSON.stringify(a)),e.elements.email.value="",e.elements.message.value="",document.querySelector(".feedback-form").reset,localStorage.clear()});
//# sourceMappingURL=2-form.js.map
