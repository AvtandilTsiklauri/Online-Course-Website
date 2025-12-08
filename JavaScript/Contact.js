function Contact(event) {
    event.preventDefault();

    const name = document.getElementById("name-input");
    const email = document.getElementById("email-input");
    const website = document.getElementById("website-input");
    const message = document.getElementById("message-input");

    const nameErr = document.getElementById("name-error");
    const emailErr = document.getElementById("email-error");
    const websiteErr = document.getElementById("website-error");

    nameErr.innerText = "";
    emailErr.innerText = "";
    websiteErr.innerText = "";

    let isValid = true;

    if (name.value.trim() === "") {
        nameErr.innerText = "Name is required";
        isValid = false;
    }

    if (email.value.trim() === "") {
        emailErr.innerText = "Email is required";
        isValid = false;
    } else if (!email.value.includes("@")) {
        emailErr.innerText = "Include an @ in email";
        isValid = false;
    }

    if (website.value.trim() === "") {
        websiteErr.innerText = "Website is required";
        isValid = false;
    }

    if (isValid) {
        alert("Success! Your message has been sent successfully.");
        name.value = "";
        email.value = "";
        website.value = "";
        message.value = "";
    }
}