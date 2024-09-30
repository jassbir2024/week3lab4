const array0 = [1, 4, 9, 16];
// Pass a function to map
const map0 = array0.map(function(x) 
{return x * 3});
console.log(map0);
const sentences = ["Hello World", "How are you?", "I am fine."];
const words = sentences.map(function(sentence) {
  return sentence.split(" ");
});
console.log(words);