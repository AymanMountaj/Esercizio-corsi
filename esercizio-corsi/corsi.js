class Corso {
    titolo;
    descrizione;
    durata;
    argomento1;
    argomento2;
    argomento3;
    argomento4;
    argomento5;
    constructor(_titolo, _descrizione, _durata, _argomento1, _argomento2, _argomento3, _argomento4, _argomento5){
        this.titolo = _titolo;
        this.descrizione = _descrizione;
        this.durata = _durata;
        this.argomento1 = _argomento1;
        this.argomento2 = _argomento2;
        this.argomento3 = _argomento3;
        this.argomento4 = _argomento4;
        this.argomento5 = _argomento5;
    }
}

window.addEventListener('load', init);

function init(){
    let email = localStorage.getItem('user');
    document.getElementById('utente').innerHTML = `Benvenuto ${email}`;
    esempioCorsi();
}

let argomenti = ['Html', 'Css', 'Sass', 'Javascript', 'Jquery', 'Typescript', 'Angular'];
let corsoBtn = document.getElementById('crea');
stampaArgomenti()

function esempioCorsi(){
    let corso1 = new Corso('Front-End Development', 'Impara a programmare lato client', '3 mesi', 'Html', 'Css', 'javascript', 'Typescript', 'Angular');
    let corso2 = new Corso('Back-End Development', 'Impara a programmare lato server', '3 mesi', 'Java', 'Php', 'MySql', 'MongoDb', 'Spring');
    let corso3 = new Corso('Full-Stack Development', 'Impara a programmare di tutto', '3 mesi', 'Html', 'Css', 'Javascript', 'Php', 'MySql');
    document.getElementById('corso1').innerHTML = ` <div class="card" style="width: 18rem;">
                                                        <div class="card-body">
                                                          <h5 class="card-title">${corso1.titolo}</h5>
                                                          <p class="card-text">${corso1.descrizione}</p>
                                                          <p class="card-text">${corso1.durata}</p>
                                                        </div>
                                                        <ul class="list-group list-group-flush">
                                                          <li class="list-group-item">${corso1.argomento1}</li>
                                                          <li class="list-group-item">${corso1.argomento2}</li>
                                                          <li class="list-group-item">${corso1.argomento3}</li>
                                                          <li class="list-group-item">${corso1.argomento4}</li>
                                                          <li class="list-group-item">${corso1.argomento5}</li>
                                                        </ul>
                                                    </div>`;
    
    document.getElementById('corso2').innerHTML = ` <div class="card" style="width: 18rem;">
                                                        <div class="card-body">
                                                          <h5 class="card-title">${corso2.titolo}</h5>
                                                          <p class="card-text">${corso2.descrizione}</p>
                                                          <p class="card-text">${corso2.durata}</p>
                                                        </div>
                                                        <ul class="list-group list-group-flush">
                                                          <li class="list-group-item">${corso2.argomento1}</li>
                                                          <li class="list-group-item">${corso2.argomento2}</li>
                                                          <li class="list-group-item">${corso2.argomento3}</li>
                                                          <li class="list-group-item">${corso2.argomento4}</li>
                                                          <li class="list-group-item">${corso2.argomento5}</li>
                                                        </ul>
                                                    </div>`; 
    
    document.getElementById('corso3').innerHTML =` <div class="card" style="width: 18rem;">
                                                    <div class="card-body">
                                                      <h5 class="card-title">${corso3.titolo}</h5>
                                                      <p class="card-text">${corso3.descrizione}</p>
                                                      <p class="card-text">${corso3.durata}</p>
                                                    </div>
                                                    <ul class="list-group list-group-flush">
                                                      <li class="list-group-item">${corso3.argomento1}</li>
                                                      <li class="list-group-item">${corso3.argomento2}</li>
                                                      <li class="list-group-item">${corso3.argomento3}</li>
                                                      <li class="list-group-item">${corso3.argomento4}</li>
                                                      <li class="list-group-item">${corso3.argomento5}</li>
                                                    </ul>
                                                   </div>`;
    
}

function stampaArgomenti(){
  let combo1 = document.getElementById('combo1');
  let combo2 = document.getElementById('combo2');
  let combo3 = document.getElementById('combo3');

  for(i = 0; i < argomenti.length; i++){
    combo1.innerHTML += `<option value="${i}">${argomenti[i]}</option>`;
    combo2.innerHTML += `<option value="${i}">${argomenti[i]}</option>`;
    combo3.innerHTML += `<option value="${i}">${argomenti[i]}</option>`;
    /* console.log(elenco[i]) */
  }
}

corsoBtn.addEventListener('click', function(){
  let newCorso = new Corso();
  let titoloCorso = document.getElementById('titoloCorso').value;
  let descrizioneCorso = document.getElementById('descrizioneCorso').value;
  let durataCorso = document.getElementById('durataCorso').value;
  let argomentoPrimo = document.getElementById('combo1').selectedIndex;
  let argomentoSecondo = document.getElementById('combo2').selectedIndex;
  let argomentoTerzo = document.getElementById('combo3').selectedIndex;

  let semaforo = true;
  
  if(titoloCorso == "") {
    document.getElementById('errore-titolo').innerHTML = 'Inserisci un titolo';
    semaforo = false;
  } else {
    document.getElementById('errore-titolo').innerHTML = '';
    newCorso.titolo = titoloCorso;
  }

  if(descrizioneCorso == "") {
    document.getElementById('errore-descrizione').innerHTML = 'Inserisci una descrizione';
    semaforo = false;
  } else {
    document.getElementById('errore-descrizione').innerHTML = '';
    newCorso.descrizione = descrizioneCorso;
  }

  if(durataCorso == "") {
    document.getElementById('errore-durata').innerHTML = 'Inserisci una durata';
    semaforo = false;
  } else {
    document.getElementById('errore-durata').innerHTML = '';
    newCorso.durata = durataCorso;
  }

  if(argomentoPrimo == '') {
    document.getElementById('errore-combo1').innerHTML = 'Sleziona almeno un argomento';
    semaforo = false;
  } else {
    document.getElementById('errore-combo1').innerHTML = '';
    newCorso.argomento1 = argomenti[argomentoPrimo - 1];
  }
  if(argomentoSecondo == undefined){
    newCorso.argomento2 = argomenti[argomentoSecondo - 1];
  } else {
    newCorso.argomento2 = '';
  }
  if(argomentoTerzo == undefined){
    newCorso.argomento3 = argomenti[argomentoTerzo - 1];
  } else {
    newCorso.argomento3 = '';
  }

  /* newCorso.argomento2 = argomenti[argomentoSecondo - 1];
  newCorso.argomento3 = argomenti[argomentoTerzo - 1]; */
  newCorso.argomento4 = '';
  newCorso.argomento5 = '';
  if(semaforo == true){
    document.getElementById('mostraCorso').innerHTML += `<div class="col-md-4 mt-4">
                                                        <div class="card" style="width: 18rem;">
                                                        <div class="card-body">
                                                          <h5 class="card-title text-success">Corso creato da: ${localStorage.getItem('user')}</h5>
                                                          <h5 class="card-title">Titolo: ${newCorso.titolo}</h5>
                                                          <p class="card-text">Descrizione: ${newCorso.descrizione}</p>
                                                          <p class="card-text">Durata ${newCorso.durata}</p>
                                                          <p class="card-text text-center">Argomenti</p>
                                                        </div>
                                                        <ul class="list-group list-group-flush">
                                                          <li class="list-group-item">${newCorso.argomento1}</li>
                                                          <li class="list-group-item">${newCorso.argomento2}</li>
                                                          <li class="list-group-item">${newCorso.argomento3}</li>
                                                          <li class="list-group-item">${newCorso.argomento4}</li>
                                                          <li class="list-group-item">${newCorso.argomento5}</li>
                                                        </ul>
                                                        </div>
                                                      </div>`;
  }
  
});
