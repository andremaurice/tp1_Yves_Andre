
const fs= require ('fs');
//Fonction pour ajouter un véhicule//

const ask = function(question)
{const inquirer = require('inquirer'); 
inquirer.prompt(question).then(function(answers)
{console.log(answers)});}


//Fonction pour storer//
const ecrire = function(data)
{let written = JSON.stringify(data);
fs.writeFileSync('tableau.json', data);
}


//Array de questions//
const var0 =
[
 
    {
        type : 'input',
        name : 'identifiant',
        message : 'Quelle est le numero d_identification  de votre Vehicule'   
    },
    
  {
    type : 'input',
    name : 'nombre_de_places_debout',
    message : 'Quelle est le nombre de places debout de votre Vehicule'
}, {
    type : 'input',
    name : 'nombre_de_portes',
    message : 'Quelle est le nombre de portes de votre Vehicule'
},  {
    type : 'input',
    name : 'immatriculation',
    message : 'Quelle est l_immatriculation de votre Vehicule'
},
 {
    type : 'input',
    name : 'fabricant',
    message : 'Quelle est le fabricant de votre Vehicule'
},
{
    type : 'input',
    name : 'modele',
    message : 'Quelle est le modèle de votre Vehicule'
},
 {
    type : 'input',
    name : 'nombre_de_sièges',
    message : 'Quelle est le nombre de sièges de votre Vehicule'
 },
{
    type : 'input',
    name : 'nombre_de_voies_d_acces',
    message : 'Quelle est le nombre de voies d_acces de votre Vehicule'
}

  
];

veh1=ask(var0);

ecrire(veh1);


