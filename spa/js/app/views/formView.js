import symptoms_service from "../services/symptoms-service.js";
import { setGender } from "./symptoms-view.js";
import { setAge } from "./symptoms-view.js"
let age =null;
let gender= null;

let formView={


show: ()=>{
    $("#app").empty();
    $("#app").append(`<form id="medical-form">
    <div>
      <label for="age">Age:       </label>
      <input type="number" id="age" name="age" required>
    </div>
    <div>
      <label for="gender">Gender:</label>
      <select id="gender" name="gender" required>
        <option value="">Select</option>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
    </div>
    <button id="submit" type="submit">Submit</button>
  </form>`)
},

goToSymptoms: ()=>{
    values = getValues(age,gender);
    setAge= values[0];
    setGender= values[1];
    elements.app.empty();
    delete elements['fetchSymptoms'];
    location.hash = routes["symptoms"].hash;
    loadController(routes["symptoms"].controller);
    
   
},

getValues: (age,gender)=>{
return values= [age,gender];
},




renderButton:()=>{
    createForm();
    $("#submit").on('click',() => {
    console.log($("#age").val());
    console.log($("#gender").val());
    age = $("#age").val();
    gender= $("#gender").val();
    
    getValues(age,gender);

    goToSymptoms();
    })
        
    
   
    }
}
export default formView;