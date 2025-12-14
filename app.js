
// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.querySelector('i').classList.toggle('fa-bars');
    navToggle.querySelector('i').classList.toggle('fa-times');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navToggle.querySelector('i').classList.add('fa-bars');
        navToggle.querySelector('i').classList.remove('fa-times');
    });
});

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.05)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Testimonial Slider
const testimonials = [
    {
        text: "Semdu handled my documents, visa, and flights without a hitch. Clear communication and quick turnaround—exactly what busy travelers need.",
        name: "Samuel Aboakye",
        location: "Business Travel Support",
        image: "https://images.unsplash.com/photo-1565884280295-98eb83e41c65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBtYW58ZW58MHx8MHx8fDA%3D"
    },
    {
        text: "They managed my itinerary, hotel, and visa updates flawlessly. The team made every leg of my trip feel effortless.",
        name: "Felica Serwaa",
        location: "Multi-country Trip",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsmt_rEqSaDu2qINSjbqx9SJHFKVhTiiDEng&s"
    }
];

let currentTestimonial = 0;
const testimonialCard = document.querySelector('.testimonial-card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateTestimonial() {
    const testimonial = testimonials[currentTestimonial];
    testimonialCard.innerHTML = `
        <div class="testimonial-text">${testimonial.text}</div>
        <div class="testimonial-author">
          <div class="author-avatar">
            <img src="${testimonial.image}" alt="${testimonial.name}">
          </div>
          <div class="author-info">
            <h4>${testimonial.name}</h4>
            <p>${testimonial.location}</p>
          </div>
        </div>
      `;

    // Add fade effect
    testimonialCard.classList.remove('fade-in');
    void testimonialCard.offsetWidth; // Trigger reflow
    testimonialCard.classList.add('fade-in');
}

nextBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
});

prevBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
});

// Auto-rotate testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
}, 6000);

// Form Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! Our travel expert will contact you within 24 hours.');
    contactForm.reset();
});

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Fade-in animation on scroll
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(element => {
    fadeInObserver.observe(element);
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href*=${sectionId}]`);

        if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            navLink.classList.add('active');
        }
    });
});

// Founder gallery slider
const founderSlides = [
    {
        src: 'assets/image1.jpg',
        caption: 'On-site with the Semdu Global team.'
    },
    {
        src: 'assets/image2.jpg',
        caption: 'Traveling to support clients overseas.'
    },
    {
        src: 'assets/image4.jpg',
        caption: 'At the workspace, coordinating Semdu Express deliveries.'
    }
];

let founderIndex = 0;
const founderImage = document.getElementById('founderImage');
const founderCaption = document.getElementById('founderCaption');
const founderPrev = document.getElementById('founderPrev');
const founderNext = document.getElementById('founderNext');

function updateFounderSlide() {
    const slide = founderSlides[founderIndex];
    founderImage.style.opacity = 0;
    founderCaption.style.opacity = 0;

    setTimeout(() => {
        founderImage.src = slide.src;
        founderCaption.textContent = slide.caption;
        founderImage.style.opacity = 1;
        founderCaption.style.opacity = 1;
    }, 200);
}

founderNext?.addEventListener('click', () => {
    founderIndex = (founderIndex + 1) % founderSlides.length;
    updateFounderSlide();
});

founderPrev?.addEventListener('click', () => {
    founderIndex = (founderIndex - 1 + founderSlides.length) % founderSlides.length;
    updateFounderSlide();
});
