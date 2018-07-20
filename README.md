# react-examples

ReactJS application for small examples of components and patterns

Design: Bootstrap 4

Demo: http://ec2-18-222-30-111.us-east-2.compute.amazonaws.com/

# To Do
* Show how many users are connected in the whiteboard
* As users for name when open the whiteboard
* Disable socket when is not in whiteboard page
* Integrate React Theme Context.
* Add User vs User mode in Rock, Paper, Scissors
* ~~Add clean button for whiteboard~~
* ~~Add Computer vs User mode in Rock, Paper, Scissors~~
* ~~Move ports and server info to settings.json~~
* ~~Connect whiteboard with sockeck.io~~
* ~~Fix cursor tracker~~
* ~~Fix cursor position in white board~~ 

# Patterns
### Render Props
Based in example: https://reactjs.org/docs/render-props.html

# Whiteboard
This example was base in `https://socket.io/demos/whiteboard/` adapted to ReactJS

To be able to use streaming of the board clone and run the server:

https://github.com/daru23/express-socket-io

# Settings

`public/settings.json`
```
    {
        "server" : "localhost:9090"
    }
``` 

# Run
```
    npm install
    npm start
```

# Tests
```
    npm test
```
Have fun!

