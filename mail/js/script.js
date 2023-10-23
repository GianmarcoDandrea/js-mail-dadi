const emailAuthorized = ["vakevi6421@gmail.com" , "gianmarco@gmail.com" , "songoku@gmail.com" , "sayanprince@gmail.com" , "iloveramen@gmail.com" , "doitboy@gmail.com" , "gianluca@gmail.com" ,"olga@gmail.com" , "matteo@gmail.com" , "loris@gmail.com" , "luca@gmail.com" , "virgilio@gmail.com"];

const userEmailElem =  document.getElementById("email");
const sendBtn = document.getElementById("send");

sendBtn.addEventListener("click", function () {

    const userEmail = userEmailElem.value;
    let result = false;

    for (i=0 ; i < emailAuthorized.length ; i++) {
        const curEmail = emailAuthorized[i];
        
        if (curEmail === userEmail) {
            result = true;
        }
    }

    console.log(result);

    let message ="";
    if (result) {
        message = "Puoi accedere al servizio";
    } else {
        message = "Non puoi accedere al servizio"
    }

    console.log(message);

    document.getElementById("final-message").innerHTML = message;

});