import symptoms_service from "../services/symptoms-service.js"



// the point of separating elements from their handlers is flexibility
// I may want elements without any handling functions
// and I may want handlers that are shared by multiple elements
const elements = {};
const handlers = {};

let imgSrc = 'https://healthicons.org/icons/svg/filled/conditions/vomiting.svg'

// a function to create a single button with some inner text
function createButton(text = "CLICK HERE!") {
    return `<button class="simple-button">${text}</button>`;
}

function createSymptomsContainer() {
    return '<div class="symptomsContainer"></div>'
}

// a function to create a film card, which is the html code for a single film
function createSymptomBall(imgSrc, iconId) {
    return `<div class="symptom"><img src="${imgSrc}" iconId="${iconId}"> </div>`;
}

// a function to render a single film, cleaning any previous film card 
// then creating a new film card and appending it.
function renderSymptomBall(eventName) {
    if (elements) {
        console.log('symptoms here1')
    }
    elements.symptomsContainer = $(createSymptomsContainer());
    elements.app.append(elements.symptomsContainer);
    for (var i = 0; i < 30; i++) {
        elements.symptomBall = $(createSymptomBall(imgSrc));
        elements.symptomBall.attr('iconId', i+1);
        elements.symptomBall.on('click', function() {
        let associatedSymptoms= symptoms_service.fetchAssociatedSymptoms("10","male","45");
           console.log(associatedSymptoms);
        });
        elements.symptomsContainer.append(elements.symptomBall);
    }
}


// a function to render the button, creating a new one if it doesn't exist
// binding it to the "click" event
// and appending it to the "app" element
function renderButton(eventName, buttonText) {
    // checking if the element already exists OR if there is no handler with that name (just because I don't want to render a button without a handler)
    if (elements[eventName] || !handlers[eventName]) {
        return;
    }

    elements[eventName] = $(createButton(buttonText));
    elements[eventName].click(handlers[eventName]);
    elements.app.append(elements[eventName]);
}

// an exposed function for the service to give us a handler function to bind to an event
export function bind(eventName, handler) {
    handlers[eventName] = handler;
}

// the render function, which will trigger the rendering of the button firstly
// in this version, this is the function where one decides what will be rendered
export function render() {
    elements.app = $("#app");

    renderSymptomBall();

}
