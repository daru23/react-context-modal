export const getSettings = function () {
    return new Promise((resolve, reject) => {
        // TODO - this approach is not compatible with EDGE and IE browsers
        let origin = window.location.origin;
        fetch(origin + "/settings.json").then(function (response) {
            response.json().then(function (settings) {
                resolve(settings)
            }).catch(err => {reject("Error while parsing settings.json", err)})

        }).catch(err => {reject("There is not settings.json in this project!", err)});
    })
};