// Find the length of the longest word in a sentence
function findLongestWord(sentence) {
// Split the sentence into an array of words
    var words = sentence.split('');
  
// Initialize the longest word length to 0
    var longestWordLength = 0;

// Iterate through the array of words
    for (var i = 0; i < words.length; i++) {
// Get the current word
    var currentWord = words[i];
  
// Check if the length of the current word is greater than the longest word length
    if (currentWord.length > longestWordLength) {
// Update the longest word length
        longestWordLength = currentWord.length;
    }
  }
  
// Return the length of the longest word
    return longestWordLength;
}
  
// Example sentences
var sentence1 = "The quick brown fox jumped over the lazy dog";
var sentence2 = "May the force be with you";
  
// Find the length of the longest word in the example sentences
var longest1 = findLongestWord(sentence1);
var longest2 = findLongestWord(sentence2);
  
// Results
console.log(longest1); // Should return 6
console.log(longest2); // Should return 5