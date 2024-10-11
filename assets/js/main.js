console.log('ciao');

const bici = [
    {
        nome: 'triban',
        peso: 11.25

},
{
    nome: 'Van Rysel EDR 920 CF ULTEGRA ',
    peso: 7.28

},    {
    nome: 'VAN RYSEL NCR CF SHIMANO TIAGRA',
    peso: 9

},    {
    nome: 'NCR AF',
    peso: 10

},    {
    nome: 'Triban RC 100',
    peso: 11.3

},    {
    nome: 'RCR RIVAL AXS ROUTE ZIPP 303',
    peso: 8.5

}
];

function biciPesominore (){
let pesoMedio = 0

for (let i = 0 ; i <bici.length; i++){

    const bicicletta = bici[i];

    pesoMedio+= bicicletta.peso/6

    if(bici[i].peso < pesoMedio){

        console.log(bicicletta.peso);
        
     }
    



} //console.log(pesoMedio);

 


}

//console.log(biciPesominore())

