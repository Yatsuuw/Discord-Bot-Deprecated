## Discord-Bot
Discord Bot in 14.7.1 version of the DJS API subject to application commands (SlashCommands).

# Features
-> Administration :

          - dbconfig: configure the database
          
          - emit: emit an event 
          
          - reload: restart the bot if running under pm2
          
          - test: run a test if the bot is working well
          
-> Contextual :
         
          - avatar: sends the profile photo of the selected user in the lounge
          
          - userinfo: sends a user’s information under an ephemeral (author of the action only)

-> Moderation :

          - exile: ban a server user
          
          - clear: clear a defined number of messages
          
          - expulse: kick a user from the server
          
          - lock / unlock: block / unlock a text room
          
          - message: send a message through the bot
          
          - mute / unmute: remove speech over a time limit to a user / give speech to a user
          
          - warn / removeWarn / warings: warn a user / remove a warning to a user / see a user’s warnings
          
          - slowmode: put a cooldown on sending messages from the show 

-> Thread : 

          - join: makes the bot join the thread
          
          - leave: leaves the bot from the thread
          
          - archive: archive the thread
          
          - unarchive: unarchive the thread
          
          - delete: removes the thread by the original salon id

-> Utils :

          - collector: collects the number of times the same word is used for 5 seconds
          
          - help: bot help menu 
          
          - jsdoc: sends Discord.JS documentation
          
          - ping: informs about the latency of the bot and the Discord.JS API
          
          - result: menu of results for a meeting
          
          - survey: ask the community a question. Reactions are defined by the number of possible responses
          
          - version: current version of the bot
          
          - welcome: send a regulation proposed by the bot with button "accept" and "refuse" with automatic expulsion if refusal.

# Installation

-> Have Git software installed (https://git-scm.com/downloads)

-> Have pre-installed JsNode (https://nodejs.org/en/)

-> Open an order terminal on your desktop

-> Enter the command: git clone https://github.com/Yatsuuw/Discord-Bot.git

-> Now, still in the same terminal, do: cd C: {users} {user} desktop {folder name}

-> Simply rename the file "a.env.example" to ". env"

-> After landing in the bot folder, do: npm init

-> To finish, either "node .  index", "pm2 start .  index" or "pm2 stop .  index".

# About: License

-> License
            A copy of the license must be provided with the source code.
            
            
-> Modification
            Each modified file must clearly state that it has been modified.
            
            
-> Trademarks and patents
            All patents, trademarks, copyrights and attribution notes must be mentioned, with the exception of those which do not concern the
            code you distribute.
            
            
-> PACKAGE LEAFLET
            If the original source code contains a NOTICE file, it is mandatory to include in your own development a readable version of this
            same file in one of the following forms:
            
                    -> in the form of a NOTICE text file;
                    
                    -> in a generated screen (by the application);
                    
                    -> in the source code documentation.

-> The contents of this file must be for informational purposes only and must not modify the license.

-> It is of course allowed to add its own copyright to the added changes. These modifications may be placed under the same license or
   under the terms of another license. If no explicit statement is included, the Apache license will be the license governing the changes.

-> This license does not give the right to use trademarks outside of reasonable use when describing the origins of the software.

-> A modified version cannot have the same name as the original software.

-> Authors/contributors names cannot be used to promote a derivative. 
