# Mali Aerospace Air Ticket Booking System

## Overview
The **Mali Aerospace** project provides an online platform for users to easily book flight tickets. It allows passengers to enter details such as name, age, departure and arrival cities, date of travel, trip type, baggage information, and fare charges. Upon booking a ticket, a confirmation message is displayed, and users can download a **PDF receipt** containing the flight details. This system uses the **jsPDF** library to generate the receipt.

## Features
- **Flight Booking Form**: Users can input passenger details, flight information, and baggage information.
- **Generate Random Booking Details**: Automatically generates random booking details like seat number, boarding time, gate, booking ID, PNR, and E-Ticket No.
- **Downloadable PDF Receipt**: After booking, users can download a PDF containing all the booking details.
- **User-Friendly Design**: A clean and modern UI with responsive design that works across all devices.
- **24/7 Support and Secure Transactions**: Ensures a reliable and secure booking experience.

## Technologies Used
- **HTML**: To structure the webpage.
- **CSS**: For styling and responsive design.
- **JavaScript**: Handles form submission, generates random booking details, and integrates with jsPDF to create downloadable PDFs.
- **jsPDF**: A JavaScript library for generating PDF files on the client side.
- **Bootstrap (Optional)**: You can integrate for additional styling and responsiveness (if required).

## Project Setup

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge).
- A text editor (VSCode, Sublime Text, etc.).

### Steps to Run Locally
1. **Clone this repository**:
    ```bash
    git clone https://github.com/atharvmali/mali-aerospace.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd mali-aerospace
    ```

3. **Open the project in a web browser**:
    - Open the `index.html` file directly in your browser to view the page.

### File Structure
```
mali-aerospace/
│
├── index.html          # Main HTML file containing the flight booking form and functionality
├── airport.jpg         # Background image used in the design
└── README.md           # This README file
```

## How It Works
1. **Fill in the Flight Details**: The user enters their name, age, departure city, destination city, date of travel, trip type (One-Way or Round Trip), baggage details, and fare charges.
2. **Submit the Form**: Upon clicking the "Book Ticket" button, random details such as seat number, boarding time, gate, booking ID, PNR, and E-Ticket No. are generated.
3. **Download the PDF**: After submission, a confirmation message is displayed with a button to download the PDF receipt. Clicking the button will generate the PDF containing all the entered and random details, and the user can download the ticket.

## Screenshots
<img src="https://github.com/atharvmali/Flight-Ticket-Generator/blob/main/img/img1.png" alt="img1">
Example of the flight booking form.

<img src="https://github.com/atharvmali/Flight-Ticket-Generator/blob/main/img/img2.png" alt="img2">
Sample downloadable PDF receipt.

## Contributing
Feel free to fork this project and submit issues or pull requests if you would like to contribute to the development of this project.
