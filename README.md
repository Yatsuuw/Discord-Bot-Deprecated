# Discord-Bot
Bot Discord polyvalent en version 14.7.0 de l'API DJS soumis au commandes d'application (SlashCommands).

# Fonctionnalités
-> Administration :

          - dbconfig : paramétrer la base de données
          
          - emit : émettre un évènement 
          
          - reload : relancer le bot si lancer sous pm2
          
          - test : exécute un test si le bot fonctionne bien
          
          - update : réinitialise la base de données

-> Modération :

          - ban : exiler un utilisateur du serveur
          
          - clear : effacer un nombre défini de messages
          
          - kick : expulser un utilisateur du serveur
          
          - lock / unlock : bloquer / débloquer un salon textuel
          
          - message : faire passer un message par le bot
          
          - mute / unmute : enlever la parole sur une durée limite à un utilisateur / remettre la parole à un utilisateur
          
          - warn / removeWarn / warings : avertir un utilisateur / retirer un avertissement à un utilisateur / voir les avertissements d'un utilisateur
          
          - slowmode : mettre un cooldown sur l'envoi des messages du salon 

-> Thread : 

          - join : fait rejoindre le bot le thread
          
          - leave : fait quitter du thread le bot
          
          - archive : archive le thread
          
          - unarchive : désarchive le thread
          
          - delete : supprime le thread par l'id du salon original

-> Utils :

          - collector : collecte le nombre de fois qu'un même mot est utilisé pendant 5 secondes
          
          - help : menu d'aide du bot 
          
          - jsdoc : envoie la documentation de Discord.JS
          
          - ping : informe de la latence du bot et de l'API Discord.JS
          
          - result : menu de résultats pour une rencontre
          
          - sondage : posez une question à la communauté. Les réactions sont définies par le nombre de réponses possibles
          
          - version : version actuelle du bot
          
          - welcome : envoie d'un règlement proposé par le bot avec bouton "accepter" et "refuser" avec expulsion automatique si refus.

# Installation

-> Avoir installé au préalable le logiciel Git (https://git-scm.com/downloads)

-> Avoir installé au préalable NodeJS (https://nodejs.org/en/)

-> Ouvrez un terminal de commandes sur votre bureau

-> Entrez la commande : git clone https://github.com/Yatsuuw/Discord-Bot.git

-> Maintenant, toujours dans le même terminal, faites : cd C:\{users}\{user}\desktop\{nom du dossier}

-> Après avoir atterri dans le dossier du bot, faites : npm init

-> Pour terminer, soit vous faites "node .\index", soit "pm2 start .\index" ou "pm2 stop .\index".

# À propos : Licence

-> Licence

            Une copie de la licence doit être fournie avec le code source.
-> Modification

            Chaque fichier modifié doit clairement mentionner le fait qu'il a été modifié.
-> Marques et brevets

            Il doit être fait mention de tous les brevets, marques déposées, copyright et note d'attribution, à l'exception de ceux qui ne concernent pas le
            code que vous distribuez.
-> NOTICE

            Si le code source original contient un fichier NOTICE, il est obligatoire de faire figurer dans votre propre développement une version lisible de ce
            même fichier sous une des formes suivantes :
            
                    -> sous la forme d'un fichier texte NOTICE ;
                    
                    -> dans un écran généré (par l'application) ;
                    
                    -> dans la documentation du code source.

-> Le contenu de ce fichier doit être uniquement à titre informatif et ne doit en aucun cas modifier la licence.

-> Il est bien évidemment autorisé d'ajouter son propre copyright aux modifications ajoutées. Ces modifications peuvent être placées sous la même licence ou
   sous les termes d'une autre licence. Si aucune déclaration explicite n'est incluse, la licence Apache sera la licence régissant les modifications.

-> Cette licence ne donne pas le droit d'utiliser les marques déposées en dehors d'un usage raisonnable lors de la description des origines du logiciel.

-> Une version modifiée ne peut avoir le même nom que le logiciel original.

-> Le nom des auteurs/contributeurs ne peut être utilisé pour promouvoir un produit dérivé. 
