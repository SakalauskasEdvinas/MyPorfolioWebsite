import JustValidate from "just-validate";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

//firebase setup Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getFirestore} from "firebase/firestore";
import {collection, addDoc} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries Your web app's
// Firebase configuration For Firebase JS SDK v7.20.0 and later, measurementId
// is optional
const firebaseConfig = {
    apiKey: "AIzaSyAiq7oVt2sSZudSn1uNEY4vDjaJYMfEkj0",
    authDomain: "contact-form-portfolio-b427c.firebaseapp.com",
    projectId: "contact-form-portfolio-b427c",
    storageBucket: "contact-form-portfolio-b427c.appspot.com",
    messagingSenderId: "1018600373894",
    appId: "1:1018600373894:web:af6d4b422496e1e10b5b07",
    measurementId: "G-S56ZKGMS47"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);



//fade in and out effect
window.addEventListener("scroll", fade);
window.addEventListener("load", fade);

function fade() {
    const fadeIns = document.querySelectorAll('.fade-in');

    const options = {
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry
                    .target
                    .classList
                    .add('active');
            } else {
                entry
                    .target
                    .classList
                    .remove('active');
            }
        });
    }, options);

    fadeIns.forEach(fadeIn => {
        observer.observe(fadeIn);
    });
}

//typed libray to animate text in navbar
let typed = new Typed('#text', {
    strings: ['PORTFOLIO'],
    typeSpeed: 20,
    showCursor: false
});

//swiper to have project examples in a slider
const swiper = new Swiper(".swiper-container", {
    // Optional parameters
    slidesPerView: 2,
    spaceBetween: 0,
    direction: "horizontal",
    loop: true,
    speed: 600,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        900: {
            slidesPerView: 2,
            spaceBetween: 0
        }

    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});


// form validation function to send contact form data to firebase, displays
// toast with sucess or failure message
async function storeForm(name, email, message) {
    try {
        const docRef = await addDoc(collection(db, "messages"), {
            name: name,
            email: email,
            message: message
        }).then(() => {
            showToast("Message sent successfully!");
        });
        console.log("Document written with ID: ", docRef);
    } catch (e) {
        showToast("Something went wrong submiting the form, please try again later!");
        console.error("Error adding document: ", e);
    }

}

//show toast function
function showToast(message) {
    Toastify({
        text: message, duration: 6000, close: true, gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)"
        },
        onClick: function () {} // Callback after click
    }).showToast();
}

//validate form using just-validate and submit
const validator = new JustValidate(
    '#contact_form',
    {validateBeforeSubmitting: true}
);

validator
    .addField('#name', [
        {
            rule: 'required'
        }, {
            rule: 'minLength',
            value: 2,
            errorMessage: 'Name should be between 2 and 15 words.'
        }, {
            rule: 'maxLength',
            value: 15,
            errorMessage: 'Name should be between 2 and 15 words.'
        }
    ])
    .addField('#email', [
        {
            rule: 'required'
        }, {
            rule: 'email'
        }
    ])
    .addField('#message', [
        {
            rule: 'required'
        }, {
            rule: 'minLength',
            value: 10,
            errorMessage: 'Message should be between 10 and 350 words.'
        }, {
            rule: 'maxLength',
            value: 350,
            errorMessage: 'Message should be between 10 and 350 words.'
        }
    ])
    .onSuccess((event) => {
        console.log(event.target)

        let name = document
            .querySelector("#name")
            .value;
        let email = document
            .querySelector("#email")
            .value;
        let message = document
            .querySelector("#message")
            .value;

        console.log(name);
        console.log(email);
        console.log(message);
        storeForm(name, email, message);
        event
            .target
            .reset();
    });
