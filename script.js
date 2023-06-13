function myfunction(){
  document.getElementById("mytopnav").classList.toggle("responsive");
}

function sub(){
  event.preventDefault()
  alert("hello")
  emailjs.send("service_qanxv6w","template_5g7ruee",{
    from_name: "Alok",
    message: "Hello !",
    },"h8s4g7h4yAgMruUze");   
}

//navbar sticky
window.onscroll = function() {myFunction()};

var mytopnav = document.getElementById("mytopnav");

var sticky = mytopnav.offsetTop;

function myFunction() {
if (window.pageYOffset >= sticky) {
  mytopnav.classList.add("sticky")
} else {
  mytopnav.classList.remove("sticky");
}
}
GitHubCalendar(".calendar", "alokrai0607");
// or enable responsive functionality
GitHubCalendar(".calendar", "alokrai0607", { responsive: true });
function resume(){
window.open("https://drive.google.com/file/d/1opUM57d_nAP79bhtp4pt9JmgjPraEWan/view?usp=sharing", "_blank");
}


