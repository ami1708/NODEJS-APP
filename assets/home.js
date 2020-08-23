//selecting the checkbox class
var buttons = document.getElementsByClassName('CHECKBOX'); //checkbox class is selected
var desc = document.getElementsByClassName("about-desc") //about-desc class is selected
var date = document.getElementsByClassName("about-date") //about-date class is selected
var data = document.getElementById('Description'); //Description id selected
var clicked = false; //toggle is used
for (let i = 0; i < buttons.length; i++) { // go to the each class of name Checkbox
    buttons[i].addEventListener('click', function() { //added clicked event listener 
        var string1 = desc[i].innerText;
        var string2 = date[i].innerText;
        if (!clicked) { // when clicked to the checkbox opacity and strict will be addes to the string
            desc[i].style.opacity = '0.5';
            date[i].style.opacity = '0.5';
            let str1 = desc[i].innerText;
            let str2 = date[i].innerText;
            let result1 = str1.strike();
            let result2 = str2.strike();
            desc[i].innerHTML = result1;
            date[i].innerHTML = result2;
            clicked = true;
        } else {
            desc[i].innerHTML = string1; //when again clicked to the checkbox opacity and strict willbe removed 
            date[i].innerHTML = string2;
            desc[i].style.opacity = '1';
            date[i].style.opacity = '1';
            clicked = false;
        }

    });
}
