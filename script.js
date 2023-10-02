//variables globales
const tasaTiempo = ["Anual", "Semestral", "Mensual", "Quincenal", "Semanal"];
const periodoTiempo = ["Años", "Semestre", "Meses", "Quincenas", "Semanas"];
const listaMedidas = [365, 182, 30, 15, 7];

let inputCapital = document.getElementById("monto");
let capitalReset = document.querySelector("monto-reset");

let tasaInput = document.getElementById("tasa");
let tasaSelect = document.getElementById("tasaTiempo");

let interesSelect = document.getElementById("interes");

let periodoInput = document.getElementById("periodo");
let periodoSelect = document.getElementById("periodoTiempo");

let calcButton = document.getElementById("buttonCalc");
let resetButton = document.getElementById("buttonReset");

let resultado = document.getElementById("resultado");

for (let i = 0; i < tasaTiempo.length+1; i++) {
  const opt1 = document.createElement('option');
  if (i == 0) {
    opt1.value = "Selecciona";
    opt1.innerHTML = "Selecciona uno";
  } 
  else {
    opt1.Value = tasaTiempo[i-1];
    opt1.innerHTML = tasaTiempo[i-1];
  }
  const opt2 = opt1.cloneNode(true);
  tasaSelect.appendChild(opt1);
  interesSelect.appendChild(opt2);
}

for (let i = 0; i < periodoTiempo.length+1; i++) {
  const opt = document.createElement('option');
  if (i == 0) {
    opt.value = "Selecciona";
    opt.innerHTML = "Selecciona uno";
  } else {
    opt.value = periodoTiempo[i-1];
    opt.innerHTML = periodoTiempo[i-1];
  }
  periodoSelect.appendChild(opt);
}


// calculador interes submit


resetButton.addEventListener("click", reset);

if (capitalReset) {
  capitalReset.addEventListener("click",()=>inputCapital.value = "");
  };
if(calcButton){
  calcButton.addEventListener("click", CalcularPagoTotal);
}

function CalcularPagoTotal(){

  const valorInicial = inputCapital.value;
  const tasaInteres = tasaInput.value;
  const plazo = periodoInput.value;

  if (tasaSelect.selectedIndex == 0 || 
    interesSelect.selectedIndex == 0 || 
    periodoSelect.selectedIndex == 0) {
        alert("Seleccione alguno \n de los periodos.");
    } 

else{
        const proporcionTasa = listaMedidas[tasaSelect.selectedIndex-1];
        const proporcionInteres = listaMedidas[interesSelect.selectedIndex-1];
        const proporcionPeriodo = listaMedidas[periodoSelect.selectedIndex-1];

  const tasaCapital = (tasaInteres/proporcionTasa) * proporcionInteres;
  const plazosCapital = (plazo*proporcionPeriodo) / proporcionInteres;

  let resultado = valorInicial * 
  Math.pow((1+(tasaCapital/100)),plazosCapital);

 

resultado.value = resultado.toLocaleString('en-US');
console.log(resultado);
}
}

function reset() {
  inputCapital.value = ""
  tasaInput.value = ""
  tasaSelect.firstChild.selected = true
  interesSelect.firstChild.selected = true
  periodoInput.value = ""
  periodoSelect.firstChild.selected = true
  resultado.value = ""
}


