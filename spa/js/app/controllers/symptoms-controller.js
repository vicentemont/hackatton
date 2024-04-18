import { bind, render } from "../views/symptoms-view.js";
import symptoms_service from "../services/symptoms-service.js";
//import { getSymptomBall } from "../services/symptoms-service.js";

// binds a handler function to a given event name
// these events will be associated with button click, and thus trigger the getFilmHandler function  
// this means that the "getFilm" must be used both for the handler name AND button element name.
function bindEventHandlers() {
  bind("getSymptomBall", getSymptomBallHandler);
  bind("fetchSymptoms", fetchSymptomsHandler);
  bind("fetchAssociatedSymptoms", fetchAssociatedSymptomsHandler);
  render();
}


function getSymptomBallHandler() {
  render(getSymptomBall());
}

async function fetchSymptomsHandler() {
  const input = $('#searchBar').val();
  const suggestions = await symptoms_service.fetchSymptoms(input);
  render(suggestions);
  suggestions;
}

async function fetchAssociatedSymptomsHandler(){
  const input = $('#searchBar').val();
  const suggestions = await symptoms_service.fetchAssociatedSymptoms(input);
  render(suggestions);
  suggestions;
}

// do the binding for the getFilmHandler
// and start the controller, triggering render first time, without a film argument
export function start() {

  bindEventHandlers();
  console.log('here')
  
}
