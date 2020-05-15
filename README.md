## Requirements

Node 8 or greater is required.

## Running the project

Assuming you have all the requirements installed, you can setup and run the project by running:

- open terminal
- `cd find-lyrics` go to path
- `npm install` to install the dependencies
- `npm start` to start project
- `npm test` to run test

## Project files

- `Constants.js` data storage
- `Main.js` this is for core function
- `Utils.js` function utils
- `app.js` this is main file will be running

## Problems

Create algorithm OOP implementation is prefered (using pseudo or any language) to recite any line of this lyrics

the horse and the hound and the horn that belonged to
the farmer sowing his corn that kept
the rooster that crowed in the morn that woke
the priest all shaven and shorn that married
the man all tattered and torn that kissed
the maiden all forlorn that milked
the cow with the crumpled horn that tossed
the dog that worried
the cat that killed
the rat that ate
the malt that lay in
the house that Jack built
 
When recite 1
The function will return
"This is the house that Jack built"
 
When recite 2
"This is the malt that lay in the house that Jack built"
 
When recite 12
"This is the horse and the hound and the horn that belonged to the farmer sowing his corn that kept the rooster that crowed in the morn that woke the priest all shaven and shorn that married the man all tattered and torn that kissed the maiden all forlorn that milked the cow with the crumpled horn that tossed the dog that worried the cat that killed the rat that ate the malt that lay in the house that Jack built"

phase 2
a. I want randomize feature
  will return the same result with recite function but don't need any input

b. I want to get only the subject
  will return the same result with recite function but only the subject
  need input parameter
  ex: 1 => this is the house
      2 => this is the malt and the house
      3 => this is the rat, the malt and the house

c. I want to get only the subject but random
  will return the subject, same as previous but don't need any input