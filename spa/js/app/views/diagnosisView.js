import symptoms_service from "../services/symptoms-service.js"

let diagnosisView = {

    show: (jasonFile)=>{
        
        $("#disease-name").empty();
        $("#disease-name").append(
            `${jasonFile.Issue.Name}`
        );
        $("#chance").empty();
        $("#chance").append(
            `Based on your symptoms, there is a ${jasonFile.Issue.Accuracy} of you having ${jasonFile.Name}!`
        );
        $("#icd-name").empty();
        $("#icd-name").append(
            `${jasonFile.Issue.IcdName}`
        );
        $("#icd-number").empty();
        $("#icd-number").append(
            `${jasonFile.Issue.Icd}`
            );
        $("#doc-1").empty();
        $("#doc-1").append(
            `${jasonFile.Specialisation[0].Name}`
        );
        $("#doc-2").empty();
        $("#doc-2").append(
            `${jasonFile.Specialisation[1].Name}`
        );

    }
}

export default diagnosisView;