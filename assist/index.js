const handleHeaderButton = () => {
  setTimeout(() => {
    let dropdown = document.querySelector(".navbar-collapse");
    let headerButton = document.getElementById("header-navbar-toggle");
    const  navbar  = document.querySelector("#navbar");
    const hamburger = document.getElementById("hamburger");
    const hamburgerCancel = document.getElementById("hamburger-cancel");

    console.log("123", dropdown.className);
    if(dropdown.className.includes("show")) {
      headerButton.style.visibility = "hidden";
      navbar.classList.add("show");
      hamburger.style.display = "none";
      hamburgerCancel.style.display = "inline";
    }
    else {
      headerButton.style.visibility = "visible";
      navbar.classList.remove("show");
      hamburger.style.display = "inline";
      hamburgerCancel.style.display = "none";
    }
  }, 400)
}


function sendMessage() {

  let data = {
    name: document.getElementById('contact_name').value,
    email: document.getElementById('contact_email').value,
    message: document.getElementById('contact_message').value,
  }

  const formBtn = document.querySelector("#form-contact");
  
  $.ajax({
    url: "form.php",
    method: "post",
    data: data ,
    success: function (result) {
      $('#success').css('display', 'block');
      $('#form-contact').css('display', 'none');
      formBtn.classList.add("disabled");
      console.log(
        result
      ); 
    },
    error: function (result) {
      alert("error")
    }
  })
}