let symptoms_service = {

    button: ()=>{
    $("#button").on("click",()=>{

    })},

    fetchSymptoms:async () =>{
    const symptomsApi = `https://sandbox-healthservice.priaid.ch/symptoms?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InplcGVkcm8wOTAxQGdtYWlsLmNvbSIsInJvbGUiOiJVc2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiMTM4MTkiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ZlcnNpb24iOiIyMDAiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xpbWl0IjoiOTk5OTk5OTk5IiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwIjoiUHJlbWl1bSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGFuZ3VhZ2UiOiJlbi1nYiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6IjIwOTktMTItMzEiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXBzdGFydCI6IjIwMjQtMDQtMTciLCJpc3MiOiJodHRwczovL3NhbmRib3gtYXV0aHNlcnZpY2UucHJpYWlkLmNoIiwiYXVkIjoiaHR0cHM6Ly9oZWFsdGhzZXJ2aWNlLnByaWFpZC5jaCIsImV4cCI6MTcxMzM3Mjg0NywibmJmIjoxNzEzMzY1NjQ3fQ.q3UzPx151Qr9Yx5awDr5foni6glnAx7k7loFY8mivpk&format=json&language=en-gb`;
    
        try {
            const response = await fetch(symptomsApi);
            const symptoms = await response.json();
    
            if (!response.ok) {
                console.log('API Error:', body.message);
                throw new Error(body.message);
            } 
        } catch (error) {
            //resetToken();
            console.error('Fetch Error:', error);
            throw error;
        }
        return symptoms;
        },

    fetchAssociatedSymptoms:async (symptomID,gender,age)=>{

        const proposedSymptomsApi= `https://sandbox-healthservice.priaid.ch/symptoms/proposed?symptoms=[${symptomID}]&gender=${gender}&year_of_birth=${age}&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InplcGVkcm8wOTAxQGdtYWlsLmNvbSIsInJvbGUiOiJVc2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiMTM4MTkiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ZlcnNpb24iOiIyMDAiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xpbWl0IjoiOTk5OTk5OTk5IiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwIjoiUHJlbWl1bSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGFuZ3VhZ2UiOiJlbi1nYiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6IjIwOTktMTItMzEiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXBzdGFydCI6IjIwMjQtMDQtMTciLCJpc3MiOiJodHRwczovL3NhbmRib3gtYXV0aHNlcnZpY2UucHJpYWlkLmNoIiwiYXVkIjoiaHR0cHM6Ly9oZWFsdGhzZXJ2aWNlLnByaWFpZC5jaCIsImV4cCI6MTcxMzM3NTcwMCwibmJmIjoxNzEzMzY4NTAwfQ.FsbrRK6Tp8S_vKMRbKlhjtwladpJXg7F7BLdCDaJr28&format=json&language=en-gb`
        
        try {
            const response = await fetch(proposedSymptomsApi);
            const proposedSymptoms = await response.json();
    
            if (!response.ok) {
                console.log('API Error:', body.message);
                throw new Error(body.message);
            } 
        } catch (error) {
            //resetToken();
            console.error('Fetch Error:', error);
            throw error;
        }
        return proposedSymptoms;
    },

    fetchDiagnosis:async (symptomID,gender,age)=>{
        const diagnosisApi= `https://sandbox-healthservice.priaid.ch/diagnosis?symptoms=[${symptomID}]&gender=${gender}&year_of_birth=${age}&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InplcGVkcm8wOTAxQGdtYWlsLmNvbSIsInJvbGUiOiJVc2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiMTM4MTkiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ZlcnNpb24iOiIyMDAiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xpbWl0IjoiOTk5OTk5OTk5IiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwIjoiUHJlbWl1bSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGFuZ3VhZ2UiOiJlbi1nYiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6IjIwOTktMTItMzEiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXBzdGFydCI6IjIwMjQtMDQtMTciLCJpc3MiOiJodHRwczovL3NhbmRib3gtYXV0aHNlcnZpY2UucHJpYWlkLmNoIiwiYXVkIjoiaHR0cHM6Ly9oZWFsdGhzZXJ2aWNlLnByaWFpZC5jaCIsImV4cCI6MTcxMzM3MzM4NywibmJmIjoxNzEzMzY2MTg3fQ.J9K-gQ_1iEw9xsUPmgomzyf_NPXQqUjvu0L0Sc9GkC4&format=json&language=en-gb`;
        
        try {
            const response = await fetch(diagnosisApi);
            const diagnosis = await response.json();
    
            if (!response.ok) {
                console.log('API Error:', body.message);
                throw new Error(body.message);
            } 
        } catch (error) {
            //resetToken();
            console.error('Fetch Error:', error);
            throw error;
        }
        return diagnosis;
    },

    fetchIcon: async (symptom) =>{
    
       separatedSymptom= String(symptom).split(" ");
       separatedSymptom.forEach(element => {
           urlSymptom="";
           urlSymptom= urlSymptom + "%20" + element;
       })
       return urlSymptom;
        
        const iconApi= `https://api.thenounproject.com/v2/icon?query=${urlSymptom}`;

        
    }
}

export default symptoms_service;