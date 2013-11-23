/* ======= Akari1's Story Script ======= 
I inculded this in betascripts.js but...This one is more updated.
 */
var script_url = "https://raw.github.com/Akari1/Client-Scripts/master/betascript.js";
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

            if (command === "story") {
                sys.stopEvent();
                client.printLine("*** The adventures of Sho-san ***");
                client.printLine("~p1: Intro");
                client.printLine("~p2: uh?");
                client.printLine("~p3: Long chapter!!!! And Chapter 4 onwards is part of chapter 3 until I say Chapter 3 is easy.");
                client.printLine("~p4: Look up");
                client.printLine("More to come later be sure to update you scripts once in a while!");
                return;
            }
            if (command === "p1") {
                sys.stopEvent();
                client.printLine("*** Sho ***");
                client.printLine("StoryBot: Footsteps echoed in the dark hall. Sho couldn't see anything. Out of the darkness something touched my shoulder. He jumped back and let out a yelp. This was the begining of somethig new... I woke up alarmed. Just a dream I thought, or was it? 'Sho come doen here.' mom called. I got dressed, wearing a uniform to school was boring but going to school in Japan requires it. When I got downstairs I ate breakfast. I got to school, being in 8th grade wasn't so hard. What was hard was trying to get away from a girl who liked me. To me she was a annoying brat. Today I decided to take a shortcut. Anyhow in class something happened. The ligts started flickering on and off. The teacher told us to walk outside to work. I was left behind. As I walked out it was dark like my dream. I knew what was coming so I turned around and found a girl... To be continued...Check back later :)");
                return;
            }
            if (command === "p2") {
                sys.stopEvent();
                client.printLine("*** Sho ***");
                client.printLine("StoryBot: Scared and Skinny described the girl almost perfectly. She looked like she didn't eat for days. She was a year younger than me...or so it looked like it. I weird sensation came over me. I didn't know what it meant but I knew I knew I had to help her. I wondered if my parents could take her in for a while. She introduced herself. I found out the she was in 7th grade and her name was Aria-san. When school was finished I home and told my parents, 'Uh If there was a girl who was lost and needed a temporarly home will you take her in for a while?' They said it would depend on who the girl was and what condition she was in. Sure enough Aria met my parents and they let her stay. This was fortunate because I didnt know where I would've taken her if my parents say no. Another fortunate thing was that it was Christmas break so a month or so off was good.");
                return;
            }
            if (command === "p3") {
                sys.stopEvent();
                client.printLine("*** Sho ***");
                client.printLine("StoryBot: It felt like Aria was effecting me somehow. Her beautiful smile and her ensuring words that make my day brighter. I decided to something fun for once. A festival or something would do. Who knows what I should do. I decided to talk a walk in the park. Easy and simple so off we went. When we got there we didn't say anything. I broke the silence with a stupid comment. 'So..uh...um..' She put the index finger to my lips. I was surprised with this gesture. She leaded towards me but I stopped her. I didn't know why though. It just wasn't the time. 'What's the matter Sho?' Aria asked. 'Nothing' I replied. It was silence from then on until we started walking home. There were so many things in my mind but I couldn't help but noticing her eye and hair were so perfect and smelled of lavander. I snapped myself back to reality. It was harder than every trying to talk to Aria. i didn't know what to say...");
                return;
            }
            if (command === "p4") {
                sys.stopEvent();
                client.printLine("*** Aria ***");
                client.printLine("StoryBot: I was glad Sho took me on a walk because deep inside I loved him. I don't know why though. My heart ached when he held hands with somebody. During the walk he started stuttering. I found this a good time to confess my love for him but the words wouldn't come out. I leaded in closer try to kiss him or something my mind went blank. We walked in silence back home. I tried to let everything sink in. I noticed Sho was looking at me...");
                return;
            }

        }
    }
});
