window.onscroll = function () {
  var scroll = window.scrollY;
  var navbar = document.getElementById("navbar_top");
  if (scroll > 160) {
    navbar.classList.remove("main-header");
    navbar.classList.add("main-header-sticky");
  } else {
    navbar.classList.remove("main-header-sticky");
    navbar.classList.add("main-header");
  }
};

const alertFunction = () => {
  var name = document.getElementById("name").value;
  var mobileNumber = document.getElementById("mobileNumber").value;
  var address = document.getElementById("address").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var customFile = document.getElementById("customFile").value;
  if (
    name === "" &&
    mobileNumber === "" &&
    address === "" &&
    email === "" &&
    password === "" &&
    customFile === ""
  )
    alert(
      "Enter name, mobile number, address, user id, password & upload ID proof"
    );
  else if (
    mobileNumber === "" &&
    address === "" &&
    email === "" &&
    password === "" &&
    customFile === ""
  )
    alert("Enter mobile number, address, user id, password & upload ID proof");
  else if (
    address === "" &&
    email === "" &&
    password === "" &&
    customFile === ""
  )
    alert("Enter address, user id, password & upload ID proof");
  else if (email === "" && password === "" && customFile === "")
    alert("Enter user id, password & upload ID proof");
  else if (password === "" && customFile === "")
    alert("Enter password & upload ID proof");
  else if (customFile === "") alert("Upload ID proof");
  else alert("Form submitted successfully");
};
