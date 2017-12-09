//This file is called by the word.js file to display underscores in the word
  //string, or display correct letter choices in the word string.

function Choices(let){
  this.charac = let;
  this.appear = false;
  this.letterRender = function(){
    if (this.appear === false){
      return "_";
    } else {
      return this.charac;
    }
  }  
};

module.exports = Choices;