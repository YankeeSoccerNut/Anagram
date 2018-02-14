function isAnagram (s1, s2) {

    // Function only works with strings...
    if ((typeof (s1) != "string") || 
    (typeof (s2) != "string")) { 
        return(false);
    }
    
    // At this point we have 2 strings.  There may be embedded spaces
    // or punctuations.  Use case insensitive regex match and convert the result to 
    // lowercase.  Then look at a few different approaches to deterimining Anagram-ness.

    // match returns an array of matching sequences...convert to string after join
    // note:  join with "" mashes all the elments together...no separators
    // https://regex101.com/ was very handy and helpful
    let s1Matches = s1.match(/[a-zA-Z]+/g);
    let s2Matches = s2.match(/[a-zA-Z]+/g);

    if ((s1Matches == null) || (s2Matches == null)){
        return false;
    };

    let newS1 = s1Matches.join("").toString().toLowerCase();
    let newS2 = s2Matches.join("").toString().toLowerCase();

    // unsafe to try to access characters in string as an array so convert to array...
    // and might as well sort the chars
    let sortedS1Array = newS1.split("").sort();
    let sortedS2Array = newS2.split("").sort();

    // it's possible that the extraction results in different length strings...no anagram!
    if (sortedS1Array.length != sortedS2Array.length){
        return false;
    };
    
    // taking advantage of index and functional scope
    // return true only on all match, false otherwise
    return (sortedS1Array.every((ele,index) => {
        return(ele === sortedS2Array[index]);
    }));
}

module.exports = isAnagram;