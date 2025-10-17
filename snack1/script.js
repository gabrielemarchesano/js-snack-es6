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
    weight: 20
  },
  
  {
    name: "MB",
    weight: 30
  }
]

//Stampare a schermo la bici con peso minore
// - Scorro nell'array di oggetti
// - Controllo la proprietà peso dell'oggetto in posizione i
  // - Se è più piccola
    // - Stampo la bici selezionata
  // - Altrimenti
    // - Stampo l'altra
