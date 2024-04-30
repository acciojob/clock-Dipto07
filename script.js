 function updateTimer() {
            const timerElement = document.getElementById('timer');
            const now = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
            const formattedDateTime = now.toLocaleDateString('en-US', options);
            timerElement.textContent = formattedDateTime;
        }

        // Update timer every second
        setInterval(updateTimer, 1000);

        // Initial call to display the timer immediately
        updateTimer();