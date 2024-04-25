import { routes } from "../routes.js";
import { loadController, start } from "../router.js";
import { elements } from "./symptoms-view.js";
import { clearSymptoms } from "./symptoms-view.js";



function createHomeScreen(){
    return `<div class="welcomeScreen"><div class="welcomeQuote"> </div>
    <div class="start"><button class="start-button">START</button></div></div>`
}

function renderButton(){
    $("#logo").on('click',() => {
        clearSymptoms();
        window.location.href = '/#home';
    })
    elements.app.empty(); 
    let home = $(createHomeScreen());
    elements.app.append(`<div class="instruction">Click start to get your medical checkup!</div>`)
    elements.app.append(home)
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
    location.hash = routes["form"].hash;
    loadController(routes["form"].controller);
    })
}

export function render(){
    elements.app = $("#app");
    renderButton();
}



