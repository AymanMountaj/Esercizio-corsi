window.addEventListener('load', init);

function init(){
    localStorage.clear()
    document.getElementById('entra').addEventListener('click', login);
}

function login(){
    let userEmail = document.getElementById('userEmail').value;
    let userPassword = document.getElementById('userPassword').value;
    let emailRegex = /\S+@\S+\.\S+/;
    let passwordRegex = /^(?=.*[0-9])/;
    let semaforo = true;

    /* ***********CONTROLLO PASSWORD*********** */
    if(userPassword.length < 6) {
        document.getElementById('errore-pass').innerHTML = "La passoword deve contenere 6 caratteri!";
        semaforo = false;
    } else if (!passwordRegex.test(userPassword)){
        document.getElementById('errore-pass').innerHTML = "La password deve contenere almeno un numero!"
        semaforo = false;
    } else {
        document.getElementById('errore-pass').innerHTML = ""
    }

    /* *********CONTROLLO EMAIL************* */
    if(userEmail == ''){
        document.getElementById('errore-mail').innerHTML = 'Email non valida';
        semaforo = false
    } else if(!emailRegex.test(userEmail)) {
        document.getElementById('errore-mail').innerHTML = 'Email non valida';
        semaforo = false
    } else {
        document.getElementById('errore-mail').innerHTML = ''
        localStorage.setItem('user', userEmail)
    }

    /* ********SE TUTTO VA A BUON FINE********* */
    if(semaforo === true){
        nascondi()
    }
    
}
function nascondi(){

    document.querySelector('.contenitore').style.display = 'none';
    document.querySelector('h1').style.display = 'none';
    progressBarr() 

}

function progressBarr(){
    document.querySelector('.progress').style.display = 'flex';
    let barra = document.getElementById('bar');
    
    let larghezza = 1;
    let intervallo = setInterval(caricamento, 25);
    


    function caricamento(){
        if(larghezza > 300){
            clearInterval(intervallo);
            location.href = 'corsi.html'
        } else {
            larghezza++
            barra.style.width = larghezza + 'px';

        }
    }
} 