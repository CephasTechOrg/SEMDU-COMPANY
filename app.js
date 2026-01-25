
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
        text: 'Semdu handled my documents, visa, and flights without a hitch. Clear communication and quick turnaround—exactly what busy travelers need.',
        name: 'Samuel Aboakye',
        location: 'Business Travel Support',
        image: 'https://images.unsplash.com/photo-1565884280295-98eb83e41c65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBtYW58ZW58MHx8MHx8fDA%3D'
    },
    {
        text: 'They managed my itinerary, hotel, and visa updates flawlessly. The team made every leg of my trip feel effortless.',
        name: 'Felica Serwaa',
        location: 'Multi-country Trip',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsmt_rEqSaDu2qINSjbqx9SJHFKVhTiiDEng&s'
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
    alert('Thank you for your message! Our team at SEMDU Group Ltd will contact you within 24 hours.');
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

// Service detail modal
const serviceDetails = {
    land: {
        title: 'Land Acquisition',
        summary: 'Strategic land identification, verification, and acquisition support for investors and developers.',
        points: [
            'Thorough land search and verification',
            'Documentation and title deed processing',
            'Legal compliance and due diligence support'
        ],
        timeline: 'Land identification: 1-4 weeks depending on location'
    },
    media: {
        title: 'Media Services',
        summary: 'Creative content production, branding, and digital media solutions for businesses and individuals.',
        points: [
            'Professional photography and videography',
            'Brand identity and graphic design',
            'Social media management and content creation'
        ],
        timeline: 'Project scoping: 2-5 days'
    },
    flight: {
        title: 'Flight Ticket Booking',
        summary: 'Flexible itineraries, best-rate monitoring, and proactive rebooking support for smooth travel.',
        points: [
            '24/7 fare watch and reroute assistance',
            'Multi-city and complex routes handled',
            'Corporate and family group coordination'
        ],
        timeline: 'Typical turnaround: 1-3 hours for confirmed options'
    },
    visa: {
        title: 'Visa Processing',
        summary: 'Embassy-ready applications with document prep, interview coaching, and status follow-ups.',
        points: [
            'Document checklist and bank-proof guidance',
            'Mock interviews and officer-style questions',
            'Dedicated handler for your application'
        ],
        timeline: 'Preparation: 3-7 days - Embassy timelines vary'
    },
    hotel: {
        title: 'Hotel & Vacation Packages',
        summary: 'Curated stays, transfers, and activities with options across luxury and budget tiers.',
        points: [
            'Airport pickups and local transport arranged',
            'Activity planning with vetted partners',
            'Group and family-friendly packages'
        ],
        timeline: 'Itinerary design: 2-4 days'
    },
    documents: {
        title: 'Travel Document Assistance',
        summary: 'Clean, compliant paperwork for passports, sponsor letters, proof of funds, and insurance.',
        points: [
            'Document drafting and verification',
            'Bank statement preparation guidance',
            'Insurance and cover letters arranged'
        ],
        timeline: 'Document set-up: 1-3 days'
    },
    delivery: {
        title: 'SEMDU Delivery (Ghana)',
        summary: 'Nationwide delivery for documents, parcels, and travel essentials with priority handling.',
        points: [
            'Same-day and next-day within major cities',
            'Live tracking and secure handover protocols',
            '20% weekend discount on all deliveries'
        ],
        timeline: 'Coverage: Across Ghana - Priority same-day available'
    },
    farming: {
        title: 'Sustainable Farming',
        summary: 'Regenerative practices that protect soil, animals, and communities while keeping produce traceable.',
        points: [
            'Soil-friendly crop rotation and cover crops',
            'Ethical animal care and feed transparency',
            'Local market partnerships for stable supply'
        ],
        timeline: 'Seasonal planning with weekly supply updates'
    },
    estate: {
        title: 'Real Estate Solutions',
        summary: 'Tenant-ready spaces, investor research, and due diligence support with SEMDU Group Ltd\'s local expertise.',
        points: [
            'Site selection and market intelligence',
            'Documentation, permits, and compliance checks',
            'Maintenance and tenant experience support'
        ],
        timeline: 'Site shortlist: 3-10 days depending on scope'
    }
};

const modalOverlay = document.getElementById('serviceModal');
const modalTitle = document.getElementById('serviceModalTitle');
const modalSummary = document.getElementById('serviceModalSummary');
const modalPoints = document.getElementById('serviceModalPoints');
const modalTimeline = document.getElementById('serviceModalTimeline');
const modalClose = document.getElementById('serviceModalClose');
const modalBackdrop = document.getElementById('serviceModalBackdrop');

function openServiceModal(key) {
    const data = serviceDetails[key];
    if (!data || !modalOverlay) return;

    modalTitle.textContent = data.title;
    modalSummary.textContent = data.summary;
    modalPoints.innerHTML = data.points.map(point => `<li>${point}</li>`).join('');
    modalTimeline.textContent = data.timeline;

    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
    modalClose.focus();
}

function closeServiceModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
}

document.querySelectorAll('.service-detail-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const key = btn.getAttribute('data-service');
        openServiceModal(key);
    });
});

modalClose?.addEventListener('click', closeServiceModal);
modalBackdrop?.addEventListener('click', closeServiceModal);

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeServiceModal();
    }
});

// Founder gallery slider
const founderSlides = [
    {
        src: 'assets/image1.jpg',
        caption: 'On-site with the SEMDU Group Ltd team.'
    },
    {
        src: 'assets/image2.jpg',
        caption: 'Building partnerships and expanding networks.'
    },
    {
        src: 'assets/image4.jpg',
        caption: 'Coordinating operations across all business sectors.'
    },
    {
        src: 'assets/opoku.jpeg',
        caption: 'Emmanuel Agyemang Opoku - Leading with vision and integrity.'
    },
    {
        src: 'assets/opoku1.jpeg',
        caption: 'Expanding our reach across the region.'
    },
    {
        src: 'assets/opoku2.jpeg',
        caption: 'Connecting with clients and partners.'
    },
    {
        src: 'assets/oopo.jpeg',
        caption: 'Driving growth across all business sectors.'
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





