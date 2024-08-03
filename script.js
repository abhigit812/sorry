let clickCount = 0;

document.getElementById('changeTextButton').addEventListener('click', function() {
    clickCount++;
    if (clickCount === 1) {
        document.getElementById('message').innerHTML = "Let's become besties again like we used to.";
    } else if (clickCount === 2) {
        document.getElementById('message').style.display = 'none';
        document.getElementById('changeTextButton').style.display = 'none';
        document.getElementById('poll').style.display = 'block';
    }
});

document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('poll').style.display = 'none';
    document.getElementById('smileyAfterYes').style.display = 'block';
    alert("Yay! We're besties again!");
});

document.getElementById('noButton').addEventListener('click', function() {
    alert("Please reconsider!");
});
