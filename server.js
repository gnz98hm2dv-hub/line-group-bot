JavaScript
const
express = require( "express");
const
app = express ();
app. use (express. json()) ;
app.get("/", (req, res) => {
res. send ("LINE Bot is running!");
}) ;
app.post ("/webhook", (req, res) => {
const events = req.body.events || [J;
for (const event of events) {
if (event.type !== "message") continue; if (event.message.type !== "text") continue
const text = event. message.text;
console. 10g ("받은 메시지:"
/
}
text);
res. sendStatus (200);
}) ;
app. listen(process. env.PORT || 3000);
