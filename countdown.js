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
            today = new Date();

            BigDay = new Date("December 25, 2013"); // CHANGE THE DATE TO WHAT YOU WANT!
            msPerDay = 24 * 60 * 60 * 1000;
            timeLeft = (BigDay.getTime() - today.getTime());
            e_daysLeft = timeLeft / msPerDay;
            daysLeft = Math.floor(e_daysLeft);
            e_hrsLeft = (e_daysLeft - daysLeft) * 24;
            hrsLeft = Math.floor(e_hrsLeft);
            minsLeft = Math.floor((e_hrsLeft - hrsLeft) * 60);

            if (command === "countdown") {
                sys.stopEvent();
                client.printHtml("<b>There are only</b><BR> <H4>" + daysLeft + " days " + hrsLeft + " hours and " + minsLeft + " minutes left </H4> <b>Until December 25th 2020</b><P>");
                return;
            }
        }
    }
});
