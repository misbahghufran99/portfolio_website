document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Animate hamburger to X
        if (hamburger.classList.contains('active')) {
            hamburger.querySelector('.bar:nth-child(1)').style.transform = 'translateY(8px) rotate(45deg)';
            hamburger.querySelector('.bar:nth-child(2)').style.opacity = '0';
            hamburger.querySelector('.bar:nth-child(3)').style.transform = 'translateY(-8px) rotate(-45deg)';
        } else {
            hamburger.querySelector('.bar:nth-child(1)').style.transform = 'none';
            hamburger.querySelector('.bar:nth-child(2)').style.opacity = '1';
            hamburger.querySelector('.bar:nth-child(3)').style.transform = 'none';
        }
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                hamburger.querySelector('.bar:nth-child(1)').style.transform = 'none';
                hamburger.querySelector('.bar:nth-child(2)').style.opacity = '1';
                hamburger.querySelector('.bar:nth-child(3)').style.transform = 'none';
            }
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animate skill bars on scroll
    const skillCards = document.querySelectorAll('.skill-card');
    
    function animateSkillBars() {
        skillCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                const skillLevel = card.querySelector('.skill-level');
                const level = skillLevel.getAttribute('data-level');
                skillLevel.style.width = level + '%';
            }
        });
    }
    
    // Initial check
    animateSkillBars();
    
    // Check on scroll
    window.addEventListener('scroll', animateSkillBars);
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
});