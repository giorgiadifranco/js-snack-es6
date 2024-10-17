//console.log('ciao');


const squadre = [
    {
        nome: 'squadraA' ,
        punti: getRandomNumbers(1, 10),
        falli: getRandomNumbers(1, 10),

        
    },
    {
        nome: 'squadraB',
        punti: getRandomNumbers(1, 10),
        falli: getRandomNumbers(1, 10),

        
    },
    {
        nome: 'squadraC',
        punti: getRandomNumbers(1, 10),
        falli: getRandomNumbers(1, 10),

        
    }

]

console.log(squadre);

//console.log(squadre[i].nome, squadre[i].falli)





function getRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }




//con ciclo for

const newSquadre = [];


    for(let i = 0 ; i < squadre.length ; i++){

        let squadra = squadre[i];
        //console.log(squadra.nome);
        //console.log(squadra.falli);
       

        newSquadre.push({
            nome : squadra.nome,
            falli : squadra.falli
    })
    }
    console.log(newSquadre);
    

        