
let diagnosisView = {

        show: (jsonFile)=>{
            
            console.log("entrou caralho")
            console.log(jsonFile);
            
            $("#app").empty();
            $("#app").append(`<section class="diagnosis">
            <div id="disease-name"></div>
            <div id="chance"></div>
            <div id="icd-name">Medical Name: </div>
            <div class="lastRow">
            
            <div id="doc-1"> If you are concerned, consider visiting a  </div>
            </div>
        
        </section>`)
            
            $("#disease-name").append(
                `${jsonFile[0].Issue.Name}`
            );
        
            $("#chance").append(
                `Based on your symptoms, there is a ${jsonFile[0].Issue.Accuracy} chance of you having a ${jsonFile[0].Issue.Name}!`
            );
          
            $("#icd-name").append(
                `${jsonFile[0].Issue.IcdName}`
            );
            
         
           
            $("#doc-1").append(
                `${jsonFile[0].Specialisation[0].Name} doctor!`
            );
            $("#doc-2").empty();
            

        },
        bind: (eventName, handler) => {
            handlers[eventName] = handler;
        },
        render:()=> {
            elements.app = $("#app");
    
    }
}

export default diagnosisView;