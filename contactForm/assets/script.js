const firebaseConfig = {
  apiKey: "AIzaSyCRbc1grIa7vBmALjJaQEEDXDY3b8eWHeM",
  authDomain: "firstform-64773.firebaseapp.com",
  databaseURL: "https://firstform-64773-default-rtdb.firebaseio.com",
  projectId: "firstform-64773",
  storageBucket: "firstform-64773.appspot.com",
  messagingSenderId: "784070786481",
  appId: "1:784070786481:web:46059e195435921d07d190",
  measurementId: "G-QLP0RZMNNF",
};

//   inetializing firebase
//   firebaseConfig.initializeApp(firebaseConfig);
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//   reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var email = getElementVal("email");
  var message = getElementVal("message");

  console.log(name, email, message);
  saveMessage(name, email, message);

  // Clear form fields
  document.getElementById("contactForm").reset();

  // Show alert message
  var alert = document.getElementById("alert");
  alert.classList.add("show");
  setTimeout(function () {
    alert.classList.remove("show");
  }, 3000);
}

const saveMessage = (name, email, message) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    email: email,
    message: message,
  });
};

function getElementVal(id) {
  return document.getElementById(id).value;
}
