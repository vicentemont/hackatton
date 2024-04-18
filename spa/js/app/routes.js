import diagnosisView from "./views/diagnosisView.js"
export const routes = {
    // film route
    film: {
        hash: "#film", // hash
        controller: "film-controller", // controller
    },
    symptoms: {
        hash: "#symptoms",
        controller: "symptoms-controller",
    },
    diagnosis: {
        hash: "#diagnosis",
        view: diagnosisView,
    },
    home: {
        hash: "#home",
        view: "home-view",
        controller: "home-controller"
    }
};