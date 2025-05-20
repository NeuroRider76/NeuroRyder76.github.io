// Side Hustle Research Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
    
    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Tab functionality for Business Plan section
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding tab pane
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Filter functionality for Side Hustle Overview section
    const filterButtons = document.querySelectorAll('.filter-btn');
    const hustleGrid = document.querySelector('.hustle-grid');
    
    // Side hustle data
    const sideHustles = [
        {
            name: "Self-Publishing on Amazon",
            description: "Leveraging AI for content creation, cover design, and marketing of e-books and print-on-demand books.",
            income: "$500 - $5,000+",
            timeframe: "3-6+ months",
            passed: false
        },
        {
            name: "Faceless YouTube Channels",
            description: "Creating video content using AI for scripts, voiceovers, and visuals without showing one's face.",
            income: "$200 - $10,000+",
            timeframe: "6-12+ months",
            passed: false
        },
        {
            name: "Designing Etsy Printables Using AI",
            description: "Using AI image generation for unique digital products like planners, art, sold on Etsy.",
            income: "$200 - $2,000+",
            timeframe: "1-3 months",
            passed: true
        },
        {
            name: "AI-Powered Chatbot Development Services",
            description: "Developing and implementing AI chatbots for businesses to automate customer service and lead generation.",
            income: "$1,000 - $5,000+",
            timeframe: "1-2 months",
            passed: true
        },
        {
            name: "AI SEO Services",
            description: "Offering SEO consulting using AI tools for keyword research, content optimization, and analytics.",
            income: "$500 - $4,000+",
            timeframe: "1-2 months",
            passed: true
        },
        {
            name: "AI-Driven Social Media Management",
            description: "Managing social media accounts for businesses using AI for content creation, scheduling, and analytics.",
            income: "$300 - $1,000+",
            timeframe: "1-2 months",
            passed: true
        },
        {
            name: "Creating Courses to Teach Others How to Use AI",
            description: "Developing and selling online courses or workshops on AI tools and applications.",
            income: "$100 - $10,000+",
            timeframe: "2-4+ months",
            passed: false
        },
        {
            name: "AI Content Creation and Curation (Freelance)",
            description: "Writing articles, blog posts, marketing copy, or curating content with AI assistance for clients.",
            income: "$500 - $3,000+",
            timeframe: "1-2 months",
            passed: true
        },
        {
            name: "AI Video Editing and Production (Freelance)",
            description: "Offering video editing services enhanced by AI tools for faster turnaround and advanced effects.",
            income: "$500 - $4,000+",
            timeframe: "1-2 months",
            passed: true
        },
        {
            name: "AI-Generated Products (e.g., art, music)",
            description: "Creating and selling AI-generated art, music tracks, or other unique digital assets.",
            income: "$100 - $1,500+",
            timeframe: "2-4+ months",
            passed: false
        },
        {
            name: "AI Prompt Engineering (Freelance/Consulting)",
            description: "Crafting and optimizing prompts for AI models as a service to businesses or individuals.",
            income: "$1,000 - $5,000+",
            timeframe: "1-2 months",
            passed: true
        },
        {
            name: "AI Tutoring and Consulting",
            description: "Providing personalized coaching on AI tools or consulting services for AI integration in businesses.",
            income: "$500 - $4,000+",
            timeframe: "1-2 months",
            passed: true
        },
        {
            name: "AI for Print on Demand Services",
            description: "Using AI to create designs for merchandise (t-shirts, mugs) sold via print-on-demand platforms.",
            income: "$100 - $1,500+",
            timeframe: "1-3 months",
            passed: true
        },
        {
            name: "AI as a Professional Tool (Consulting for specific industries)",
            description: "Advising professionals in fields like law or medicine on integrating AI tools to improve workflows.",
            income: "$1,000 - $10,000+",
            timeframe: "2-4+ months",
            passed: false
        },
        {
            name: "Data Analysis and Customer Insights with AI",
            description: "Using AI tools to analyze business data and provide actionable insights to clients.",
            income: "$1,000 - $5,000+",
            timeframe: "1-2 months",
            passed: true
        },
        {
            name: "AI Programming and Development (Freelance small projects/gigs)",
            description: "Developing custom AI applications, fine-tuning models, or creating AI-powered tools on a freelance basis.",
            income: "$1,000 - $6,000+",
            timeframe: "1-2 months",
            passed: true
        },
        {
            name: "Selling AI-Generated Digital Products (General)",
            description: "Creating and selling a variety of AI-generated digital products like eBooks, music, or stock media.",
            income: "$200 - $2,000+",
            timeframe: "3-6+ months",
            passed: false
        },
        {
            name: "AI-Enhanced Virtual Assistant Services",
            description: "Offering administrative, technical, or creative assistance, augmented by AI tools for greater efficiency.",
            income: "$500 - $3,000+",
            timeframe: "1-2 months",
            passed: true
        },
        {
            name: "Creating AI-Generated Music for Commercial Use",
            description: "Composing and selling AI-generated music tracks for videos, commercials, or games.",
            income: "$100 - $1,000+",
            timeframe: "3-6+ months",
            passed: false
        },
        {
            name: "Developing AI Apps for Smartphones",
            description: "Creating and monetizing mobile applications that leverage AI functionalities.",
            income: "$0 - $10,000+",
            timeframe: "6-12+ months",
            passed: false
        }
    ];
    
    // Top side hustles data with automation details
    const topHustles = [
        {
            name: "Designing Etsy Printables Using AI",
            automation: 80,
            timeSaved: "10-15 hours per week",
            tools: ["Midjourney", "DALL-E 3", "ChatGPT", "Stable Diffusion"]
        },
        {
            name: "AI-Powered Chatbot Development Services",
            automation: 70,
            timeSaved: "8-12 hours per client project",
            tools: ["Dialogflow", "Microsoft Bot Framework", "Rasa", "ChatGPT"]
        },
        {
            name: "AI SEO Services",
            automation: 75,
            timeSaved: "10-20 hours per client per month",
            tools: ["SurferSEO", "Semrush", "Ahrefs", "ChatGPT"]
        },
        {
            name: "AI-Driven Social Media Management",
            automation: 65,
            timeSaved: "8-15 hours per client per month",
            tools: ["Hootsuite", "Buffer", "ChatGPT", "Midjourney"]
        },
        {
            name: "AI Content Creation and Curation (Freelance)",
            automation: 70,
            timeSaved: "5-10 hours per major article",
            tools: ["ChatGPT", "Jasper", "Perplexity AI", "Grammarly"]
        },
        {
            name: "AI Video Editing and Production (Freelance)",
            automation: 60,
            timeSaved: "4-8 hours per medium-length video",
            tools: ["Descript", "RunwayML", "Adobe Premiere Pro", "ElevenLabs"]
        },
        {
            name: "AI Prompt Engineering (Freelance/Consulting)",
            automation: 40,
            timeSaved: "2-4 hours per complex prompt set",
            tools: ["ChatGPT", "Claude", "Midjourney", "PromptPerfect"]
        },
        {
            name: "AI Tutoring and Consulting",
            automation: 55,
            timeSaved: "5-10 hours per client/student per month",
            tools: ["ChatGPT", "Gamma.app", "Calendly", "Excel AI"]
        },
        {
            name: "AI for Print on Demand Services",
            automation: 70,
            timeSaved: "10-15 hours per week",
            tools: ["Midjourney", "DALL-E 3", "Stable Diffusion", "Canva AI"]
        },
        {
            name: "Data Analysis and Customer Insights with AI",
            automation: 65,
            timeSaved: "10-20 hours per project",
            tools: ["Python/R libraries", "AutoML", "Tableau", "ChatGPT"]
        },
        {
            name: "AI Programming and Development (Freelance)",
            automation: 55,
            timeSaved: "5-15 hours per small project",
            tools: ["GitHub Copilot", "Amazon CodeWhisperer", "Tabnine", "ChatGPT"]
        },
        {
            name: "AI-Enhanced Virtual Assistant Services",
            automation: 65,
            timeSaved: "10-20 hours per client per month",
            tools: ["ChatGPT", "Microsoft 365 Copilot", "Otter.ai", "Calendly"]
        }
    ];
    
    // Populate side hustle cards
    function populateHustleCards(filter = 'all') {
        hustleGrid.innerHTML = '';
        
        sideHustles.forEach(hustle => {
            if (filter === 'all' || 
                (filter === 'passed' && hustle.passed) || 
                (filter === 'failed' && !hustle.passed)) {
                
                const card = document.createElement('div');
                card.className = 'hustle-card';
                card.innerHTML = `
                    <div class="hustle-card-header">
                        <h3>${hustle.name}</h3>
                    </div>
                    <div class="hustle-card-body">
                        <p>${hustle.description}</p>
                        <p><strong>Income Potential:</strong> ${hustle.income}</p>
                        <p><strong>Time to $1k/month:</strong> ${hustle.timeframe}</p>
                    </div>
                    <div class="hustle-card-footer">
                        <span class="hustle-status ${hustle.passed ? 'status-passed' : 'status-failed'}">
                            ${hustle.passed ? 'Passed Filter' : 'Didn\'t Pass'}
                        </span>
                    </div>
                `;
                
                hustleGrid.appendChild(card);
            }
        });
    }
    
    // Populate top hustles
    function populateTopHustles() {
        const topHustlesContainer = document.querySelector('.top-hustles-container');
        if (!topHustlesContainer) return;
        
        topHustlesContainer.innerHTML = '';
        
        topHustles.forEach(hustle => {
            const card = document.createElement('div');
            card.className = 'top-hustle-card';
            
            let toolsHTML = '';
            hustle.tools.forEach(tool => {
                toolsHTML += `<span class="tool-tag">${tool}</span>`;
            });
            
            card.innerHTML = `
                <div class="top-hustle-header">
                    <h3>${hustle.name}</h3>
                </div>
                <div class="top-hustle-body">
                    <p><strong>AI Automation:</strong> ${hustle.automation}%</p>
                    <div class="automation-meter">
                        <div class="automation-fill" style="width: ${hustle.automation}%"></div>
                    </div>
                    <p><strong>Time Saved:</strong> ${hustle.timeSaved}</p>
                    <p><strong>Key AI Tools:</strong></p>
                    <div class="tools-list">
                        ${toolsHTML}
                    </div>
                </div>
            `;
            
            topHustlesContainer.appendChild(card);
        });
    }
    
    // Initialize the side hustle grid and top hustles
    populateHustleCards();
    populateTopHustles();
    
    // Filter button functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter the cards
            const filter = this.getAttribute('data-filter');
            populateHustleCards(filter);
        });
    });
    
    // Form submission (prevent default for demo)
    const signupForm = document.querySelector('.signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('This is a demo form. In a real implementation, this would subscribe you to updates.');
        });
    }
    
    // Social share buttons (demo functionality)
    const shareButtons = document.querySelectorAll('.share-btn');
    shareButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert(`This is a demo. In a real implementation, this would share to ${this.textContent}.`);
        });
    });
    
    // Add simple comparison chart to spotlight section
    const comparisonChart = document.querySelector('.comparison-chart');
    if (comparisonChart) {
        // Create a simple bar chart using div elements
        comparisonChart.innerHTML = `
            <div style="width: 100%; height: 100%;">
                <div style="display: flex; flex-direction: column; height: 100%; justify-content: space-between;">
                    <div style="display: flex; align-items: center; margin-bottom: 20px;">
                        <span style="width: 120px; font-size: 0.8rem;">AI Content Creation</span>
                        <div style="flex-grow: 1; height: 20px; background-color: #f0f0f0; border-radius: 10px; overflow: hidden;">
                            <div style="width: 90%; height: 100%; background-color: var(--accent);"></div>
                        </div>
                        <span style="margin-left: 10px; font-weight: bold;">90%</span>
                    </div>
                    <div style="display: flex; align-items: center; margin-bottom: 20px;">
                        <span style="width: 120px; font-size: 0.8rem;">Virtual Assistant</span>
                        <div style="flex-grow: 1; height: 20px; background-color: #f0f0f0; border-radius: 10px; overflow: hidden;">
                            <div style="width: 75%; height: 100%; background-color: var(--primary);"></div>
                        </div>
                        <span style="margin-left: 10px; font-weight: bold;">75%</span>
                    </div>
                    <div style="display: flex; align-items: center; margin-bottom: 20px;">
                        <span style="width: 120px; font-size: 0.8rem;">SEO Services</span>
                        <div style="flex-grow: 1; height: 20px; background-color: #f0f0f0; border-radius: 10px; overflow: hidden;">
                            <div style="width: 70%; height: 100%; background-color: var(--primary);"></div>
                        </div>
                        <span style="margin-left: 10px; font-weight: bold;">70%</span>
                    </div>
                    <div style="display: flex; align-items: center;">
                        <span style="width: 120px; font-size: 0.8rem;">Etsy Printables</span>
                        <div style="flex-grow: 1; height: 20px; background-color: #f0f0f0; border-radius: 10px; overflow: hidden;">
                            <div style="width: 65%; height: 100%; background-color: var(--primary);"></div>
                        </div>
                        <span style="margin-left: 10px; font-weight: bold;">65%</span>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.hustle-card, .top-hustle-card, .advantage-card, .resource-item, .timeline-week');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial styles for animation
    const elementsToAnimate = document.querySelectorAll('.hustle-card, .top-hustle-card, .advantage-card, .resource-item, .timeline-week');
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on load
    animateOnScroll();
});
