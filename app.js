        // Define the wedding date (Year, Month Index (0=Jan), Day, Hour, Minute, Second)
        // May 17th, 2026 @ 4:00 PM (16:00:00)
        const weddingDate = new Date("Apr 04, 2026 16:00:00").getTime();

        /**
         * Updates the countdown timer display elements.
         */
        function updateCountdown() {
            const now = new Date().getTime();
            const distance = weddingDate - now;

            // If the countdown is over, display a message
            if (distance < 0) {
                clearInterval(interval);
                document.getElementById('countdown').innerHTML = '<div class="col-span-4 text-3xl font-display text-accent-gold font-bold">The Big Day is Here!</div>';
                return;
            }

            // Calculations for time components
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Helper function to format numbers with leading zero
            const formatTime = (time) => String(time).padStart(2, '0');

            // Update the display elements
            document.getElementById('days').textContent = formatTime(days);
            document.getElementById('hours').textContent = formatTime(hours);
            document.getElementById('minutes').textContent = formatTime(minutes);
            document.getElementById('seconds').textContent = formatTime(seconds);
        }

        // Run the function once immediately and then every second
        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);