const formData = { email: "", message: "" };
const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";


form.addEventListener("input", (evt) => {
const inputName = evt.target.name;
const inputValue = evt.target.value;
formData[inputName] = inputValue;
localStorage.setItem(localStorageKey, JSON.stringify(formData))
});

const savedData = localStorage.getItem(localStorageKey);
if (savedData) {
const parsedData = JSON.parse(savedData);
formData.email = parsedData.email;
formData.message = parsedData.message;
form.elements.email.value = formData.email;
form.elements.message.value = formData.message;
}


form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  if (formData.email.trim() === "" || formData.message.trim() === "") {
    return alert("Fill please all fields");
  }

  console.log(formData);
  
  localStorage.removeItem(localStorageKey);
  formData.email = "";
  formData.message = "";
  form.reset();
});