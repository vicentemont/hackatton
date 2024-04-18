let token ="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InplcGVkcm8wOTAxQGdtYWlsLmNvbSIsInJvbGUiOiJVc2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiMTM4MTkiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ZlcnNpb24iOiIyMDAiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xpbWl0IjoiOTk5OTk5OTk5IiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwIjoiUHJlbWl1bSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGFuZ3VhZ2UiOiJlbi1nYiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6IjIwOTktMTItMzEiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXBzdGFydCI6IjIwMjQtMDQtMTciLCJpc3MiOiJodHRwczovL3NhbmRib3gtYXV0aHNlcnZpY2UucHJpYWlkLmNoIiwiYXVkIjoiaHR0cHM6Ly9oZWFsdGhzZXJ2aWNlLnByaWFpZC5jaCIsImV4cCI6MTcxMzQzMTI2NCwibmJmIjoxNzEzNDI0MDY0fQ.aGZz-a6WyCe8Tks4yVx46jJxzWULehzJlMwDjmGjbqs";

let gender = "female";
let age = "30";

let autoCompleteSuggestions = [];
let symptoms_service = {

 

    fetchSymptoms: async (input) => {
        const symptomsApi = `https://sandbox-healthservice.priaid.ch/symptoms?token=${token}&format=json&language=en-gb`;
        console.log(input)
        try {
            const response = await fetch(symptomsApi);
            if (!response.ok) {
                console.log('API Error:', symptoms);
                throw new Error(response);
            } 
            const symptoms = await response.json();
            const filteredSymptoms = symptoms.filter(symptom =>
                symptom.Name.toLowerCase().includes(input.toLowerCase())
            );
            console.log(filteredSymptoms);
            autoCompleteSuggestions = filteredSymptoms;
            return autoCompleteSuggestions;

        } catch (error) {
            //resetToken();
            console.error('Fetch Error:', error);
            throw error;
        }





    },

    fetchAssociatedSymptoms: async (id) => {

        const proposedSymptomsApi = `https://sandbox-healthservice.priaid.ch/symptoms/proposed?symptoms=[${id}]&gender=${gender}&year_of_birth=${age}&token=${token}&format=json&language=en-gb`

        try {
            const response = await fetch(proposedSymptomsApi);
            const proposedSymptoms = await response.json();

            if (!response.ok) {
                console.log('API Error:', body.message);
                throw new Error(body.message);
            }

            return proposedSymptoms;
        } catch (error) {
            //resetToken();
            console.error('Fetch Error:', error);
            throw error;
        }
        
    },

    fetchDiagnosis: async (symptomID, gender, age) => {
        const diagnosisApi = `https://sandbox-healthservice.priaid.ch/diagnosis?symptoms=[${symptomID}]&gender=${gender}&year_of_birth=${age}&token=${token}&format=json&language=en-gb`;

        try {
            const response = await fetch(diagnosisApi);
            const diagnosis = await response.json();

            if (!response.ok) {
                console.log('API Error:', body.message);
                throw new Error(body.message);
            }
            return diagnosis;
        } catch (error) {
            //resetToken();
            console.error('Fetch Error:', error);
            throw error;
        }
        
    },

    fetchIcon: async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer o2awTyUT9Fmrgjj4FO3BiOR13iiJyNatqie5PYSczeOtioXk1DgJhVaWSswGQq5i'
            }
        };

        try {
            const response = await fetch(`https://api.iconfinder.com/v4/icons/search?query=arrow`, options);
            const data = await response.json();

            console.log('data is:' + data);
            return data;
        } catch (error) {
            console.error('Error fetching movie credits:', error);
            throw error;
        }
    }
}

export default symptoms_service;
