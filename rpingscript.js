/* Akari1's RPing Script!
To install them:
Plugins > Plugin Manager > Add Plugin > ClientScripting.dll > Open > Plugins > Script Window > Client Scripts. Copy paste all of this into the box. Press Ok. Profit!
 Type ~spin to do something! The pokemon is random so...good luck trying to get a good one xD
 */
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
 
if (command === "spin") {
sys.stopEvent();
client.network().sendChanMessage(channel, "*** " + client.ownName() + " spins the wheel and gets a... " + sys.pokemon(sys.rand(1, 560)) + "!");
return;
}
}
}
});
