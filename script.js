const getRandomDetails = () => 
        ({
            seat: `${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${String(Math.floor(Math.random() * 100)).padStart(2, '0')}`,
            boardingTime: `${String(Math.floor(Math.random() * 24)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
            gate: `${['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'][Math.floor(Math.random() * 8)]}${Math.floor(Math.random() * 10) + 1}`,
            bookingID: Math.floor(Math.random() * 1000000), 
            pnr: Math.random().toString(36).substring(2, 8).toUpperCase(), 
            eTicketNo: Math.floor(Math.random() * 10000000) 
        });

        document.getElementById('bookingForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const details = {
                name: document.getElementById('name').value,
                age: document.getElementById('age').value,
                source: document.getElementById('source').value,
                destination: document.getElementById('destination').value,
                date: document.getElementById('date').value,
                tripType: document.getElementById('tripType').value,
                baggage: document.getElementById('baggage').value,
                fare: document.getElementById('fare').value,
                ...getRandomDetails()
            };

            // Display confirmation message only
            document.getElementById('output').innerHTML = `<p>Your Ticket has been Booked!</p>
            <button id="downloadBtn">Download Receipt</button>`;

            document.getElementById('downloadBtn').addEventListener('click', function() {
                const { jsPDF } = window.jspdf;
                const doc = new jsPDF();
                doc.setFontSize(12);
                doc.text('Mali Aerospace : Air Ticket Receipt', 14, 10);
                doc.text(`Name: ${details.name}`, 14, 20);
                doc.text(`Age: ${details.age}`, 14, 30);
                doc.text(`Source: ${details.source}`, 14, 40);
                doc.text(`Destination: ${details.destination}`, 14, 50);
                doc.text(`Date: ${details.date}`, 14, 60);
                doc.text(`Trip Type: ${details.tripType}`, 14, 70);
                doc.text(`Baggage: ${details.baggage}`, 14, 80);
                doc.text(`Fare: ₹${details.fare}`, 14, 90);
                doc.text(`Seat No: ${details.seat}`, 14, 100);
                doc.text(`Boarding Time: ${details.boardingTime}`, 14, 110);
                doc.text(`Gate: ${details.gate}`, 14, 120);
                doc.text(`Booking ID: ${details.bookingID}`, 14, 130);
                doc.text(`PNR: ${details.pnr}`, 14, 140);
                doc.text(`E-Ticket No: ${details.eTicketNo}`, 14, 150);
                doc.save('ticket_receipt.pdf');
            });
        });