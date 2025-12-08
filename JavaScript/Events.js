function EventJoin() {
    alert("Success! You have officially joined this event.");

    const joinBtn = document.getElementById("join-btn");
    joinBtn.innerText = "Joined ✓";
    joinBtn.style.backgroundColor = "#e2e8f0"; 
    joinBtn.disabled = true; 
    joinBtn.style.cursor = "default";
}

function handleEventsLogic() {
    const blogCards = document.querySelectorAll('.blog-card');
    
    if (blogCards.length > 0) {
        blogCards.forEach((card) => {
            card.style.cursor = "pointer"; 
            card.addEventListener('click', () => {
                const title = card.querySelector('h3').innerText;
                const image = card.querySelector('img').getAttribute('src');

                localStorage.setItem("selectedEventTitle", title);
                localStorage.setItem("selectedEventImage", image);

                window.location.href = "EventDetails.html";
            });
        });
    }
    const detailsHero = document.getElementById("details-hero-title");
    if (detailsHero) {
        const savedTitle = localStorage.getItem("selectedEventTitle");
        const savedImage = localStorage.getItem("selectedEventImage");

        if (savedTitle && savedImage) {
            detailsHero.innerText = savedTitle;
            
            const contentTitle = document.getElementById("details-content-title");
            if (contentTitle) contentTitle.innerText = savedTitle;

            const mainImg = document.getElementById("details-main-img");
            if (mainImg) mainImg.src = savedImage;
            
            const breadcrumb = document.getElementById("details-breadcrumb");
            if (breadcrumb) breadcrumb.innerText = savedTitle;
        } 
        
    }
}
document.addEventListener('DOMContentLoaded', handleEventsLogic);