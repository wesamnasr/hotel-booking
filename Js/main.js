

//  Event slider and Testimonials navigationdocument.addEventListener('DOMContentLoaded', function() {
    // Events slider navigation    const eventsSlider = document.querySelector('.events-slider');
    const prevBtn = document.querySelector('.prev');    const nextBtn = document.querySelector('.next');
        if (eventsSlider && prevBtn && nextBtn) {
        // Calculate the scroll amount (width of one event card + gap)        const eventCard = document.querySelector('.event-card');
        const cardWidth = eventCard ? eventCard.offsetWidth : 300;        const scrollAmount = cardWidth + 25; // card width + gap
                prevBtn.addEventListener('click', function() {
            eventsSlider.scrollBy({                left: scrollAmount * -1,
                behavior: 'smooth'            });
        });        
        nextBtn.addEventListener('click', function() {            eventsSlider.scrollBy({
                left: scrollAmount,                behavior: 'smooth'
            });        });
    }    
    // Testimonials slider    const testimonialsSlider = document.querySelector('.testimonials-slider');
    const dots = document.querySelectorAll('.testimonials-dots .dot');    
    if (testimonialsSlider && dots.length > 0) {        // Function to scroll to a specific testimonial
        function scrollToTestimonial(index) {            const testimonialCards = document.querySelectorAll('.testimonial-card');
            if (testimonialCards.length > index) {                testimonialCards[index].scrollIntoView({
                    behavior: 'smooth',                    block: 'nearest',
                    inline: 'start'                });
                                // Update active dot
                dots.forEach((dot, i) => {                    dot.classList.toggle('active', i === index);
                });            }
        }        
        // Add click event to dots        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {                scrollToTestimonial(i);
            });   
                // Handle scroll events to update active dot
        testimonialsSlider.addEventListener('scroll', () => {            const scrollPosition = testimonialsSlider.scrollLeft;
            const sliderWidth = testimonialsSlider.offsetWidth;            const activeIndex = Math.round(scrollPosition / sliderWidth);
                        dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === activeIndex);            });
        });        
        // Auto-rotate testimonials every 5 seconds        let currentIndex = 0;
        const autoRotate = setInterval(() => {            currentIndex = (currentIndex + 1) % dots.length;
            scrollToTestimonial(currentIndex);        }, 5000);
                // Stop auto-rotation when user interacts with the slider
        testimonialsSlider.addEventListener('mousedown', () => {            clearInterval(autoRotate);
        });        
        testimonialsSlider.addEventListener('touchstart', () => {            clearInterval(autoRotate);
        });
    }
    










































