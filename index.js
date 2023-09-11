
let capital = prompt("capital");
let porcentage = prompt("ingresa el porcentage");
let meses = prompt("ingresa los meses");
let intereses
let interesYCapital;
let total;
let final = 0;
for (let i = 0; i < parseInt(meses); i++) {
  intereses = parseInt(capital) * parseInt(porcentage) / 100;
  interesYCapital = parseInt(intereses) + parseInt(capital);
  total = (parseInt(capital) + parseInt(interesYCapital) +
    parseInt(capital) * parseInt(porcentage) / 100);
  final += total;
}

console.log(plan.calcular(total))

  
