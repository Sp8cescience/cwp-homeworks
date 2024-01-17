let words = [3];
for (i = 0; i < words.length - 1; i++) {
    words[i] = prompt("Please enter a word, any word.", "Type your response here.");
    document.getElementById("myTextBox" + i).value = words[i];
}
document.getElementById("submitb").style.visibility="visible";
document.getElementById("submitb").addEventListener("onclick", function () {
    document.getElementById("textbox1").style.visbility="hidden";
    document.getElementById("textbox2").style.visibilty="visible";
    let words2 = words.map(function (word) { 
        return word[word.length - 1] + word.substring(1, (word.length - 2)) + word[0];
    })
    document.getElementById("myTextBox4").value = words2[0];
    document.getElementById("myTextBox5").value = words2[1];
    document.getElementById("myTextBox6").value = words2[2];
})