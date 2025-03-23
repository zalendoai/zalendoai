---
layout: default
title: mkuufunzi Homework - Your Personal Homework Einstein!
---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ page.title }}</title>
    <link rel="stylesheet" href="{{ 'stylesheet.css' | relative_url }}">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" />
</head>
<body>
    <!-- Header Section -->
    <header class="hero">
        <div class="hero-background"></div>
        <nav class="navbar">
            <div class="logo">mkuufunzi</div>
            <div class="nav-links">
                <a href="#features">Features</a>
                <a href="#how-it-works">How It Works</a>
                <a href="#pricing">Pricing</a>
            </div>
            <a href="#download" class="cta-btn nav-cta">Download Now</a>
            <div class="menu-toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
        <div class="hero-content">
            <div class="hero-text" data-aos="fade-right">
                <h1>Your Personal Einstein for Homework</h1>
                <p>Finish your CBC, high school, or uni assignments in minutes with mkuufunzi - Kenya's affordable AI tutor!</p>
                <a href="#download" class="cta-btn pulse">Get Started - Ksh 10 Only!</a>
            </div>
            <div class="hero-image" data-aos="fade-left">
                <img src="{{ '/assets/images/splash_1.png' | relative_url }}" alt="Student using mkuufunzi app">
            </div>
        </div>
    </header>

    <!-- Features Section -->
    <section class="features" id="features">
        <div class="container">
            <h2 data-aos="fade-up">Why Students Love mkuufunzi</h2>
            <div class="feature-grid">
                <div class="feature-card" data-aos="fade-up" data-aos-delay="100">
                    <div class="feature-icon">
                        <img src="{{ '/assets/images/chat-icon.svg' | relative_url }}" alt="Chat Icon">
                    </div>
                    <h3>Ask Anything, Anytime</h3>
                    <p>Type, snap a pic, or speak your question. Get simple, step-by-step tutorials instantly.</p>
                </div>
                <div class="feature-card" data-aos="fade-up" data-aos-delay="200">
                    <div class="feature-icon">
                        <img src="{{ '/assets/images/scan-icon.svg' | relative_url }}" alt="Scan Icon">
                    </div>
                    <h3>Scan Past Papers</h3>
                    <p>Upload a past exam paper, and tackle each question with interactive help.</p>
                </div>
                <div class="feature-card" data-aos="fade-up" data-aos-delay="300">
                    <div class="feature-icon">
                        <img src="{{ '/assets/images/course-icon.svg' | relative_url }}" alt="Crash Course Icon">
                    </div>
                    <h3>Crash Courses</h3>
                    <p>Master any topic with a custom outline tailored just for you.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials">
        <div class="container">
            <h2 data-aos="fade-up">What Students Say</h2>
            <div class="testimonial-slider">
                <div class="testimonial-slide" data-aos="fade-up">
                    <div class="testimonial-content">
                        <p>"mkuufunzi helped me improve my grades from C to A- in just one term. The explanations are so clear!"</p>
                        <div class="testimonial-author">
                            <img src="{{ '/assets/images/student1.jpg' | relative_url }}" alt="Student">
                            <div>
                                <h4>Jane Otieno</h4>
                                <p>Form 3 Student, Nairobi</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="testimonial-slide" data-aos="fade-up" data-aos-delay="100">
                    <div class="testimonial-content">
                        <p>"The app explained calculus better than my lecturer. Now I actually understand what I'm doing!"</p>
                        <div class="testimonial-author">
                            <img src="{{ '/assets/images/student2.jpg' | relative_url }}" alt="Student">
                            <div>
                                <h4>Kevin Mwangi</h4>
                                <p>Engineering Student, UoN</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="testimonial-dots">
                <span class="active"></span>
                <span></span>
            </div>
        </div>
    </section>

    <!-- How It Works Section -->
    <section class="how-it-works" id="how-it-works">
        <div class="container">
            <h2 data-aos="fade-up">How mkuufunzi Saves Your Day</h2>
            <div class="steps">
                <div class="step" data-aos="fade-right">
                    <span>1</span>
                    <div>
                        <h3>Ask Your Question</h3>
                        <p>Type it in, snap a photo of your textbook, or use voice commands - whatever's easiest!</p>
                    </div>
                </div>
                <div class="step" data-aos="fade-right" data-aos-delay="100">
                    <span>2</span>
                    <div>
                        <h3>Get Clear Answers</h3>
                        <p>Receive simple, step-by-step explanations with diagrams and examples.</p>
                    </div>
                </div>
                <div class="step" data-aos="fade-right" data-aos-delay="200">
                    <span>3</span>
                    <div>
                        <h3>Pay As You Go</h3>
                        <p>No subscriptions - just pay with M-PESA (Ksh 10-40 for 20 questions)</p>
                    </div>
                </div>
            </div>
            <div class="demo-video" data-aos="zoom-in">
                <div class="video-container">
                    <img src="{{ '/assets/images/app-demo.jpg' | relative_url }}" alt="App Demo">
                    <div class="play-button">
                        <span></span>
                    </div>
                </div>
            </div>
            <a href="#download" class="cta-btn" data-aos="fade-up">Try It Now</a>
        </div>
    </section>

    <!-- Subject Coverage Section -->
    <section class="subjects">
        <div class="container">
            <h2 data-aos="fade-up">We Cover All Subjects</h2>
            <div class="subject-grid" data-aos="fade-up">
                <div class="subject-item">
                    <div class="subject-icon">
                        <img src="{{ '/assets/images/math-icon.svg' | relative_url }}" alt="Mathematics">
                    </div>
                    <p>Mathematics</p>
                </div>
                <div class="subject-item">
                    <div class="subject-icon">
                        <img src="{{ '/assets/images/physics-icon.svg' | relative_url }}" alt="Physics">
                    </div>
                    <p>Physics</p>
                </div>
                <div class="subject-item">
                    <div class="subject-icon">
                        <img src="{{ '/assets/images/chemistry-icon.svg' | relative_url }}" alt="Chemistry">
                    </div>
                    <p>Chemistry</p>
                </div>
                <div class="subject-item">
                    <div class="subject-icon">
                        <img src="{{ '/assets/images/biology-icon.svg' | relative_url }}" alt="Biology">
                    </div>
                    <p>Biology</p>
                </div>
                <div class="subject-item">
                    <div class="subject-icon">
                        <img src="{{ '/assets/images/english-icon.svg' | relative_url }}" alt="English">
                    </div>
                    <p>English</p>
                </div>
                <div class="subject-item">
                    <div class="subject-icon">
                        <img src="{{ '/assets/images/history-icon.svg' | relative_url }}" alt="History">
                    </div>
                    <p>History</p>
                </div>
                <div class="subject-item">
                    <div class="subject-icon">
                        <img src="{{ '/assets/images/geography-icon.svg' | relative_url }}" alt="Geography">
                    </div>
                    <p>Geography</p>
                </div>
                <div class="subject-item">
                    <div class="subject-icon">
                        <img src="{{ '/assets/images/more-icon.svg' | relative_url }}" alt="More Subjects">
                    </div>
                    <p>And More!</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Pricing Section -->
    <section class="pricing" id="pricing">
        <div class="container">
            <h2 data-aos="fade-up">Affordable Learning for Every Student</h2>
            <p data-aos="fade-up">Cheaper than a private tutor, always in your pocket.</p>
            <div class="pricing-cards">
                <div class="pricing-card basic" data-aos="fade-up" data-aos-delay="100">
                    <div class="pricing-header">
                        <h3>Starter Pack</h3>
                        <div class="price">
                            <span class="currency">Ksh</span>
                            <span class="amount">10</span>
                        </div>
                        <p>Perfect for quick homework help</p>
                    </div>
                    <div class="pricing-features">
                        <div class="feature-item">
                            <span class="feature-check">✓</span>
                            <p>5 AI tutor questions</p>
                        </div>
                        <div class="feature-item">
                            <span class="feature-check">✓</span>
                            <p>Photo scanning</p>
                        </div>
                        <div class="feature-item">
                            <span class="feature-check">✓</span>
                            <p>Step-by-step solutions</p>
                        </div>
                    </div>
                    <a href="#download" class="pricing-btn">Get Started</a>
                </div>
                <div class="pricing-card premium" data-aos="fade-up" data-aos-delay="200">
                    <div class="popular-tag">Most Popular</div>
                    <div class="pricing-header">
                        <h3>Value Pack</h3>
                        <div class="price">
                            <span class="currency">Ksh</span>
                            <span class="amount">40</span>
                        </div>
                        <p>For serious study sessions</p>
                    </div>
                    <div class="pricing-features">
                        <div class="feature-item">
                            <span class="feature-check">✓</span>
                            <p>20 AI tutor questions</p>
                        </div>
                        <div class="feature-item">
                            <span class="feature-check">✓</span>
                            <p>Photo scanning</p>
                        </div>
                        <div class="feature-item">
                            <span class="feature-check">✓</span>
                            <p>Step-by-step solutions</p>
                        </div>
                        <div class="feature-item">
                            <span class="feature-check">✓</span>
                            <p>Crash course generator</p>
                        </div>
                        <div class="feature-item">
                            <span class="feature-check">✓</span>
                            <p>Practice quiz generator</p>
                        </div>
                    </div>
                    <a href="#download" class="pricing-btn">Best Value</a>
                </div>
            </div>
            <div class="payment-methods" data-aos="fade-up">
                <p>Pay easily with:</p>
                <div class="payment-icons">
                    <img src="{{ '/assets/images/mpesa-logo.png' | relative_url }}" alt="M-PESA">
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq">
        <div class="container">
            <h2 data-aos="fade-up">Frequently Asked Questions</h2>
            <div class="faq-list">
                <div class="faq-item" data-aos="fade-up">
                    <div class="faq-question">
                        <h3>How is mkuufunzi different from other homework apps?</h3>
                        <span class="faq-toggle">+</span>
                    </div>
                    <div class="faq-answer">
                        <p>mkuufunzi is specifically designed for Kenyan students and follows CBC, KCSE, and local university curricula. We offer M-PESA payment and affordable pricing tailored to local needs.</p>
                    </div>
                </div>
                <div class="faq-item" data-aos="fade-up">
                    <div class="faq-question">
                        <h3>Will using mkuufunzi help me learn or just give me answers?</h3>
                        <span class="faq-toggle">+</span>
                    </div>
                    <div class="faq-answer">
                        <p>mkuufunzi focuses on learning, not just answers. We provide step-by-step explanations that help you understand concepts, not just memorize solutions.</p>
                    </div>
                </div>
                <div class="faq-item" data-aos="fade-up">
                    <div class="faq-question">
                        <h3>Do I need internet to use mkuufunzi?</h3>
                        <span class="faq-toggle">+</span>
                    </div>
                    <div class="faq-answer">
                        <p>Yes, you need an internet connection to use mkuufunzi. We've optimized the app to use minimal data, but it does require connectivity to provide answers.</p>
                    </div>
                </div>
                <div class="faq-item" data-aos="fade-up">
                    <div class="faq-question">
                        <h3>Can I use mkuufunzi for KCSE revision?</h3>
                        <span class="faq-toggle">+</span>
                    </div>
                    <div class="faq-answer">
                        <p>Absolutely! mkuufunzi is perfect for KCSE revision. You can upload past papers, get custom study guides, and practice with auto-generated quizzes based on exam topics.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section" id="download">
        <div class="container">
            <h2 data-aos="fade-up">Join Kenya's Smartest Students</h2>
            <p data-aos="fade-up">With mkuufunzi, learning is fast, fun, and affordable. Powering Africa's future, one student at a time.</p>
            <div class="store-links" data-aos="fade-up">
                <a href="#" class="store-btn">
                    <img src="{{ '/assets/images/google-play.png' | relative_url }}" alt="Google Play">
                </a>
                <a href="#" class="store-btn">
                    <img src="{{ '/assets/images/app-store.png' | relative_url }}" alt="App Store">
                </a>
            </div>
            <div class="app-screenshot" data-aos="zoom-in">
                <img src="{{ '/assets/images/app-screenshot.png' | relative_url }}" alt="App Screenshot">
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                    <div class="logo">mkuufunzi</div>
                    <p>Your personal homework Einstein</p>
                </div>
                <div class="footer-links">
                    <div class="footer-column">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Partner with Us</a></li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-social">
                    <h4>Follow Us</h4>
                    <div class="social-icons">
                        <a href="#" class="social-icon">
                            <img src="{{ '/assets/images/twitter-icon.svg' | relative_url }}" alt="Twitter">
                        </a>
                        <a href="#" class="social-icon">
                            <img src="{{ '/assets/images/instagram-icon.svg' | relative_url }}" alt="Instagram">
                        </a>
                        <a href="#" class="social-icon">
                            <img src="{{ '/assets/images/facebook-icon.svg' | relative_url }}" alt="Facebook">
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 ZalendoAI. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
    <script src="{{ '/assets/js/main.js' | relative_url }}"></script>
</body>
</html>
