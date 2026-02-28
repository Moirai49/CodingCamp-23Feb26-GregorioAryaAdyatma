document.addEventListener("DOMContentLoaded", function () {

    // ========================
    // 1. Welcome Text
    // ========================
    let userName = prompt("Enter your name:");
    if (userName) {
        document.getElementById("welcomeText").innerText =
            "Hi " + userName + ", Welcome To Website";
    }

    // ========================
    // 2. Current Time
    // ========================
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });

        document.getElementById("currentTime").innerText = timeString;
    }

    updateTime();
    setInterval(updateTime, 1000);

    // ========================
    // 3. Form Submit
    // ========================
    document.getElementById("messageForm").addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("name").value;
        let dob = document.getElementById("dob").value;
        let genderElement = document.querySelector('input[name="gender"]:checked');
        let message = document.getElementById("userMessage").value;

        // Cegah error kalau gender belum dipilih
        if (!genderElement) {
            alert("Please select gender!");
            return;
        }

        let gender = genderElement.value;

        document.getElementById("resultName").innerText = name;
        document.getElementById("resultDob").innerText = dob;
        document.getElementById("resultGender").innerText = gender;
        document.getElementById("resultMessage").innerText = message;
    });

});