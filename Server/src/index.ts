/**
 * IMPORTANT: 
 * ---------
 * Do not manually edit this file if you'd like to use Colyseus Arena
 * 
 * If you're self-hosting (without Arena), you can manually instantiate a
 * Colyseus Server as documented here: 👉 https://docs.colyseus.io/server/api/#constructor-options 
 */

 gameServer.define('my_room', MyRoom);


app.get("/", (req, res) => {
    res.send("It's time to kick ass and chew bubblegum!");
});

/**
 * Bind @colyseus/monitor
 * It is recommended to protect this route with a password.
 * Read more: https://docs.colyseus.io/tools/monitor/
 */
app.use("/colyseus", monitor());
// Create and listen on 2567 (or PORT environment variable.)
listen(arenaConfig);