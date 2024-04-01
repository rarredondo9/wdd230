document.addEventListener('DOMContentLoaded', function () {
    fetch('data/prices.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const pricingTableBody = document.getElementById('rental-pricing').querySelector('tbody');

            data.rentals.forEach(rental => {
                const row = pricingTableBody.insertRow();

                // Rental Type
                const cellType = row.insertCell();
                cellType.textContent = rental.type;

                // Max Persons
                const cellMaxPersons = row.insertCell();
                cellMaxPersons.textContent = rental.capacity;

                // Half Day Reservation Price
                const cellHalfDayRes = row.insertCell();
                cellHalfDayRes.textContent = `$${rental.pricing.reservation.half_day}`;

                // Full Day Reservation Price
                const cellFullDayRes = row.insertCell();
                cellFullDayRes.textContent = `$${rental.pricing.reservation.full_day}`;

                // Half Day Walk-In Price
                const cellHalfDayWalkIn = row.insertCell();
                cellHalfDayWalkIn.textContent = `$${rental.pricing.walk_in.half_day}`;

                // Full Day Walk-In Price
                const cellFullDayWalkIn = row.insertCell();
                cellFullDayWalkIn.textContent = `$${rental.pricing.walk_in.full_day}`;
            });
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
});
