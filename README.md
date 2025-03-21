# Lottery Ticket Generator

This is a simple **Lottery Ticket Generator** built with React. It generates a lottery ticket with random numbers, and checks if the generated sum matches a winning sum.

## Features
- Generates a random lottery ticket
- Allows users to buy a new ticket
- Checks if the generated ticket is a winning ticket
- Displays a congratulatory message if the ticket wins

## Technologies Used
- React.js
- JavaScript (ES6+)
- CSS

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/lottery-ticket.git
   ```

2. Navigate to the project directory:
   ```sh
   cd lottery-ticket
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

## Usage

1. Start the development server:
   ```sh
   npm run dev
   ```
2. Open your browser and go to `http://localhost:5173`

## File Structure
```
lottery-ticket/
│── src/
│   ├── App.js            # Main application component
│   ├── Lottery.js        # Lottery component
│   ├── Ticket.js         # Ticket component
│   ├── TicketNum.js      # Individual ticket number component
│   ├── helper.js         # Utility functions for generating tickets
│   ├── styles/           # CSS files
│── public/
│── package.json         # Project metadata and dependencies
│── README.md            # Project documentation
```

## How It Works
- The `Lottery` component generates a random ticket using `genTicket(n)`, where `n` is the number of digits in the ticket.
- The `sum()` function calculates the total value of the ticket.
- If the sum matches `winningSum`, a success message is displayed.
- Clicking the "Buy a ticket" button generates a new ticket.

## Issues & Debugging
- If you see `NaN` values on the screen, check the `genTicket(n)` function in `helper.js` to ensure it returns valid numbers.
- Verify that `sum(ticket)` returns a valid numeric value.
- Use `console.log(ticket);` in `Lottery.js` to debug ticket generation.


