<img src="https://media.giphy.com/media/xUA7bbaSmCUfNYjhks/giphy.gif">

# Don't push my buttons

Don't push my buttons. Don't touch them. Don't even think about it.

# About

This project is the result of the assignment "The useless web". Visit the site [here](https://dont-push-my-buttons.netlify.app/)!

# Installation

1. Clone this repo and open it with a code-editor.
2. Open the index.html with live-server.
3. Remember to not touch my buttons.

# Code Review

Done by [Sofia Rönnkvist](https://github.com/sofiaronnkvist).

1. `script.js:78-82` - The constant popup with the same scroll-away message is a little repetitive. Maybe different messages would be more fun or a little less sensitive scroll behaviour to activate it.
1. `script.js:69-76` - The math produces numbers for placement that go outside of the screensize, making it scrollable on height and width after a click which places it to far out to the sides. Especially on mobile, with the sensitive scroll on, it makes it hard to click around.
1. `index.html:24-34` - Could you have used classes instead of id's to identify these elements of the page?
1. `index.css` - Great job with breaking out the styling into different files. There's just some old stuff about the linked in font you didn't use left in the index.html and index.css that could be taken out.
1. `index.html` - It's hard remembering to be consistent with naming conventions when switching between js and css, some camelCase has made it in to the index.html file now.

# Testers

Tested by the following people:

1. Linnéa Eriksson
2. Hanna Rosenberg
