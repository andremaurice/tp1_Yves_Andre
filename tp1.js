
//Fonction pour ajouter un véhicule//

const ask = function(question)
{const inquirer = require('inquirer'); 
inquirer.prompt(question).then(function (answers)
{console.log(answers)});}



//Array de questions//
const var0 =
[
 
    {
        type : 'input',
        name : 'identifiant',
        message : 'Quelle est le numero d_identification  de votre Vehicule',
        validate: function(value) {
            
            var valid = !isNaN(parseFloat(value));
            return valid || "entrer un numéro d'indentification valide";
          },
          filter: Number     

       
    },


    
  {
    type : 'input',
    name : 'nombre_de_places_debout',
    message : 'Quelle est le nombre de places debout de votre Vehicule',
    validate: function(value) {
            
        var valid = !isNaN(parseFloat(value));
        return valid || "entrer un nombre de places valide";
      },
      filter: Number              

}, {
    type : 'input',
    name : 'nombre_de_portes',
    message : 'Quelle est le nombre de portes de votre Vehicule',
    validate: function(value) {
            
        var valid = !isNaN(parseFloat(value));
        return valid || "entrer un nombre de portes valide";
      },
      filter: Number   
},  {
    type : 'input',
    name : 'immatriculation',
    message : "Quelle est l'immatriculation de votre Vehicule",
    validate: function(value) {
            
        var valid = !isNaN(parseFloat(value));
        return valid || "entrer un numéro d'immatriculation valide";
      },
      filter: Number  
    },
 {
    type : 'input',
    name : 'fabricant',
    message : 'Quelle est le fabricant de votre Vehicule',
    validate: function(value) {
            
        var valid =isNaN(parseFloat(value));
        return valid || "entrer un nom valide";
      },
      filter: String 
},
{
    type : 'input',
    name : 'modele',
    message : 'Quelle est le modèle de votre Vehicule',
    validate: function(value) {
            
        var valid = isNaN(parseFloat(value));
        return valid || "entrer un modèle valide";
      },
      filter: String  
},
 {
    type : 'input',
    name : 'nombre_de_places_assises',
    message : 'Quelle est le nombre de sièges de votre Vehicule',
    validate: function(value) {
            
        var valid = !isNaN(parseFloat(value));
        return valid || "entrer un nombre de sièges valide";
      },
      filter: Number  
 },
{
    type : 'input',
    name : 'nombre_de_voies_d_acces',
    message : "Quelle est le nombre de voies d'acces de votre Vehicule",
    validate: function(value) {
            
        var valid = !isNaN(parseFloat(value));
        return valid || "entrer un nombre de voies d'accès valide";
      },
      filter: Number  
}
     
       

  
];

vehicule1=ask(var0);

//inquirer.prompt(questions).then(answers => {
  //  console.log('\nOrder receipt:');
    //console.log(JSON.stringify(answers, null, '  '));
  //});



