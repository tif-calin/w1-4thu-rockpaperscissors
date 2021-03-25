## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
6) Think about how to validate each of your steps

## Plan
1) create html skeleton
    - three radio options
    - vs question-mark that reveals the computer's choice once button is hit
2) style 
3) create tests and functions
    - `getComputerThrow`
    - `doesUserWin`
4) create javascript game state outline
    - computer's decision
    - stats 
5) use event handlers to update DOM on interactions
    - "Go!" button --> reveals computer's choice and results of the game, updates stats
    - "Reset" button --> computer makes new choice, hides choice until Go is pressed