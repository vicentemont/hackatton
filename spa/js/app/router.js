import { routes } from "./routes.js";
import symptoms_service from "./services/symptoms-service.js";

// just a name for a default route, corresponding to one of the routes keys, for when the shit hits the fan
const defaultRoute = "home";

// a listener to listen for hashchange. "hashchange" is a existing window event
window.addEventListener("hashchange", hashchangeHandler, true);

// upon changing hash, find and load the corresponding controller from the given hash
// location.hash is a Window property - in fact, related to the same event as hashchange
function hashchangeHandler() {
 /*  if(window.location.hash === "#diagnosis" ){
    let json= symptoms_service.fetchDiagnosis("11","female","45");
    json.then((result)=> routes.diagnosis.view.show(result));
  } */
  // routeName can be undefined if nothing is found, it will use the defaultRoute name
  /* else{ */const routeName =
    Object.keys(routes).find((name) => location.hash === routes[name].hash) ||
    defaultRoute;

  location.hash = routes[routeName].hash; 

  loadController(routes[routeName].controller);
 /*  } */
}

export async function loadController(controllerName) {
  try {
    // import the controller dinamically and start it
    const controller = await import(`./controllers/${controllerName}.js`);
    controller.start();
  } catch (err) {
    console.log("err is:", err);
    location.hash = routes[defaultRoute].hash;
  }
}

// start the router setting and loading the default router.
export function start() {
  
  location.hash = routes[defaultRoute].hash;
  loadController(routes[defaultRoute].controller);
}
