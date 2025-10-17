/* 
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

//Creare un array di oggetti
const bicycles = [
  //Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
  {
    name: "BMX",
    weight: 40
  },
  {
    name: "MB",
    weight: 30
  },
  {
    name: "City Bike",
    weight: 20
  },
  {
    name: "Road Bike",
    weight: 10
  },
  {
    name: "Electric Bike",
    weight: 50
  }
]
//Stampo in console l'array per un controllo
console.log(bicycles);


let smallerIndex = 0;
let firstBicycle = bicycles[0];

// - Scorro nell'array di oggetti
for (let i = 0; i < bicycles.length; i++) {
  // - Controllo la proprietà peso dell'oggetto in posizione i
  if(bicycles[i].weight <= firstBicycle.weight){
    //leggera = bicycles[i];
    // - Se è più piccola o uguale
    // - salvo indice bicycles[i] in smallerIndex
    smallerIndex = i;
  } 
}

console.log(smallerIndex);
// - Stampo la bici selezionata
console.log(bicycles[smallerIndex]);
