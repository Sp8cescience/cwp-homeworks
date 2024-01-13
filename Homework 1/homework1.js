let words = string[3];
for (i = 0; i < length(words) - 1; i++) {
    words[i] = prompt("Please enter a word, any word.", "Type your response here.");
    document.getElementById("myTextBox" + i).log(words[i]);
}
document.getElementById("submitb").style.visibility=systemON?"‌​visible":"visible";
document.getElementById("submitb").addEventListener("onclick", function () {
    let words2 = words.map(function (word) { 
        return word[word.length - 1] + word.substring(1, (word.length - 2)) + word[0];
    })
    document.getElementById("myTextBox4").log(words2[0]);
    document.getElementById("myTextBox5").log(words2[1]);
    document.getElementById("myTextBox6").log(words2[2]);
})