const ask = function(question)
{const inquirer = require('inquirer'); 
inquirer.prompt(question).then(function(answers)
{console.log(answers)});}

let menu = 0;
//Il y a 8 questions. Donc un tableau par vehicule.
//A creer une fonction pour storer toutes les questions. 
//Generer le tableau pour chaque vehicule
 
//Menu//
console.log('\n\n Bienvenue au gestionnaire de bus \n Voulez-vous \n \n 1-Ajouter un véhicule \n 2-Modifier un véhicule \n 3-Supprimer un véhicule\n\n\n');

//Generer le nombre de vehicule.
const inquirer = require('inquirer'); 

const var1 = 
[{type :'input',
name:'nbveh',
 message: 'La flotte'
}, {type :'input',
name:'imm',
 message: 'La plaque'
},
{type :'input',
name:'fab',
 message: 'Le fabricant'
},
{type :'input',
name:'mod',
 message: 'Le modele'
},
{type :'input',
name:'sieg',
 message: 'Le nombre de sieges'
},{type :'input',
name:'capDeb',
 message: 'La capacite Debout'
},{type :'input',
name:'prts',
 message: 'Le nombre de portes'
},{type :'input',
name:'acc',
 message: 'Le nombre dacces' 
} ];

vehicule = ask(var1);

console.log(vehicule);


//Fonction pour classer

