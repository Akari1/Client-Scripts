/*
Don't use this script, I'm just colleting snippets
Made by Garma
 */

/*
 * Number of characters as long the name is at least
 * Default: 5
 */
name_min_length  =  5 ;

/*
 * Number of characters of the name is as long maximum
 * Default: 20 (more goes I do not think)
 * /
name_max_length  =  20 ;

/ * 
 * Selection of characters
 * Can be changed as desired, but it should
 * More than 10
 */
characters  =  'abcdefghijklmnopqrstuvwxyz1234567890äöüß' . split ( '' );

/*
 * Interval between two name changes
 * 500ms empfiehlen is there actually
 */
name_change_interval  =  500 ;

/*
 * Interval between 2 automatic reconnects
 * 5000ms (5s) I believe is the maximum, then you will always get kicked (overactive and so)
 */
reconnect_interval  =  5000 ;

/* From here on, please feel nothing */

function Change_Name() {
        var new_string = new Array ();
        var count_to = sys.rand(name_min_length, name_max_length);
        for (var i = 0;  i  <  count_to ;  i + + )  {
                new_string . push ( characters [ sys . rand ( 0 ,  characters . length  -  1 )]);
        }
        client . change name ( new_string . join ( '' ));
}

({

client startup  :  function ()  {
        sys . setTimer ( Change_Name ,  name_change_interval ,  true );
        sys . setTimer ( client . reconnect ,  reconnect_interval ,  true );
}

})
