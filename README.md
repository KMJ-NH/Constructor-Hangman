# Constructor-Hangman
This is the homework assignment for the Advanced Javascript classes on constructors. It runs from the command line in Node.js.

The focus of the assignment is on constructor functions. The following constructor functions were required:

Word: Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.

Letter: Used for each letter in the current word. Each letter object should either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed a letter. This should contain letter specific logic and data.

The user has a defined number of guesses, which are decremented with every incorrect guess. When there are no remaining guesses, and the word was not completed, the game ends.

Each constructor function is in its own file, is exported, and required in the appropriate file.