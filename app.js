

let menuList = document.querySelectorAll(".menus");
let menu_btn = document.querySelectorAll(".menu_btn");

menu_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    menuList.forEach((item) => {
      item.classList.toggle("menuDisplay");
    });
  });
});


//Input validation for email..

let submitform = document.querySelector(".submitForm");
let submitButton = document.querySelector(".submit");
let found = false;

submitButton.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent the form from submitting  
  const emailInput = document.getElementById('gmail');
  const emailValue = emailInput.value;
  const nameInput = document.getElementById("name");
  const nameValue = nameInput.value;


  // Email regex pattern
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // name regex pattern
  const nameRegex = /^[a-zA-Z ]{3,}$/;

  // Validate the email
  if (!(emailRegex.test(emailValue))) {
    found=true; //so that , all inputs alert can't work in the case of invalid email..
    alert('Please enter a valid email address.'); // Alert user
  } 
  // Validate the name
  else if(!(nameRegex.test(nameValue))){
    alert("Name can only be alphabets and it must be larger than 2 alphabets..");
  }



  //For checking that all the inputs are non-empty
  else if ((document.querySelector("#name").value) !== "") {
    if ((document.querySelector("#name").value) !== "") {
      if ((document.querySelector("#msg").value) !== "") {
        submitform.submit();
        found = true;
      }
    }
  }

  if (found === false) {
    alert("All the inputs are mandatory.. ")
  }


});







