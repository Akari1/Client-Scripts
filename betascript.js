/* Akari1's Client Script! Type ~help to get started 
 The script is buggy and some commands don't work*/
var script_url = "https://raw.github.com/Silone1/Client-Scripts/master/betascript.js";
events = ({
      beforeSendMessage: function(message, channel) {
          var command = "",
              commandData = "",
              index = -1;
 
          if (message.charAt(0) === "~") {
              command = message.substr(1);
              index   = command.indexOf(" ");
 
              if (index != -1) {
                  command     = command.substr(0, index);
                  commandData = command.substr(index + 1);
              }
 
              command = command.toLowerCase();
                          if (command === "reconnect") {
                          sys.stopEvent();
                          client.reconnect();
                          return;
                          }
                          if (command === "buildteam") {
                          sys.stopEvent();
                          client.openTeamBuilder();
                          return;
                          }
                          if (command === "loadteam") {
                          sys.stopEvent();
                          client.loadTeam();
                          return;
                          }
                          if (command === "register") {
                          sys.stopEvent();
                          client.sendRegister();
                          return;
                          }
                          if (command === "puns") {
                          sys.stopEvent();
                          client.printLine("*** Puns ***");
                          client.printLine("1.  I'm reading a book about anti-gravity. It's impossible to put down. Tori -");
                          client.printLine("2.  Did you hear about the guy whose whole left side was cut off? He's all right now.");
                          client.printLine("3.  I wondered why the baseball was getting bigger. Then it hit me.");
                          client.printLine("4.  I'm glad I know sign language, it's pretty handy.");
                          client.printLine("6.  I couldn't quite remember how to throw a boomerang, but eventually it came back to me.");
                          return;
                          }
                          if (command === "spam") {
                          sys.stopEvent();
                          client.printLine("sssssssssssssssssssssssssssssssssssssppppppppppppppppppppppppppppppppppppppaaaaaaaaaaaaaaaaaaaaaaaaaaaaaammmmmmmmmmmmmmmmmmmmmmmmmmmmmmm!!!!!!!!!!!!!!!!!!!!!!!!!!");
                          return;
                          }
                          if (command === "trivia") {
                          sys.stopEvent();
                          client.printLine("*** Trivia ***");
                          client.printLine("1. What is 1+1?");
                          client.printLine("A. 2");
                          client.printLine("B. 11");
                          client.printLine("C. 22");
                          client.printLine("D. 1");
                          client.printLine("Please choose a number, not letter.");
                          client.printLine("Points: 0");
                          return;
                          }
                          if (command === "2") {
                          sys.stopEvent();
                          client.printLine("You are correct!");
                          client.printLine("Now type ~next1");
                          client.printLine("Points: 1");
                          return;
                          }
                          if (command === "11") {
                          sys.stopEvent();
                          client.printLine("Sorry you are wrong. Please try again.");
                          client.printLine("Points: 0");
                          return;
                          }
                          if (command === "22") {
                          sys.stopEvent();
                          client.printLine("Sorry you are wrong. Please try again.");
                          client.printLine("Points: 0");
                          return;
                          }
                          if (command === "1") {
                          sys.stopEvent();
                          client.printLine("Sorry you are wrong. Please try again.");
                          client.printLine("Points: 0");
                          return;
                          }
                          if (command === "next1") {
                          sys.stopEvent();
                          client.printLine("2. Silone is cool.");
                          client.printLine("A. True");
                          client.printLine("B. False");
                          client.printLine("Points: 1");
                          return;
                          }
                          if (command === "true") {
                          sys.stopEvent();
                          client.printLine("You are correct!");
                          client.printLine("Type ~next2 to move on");
                          client.printLine("Points: 2");
                          return;
                          }
                          if (command === "false") {
                          client.printLine("Sorry you are wrong. Please try again.");
                          client.printLine(~"Points: 1");
                          return;
                          }
                          if (command === "next2") {
                          sys.stopEvent();
                          client.printLine("3. What are the HP basestats for Paras?");
                          client.printLine("A. 70");
                          client.printLine("B. 55");
                          client.printLine("C. 35");
                          client.printLine("Points: 2");
                          return;
                          }
                          if (command === "70") {
                          sys.stopEvent();
                          client.printLine("Sorry you are wrong. Please try again.");
                          client.printLine("Points: 2");
                          return;
                          }
                          if (command === "55") {
                          sys.stopEvent();
                          client.printLine("Sorry you are wrong. Please try again");
                          client.printLine("Points: 2");
                          return;
                          }
                          if (command === "35") {
                          sys.stopEvent();
                          client.printLine("You are correct!");
                          client.printLine("Type ~done to move on.");
                          client.printLine("Points: 3");
                          return;
                          }
                          if (command === "done") {
                          sys.stopEvent();
                          client.printLine("CONGRATS! You win!");
                          return;
                          }
                          if (command === "story") {
                          sys.stopEvent();
                          client.printLine("*** The adventures of Sho-san ***");
                          client.printLine("~p1: Intro");
                          client.printLine("~p2: uh?");
                          client.printLine("More to come later be sure to update you scripts once in a while!");
                          return;
                          }
                          if (command === "p1") {
                          sys.stopEvent();
                          client.printLine("Footsteps echoed in the dark hall. Sho couldn't see anything. Out of the darkness something touched my shoulder. He jumped back and let out a yelp. This was the begining of somethig new... I woke up alarmed. Just a dream I thought, or was it? 'Sho come doen here.' mom called. I got dressed, wearing a uniform to school was boring but going to school in Japan requires it. When I got downstairs I ate breakfast. I got to school, being in 8th grade wasn't so hard. What was hard was trying to get away from a girl who liked me. To me she was a annoying brat. Today I decided to take a shortcut. Anyhow in class something happened. The ligts started flickering on and off. The teacher told us to walk outside to work. I was left behind. As I walked out it was dark like my dream. I knew what was coming so I turned around and found a girl... To be continued...Check back later :)");
                          return;
                          }
                          if (command === "p2") {
                          sys.stopEvent();
                          client.printLine("Scared and Skinny described the girl almost perfectly. She looked like she didn't eat for days. She was a year younger than me...or so it looked like it. I weird sensation came over me. I didn't know what it meant but I knew I knew I had to help her. I wondered if my parents could take her in for a while. She introduced herself. I found out the she was in 7th grade and her name was Aria-san. When school was finished I home and told my parents, 'Uh If there was a girl who was lost and needed a temporarly home will you take her in for a while?' They said it would depend on who the girl was and what condition she was in. Sure enough Aria met my parents and they let her stay. This was fortunate because I didnt know where I would've taken her if my parents say no. Another fortunate thing was that it was Christmas break so a month or so off was good.");
                          return;
                          }
                          if (command === "findbattle") {
                          sys.stopEvent();
                          client.openBattleFinder();
                          return;
                          }
                          if (command === "attack") {
                          sys.stopEvent();
                          client.printLine("Auth was walking home and you took his/her money, punched him/her in the face. HAHAHA :D");
                          return;
                                                  }
                                                  if (command === "time") {
                                                  sys.stopEvent();
                                                  client.printLine("Time in seconds since Jan. 1, 1070 is " + sys.time());
                          }
                          if (command === "help") {
                          sys.stopEvent();
                          client.printLine("*** Client Commands ***");
                          client.printLine("~reconnect: reconnect to a server if you are lagging.");
                          client.printLine("~register: registers on a server. Same as the register button.");
                          client.printLine("~findbattle: opens find battle window.");
                          client.printLine("~buildteam: opens team builder");
                          client.printLine("~attack: Attack auth LOL.");
                          client.printLine("~logoff: makes you return to the server list.");
                          client.printLine("~version: Check your current Pokemon Online version. Will not always work.");
                          client.printLine("~osname: Shows yourOS client name. Returns windows, linux, mac.");
                          client.printLine("~trivia: To play a a little trivia :)");
                          client.printLine("~puns: See and read some puns");
                          client.printLine("~spam: Spams for you. But only you can see it so :(");
                          client.printLine("~story: to see my story I'm writing but its not completly finished.");
                          client.printLine("~soundconfig: opens sound config video");
                          client.printLine("~tiers: View the current tiers.");
                                                  client.printLine("~time: Shows time in seconds since Jan. 1, 1070");
                          client.printLine("*** End of Commands ***");
                          return;
                          }
                          if (command === "soundconfig") {
                          sys.stopEvent();
                          client.openSoundConfig();
                          return;
                          }
                          if (command === "tiers") {
                          sys.stopEvent();
                          client.printLine("The tiers are: " + client.getTierList());
                          return;
                          }
                          if (command === "hi") {
                          sys.stopEvent();
                          for (var i = 1; i < 2; i++) {
                          client.network().sendChanMessage(channel, "Silone for scum. Lynch him plz. Im serious lol");
                          return;
                          }
                          if (command === "osname") {
                          sys.stopEvent();
                          client.printLine(sys.os());
                          return;
                          }
                          if (command === "version") {
                          sys.stopEvent();
                          sys.version();
                          client.printLine(sys.version());
                          return;
}
}
}
}
  })
