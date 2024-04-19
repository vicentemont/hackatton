let token ="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InZpY2VudGVjZmNtb250ZWlyb0BnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjEzODIwIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMjAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6Ijk5OTk5OTk5OSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IlByZW1pdW0iLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDI0LTA0LTE3IiwiaXNzIjoiaHR0cHM6Ly9zYW5kYm94LWF1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE3MTM0NTI0OTcsIm5iZiI6MTcxMzQ0NTI5N30.6mFkWXC2nrdOXt525ilGo7b1pBXOCkxw43KB4nOd4rU";

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
