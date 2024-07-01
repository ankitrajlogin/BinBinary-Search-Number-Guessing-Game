# Binary Search Number Guessing Game

Welcome to the Binary Search Number Guessing Game! This interactive game challenges you to guess a number chosen by the computer using the power of binary search. It's a fun and educational way to understand how binary search works!

## How to Play

1. **Enter the Range:** Start by entering two numbers to define the range within which the computer will pick a random number. For example, if you enter 1 and 100, the computer will select a number between 1 and 100 (inclusive).

2. **Computer Picks a Number:** The computer will randomly choose a number within the range you provided. This number remains hidden, and your goal is to guess it.

3. **Start Guessing:** Using the principles of binary search, make your first guess. The game will tell you if your guess is too high or too low.

4. **Narrow Down the Range:** Based on the feedback (higher or lower), adjust your next guess to narrow down the possible numbers.

5. **Exact Guesses:** You will have exactly \(\log_2(N)\) guesses to find the computer's number, where \(N\) is the size of the range you provided. For instance, if your range is from 1 to 100, you will have \(\log_2(100) \approx 7\) guesses.

6. **Win or Lose:** If you guess the number within the allotted guesses, you win! If not, the game reveals the number, and you can try again.

## Features

- **Interactive Interface:** The game features a user-friendly and visually appealing interface to enhance your gaming experience.
- **Educational:** Learn and apply the binary search algorithm in a fun and engaging way.
- **Responsive Design:** Play the game on any device—desktop, tablet, or mobile.
- **Hints and Tips:** Get hints if you're stuck to help you make better guesses.

## Example Walkthrough

1. **Set the Range:** Enter 1 and 100 as the range.
2. **Computer Chooses:** Let's say the computer picks 57.
3. **First Guess:** Start with the midpoint, which is 50.
   - **Feedback:** "Higher!"
4. **Second Guess:** Next midpoint in the higher half, which is 75.
   - **Feedback:** "Lower!"
5. **Third Guess:** Midpoint between 50 and 75, which is 62.
   - **Feedback:** "Lower!"
6. **Fourth Guess:** Midpoint between 50 and 62, which is 56.
   - **Feedback:** "Higher!"
7. **Fifth Guess:** Midpoint between 56 and 62, which is 59.
   - **Feedback:** "Lower!"
8. **Sixth Guess:** Midpoint between 56 and 59, which is 57.
   - **Feedback:** "Correct! You win!"

## Try It Now!

Ready to put your binary search skills to the test? Start the game and see if you can guess the number before your chances run out!

[Play the Game](https://binary-search-number-guessing-game.netlify.app/)

---

Enjoy the game and happy guessing!
