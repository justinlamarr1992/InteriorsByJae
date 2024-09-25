// NavBar
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navBarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navBarLinks.classList.toggle("active");
});

function doModal(anchor, popupbox) {
  // Get the <span> element that closes the modal
  var span = popupbox.getElementsByClassName("close")[0];

  anchor.addEventListener("click", function (event) {
    popupbox.style.display = "block";
  });
  // anchor.addEventListener("onMouseOver", function (event) {
  //   popupbox.style.display = "block";
  // });

  span.addEventListener("click", function (event) {
    popupbox.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == popupbox) {
      popupbox.style.display = "none";
    }
  });
}

// Team
function changeToMember1() {
  var mem1 = document.getElementById("team-pic-mem1");
  var mem2 = document.getElementById("team-pic-mem2");
  mem1.classList.add("displayBlock");
  mem2.classList.remove("displayBlock");
  mem1.classList.remove("displayNone");
  mem2.classList.add("displayNone");
  return false;
}
function changeToMember2() {
  var mem1 = document.getElementById("team-pic-mem1");
  var mem2 = document.getElementById("team-pic-mem2");
  mem2.classList.add("displayBlock");
  mem1.classList.remove("displayBlock");
  mem2.classList.remove("displayNone");
  mem1.classList.add("displayNone");
  return false;
}

// function sendEmail() {
//   event.preventDefault();
//   console.log(
//     "Does it send ALL of it?",
//     ctaName[0].value,
//     ctaEmail[0].value,
//     ctaNumber[0].value,
//     ctaMessage[0].value
//   );
//   this.contact_number.value = (Math.random() * 100000) | 0;
//   emailjs.sendForm("contact_service", "cta-form", this).then(
//     function () {
//       console.log("SUCCESS!");
//     },
//     function (error) {
//       console.log("FAILED...", error);
//     }
//   );
// }
