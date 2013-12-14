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
            var now = new Date();

            var days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

            var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');

            var date = ((now.getDate() < 10) ? "0" : "") + now.getDate();

            function fourdigits(number) {
                return (number < 1000) ? number + 1900 : number;
            }
            today = days[now.getDay()] + ", " +
                months[now.getMonth()] + " " +
                date + ", " +
                (fourdigits(now.getYear()));
            if (command === "date") {
                sys.stopEvent();
                client.printLine("DateBot: " + today);
                return;
            }
        }
    }
});
