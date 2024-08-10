// console.log("test");
const signUpForm = document.forms["sign-up-form"];
console.log(signUpForm);
const firstNameInput = signUpForm["first-name"];
const lastNameInput = signUpForm["last-name"];
const age = signUpForm["age"];

// console.log(firstNameInput);
const submit = document.getElementById("submit");
console.log(submit);
const fnalert = document.getElementById("fnalert");
const lnalert = document.getElementById("lnalert");
const a_alert = document.getElementById("agealert");
const result = document.getElementById("result");
const ageHasil = document.getElementById("agehasil");
const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const backButton = document.getElementById("new");
const hasil = document.getElementById("hasil");
const symbols = /[!@#$%^&*()_+{}\[\]:;"'<>,.?/~`1234567890]/;
// const submit = document.getElementById("submit");

function validation() {
  if (firstNameInput.value.trim() === "") {
    fnalert.classList.remove("text-success");
    fnalert.classList.add("text-danger");
    fnalert.innerHTML = "field nama depan harus di isi";
  } else if (symbols.test(firstNameInput.value)) {
    fnalert.classList.remove("text-success");
    fnalert.classList.add("text-danger");
    fnalert.innerHTML = "tidak boleh angka!";
  } else {
    fnalert.classList.remove("text-danger");
    fnalert.classList.add("text-success");
    fnalert.innerHTML = "Succes";
    fnalert.classList.add("hasil");
  }

  if (lastNameInput.value.trim() === "") {
    lnalert.classList.remove("text-success");
    lnalert.classList.add("text-danger");
    lnalert.innerHTML = "field nama akhir harus di isi";
  } else if (symbols.test(lastNameInput.value)) {
    lnalert.innerHTML = "tidak boleh angka!";
    fnalert.classList.remove("text-success");
    fnalert.classList.add("text-danger");
  } else {
    lnalert.classList.remove("text-danger");
    lnalert.classList.add("text-success");
    lnalert.classList.add("hasil");
    lnalert.innerHTML = "Succes";
  }
  if (age.value.trim() < 18) {
    a_alert.classList.remove("text-success");
    a_alert.classList.add("text-danger");
    a_alert.innerHTML = "umur harus di atas 18 tahun";
  } else {
    a_alert.classList.remove("text-danger");
    a_alert.classList.add("text-success");
    a_alert.classList.add("hasil");
    a_alert.innerHTML = "Succes";
  }
}

function hasils() {
  if (
    fnalert.innerHTML === "Succes" &&
    lnalert.innerHTML === "Succes" &&
    a_alert.innerHTML === "Succes"
  ) {
    container1.classList.add("hidden1");
    container2.classList.remove("container2");
    // result.innerText = firstNameInput.value + " " + lastNameInput.value;
    result.innerHTML = `Full name: ${firstNameInput.value} ${lastNameInput.value}`;
    ageHasil.innerText = `Age: ${age.value}`;
  }
}

function back() {
  window.location.reload();
}

backButton.addEventListener("click", back);

signUpForm.onsubmit = (event) => {
  event.preventDefault();
  validation();
  hasils();
};
