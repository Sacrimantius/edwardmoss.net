<!DOCTYPE html>
<html>
    <head>
        <title>WebSockets Demonstrator For LFY</title>
    </head>
    <body style="font-family: Lekton; font-size: 24pt">
        <p style="width: 800px">Powered By WebSockets. Use the form below to chat with other Freeformers.</p>
        <div id="chatbox" style="font-size: 14pt; height: 500px; width: 800px; overflow: scroll; border: 1px solid black"></div>
        <form id="conversation" onsubmit="DispatchText()" action="javascript:void(0);">
            <input type="text" id="message" name="message" autocomplete="off" style="width:700px" />
            <input type="submit" id="sub" name="sub" value="Send" style="width:90px" />
        </form>
        <script type="text/javascript">
            var ws = new WebSocket("ws://<?php
                if ( isset( $_SERVER['HTTP_HOST'] ) && strstr( $_SERVER['HTTP_HOST'], 'localhost' ) ) {
                    echo "localhost";
                } else {
                    echo "54.229.156.242";
                }
            ?>:8001/websocket");
            ws.onmessage = function(evt){
                x = document.createElement("p");
                x.innerHTML = evt.data;
                document.getElementById("chatbox").appendChild(x);
                document.getElementById("chatbox").scrollTop = document.getElementById("chatbox").scrollHeight;
                console.log(evt);
                console.log("Test");
            }
 
            function DispatchText(){
                var userInput = document.getElementById("message").value;
                document.getElementById("message").value = "";
                x = document.createElement("p");
                x.innerHTML = "You sent: " + userInput;
                document.getElementById("chatbox").appendChild(x);
                ws.send(userInput);
                document.getElementById("chatbox").scrollTop = document.getElementById("chatbox").scrollHeight;
            }
        </script>
    </body>
</html>