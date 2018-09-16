
//Il y a 8 questions. Donc un tableau par vehicule.
//A creer une fonction pour storer toutes les questions. 

//Generer le tableau pour chaque vehicule

const donnees = 
{identification: 0, immatriculation: 0, fabricant: 0, modele: 0, sieges: 0, capaciteDeb: 0, portes: 0, acces:0};
console.log(donnees);

//Generer le nombre de vehicule. 
console.log ('Combien de vehicules?');
const inquirer = require('inquirer');
const fs = require ('fs');

const question = 
{type : 'input',
name:'flotte',
};

inquirer.prompt(question).then(function(answers)
 {console.log(answers)});




