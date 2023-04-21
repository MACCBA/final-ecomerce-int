function login () {
    var user, password

    user = document.getElementById("userL").value;
    password = document.getElementById("passwordL").value;
   
    if ( user =="Admin" && password == "123456"){
        window.open  ("https://integrador2023.vercel.app/");
    } else {
        alert ("Datos inccorrectos, favor de inentar nuevamente")
    }
};

