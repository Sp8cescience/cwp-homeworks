let words = new string[3];
for (i = 0; i < length(words) - 1; i++) {
    words[i] = prompt("Please enter a word, any word.", "Type your response here.");
    console.log(words[i]);
}
document.getElementById("placeholder").style.visibility=systemON?"‌​visible":"visible";
document.getElementById("placeholder").addEventListener("onclick", function {
    let words2 = words.map(function (word) { 
        return word[word.length - 1] + word.substring(1, (word.length - 2)) + word[0];
    })
    console.log(words2.toString());
})
