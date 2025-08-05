const emojiElement = document.querySelector("#emoji");

// I've kept your original emoji list!
const emojis = [
    "😆", "😅", "🤣", "😂", "😀", "🤑", "🤨", "🙂", "😊", "😗",
    "😛", "😏", "🤥", "😴", "🥺", "😧", "😇", "😳", "🙃", "🥴",
    "🧐", "🤨", "😒", "🤔", "🤭", "🥰", "🤐", "😄", "🤔", "🤪",
    "🥲", "😃", "😁", "😬",
];

// We change the emoji on CLICK now. It's a better user experience.
// If you liked the hover effect, you can change 'click' back to 'mouseover'.
emojiElement.addEventListener("click", () => {
    // 1. Get a random emoji from the list
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    // 2. Update the emoji on the screen
    emojiElement.innerText = randomEmoji;

    // 3. Add the animation class
    emojiElement.classList.add("pop-animation");

    // 4. Remove the animation class after it finishes so it can play again
    emojiElement.addEventListener('animationend', () => {
        emojiElement.classList.remove("pop-animation");
    }, { once: true }); // {once: true} is important, it removes the listener after it runs
});