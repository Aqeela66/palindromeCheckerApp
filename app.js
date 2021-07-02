
function palindrome() {
    let inputWord = document.querySelector("input").value;
    console.log(inputWord);
    let reverseWord = "";
    for (let i = inputWord.length - 1; i >= 0; i--) {
        reverseWord = reverseWord + inputWord[i];
    }
    if (inputWord == reverseWord) {
        var result = document.querySelector('p').innerHTML = "Oh yes, given word is a palindrome";
        var result2 = result.bold();
        document.querySelector("#form").innerHTML = result2;
        document.querySelector('#form').style.color = "green";
    }
    else {
        var result = document.querySelector('#form').innerHTML = "❌ Oh No, you give wrong word ";
        var result2 = result.bold();
        document.querySelector("#form").innerHTML = result2;
        document.querySelector('#form').style.color = "red";
    }
}
    
