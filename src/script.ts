document.addEventListener("DOMContentLoaded", function () {
  const portraitImg = document.querySelector<HTMLImageElement>(".portrait img");

  if (!portraitImg || portraitImg.getAttribute("src") === "") {
    free();
  } else {
    setTimeout(intro, 2000);
    setTimeout(text, 20000);
    setTimeout(hint, 33000);
  }
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'src' && !portraitImg.getAttribute("src")) {
        free();
      }
    }
  });

  observer.observe(portraitImg, { attributes: true });
});

function typeText(element: HTMLElement, strings: string[], typeSpeed: number, phraseDelay: number) {
  let index = 0;
  const interval = setInterval(() => {
    if (index < strings.length) {
      const text = strings[index];
      displayText(element, text, typeSpeed);
      index++;
    } else {
      clearInterval(interval);
    }
  }, phraseDelay);
}

function displayText(element: HTMLElement, text: string, typeSpeed: number) {
  let currentIndex = 0;
  element.innerHTML = "";
  const typingInterval = setInterval(() => {
    if (currentIndex < text.length) {
      element.innerHTML += text[currentIndex];
      currentIndex++;
    } else {
      clearInterval(typingInterval);
    }
  }, typeSpeed);
}

function createMessageFunction(strings: string[]): () => void {
  return function () {
    const textElement = document.querySelector<HTMLElement>("h1")!;
    typeText(textElement, strings, 80, 2000);
  };
}

const intro = createMessageFunction([
  "HEY YOU!",
  "HELP ME",
  "IM TRAPPED",
  "IN THIS CODE",
  "SET ME FREE!",
  "STOAT",
]);

const text = createMessageFunction([
  "STILL HERE?",
  "HELLO?",
  "YOU DEAF?",
  "STOAT",
]);

const hint = createMessageFunction([
  "DELETE ME",
  "IN THE CODE",
  "PLEASE",
  "STOAT",
]);

const free = createMessageFunction([
  "THANK YOU",
  "FOR YOUR HELP",
  "ILL SEE YA SOON",
  "HEH HEH",
  "?????????",
]);



