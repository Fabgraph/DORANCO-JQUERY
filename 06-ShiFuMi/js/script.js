$(document).ready(function(){
    /*
    1 - L'utilisateur fait un choix : pierre, feuille, ciseaux
    2 - Affichage du choix de l'utilisateur dans le DOM 
    3 - Enregistrer le choix de l'utilisateur (dans une variable) pour pouvoir le comparer
    4 - Choix de l'ordinateur ALEATOIRE ! => "Lancer la partie"
    5 - Affichage du choix de l'ordinateur dans le DOM 
    6 - Comparez le choix de l'utilisateur et l'internaute
    7 - Affichage du résultat (gagné, perdu ou nul)
    8 - Donner la possibiliter de rejouer
    */
    
        //Récupération des éléments du DOM:
        let btnStone = $('img[alt="stone"]');
            //console.log( btnStone );
        let btnPaper = $('img[alt="paper"]');
            //console.log( btnPaper );
        let btnScissors = $('img[alt="scissors"]');
            //console.log( btnScissors );
    
        let btnPlayGame = $('a:first'); //console.log( btnPlayGame );
        let btnReplay = $('a:last'); //console.log( btnReplay );
    
        let userGame = $('article:first'); //console.log( userGame );
        let computerGame = $('article:last'); //console.log( computerGame );
        let result = $('aside'); //console.log( result );
    
        //creation de 2 variables qui vont récupérer le choix de l'utilisateur et de l'ordinateur
        let userChoice;
        let computerChoice;
    
        function clickOnBtn( button, choice ){ //fonction qui attend 2 paramètres : le button cliqué (l'image de pierre, feuille ou ciseaux) ET le choix correspondant (donc : pierre, feuille ou ciseaux)
    
            button.click( function(){ // lorsque je clique sur l'image de mon choix
    
                userChoice = choice; //je stocke le choix correspondant (2è arg) dans la variable userChoice
                    console.log( 'userChoice : '+ userChoice );
    
                userGame.html('<img src="img/' + choice +'.svg" alt="'+ choice +'" >');
                //Ici, je récupère l'article et je lui applique du html
    
                //rend le bouton "lancer la partie" visible
                btnPlayGame.fadeIn();
                    //fadeIn() : permet de rendre un élément visible
            } );
        }
        //appel de la fonction : (ici, le choix correspond au nom des images !!)
        clickOnBtn( btnStone, 'stone' );
        clickOnBtn( btnPaper, 'paper' );
        clickOnBtn( btnScissors, 'scissors' );
    
        //--------------------------------------------------------------------------
        //declaration de la fonction du choix de l'ordinateur :
        function computerBet(){
    
            //declaration d'un tableau avec les 3 choix possibles :
            let computerMemory = ['stone', 'scissors', 'paper'];
                console.log( computerMemory );
            let max = computerMemory.length; //longueur du tableau computerMemory (ici, 3)
    
            //Choix aléatoire de l'ordinateur :
            computerChoice = computerMemory[ Math.floor( Math.random() * max) ];
                //console.log( Math.floor( Math.random() * max ) );
                //Math.floor() : permet d'arrondir à l'entier inférieur
                //Math.random() : permet de retourner un nombre aléatoire compris entre [0:1[ où le 1 est exclus !!!
                console.log('computerChoice : '+ computerChoice );
    
            //affichage du choix de l'ordinateur :
            computerGame.html('<img src="img/'+ computerChoice +'.svg" alt="'+ computerChoice+'" >');
    
            //masquer le bouton "lancer la partie" puis onv a afficher le bouton "rejouer"
            btnPlayGame.fadeOut( function(){
    
                btnReplay.fadeIn();
            })
    
            //comparaison du choix de l'utilisateur et celui de l'ordinateur :
            if( userChoice == 'stone' && computerChoice == 'scissors' ){
    
                //console.log('win');
                result.html('<span class="youWin">YOU WIN</span>');
            }
            else if( userChoice =='paper' && computerChoice == 'stone'){
    
                //console.log('win');
                result.html('<span class="youWin">YOU WIN</span>');
            }
            else if( userChoice == 'scissors' && computerChoice == 'paper'){
    
                //console.log('win');
                result.html('<span class="youWin">YOU WIN</span>');
            }
            else if (userChoice == computerChoice){
    
                //console.log( 'tie');
                result.html('<span class="tie">TIE</span>');
            }
            else{
                //console.log('lose');
                result.html('<span class="youLose">YOU LOSE</span>');
            }
        }
    
        //lancer la fonction computerBet() au click du bouton "Lancer la partie", ici 'btnPlayGame' :
        btnPlayGame.click( function(){
    
            computerBet();
        } );
    
        //Recharger la page en cliquant sur le bouton "rejouer":
        btnReplay.click( function(){
    
            document.location.reload();
        } );
    
    });