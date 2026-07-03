// ===============================
// Welcome Message
// ===============================

window.onload = function () {
    alert("🍽️ Welcome to Meal House Restaurant!");
};

// ===============================
// Smooth Scrolling
// ===============================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ===============================
// Order Now Button
// ===============================

const orderBtn = document.querySelector(".hero button");

orderBtn.addEventListener("click", () => {

    alert("🍕 Thank you!\nYour order request has been received.");

});

// ===============================
// Contact Form Validation
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.querySelector("input[type='text']").value;

    const email = document.querySelector("input[type='email']").value;

    const message = document.querySelector("textarea").value;

    if(name==="" || email==="" || message===""){

        alert("Please fill all fields.");

    }

    else{

        alert("✅ Message Sent Successfully!");

        form.reset();

    }

});

// ===============================
// Scroll To Top Button
// ===============================

// Create Button

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

document.body.appendChild(topBtn);

// Button Style

topBtn.style.position = "fixed";
topBtn.style.right = "20px";
topBtn.style.bottom = "20px";
topBtn.style.padding = "15px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#8B0000";
topBtn.style.color = "white";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.fontSize = "18px";

// Show Button

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

// Scroll Top

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ===============================
// Header Shadow
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 20){

        header.style.boxShadow="0 5px 15px rgba(0,0,0,.3)";

    }

    else{

        header.style.boxShadow="none";

    }

});

// ===============================
// Active Navigation
// ===============================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.forEach(item=>{

            item.style.color="white";

        });

        link.style.color="yellow";

    });

});

// ===============================
// Card Hover Animation
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});

// ===============================
// Gallery Image Click
// ===============================

const images = document.querySelectorAll(".gallery img");

images.forEach(image=>{

    image.addEventListener("click",()=>{

        alert("🍔 Delicious Choice!");

    });

});

// ===============================
// Footer Year
// ===============================

const year = new Date().getFullYear();

document.querySelector("footer p").innerHTML =
`© ${year} Meal House Restaurant | All Rights Reserved`;