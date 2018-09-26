
var fs = require('fs');
var inquirer = require('inquirer'); 

//**Declaration de variables**//

//Question du menu principal//
let var0 = 
    {
        type : 'input',
        name : 'choix',
        message : 'Bienvenue au gestionnaire de bus \n\n\n Voulez-vous ajouter un vehicule? (Taper 1) \n Voulez-vous modifier un vehicule? (Taper 2) \n Voulez-vous retirer un vehicule? (Taper 3)\n\n'   
    };
    //Question d'ajout de vehicule//

let table1 = [];
//**Fonctions**//

let ask = function(question)
{ inquirer.prompt(question).then(function(answers)
    {
        if(answers.choix == 1)
        {ask(var1);}
            
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

let ecrire = function(tableau)
{let  written = JSON.stringify(tableau, null, 2);
    fs.writeFile('student.json', written, (err) => {
        if (err) throw err;
        console.log('Tableau ecrit').ask;
        });
};

let lire = function()
{fs.readFile('student.json', (err,data) => {
    if (err) throw err;
    let student = JSON.parse(data);
    console.log(student);})};


let menu = function(commande)
{
    ask(commande);}
    
let var1 =
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


menu(var0);


