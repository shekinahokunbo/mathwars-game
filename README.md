# mathwars-game

Hi, my name is Shekinah Okunbo, and this was a high school project I did a while back. Math Wars is an interactive, timed math quiz game that combines multiple-choice and fill-in-the-blank questions with a persistent high-score system. Players have 30 seconds per question to answer correctly and climb the leaderboard.

The core game is built in **Code.org App Lab** using **JavaScript** and embedded in a **static HTML/CSS** site hosted on GitHub Pages.

---

## Features

*  **Mixed Question Types**

  * Multiple-choice and free-response math questions
  * Supports basic arithmetic and flexible extensions to other topics

* **Timed Gameplay**

  * 30-second countdown per question
  * Uses event-driven logic to handle timeouts and automatic scoring

* **Stateful Game Logic**

  * Tracks current question index, score, streaks, and remaining time
  * Validates user input and updates UI in real time

* **High Score / Scoreboard**

  * Persistent high-score tracking using Code.org App Lab’s data APIs
  * Encourages replayability and competition

* **Web-Hosted**

  * Exposed as a public web app via GitHub Pages
  * App Lab project embedded in a responsive HTML page using an `<iframe>`

---

## Tech Stack

### Frontend Shell (on GitHub Pages)

* **HTML5**

  * Defines the landing page structure (title, description, and embedded game)
  * Hosts the App Lab app via an `<iframe>` with a responsive container

* **CSS3**

  * Provides basic layout and typography for the landing page
  * Uses Flexbox for simple, centered layout
  * Easily extendable for custom theming and responsive design

* **(Optional) Vanilla JavaScript**

  * Can be used to add analytics, interaction tracking, or additional UI behavior around the embedded app

### Core Game (Code.org App Lab)

* **JavaScript (event-driven)**

  * Uses App Lab’s event APIs (`onEvent`, `setScreen`, etc.) to handle:

    * Button clicks
    * Screen transitions
    * Answer submissions
    * Timer updates
  * Implements core game state (questions, answers, score, timers)

* **App Lab UI**

  * Visual screens, buttons, text inputs, labels, and error messages
  * Screen-based navigation (e.g., Home → Game → Results / High Score)

* **Data APIs (for scoreboard)**

  * Uses App Lab’s key/value or table APIs to store and retrieve high scores

---

## Project Structure

A typical repository layout looks like this:

```text
.
├── index.html      # Landing page + embedded App Lab game
├── style.css       # Optional custom styles for the landing page
└── README.md       # Project documentation (this file)
```

> The actual game logic and UI live inside the **Code.org App Lab** project, which is embedded into `index.html` via an `<iframe>`.

Example `index.html` embed:

```html
<iframe
  src="https://studio.code.org/projects/applab/YOUR_PROJECT_ID/embed"
  width="400"
  height="620"
  style="border:0;">
</iframe>
```

---

## How It Works (High-Level Architecture)

1. **Landing Page (HTML/CSS)**

   * Provides a clean entry point with a title, short description, and the game embedded as an iframe.
   * This makes the project look and feel like a standard web app hosted from your own domain or GitHub Pages.

2. **Game Loop & State (JavaScript in App Lab)**

   * On start, the game initializes:

     * Question list
     * Timer duration per question
     * Score and high-score variables
   * For each question:

     * Timer starts (e.g., using `setInterval` or App Lab’s timer blocks)
     * User submits an answer (button click or enter key)
     * Logic validates correctness, updates score, and moves to the next question or ends the game on timeout.

3. **UI Updates (Event-Driven)**

   * `onEvent` handlers listen for:

     * Button presses
     * Input changes
   * `setText`, `setProperty`, and `setScreen` calls update:

     * Question text
     * Options
     * Score labels
     * Progress indicators
     * Screen transitions (e.g., Game Screen → Results Screen)

4. **Scoreboard / Persistence**

   * At game end, the final score is compared against stored high scores.
   * High scores are read/written using App Lab’s storage APIs.
   * Top scores are displayed in a scoreboard screen.

---

## Getting Started (Run the Project)

### 1. View the Live Version

If you’re on the GitHub repository:

* Open the GitHub Pages link (e.g.):
  `https://your-username.github.io/math-wars/`

You should see the landing page and, below it, the fully interactive embedded game.

### 2. Run Locally

1. Clone the repo:

   ```bash
   git clone https://github.com/your-username/math-wars.git
   cd math-wars
   ```

2. Open `index.html` in a browser:

   * Double-click `index.html`, **or**
   * Use a live server extension in VS Code for auto-reload.

The page will load and the embedded App Lab app will run just like it does online.

---

## How to Replicate This Project for Your Own Quiz Game

You can follow these steps to build your own version (for any subject: math, physics, vocab, etc.):

### A. Build Your Own Game in Code.org App Lab

1. **Create a new App Lab project**

   * Go to Code.org → App Lab → New Project.

2. **Design the UI (screens)**

   * Create at least:

     * Home screen (title, “Start” button)
     * Game screen (question text, answer options/input, timer, score)
     * Results / High Score screen

3. **Define Your Question Bank**

   * Use JavaScript arrays or tables to store:

     * Question text
     * Answer options
     * Correct answer key

   Example:

   ```js
   var questions = [
     { prompt: "5 + 7 =", type: "mc", options: ["10", "11", "12", "13"], answer: "12" },
     { prompt: "9 × 3 =", type: "fr", answer: "27" }
   ];
   ```

4. **Implement Game Logic (JavaScript)**

   * Track:

     * `currentQuestionIndex`
     * `score`
     * `timeRemaining`
   * Use `onEvent` handlers for:

     * Start button → start game & timer
     * Answer submission → validate & go to next question
   * Use interval or timer APIs to:

     * Decrease `timeRemaining`
     * End the question or game when time reaches 0

5. **Add High Score Storage (Optional but Recommended)**

   * Use App Lab’s data storage:

     * On game end, save the score.
     * Retrieve and display top scores on the scoreboard screen.

6. **Test & Refine**

   * Check for edge cases:

     * No answer submitted
     * Timer hitting zero
     * Handling last question

### B. Embed Your App in an HTML/CSS Site (Like Math Wars)

1. Click **Share** in App Lab.
2. Copy the **embed code** (iframe).
3. Create a new GitHub repo with:

   * `index.html` (landing page)
   * `style.css` (optional styling)
4. Paste the iframe into `index.html` where you want the game displayed.
5. Enable GitHub Pages (Settings → Pages → Deploy from branch).
6. Your quiz game is now a shareable **web app** at `https://your-username.github.io/your-repo-name/`.

---

## Possible Extensions

* Add difficulty levels (easy/medium/hard) with different time limits.
* Add categories (arithmetic, algebra, geometry) and let users choose.
* Use localStorage (if you rebuild in plain JS) or App Lab tables to store:

  * Per-user stats
  * Number of games played
* Add animations or transitions using CSS.
* Rebuild the entire game as a pure HTML/CSS/JavaScript app outside of App Lab to run directly in the browser without an iframe.

---

## License

You can customize this section depending on what you want (e.g., MIT License):

```text
This project is open for learning and personal use. 
Feel free to fork, modify the questions, and build your own quiz variants.
```

---

