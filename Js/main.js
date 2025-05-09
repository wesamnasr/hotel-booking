

// Event slider and Testimonials navigation
document.addEventListener('DOMContentLoaded', function() {
    // Events slider navigation
    const eventsSlider = document.querySelector('.events-slider');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    if (eventsSlider && prevBtn && nextBtn) {
        // Calculate the scroll amount (width of one event card + gap)
        const eventCard = document.querySelector('.event-card');
        const cardWidth = eventCard ? eventCard.offsetWidth : 300;
        const scrollAmount = cardWidth + 25; // card width + gap
        
        prevBtn.addEventListener('click', function() {
            eventsSlider.scrollBy({
                left: scrollAmount * -1,
                behavior: 'smooth'
            });
        });
        
        nextBtn.addEventListener('click', function() {
            eventsSlider.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }
    
    // Testimonials slider
    const testimonialsSlider = document.querySelector('.testimonials-slider');
    const dots = document.querySelectorAll('.testimonials-dots .dot');
    
    if (testimonialsSlider && dots.length > 0) {
        // Function to scroll to a specific testimonial
        function scrollToTestimonial(index) {
            const testimonialCards = document.querySelectorAll('.testimonial-card');
            if (testimonialCards.length > index) {
                testimonialCards[index].scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'start'
                });
                
                // Update active dot
                dots.forEach((dot, i) => {
                    dot.classList.toggle('active', i === index);
                });
                
                // Add active class to current testimonial
                testimonialCards.forEach((card, i) => {
                    card.classList.toggle('active', i === index);
                });
            }
        }
        
        // Add click event to dots
        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                scrollToTestimonial(i);
            });
        });
        
        // Handle scroll events to update active dot
        testimonialsSlider.addEventListener('scroll', () => {
            const scrollPosition = testimonialsSlider.scrollLeft;
            const sliderWidth = testimonialsSlider.offsetWidth;
            const activeIndex = Math.round(scrollPosition / sliderWidth);
            
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === activeIndex);
            });
            
            // Update active class on testimonial cards
            const testimonialCards = document.querySelectorAll('.testimonial-card');
            testimonialCards.forEach((card, i) => {
                card.classList.toggle('active', i === activeIndex);
            });
        });
       
        
        // Stop auto-rotation when user interacts with the slider
        testimonialsSlider.addEventListener('mousedown', () => {
            clearInterval(autoRotate);
        });
        
        testimonialsSlider.addEventListener('touchstart', () => {
            clearInterval(autoRotate);
        });
    }
    
    // Scroll reveal animation
    function revealOnScroll() {
        const reveals = document.querySelectorAll('.reveal');
        
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
        
        // Animate section titles when they come into view
        const sectionTitles = document.querySelectorAll('.section-title');
        sectionTitles.forEach(title => {
            const windowHeight = window.innerHeight;
            const elementTop = title.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                title.classList.add('animate');
            }
        });
    }
    
    // Add reveal class to elements we want to animate
    const sections = document.querySelectorAll('section:not(.hero)');
    sections.forEach(section => {
        section.classList.add('reveal');
    });
    
    const cards = document.querySelectorAll('.hotel-card, .offer-card, .event-card');
    cards.forEach(card => {
        card.classList.add('reveal');
    });
    
    // Run reveal function on load and scroll
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);
    
    // Animate the first testimonial on page load
    setTimeout(() => {
        const firstTestimonial = document.querySelector('.testimonial-card');
        if (firstTestimonial) {
            firstTestimonial.classList.add('active');
        }
    },0);
    
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition < 600) {
                hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
            }
        });
    }
    
    // Make sure search box is visible
    const searchBox = document.querySelector('.search-box');
    if (searchBox) {
        searchBox.style.opacity = '1';
        searchBox.style.animation = 'fadeIn 1s ease-out';
    }
});
