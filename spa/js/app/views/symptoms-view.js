import symptoms_service from "../services/symptoms-service.js";

// the point of separating elements from their handlers is flexibility
// I may want elements without any handling functions
// and I may want handlers that are shared by multiple elements
const elements = {};
const handlers = {};

let imgSrc = 'https://healthicons.org/icons/svg/filled/conditions/vomiting.svg'

// a function to create a single button with some inner text
function createButton(text) {
    return `<button class="simple-button">${text}</button>`;
}

function createSymptomsContainer() {
    return '<div class="symptomsContainer"></div>'
}

function createInput(idName) {
    return `<div id="${idName}" class="container"><input autocomplete="off" type="search" id="searchBar" class="container" placeholder="Search Symptom..."></div>`;
}

function createSymptomsCue() {
    return `<div class="symptomsCue"><div id="clearList" class="symptomBall" style="background-color: #A8201A;">&#10005;</div></div>`
}

function createSymptomBall(symptomName) {
    let getFirstLetters = function (symptomName) {
        // Split the input string into an array of words
        const words = symptomName.split(' ');
        // Initialize an empty string to store the first letters
        let firstLetters = "";
        // Iterate over each word in the array
        words.forEach(word => {
            // Extract the first letter of each word and append it to the firstLetters string
            firstLetters += word.charAt(0);
        });
        // Return the concatenated firstLetters string
        return firstLetters.toUpperCase();
    }
    let letters = getFirstLetters(symptomName);
    return `<div class="symptomBall">${letters}</div>`
}

function createSuggestions(suggestionsObj) {
    if (suggestionsObj) {
        console.log('building html' + suggestionsObj[0].Name)
        let suggestionsHTML = '';
        let count = 0; // Counter to track the number of suggestions added
        suggestionsObj.forEach(element => {
            if (count < 5) { // Limit to 5 suggestions
                suggestionsHTML += `<div class="suggestion" symptoms-id="${element.ID}">${element.Name}</div>`;
                count++;
            } else {
                return; // Exit the loop once 5 suggestions are added
            }
        });
        console.log(`<div id="suggestionsContainer">${suggestionsHTML}</div>`)
        return `<div id="suggestionsContainer">${suggestionsHTML}</div>`;
    } else {
        return '';
    }
}

function renderButton(buttonText){
    elements["getDiagnoseButton"] = $(createButton(buttonText));
    elements.app.append(elements["getDiagnoseButton"]);
    console.log(elements["getDiagnose"]);
}

function renderSearchBar(eventName) {
    // checking if the element already exists OR if there is no handler with that name (just because I don't want to render a button without a handler)
    if (elements[eventName] || !handlers[eventName]) {
        return;
    }

    elements[eventName] = $(createInput("searchSection"));

    elements[eventName].focus();

    let suggestions = [];
    // Add event listener for the 'input' event
    elements[eventName].on('input', async function (event) {
        const inputValue = event.target.value;
        console.log(eventName + inputValue);
        try {
            // Wait for the response of handlers[eventName](inputValue)
            console.log('aqui')
            suggestions = await handlers[eventName](inputValue);

            // Any code that relies on suggestions should go here
        } catch (error) {
            // Handle any errors that occur during the asynchronous operation
            console.error('Error fetching suggestions:', error);
        }
        // Code here will only execute after the await statement completes
        // This ensures that suggestions are available before continuing
    });

    console.log('here2')
    elements.app.append(elements[eventName]);
}

// adds EventListener to each suggestion to search when clicked by user
function renderSuggestions(suggestionsObj) {
    let suggestions = createSuggestions(suggestionsObj);
    elements.suggestions = $(suggestions);
    let associatedSuggestions;
    elements.suggestions.on('click', async function (event) {
        console.log("ENTERED FUNCTION!!!!")
        // Get the text of the clicked suggestion
        const suggestionText = $(event.target).text();
        const suggestionId = $(event.target).attr("symptoms-id");
        console.log(suggestionId);
        if (!elements["symptomsCue"] || elements["symptomsCue"].innerHTML === "") {
            console.log("entered here")
            elements["symptomsCue"] = $(createSymptomsCue())

            
            elements.app.prepend(elements["symptomsCue"]);

           renderButton("Get Diagnose");

        }

        elements[suggestionText] = $(createSymptomBall(suggestionText));
        elements["symptomsCue"].append(elements[suggestionText]);
        if (elements.counter) {
            elements.counter.remove();
        }

        elements.app.find('#main-container').after(elements.counter);
        elements.app.find('#searchBar').val(suggestionText);
        elements.app.find('#suggestionsContainer').empty();
        elements.app.find('#searchBar').nextAll().remove();
        console.log("suggestion id is: " + suggestionId)
        associatedSuggestions = await symptoms_service.fetchAssociatedSymptoms(suggestionId);

        if (associatedSuggestions) {
            console.log(associatedSuggestions)
            renderSuggestions(associatedSuggestions);
        }

    });
    elements.app.find("#clearList").on('click', () => {
        elements["symptomsCue"].remove();
        delete elements["symptomsCue"];
        associatedSuggestions = null;
        elements["getDiagnoseButton"].remove();
        delete elements["getDiagnoseButton"];
        elements.app.find('#searchBar').nextAll().remove();
    })
    elements.app.find('#searchBar').nextAll().remove();
    elements.app.find('#searchSection').append(elements.suggestions);

}



export function bind(eventName, handler) {
    handlers[eventName] = handler;
}

export function render(data) {
    elements.app = $("#app");
    console.log('data is: ' + data)
    renderSuggestions(data);
    console.log('render')
    renderSearchBar('fetchSymptoms');


}