function myfunction() {
  document.getElementById("mytopnav").classList.toggle("responsive");
}

function sub() {
  event.preventDefault();
  alert("Mail Sent Succesfully");
  emailjs.send(
    "service_qanxv6w",
    "template_5g7ruee",
    {
      from_name: "Anshuman",
      message: "Hello !",
    },
    "h8s4g7h4yAgMruUze"
  );
}

//navbar sticky
window.onscroll = function () {
  myFunction();
};

var mytopnav = document.getElementById("mytopnav");

var sticky = mytopnav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    mytopnav.classList.add("sticky");
  } else {
    mytopnav.classList.remove("sticky");
  }
}
GitHubCalendar(".calendar", "anshuman2608");
// or enable responsive functionality
GitHubCalendar(".calendar", "anshuman2608", { responsive: true });
function resume() {
  window.open(
    "https://drive.google.com/file/d/1YjN1Pil5nFPSbRdc5PryZ8oJbaYW_ZIv/view",
    "_blank"
  );
}

function openResume() {
  var pdfFile = './Images/Anshuman-Singh-Resume.pdf'; // Replace with the actual local file path
    
  // Open the resume in a new tab
  var newTab = window.open(pdfFile, '_blank');
  
  // Cleanup the new tab when it's closed
  newTab.addEventListener('beforeunload', function() {
      newTab.close();
  });
}
