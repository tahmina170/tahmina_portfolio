// MOBILE MENU

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// TYPEWRITER EFFECT

const texts = [
  "CSE Student",
  "Backend Developer",
  "Software Engineer",
  "Competitive Programmer",
  "Problem Solver"
];

let speed = 100;
let textIndex = 0;
let charIndex = 0;

const typewriter = document.getElementById("typewriter");

function typeEffect(){

  if(charIndex < texts[textIndex].length){

    typewriter.textContent += texts[textIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeEffect, speed);
  }
  else{

    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect(){

  if(typewriter.textContent.length > 0){

    typewriter.textContent =
      typewriter.textContent.slice(0,-1);

    setTimeout(eraseEffect, 50);
  }
  else{

    textIndex++;

    if(textIndex >= texts.length){
      textIndex = 0;
    }

    charIndex = 0;

    setTimeout(typeEffect, 500);
  }
}

window.onload = typeEffect;


// SCROLL REVEAL

function reveal(){

  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element) => {

    const windowHeight = window.innerHeight;

    const revealTop =
      element.getBoundingClientRect().top;

    const revealPoint = 100;

    if(revealTop < windowHeight - revealPoint){

      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);

reveal();


// SKILL BAR ANIMATION

const skillBars =
  document.querySelectorAll(".skill-progress");

function animateSkills(){

  skillBars.forEach((bar) => {

    const rect = bar.getBoundingClientRect();

    if(rect.top < window.innerHeight){

      const progress =
        bar.getAttribute("data-progress");

      bar.style.width = progress + "%";
    }
  });
}

window.addEventListener("scroll", animateSkills);


// CONTACT FORM VALIDATION

const form = document.getElementById("contactForm");

const formMessage =
  document.getElementById("formMessage");

form.addEventListener("submit", function(e){

  e.preventDefault();

  const name =
    document.getElementById("name").value.trim();

  const email =
    document.getElementById("email").value.trim();

  const message =
    document.getElementById("message").value.trim();

  if(name === "" || email === "" || message === ""){

    formMessage.style.color = "red";

    formMessage.textContent =
      "Please fill all fields!";

    return;
  }

  if(!email.includes("@")){

    formMessage.style.color = "red";

    formMessage.textContent =
      "Invalid email address!";

    return;
  }

  formMessage.style.color = "#00d4ff";

  formMessage.textContent =
    "Message sent successfully!";

  form.reset();
});


// BACK TO TOP

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

  if(window.scrollY > 300){

    topBtn.style.display = "block";
  }
  else{

    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
});