
        let intervalId;
        let timeLeft = 0;

        function startTimer() {
            clearInterval(intervalId);

            timeLeft = Number(document.getElementById("seconds").value);
            document.getElementById("timer").textContent = timeLeft;

            intervalId = setInterval(() => {
                timeLeft--;
                document.getElementById("timer").textContent = timeLeft;

                if (timeLeft <= 0) {
                    clearInterval(intervalId);
                    alert("Time's up!");
                }
            }, 1000);
        }

        function stopTimer() {
            clearInterval(intervalId);
        }

        function resetTimer() {
            clearInterval(intervalId);
            timeLeft = 0;
            document.getElementById("timer").textContent = 0;
            document.getElementById("seconds").value = "";
        }
