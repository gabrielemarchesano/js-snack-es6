/* 
Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

// Creare un array di oggetti di squadre di calcio.
const teams = [
  // Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
  // Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
  {
    name: "Milan",
    score: 0,
    fouls: 0
  },
  {
    name: "Inter",
    score: 0,
    fouls: 0
  },
  {
    name: "Juventus",
    score: 0,
    fouls: 0
  },
  {
    name: "Napoli",
    score: 0,
    fouls: 0
  }
];

// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// - Math.random()
const randomNumber = () => Math.ceil(Math.random() * 10); 
console.log(randomNumber());
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
const newArray = [];
// - Aggiornare le proprietà degli oggetti
// - Scorro l'array per selezionare l'oggetto
for(let i = 0; i < teams.length; i++){
  //Salvo il singolo oggetto in una variabile
  const team = teams[i];
  // - Aggiorno la proprietà dei punti e dei falli
  team.score = randomNumber();
  team.fouls = randomNumber();
  // - Pusho il nome e i falli nel nuovo array
  newArray.push(teams[i].name, teams[i].fouls)
}
//Stampo l'array per controllare se i valori sono stati aggiornati
console.log(teams);


console.log(newArray);
