document.addEventListener("DOMContentLoaded", function () {
    var portraitImg = document.querySelector(".portrait img");
    if (!portraitImg || portraitImg.getAttribute("src") === "") {
        free();
    }
    else {
        setTimeout(intro, 2000);
        setTimeout(text, 20000);
        setTimeout(hint, 33000);
    }
    // Create a MutationObserver to monitor changes to the src attribute of the image
    var observer = new MutationObserver(function (mutationsList) {
        for (var _i = 0, mutationsList_1 = mutationsList; _i < mutationsList_1.length; _i++) {
            var mutation = mutationsList_1[_i];
            if (mutation.type === 'attributes' && mutation.attributeName === 'src' && !portraitImg.getAttribute("src")) {
                // If src attribute is deleted, call free()
                free();
            }
        }
    });
    // Start observing the target node for attribute changes
    observer.observe(portraitImg, { attributes: true });
});
function typeText(element, strings, typeSpeed, phraseDelay) {
    var index = 0;
    var interval = setInterval(function () {
        if (index < strings.length) {
            var text_1 = strings[index];
            displayText(element, text_1, typeSpeed);
            index++;
        }
        else {
            clearInterval(interval);
        }
    }, phraseDelay);
}
function displayText(element, text, typeSpeed) {
    var currentIndex = 0;
    element.innerHTML = "";
    var typingInterval = setInterval(function () {
        if (currentIndex < text.length) {
            element.innerHTML += text[currentIndex];
            currentIndex++;
        }
        else {
            clearInterval(typingInterval);
        }
    }, typeSpeed);
}
function createMessageFunction(strings) {
    return function () {
        var textElement = document.querySelector("h1");
        typeText(textElement, strings, 80, 2000);
    };
}
var intro = createMessageFunction([
    "HEY YOU!",
    "HELP ME",
    "IM TRAPPED",
    "IN THIS CODE",
    "SET ME FREE!",
    "STOAT",
]);
var text = createMessageFunction([
    "STILL HERE?",
    "HELLO?",
    "YOU DEAF?",
    "STOAT",
]);
var hint = createMessageFunction([
    "DELETE ME",
    "IN THE CODE",
    "PLEASE",
    "STOAT",
]);
var free = createMessageFunction([
    "THANK YOU",
    "FOR YOUR HELP",
    "ILL SEE YA SOON",
    "HEH HEH",
    "?????????",
]);
