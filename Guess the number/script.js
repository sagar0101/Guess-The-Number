const submit_btn = document.querySelector(".submit-btn");
const result = document.querySelector(".result");
const reset_game = document.querySelector(".reset-game");
const see_guess_val = document.querySelector(".see-guess-val");
const Count_guess = document.querySelector(".Count-guess");

const random_val = Math.floor(Math.random() * 100) + 1;
let guesses = [];  // Array to store all guesses
let count = 0;

submit_btn.addEventListener("click", () => {
    const input_val = document.querySelector(".input-val").value;  // Get updated value on each click
    count += 1;
    
    if (input_val == random_val) {
        result.innerText = "Congrats You Win! 😃";
    } else if (input_val > random_val) {
        result.innerText = "Too High! 😟";
    } else {
        result.innerText = "Too Low! 🥹";
    }

    // Push the guess to the guesses array and update the display
    guesses.push(input_val);
    see_guess_val.innerText = ` ${guesses.join(", ")}`;  // Display all guesses separated by commas

    // Update the count of guesses
    Count_guess.innerText = `${count}`;
});

reset_game.addEventListener("click", () => {
    location.reload();
});
