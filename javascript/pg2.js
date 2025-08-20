// wait for DOM to be loaded before continuing 
document.addEventListener('DOMContentLoaded', function() {

    // selecting all elents with card class
    const cards = document.querySelectorAll('.card');

    // check for changes in visibiltiy of the cards
    const observer = new IntersectionObserver(entries => {

        // loop through each entry 
        entries.forEach(entry => {
            
            // check if intersecting
            if (entry.isIntersecting) { 
                
                // add 'visible' class 
                entry.target.classList.add('visible');

                // stop observing
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5 //callback executed when 50% of target is visible
    });

    // observing each card for changes 
    cards.forEach(card => {
        observer.observe(card);
    });
});