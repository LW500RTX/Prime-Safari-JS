function storeNewsLetter() {
    let email = document.getElementById("emailInput").value;

    let getEmail = JSON.parse(localStorage.getItem("newsLetter")) || [];

    if (getEmail.some(v => v.email === email)) {
        alert("Duplicate Email");
        return false; // Prevent form submission
    } else {
        getEmail.push({ "email": email });
        localStorage.setItem("newsLetter", JSON.stringify(getEmail));
        alert("Subscription successful");
        updateSubscriberList(); // Update subscriber list
        return true; // Allow form submission
    }
}

function updateSubscriberList() {
    const subscribers = JSON.parse(localStorage.getItem("newsLetter")) || [];
    const subscriberList = document.getElementById("subscriberList");
    subscriberList.innerHTML = ''; // Clear previous list

    subscribers.forEach(subscriber => {
        const row = document.createElement("tr");
        const emailCell = document.createElement("td");
        emailCell.textContent = subscriber.email;
        row.appendChild(emailCell);
        subscriberList.appendChild(row);
    });
}

// Call updateSubscriberList on page load to populate the list
updateSubscriberList();
