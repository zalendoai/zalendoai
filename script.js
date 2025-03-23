// Initialize AOS
document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });

  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.createElement('div');
  mobileNav.className = 'mobile-nav';
  
  // Create overlay
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  document.body.appendChild(overlay);
  
  // Clone nav links and add to mobile menu
  const navLinks = document.querySelector('.nav-links').cloneNode(true);
  const mobileLinks = navLinks.querySelectorAll('a');
  
  // Create mobile nav
  document.body.appendChild(mobileNav);
  mobileNav.appendChild(navLinks);
  
  // Add download button to mobile nav
  const ctaBtn = document.querySelector('.nav-cta').cloneNode(true);
  mobileNav.appendChild(ctaBtn);
  
  // Toggle mobile menu
  menuToggle.addEventListener('click', function() {
    mobileNav.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  });
  
  // Close mobile menu when clicking outside
  overlay.addEventListener('click', function() {
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
  
  // Close mobile menu when clicking a link
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileNav.classList.remove('active');
      overlay.classList.remove('active');
      document.body.classList.remove('no-scroll');
    });
  });

  // FAQ Toggles
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // Close other open FAQs
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current FAQ
      item.classList.toggle('active');
    });
  });

  // Testimonial Slider
  const testimonialSlider = document.querySelector('.testimonial-slider');
  const testimonialSlides = document.querySelectorAll('.testimonial-slide');
  const testimonialDots = document.querySelectorAll('.testimonial-dots span');
  
  if (testimonialSlider && testimonialDots.length > 0) {
    let currentSlide = 0;
    
    // Set click handlers for dots
    testimonialDots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        goToSlide(index);
      });
    });
    
    // Function to go to a specific slide
    function goToSlide(slideIndex) {
      testimonialSlider.scrollTo({
        left: testimonialSlides[slideIndex].offsetLeft,
        behavior: 'smooth'
      });
      
      // Update active dot
      testimonialDots.forEach(dot => dot.classList.remove('active'));
      testimonialDots[slideIndex].classList.add('active');
      
      currentSlide = slideIndex;
    }
    
    // Handle scroll events to update dots
    testimonialSlider.addEventListener('scroll', () => {
      const scrollPosition = testimonialSlider.scrollLeft;
      
      testimonialSlides.forEach((slide, index) => {
        if (Math.abs(scrollPosition - slide.offsetLeft) < 50) {
          testimonialDots.forEach(dot => dot.classList.remove('active'));
          testimonialDots[index].classList.add('active');
          currentSlide = index;
        }
      });
    });
    
    // Auto-scroll functionality
    let slideInterval = setInterval(() => {
      currentSlide = (currentSlide + 1) % testimonialSlides.length;
      goToSlide(currentSlide);
    }, 5000);
    
    // Pause auto-scroll on hover
    testimonialSlider.addEventListener('mouseenter', () => {
      clearInterval(slideInterval);
    });
    
    testimonialSlider.addEventListener('mouseleave', () => {
      slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % testimonialSlides.length;
        goToSlide(currentSlide);
      }, 5000);
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerOffset = 80; // Adjust based on your header height
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Back to top button
  const backToTopBtn = document.querySelector('.back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('active');
      } else {
        backToTopBtn.classList.remove('active');
      }
    });
    
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
