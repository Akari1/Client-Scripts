/* Lols So many snippets */
events = ({
    beforeSendMessage: function (message, channel) {
        var command = "",
            commandData = "",
            index = -1;

        if (message.charAt(0) === "~") {
            command = message.substr(1);
            index = command.indexOf(" ");

            if (index != -1) {
                command = command.substr(0, index);
                commandData = command.substr(index + 1);
            }

            command = command.toLowerCase();
var roll = {
  d4 : function() {
    return Math.floor(Math.random() * (4 - 1 + 1)) + 1;
  },
  d6 : function() {
    return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  },
  d8 : function() {
    return Math.floor(Math.random() * (8 - 1 + 1)) + 1;
  },
  d10 : function() {
    return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  },
  d12 : function() {
    return Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  },
  d20 : function() {
    return Math.floor(Math.random() * (20 - 1 + 1)) + 1;
  }
  },
  if (command === "roll") {
  sys.stopEvent();
  client.printLine("Meowth : " + roll.d20()); //Uh?
  }
  }
  }
  });
