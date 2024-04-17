import { bind, render } from "../views/symptoms-view.js";
//import { getSymptomBall } from "../services/symptoms-service.js";

// binds a handler function to a given event name
// these events will be associated with button click, and thus trigger the getFilmHandler function  
// this means that the "getFilm" must be used both for the handler name AND button element name.
function bindEventHandlers() {
  bind("getSymptomBall", getSymptomBallHandler);
}

// a function to get a random film and render it. 
//Notice that getFilm is a service function while render is a view function.
function getSymptomBallHandler() {
  render(getSymptomBall());
}

// do the binding for the getFilmHandler
// and start the controller, triggering render first time, without a film argument
export function start() {

  bindEventHandlers();
  console.log('here')
  render();
}
