
var fs = require('fs');
var inquirer = require('inquirer'); 

//**Declaration de variables**//
  //Array de questions d'ajout de vehicule//
let var1 =
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


//Question du menu principal//
let var0 = 
    {
        type : 'input',
        name : 'choix',
        message : 'Bienvenue au gestionnaire de bus \n\n\n Voulez-vous ajouter un vehicule? (Taper 1) \n Voulez-vous modifier un vehicule? (Taper 2) \n Voulez-vous retirer un vehicule? (Taper 3)\n\n'   
    };
  

let table1 = [];

//**Fonctions**//

//Fonction pour storer dans un fichier json//
let ecrire = function()
{let  written = JSON.stringify(tableau, null, 2);
    fs.writeFile('student.json', written, (err) => {
        if (err) throw err;
        console.log('Tableau ecrit');
        });
};

//Fonction pour lire le fichier JSON//
let lire = function()
{fs.readFile('vehicule.json', (err,data) => {
    if (err) throw err;
    let student = JSON.parse(data);
    console.log(student);})};


//Fonction pour saisir des informations pour le menu principal//
let ask = function(question)
{
    
     inquirer.prompt(question).then(function(answers)
    {
        if(answers.choix == 1)
        {ask(var1)
            }
    
            
        else if (answers.choix == 2)
        {ask(var0);
    }
        else if (answers.choix == 3)
        {console.log('Tres bon');
    }
    
        else
        {console.log(answers.choix);
    };
    })};

//Fonction du menu principal//

let menu = function(commande)
{
    ask(commande);}
    


menu(var0);



