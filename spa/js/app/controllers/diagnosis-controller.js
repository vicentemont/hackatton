import 

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
  