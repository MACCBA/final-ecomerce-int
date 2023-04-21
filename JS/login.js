
document.getElementById ("btn-inSesiion").addEventListener("click",sesion);
document.getElementById ("btn-inRegister").addEventListener("click", register);
window.addEventListener("resize", widthPage);

 var container = document.getElementById ("contCard");
 var formLogin = document.getElementById ("logCard");
 var formRegist = document.getElementById ("regCard");
 var boxLog = document.getElementById ("cardLog");
 var boxReg = document.getElementById ("cardReg");

 function widthPage (){
    if (window.innerWidth > 850){
        boxLog.style.display = "block";
        boxReg.style.display = "block";
    }else{
        boxReg.style.display = "block";
        boxReg.style.opacity = "1";
        boxLog.style.display = "none";
        formLogin.style.display = "block";
        formRegist.style.display = "none";
        container.style.left = "0px";
    }
 }

 widthPage();

 function sesion () {
    if (window.innerWidth > 850){
    formRegist.style.display ="none"; 
    container.style.left = "10px";
    formLogin.style.display = "block";
    boxReg.style.opacity = "1";
    boxLog.style.opacity ="0"; 
    } else {
        formRegist.style.display ="none"; 
    container.style.left = "0px";
    formLogin.style.display = "block";
    boxReg.style.display = "block";
    boxLog.style.display ="none"; 
  }
}

 function register () {
    if (window.innerWidth > 850){
    formRegist.style.display ="block"; 
    container.style.left = "410px";
    formLogin.style.display = "none";
    boxReg.style.opacity = "0";
    boxLog.style.opacity ="1"; 
 } else {
    formRegist.style.display ="block"; 
    container.style.left = "0px";
    formLogin.style.display = "none";
    boxReg.style.display = "none";
    boxLog.style.display = "block"; 
    boxLog.style.opacity ="1";
 }
}
