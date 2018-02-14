// Anagram....from the python data structures course
// My goal is to use the course to reinforce Data Structures and Algorithms
// As a challenge, I am implementing in Javascript and will learn Jest too!
// More specifically, this is node.js as there will be no front-end

// Given two strings, check to see
// if they are anagrams.An anagram is when the two strings can be written using 
// the exact same letters(so you can just rearrange the letters to get a different 
// phrase or word).

// For example:
// "public relations"
// is an anagram of "crap built on lies."
// "clint eastwood"
// is an anagram of "old west action"
// Note: Ignore spaces and capitalization. 
// So "d go"
// is an anagram of "God"
// and "dog"
// and "o d g".

const isAnagram = require('./anagram');

console.log("Anagram Solution....");

function main() {

    let testArray1 = ["Dog", "CAT", "*HOR*se", "bunny", 2, "top", 3, "clint eastwood"];
    let testArray2 = ["god", "catch", "s*h*ore", "noob", "top", 2, 3, "old west action"];

    testArray1.forEach((word, index) => {
        let word2 = testArray2[index];
        if (isAnagram(word, word2)) {
            console.log(`${word} and ${word2} are anagrams!`);
        } else {
            console.log(`${word} and ${word2} are NOT anagrams!`);
        }
    });
}

main();

 