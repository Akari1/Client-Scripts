/* --- ANTI LADDER SCRIPTS!!! :3  --- */
// This goes into script window > Client Scripts
({

clientStartUp : function() {
  sys.setTimer(function() {
    client.openBattleFinder();
  }, 6000, true);
},

afterChallengeReceived : function(challenge_id) {
        client.acceptChallenge(challenge_id);
}

})
// End of Client Script
/* --- This goes into Battle Scripts --- */

({

onSendOut : function() {
        battle.forfeit();
}

})
//End of battle scripts
// Created by Garma
