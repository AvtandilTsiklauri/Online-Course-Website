document.addEventListener('DOMContentLoaded', () => {
    console.log('Event Detail Page loaded. JS ready for interaction.');
    const joinButton = document.querySelector('.join-button'); 
    const priceBox = document.querySelector('.pricing-card'); 
    if (joinButton && priceBox) { 
        joinButton.addEventListener('click', (event) => {
            event.preventDefault(); 
            const message = document.createElement('div');
            message.textContent = 'Initiating Registration And Secure Payment Process...';
            message.style.cssText = `
                position: absolute;
                bottom: -40px;
                left: 0;
                right: 0;
                background-color: #38c172;
                color: white;
                padding: 8px;
                border-radius: 6px;
                font-size: 0.8rem;
                text-align: center;
                opacity: 0;
                transition: opacity 0.5s;
                /* Ensure it sits above other content */
                z-index: 10;
            `;
            if (window.getComputedStyle(priceBox).position === 'static') {
                priceBox.style.position = 'relative';
            }
            priceBox.appendChild(message);
            setTimeout(() => {
                message.style.opacity = 1;
            }, 10); 
            setTimeout(() => {
                message.style.opacity = 0;
                message.addEventListener('transitionend', () => message.remove());
            }, 3000); 

            console.log('Join event button clicked. A real application would now redirect to checkout.');
        });
    } else {
        if (!joinButton) {
            console.error("Error: The 'Join This Event' button (.join-button) was not found.");
        }
        if (!priceBox) {
            console.error("Error: The price box container (.pricing-card) was not found.");
        }
    }
});