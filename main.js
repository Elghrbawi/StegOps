       // Create animated circuit lines
        function createCircuitLines() {
            const bg = document.getElementById('bgAnimation');
            for (let i = 0; i < 10; i++) {
                const line = document.createElement('div');
                line.className = 'circuit-line';
                line.style.width = Math.random() * 300 + 100 + 'px';
                line.style.height = '2px';
                line.style.top = Math.random() * 100 + '%';
                line.style.animationDelay = Math.random() * 4 + 's';
                line.style.animationDuration = Math.random() * 3 + 3 + 's';
                bg.appendChild(line);
            }
        }
        
        // Create binary rain effect
        function createBinaryRain() {
            const rain = document.getElementById('binaryRain');
            for (let i = 0; i < 50; i++) {
                const char = document.createElement('div');
                char.className = 'binary-char';
                char.textContent = Math.random() > 0.5 ? '1' : '0';
                char.style.left = Math.random() * 100 + '%';
                char.style.animationDuration = Math.random() * 3 + 2 + 's';
                char.style.animationDelay = Math.random() * 5 + 's';
                rain.appendChild(char);
            }
        }
        
        // Mobile navigation toggle
        const navToggle = document.getElementById('navToggle');
        const navLinks = document.getElementById('navLinks');

        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Smooth scroll for navigation links
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    // Close mobile menu after clicking
                    navToggle.classList.remove('active');
                    navLinks.classList.remove('active');
                }
            });
        });

        // Button interactions
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('click', function() {
                console.log('Button clicked:', this.textContent);
            });
        });
        
        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.feature-card, .workflow-step, .tech-item').forEach(card => {
            observer.observe(card);
        });
        
        // Initialize
        createCircuitLines();
        createBinaryRain();