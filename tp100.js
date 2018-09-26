
const fs= require ('fs');
//Fonction pour ajouter un véhicule//

//Fonction pour storer//
const ecrire = function(tableau)
{const written = JSON.stringify(tableau, null, 2);
    fs.writeFile('student.json', written, (err) => {
        if (err) throw err;
        console.log('Tableau ecrit');
        });
};
const ask = function(question)
{const inquirer = require('inquirer'); 
<<<<<<< HEAD
inquirer.prompt(question).then(function (answers)
{console.log(answers)});}
=======
inquirer.prompt(question).then(function(answers)
{ecrire(answers);
    console.log(answers)});};

>>>>>>> 55ae9e14e2cce3ff7254b56100b73bdff183a6bb



//Array de questions//
const var0 =
[
 
    {
        type : 'input',
        name : 'identifiant',
<<<<<<< HEAD
        message : 'Quelle est le numero d_identification  de votre Vehicule',
        validate: function(value) {
            
            var valid = !isNaN(parseFloat(value));
            return valid || "entrer un numéro d'indentification valide";
          },
          filter: Number     

       
=======
        message : 'Quelle est le numero d_identification  de votre Vehicule'   
>>>>>>> 55ae9e14e2cce3ff7254b56100b73bdff183a6bb
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
<<<<<<< HEAD
     
       
=======
>>>>>>> 55ae9e14e2cce3ff7254b56100b73bdff183a6bb

  
];

<<<<<<< HEAD
vehicule1=ask(var0);

//inquirer.prompt(questions).then(answers => {
  //  console.log('\nOrder receipt:');
    //console.log(JSON.stringify(answers, null, '  '));
  //});



=======
veh1=ask(var0);
>>>>>>> 55ae9e14e2cce3ff7254b56100b73bdff183a6bb
