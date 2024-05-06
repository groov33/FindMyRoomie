/* JavaScript */
// Get the More Details button, the contact button, and the pop-ups
const moreDetailsBtn = document.querySelector('.more-details-btn');
const revealContactBtn = document.querySelector('.reveal-contact-btn');
const detailsPopup = document.getElementById('detailsPopup');
const contactPopup = document.getElementById('contactPopup');
const closeBtns = document.querySelectorAll('.close-btn');

// Add click event listener to More Details button
moreDetailsBtn.addEventListener('click', function() {
    // Close contact pop-up if open
    contactPopup.style.opacity = '0';
    setTimeout(function() {
        contactPopup.style.display = 'none';
    }, 300);
    
    // Display the details pop-up
    detailsPopup.style.display = 'block';
    setTimeout(function() {
        detailsPopup.style.opacity = '1';
    }, 50);
});

// Add click event listener to Reveal Contact button
revealContactBtn.addEventListener('click', function() {
    // Close details pop-up if open
    detailsPopup.style.opacity = '0';
    setTimeout(function() {
        detailsPopup.style.display = 'none';
    }, 300);

    // Display the contact pop-up
    contactPopup.style.display = 'block';
    setTimeout(function() {
        contactPopup.style.opacity = '1';
    }, 50);
});

// Add click event listener to Close buttons
closeBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        // Close the pop-ups
        detailsPopup.style.opacity = '0';
        contactPopup.style.opacity = '0';
        setTimeout(function() {
            detailsPopup.style.display = 'none';
            contactPopup.style.display = 'none';
        }, 300);
    });
});
