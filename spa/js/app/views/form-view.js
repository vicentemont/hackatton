import symptoms_service from "../services/symptoms-service.js";
import { elements } from "./symptoms-view.js";
import { setGender } from "./symptoms-view.js";
import { setAge } from "./symptoms-view.js";
import { routes } from "../routes.js";
import { loadController, start } from "../router.js";


let formView = {


  show: () => {
    $("#app").empty();
    $("#app").append(`<form id="medical-form">
    <div>
    <div class="instruction">Fill in your details: </div>
      <label for="age">       </label>
      <input type="number" id="age" name="age" placeholder="Select age..." required>
    </div>
    <div>
      <label for="gender"></label>
      <select id="gender" name="gender" required>
        <option value="">Gender</option>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
    </div>
    <button id="submit">Go</button>
  </form>`)
  },

  goToSymptoms: () => {
    elements.app.empty();
    delete elements['fetchSymptoms'];
    location.hash = routes["symptoms"].hash;
    loadController(routes["symptoms"].controller);


  },

  renderButton: () => {
    formView.show();
    $("#submit").on('click', () => {
      console.log("age is: " + $("#age").val());
      console.log($("#gender").val());
      setAge($("#age").val());
      setGender($("#gender").val());
      formView.goToSymptoms();
    })



  }
}
export default formView;