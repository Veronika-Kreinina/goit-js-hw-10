
// Взято з усіх можливих ресурсів бо мені важко то осягнути


import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const inputValueEl = document.querySelector('[name="delay"]');
const registerForm = document.querySelector(".form");

registerForm.addEventListener("submit", onSubmit)

function createPromise(delay, state) {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
            resolve(delay);
            } else if (state === 'rejected') {
            reject(delay);
            }
        }, delay); 
        });
    }

function onSubmit(event) {
    event.preventDefault();
    const delay = Number(inputValueEl.value);
    const state = document.querySelector('[name="state"]:checked').value;

    createPromise(delay, state)
        .then(delay => {
            iziToast.success({
                title: '✅',
                icon:'',
                message: `Fulfilled promise in ${delay}ms`,
                position: 'topRight'
            });
        })
                .catch(delay => {
                    iziToast.error({
                        title: '❌',
                        icon:'',
                        message: `Rejected promise in ${delay}ms`,
                        position: 'topRight'
                    });
                });
    
            inputValueEl.value = '';

            const radioButtons = document.querySelectorAll('[name="state"]');
            radioButtons.forEach(button => {
                button.checked = false;
            });
        }