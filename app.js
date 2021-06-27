
function palindrome() {

    var inp = document.querySelector('#input').value;

    if (inp == 'madam' || inp == 'Madam') {

        var result = document.querySelector('#form').innerHTML = " ✓Oh Yes, Given word's a Palindrome";
        var result2 = result.bold();
        document.querySelector("#form").innerHTML = result2;
        document.querySelector('#form').style.color = "green"


    }

    else if (inp == 'racecar' || inp == 'Racecar') {
        var result = document.querySelector('#form').innerHTML = " ✓Oh Yes, Given word's a Palindrome";
        var result2 = result.bold();
        document.querySelector("#form").innerHTML = result2;
        document.querySelector('#form').style.color = "green"
    }

    else if (inp == 'noon' || inp == 'Noon') {
        var result = document.querySelector('#form').innerHTML = " ✓Oh Yes, Given word's a Palindrome";
        var result2 = result.bold();
        document.querySelector("#form").innerHTML = result2;
        document.querySelector('#form').style.color = "green"
    }

    else if (inp == 'level' || inp == 'Level') {
        var result = document.querySelector('#form').innerHTML = " ✓Oh Yes, Given word's a Palindrome";
        var result2 = result.bold();
        document.querySelector("#form").innerHTML = result2;
        document.querySelector('#form').style.color = "green"
    }

    else if (inp == 'civic' || inp == 'Civic') {
        document.querySelector('#form').innerHTML = "✓Oh Yes, Given word's a Palindrome";
        document.querySelector('#form').style.color = "green"
    }

    else if (inp == 'radar' || inp == 'Radar') {
        var result = document.querySelector('#form').innerHTML = " ✓Oh Yes, Given word's a Palindrome";
        var result2 = result.bold();
        document.querySelector("#form").innerHTML = result2;
        document.querySelector('#form').style.color = "green"
    }

    else if (inp == 'wow' || inp == 'Wow') {
        var result = document.querySelector('#form').innerHTML = " ✓Oh Yes, Given word's a Palindrome";
        var result2 = result.bold();
        document.querySelector("#form").innerHTML = result2;
        document.querySelector('#form').style.color = "green"
    }
    else if (inp == 'eye' || inp == 'Eye') {
        var result = document.querySelector('#form').innerHTML = " ✓Oh Yes, Given word's a Palindrome";
        var result2 = result.bold();
        document.querySelector("#form").innerHTML = result2;
        document.querySelector('#form').style.color = "green"
    }
    else if (inp == 'deed' || inp == 'Deed') {
        var result = document.querySelector('#form').innerHTML = " ✓Oh Yes, Given word's a Palindrome";
        var result2 = result.bold();
        document.querySelector("#form").innerHTML = result2;
        document.querySelector('#form').style.color = "green"
    }
    else if (inp == 'mom' || inp == 'Mom') {
        var result = document.querySelector('#form').innerHTML = " ✓Oh Yes, Given word's a Palindrome";
        var result2 = result.bold();
        document.querySelector("#form").innerHTML = result2;
        document.querySelector('#form').style.color = "green"
    }
    else if (inp == 'refer' || inp == 'Refer') {
        var result = document.querySelector('#form').innerHTML = " ✓Oh Yes, Given word's a Palindrome";
        var result2 = result.bold();
        document.querySelector("#form").innerHTML = result2;
        document.querySelector('#form').style.color = "green"
    }
    else {
        var result = document.querySelector('#form').innerHTML = "❌ Oh No, you give wrong word "
        var result2 = result.bold();
        document.querySelector("#form").innerHTML = result2;
        document.querySelector('#form').style.color = "red";
    }
}