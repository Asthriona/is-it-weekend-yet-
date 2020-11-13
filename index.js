const express = require('express');
const helmet = require('helmet');
const path = require('path');
const app = express();
const port = 1108

app.use(
    helmet({
        contentSecurityPolicy: false,
    })
);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('x-powered-by', 'Asthriona WS');

app.get('/', (req, res) => {
    var d = new Date();
    var n = d.getDay();
    switch (n) {
        case 1:
            var message = `Don't talk to me. I'm depressed.`
            console.log(message)
            break;
        case 2:
            var message = `Meh Not yet.`
            console.log(message)
            break;
        case 3:
            var message = `Middle of the week. hey getting close!`
            console.log(message)
            break;
        case 4:
            var message = `One more day.`
            console.log(message)
            break;
        case 5:
            const ld = new Date();
            const hours = ld.getHours()
            if (hours < 12) {
                var message = `Come on! Last one!`
            } else if (hours >= 12 && hours < 17) {
                var message = `omg... i'm feeling it... LAST RUN!`
            } else if (hours >= 17 && hours < 18) {
                var message = `OH SHIT I'M FEELING IT! HERE WE ARE!`
            } else {
                var message = "YES!!!!!!!!!!"
            }
            console.log(message)
            break;
        default:
            var message = `YES!!!!`
    }
    res.render('index', { time: message })
})

app.listen(port, console.log('RUNNING!'))