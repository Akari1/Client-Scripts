//Warning:Players Spamming will cause you to go OA. You cant recive Pms using this script.
var game = {};
poScript = ({
        beforePMReceived: function(id, message) {
                message = message.toLowerCase();
                if (game[id] === undefined) {
                        game[id] = {};
                        client.network().sendPM(id, "You're walking through the forest, minding your own business, and you run into a troll! Do you FIGHT him, PAY him, or RUN?");
                        sys.stopEvent();
                        return;
                }
                if (game[id] !== undefined && game[id].response === undefined) {
                        switch (message) {
                                case "fight":
                                        game[id].response = "fight";
                                        client.network().sendPM(id, "How courageous! Are you strong (YES or NO)?");
                                        sys.stopEvent();
                                        break;
                                case "pay":
                                        game[id].response = "pay";
                                        client.network().sendPM(id, "All right, we'll pay the troll. Do you have any money (YES or NO)?");
                                        sys.stopEvent();
                                        break;
                                case "run":
                                        game[id].response = "run";
                                        client.network().sendPM(id, "Let's book it! Are you fast (YES or NO)?");
                                        sys.stopEvent();
                                        break;
                                default:
                                        client.network().sendPM(id, "I didn't understand your choice. Try again, this time picking FIGHT, PAY, or RUN!");
                                        sys.stopEvent();
                        }
                } else if (game[id].response == "fight") {
                        if (game[id].strong === undefined) {
                                game[id].strong = message;
                                client.network().sendPM(id, "Are you smart?");
                                sys.stopEvent();
                        } else {
                                if (game[id].strong == "yes" || message == "yes") {
                                        client.network().sendPM(id, "You only need one of the two! You beat the troll--nice work!");
                                        delete game[id];
                                        sys.stopEvent();
                                } else {
                                        client.network().sendPM(id, "You're not strong OR smart? Well, if you were smarter, you probably wouldn't have tried to fight a troll. You lose!");
                                        delete game[id];
                                        sys.stopEvent();
                                }
                        }
                } else if (game[id].response == "pay") {
                        if (game[id].money === undefined) {
                                game[id].money = message;
                                client.network().sendPM(id, "Is your money in Troll Dollars?");
                                sys.stopEvent();
                        } else {
                                if (game[id].money == "yes" && message == "yes") {
                                        client.network().sendPM(id, "Great! You pay the troll and continue on your merry way.");
                                        delete game[id];
                                        sys.stopEvent();
                                } else {
                                        client.network().sendPM(id, "Dang! This troll only takes Troll Dollars. You get whomped!");
                                        delete game[id];
                                        sys.stopEvent();
                                }
                        }
                } else if (game[id].response == "run") {
                        if (game[id].fast === undefined) {
                                game[id].fast = message;
                                client.network().sendPM(id, "Did you get a head start?");
                                sys.stopEvent();
                        } else {
                                if (game[id].fast == "yes" || message == "yes") {
                                        client.network().sendPM(id, "You got away--barely! You live to stroll through the forest another day.");
                                        delete game[id];
                                        sys.stopEvent();
                                } else {
                                        client.network().sendPM(id, "You're not fast and you didn't get a head start? You never had a chance! The troll eats you.");
                                        delete game[id];
                                        sys.stopEvent();
                                }
                        }
                }
        }
});
