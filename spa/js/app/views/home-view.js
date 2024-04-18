import { routes } from "../routes.js";
import { loadController, start } from "../router.js";
import { elements } from "./symptoms-view.js";
import { selectedSymptoms } from "./symptoms-view.js";


function createHomeScreen(){
    return `<div class="welcomeScreen"><div class="welcomeQuote"> </div>
    <div class="start"><button class="start-button">START</button></div></div>`
}

function renderButton(){
    $("#logo").on('click',() => {
        //elements.app.empty(); 
        start();
    })
    elements.app.empty(); 
    let home = $(createHomeScreen());
    elements.app.append(home);
    $(".start-button").on('click', () => {
        if(elements["symptomsCue"]){

            elements["symptomsCue"].remove();
            delete elements["symptomsCue"];
        }
        if(elements["getDiagnoseButton"]){
            elements["getDiagnoseButton"].remove();
            delete elements["getDiagnoseButton"];
        }
        
        elements.app.find('#searchBar').nextAll().remove();
       // selectedSymptoms = [];
    elements.app.empty();
    delete elements['fetchSymptoms'];
    location.hash = routes["symptoms"].hash;
    loadController(routes["symptoms"].controller);
    })
}

export function render(){
    elements.app = $("#app");
    renderButton();
}



