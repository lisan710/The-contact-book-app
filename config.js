let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";
let apiKey = checkApiKey();

function checkApiKey(){
    if (!localStorage.getItem("apiKey")){
        window.open("enter-api-key.html", "_self");
    }
    return localStorage.getItem("apiKey");
}

fetch(rootPath + "controller/get-contacts/", {
    headers: {
        "Authorization": apiKey
    }
})
.then(response => response.json())
.then(data => {
    displayOutput(data);
});