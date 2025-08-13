function toggleDarkMode() {
    const body = document.body;
    const darkModeButton = document.getElementById('darkModeButton');

    // Toggle the "dark-mode" class on the body
    body.classList.toggle('dark-mode');

    // Change the button text
    if (body.classList.contains('dark-mode')) {
        darkModeButton.textContent = 'Light Mode';
    } else {
        darkModeButton.textContent = 'Dark Mode';
    }
}

let easterClickCount = 0;
const easterMessages = ["You already found the Easter Egg!","Seriously, stop clicking!","You found an Easter Egg!","This is getting ridiculous!","Okay, you win!","Just stop clicking already!","Fine, you win! Here's your prize: a virtual high-five! 🖐️","Congratulations! You are the master of Easter Eggs! 🎉","You clicked too many times, but here's a cookie 🍪 for your effort!","Are you looking for more secrets?","Persistence is key... or is it?","Still here? Impressive!","You must really like clicking.","Maybe there's another Easter Egg?","Nope, just this one.","Clicking is fun, isn't it?","You broke the record for most clicks!","Try refreshing for a surprise! (Just kidding)","You deserve a medal 🏅","Keep going, maybe something will happen.","Spoiler: Nothing new here.","You have reached click level 9000!","Achievement unlocked: Relentless Clicker","Is your finger tired yet?","You should probably stop now.","Still nothing new...","Maybe try clicking slower?","Or faster?","You are unstoppable!","Clicking champion of the world!","You found the secret... of endless messages.","Are you expecting fireworks?","Sorry, no fireworks here.","You win... again!","The button is getting dizzy.","You are a true explorer.","How many times will you click?","Infinite patience detected.","You are breaking the matrix!","404: New message not found.","You are now part of the click club.","The button appreciates your attention.","You are officially a click legend.","Is this your favorite pastime?","You could be doing anything else.","But here you are, clicking.","Maybe you should take a break?","Or not. Your choice!","You are a click superstar!","The button is running out of things to say.","You are a click wizard!","You have unlocked... nothing new.","Still going strong!","You are a click machine!","The button is impressed.","You are a click hero!","You have reached click enlightenment.","You are a click ninja!","You are a click master!","You are a click sensei!","You are a click guru!","You are a click overlord!","You are a click overlady!","You are a click overlordess!","You are a click overlordette!","You are a click overlordling!","You are a click overlordlet!","You are a click overlordlinglet!","You are a click overlordlinglette!","You are a click overlordlinglettette!","You are a click overlordlinglettettest!","You are a click overlordlinglettettestest!","You are a click overlordlinglettettestestest!",
                    "You are a click overlordlinglettettestestestest!","You are a click overlordlinglettettestestestestest!","You are a click overlordlinglettettestestestestestest!","You are a click overlordlinglettettestestestestestestest!","You are a click overlordlinglettettestestestestestestestest!","You are a click overlordlinglettettestestestestestestestestest!","You are a click overlordlinglettettestestestestestestestestestest!","You are a click overlordlinglettettestestestestestestestestestestest!","You are a click overlordlinglettettestestestestestestestestestestestest!","You are a click overlordlinglettettestestestestestestestestestestestestest!","You are a click overlordlinglettettestestestestestestestestestestestestestest!","You are a click overlordlinglettettestestestestestestestestestestestestestestest!","You are a click overlordlinglettettestestestestestestestestestestestestestestestest!","You are a click overlordlinglettettestestestestestestestestestestestestestestestestest!","You are a click overlordlinglettettestestestestestestestestestestestestestestestestestest!","You are a click overlordlinglettettestestestestestestestestestestestestestestestestestestest!","You are a click overlordlinglettettestestestestestestestestestestestestestestestestestestest!","You are a click overlordlinglettettestestestestestestestestestestestestestestestestestestestest!","You are a click overlordlinglettettestestestestestestestestestestestestestestestestestestestest!","You are a click overlordlinglettettestestestestestestestestestestestestestestestestestestestestest!","You are a click overlordlinglettettestestestestestestestestestestestestestestestestestestestestestest!","You are a click overlordlinglettettestestestestestestestestestestestestestestestestestestestestestestest!", "The button is out of messages, click again and I will no longer work"]
function easterEgg()
{
    easterClickCount++;
    if (easterClickCount === 5) {
        document.getElementById('easterEggButton').textContent = "You found an Easter Egg!";
    }
    else if (easterClickCount > 5) {
        document.getElementById('easterEggButton').textContent = easterMessages[easterClickCount - 6];
    }
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Only allow numbers and basic operators
        if (/^[\d+\-*/().\s]+$/.test(display.value)) {
            display.value = Function('"use strict";return (' + display.value + ')')();
        } else {
            display.value = 'Error';
        }
    } catch (error) {
        display.value = 'Error';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const letters = 'abcdefghijklmnoPqrstuvWxyz';
    const span = document.querySelector('#scramble_text');
    let intervalId;
    let restoreInterval;
    let originalText = '';
    let scrambleCount = 0;
    let animating = false;

    if (span) {
        originalText = span.innerText;

        span.onmouseover = event => {
            if (animating) return;
            animating = true;
            clearInterval(intervalId);
            clearInterval(restoreInterval);
            scrambleCount = 0;
            intervalId = setInterval(() => {
                scrambleCount++;
                event.target.innerText = event.target.innerText
                    .split("")
                    .map(letter => letters[Math.floor(Math.random() * 26)])
                    .join("");
                if (scrambleCount >= 20) {
                    clearInterval(intervalId);
                    let i = 0;
                    restoreInterval = setInterval(() => {
                        let current = event.target.innerText.split('');
                        for (let j = 0; j < current.length; j++) {
                            if (j <= i) {
                                current[j] = originalText[j];
                            } else {
                                current[j] = letters[Math.floor(Math.random() * 26)];
                            }
                        }
                        event.target.innerText = current.join('');
                        i++;
                        if (i >= originalText.length) {
                            clearInterval(restoreInterval);
                            event.target.innerText = originalText;
                            animating = false;
                        }
                    }, 30);
                }
            }, 20);
        };
    }

    // Carousel functionality
    initializeCarousels();
    
    // Initialize target-based carousels if no hash is present
    if (!window.location.hash) {
        // Set first slide of first carousel as active by default
        window.location.hash = '#carousel__slide1';
    }
});

function initializeCarousels() {
    // Hero carousel - manual control only
    const heroCarousel = document.getElementById('heroCarousel');
    const heroPrev = document.getElementById('heroPrev');
    const heroNext = document.getElementById('heroNext');

    if (heroCarousel && heroPrev && heroNext) {
        const slideWidth = 420; // Width of each slide
        const totalSlides = heroCarousel.children.length;
        
        // Start from middle slide (slide 5 out of 9) IMMEDIATELY without any scrolling
        const startSlide = Math.floor(totalSlides / 2);
        heroCarousel.style.scrollBehavior = 'auto'; // Disable smooth scrolling initially
        heroCarousel.scrollLeft = startSlide * slideWidth; // Set position immediately
        
        // Re-enable smooth scrolling after initial positioning
        setTimeout(() => {
            heroCarousel.style.scrollBehavior = 'smooth';
        }, 50);

        // Function to scroll to next slide
        const scrollNext = () => {
            const currentScroll = heroCarousel.scrollLeft;
            const maxScroll = heroCarousel.scrollWidth - heroCarousel.clientWidth;
            
            if (currentScroll >= maxScroll - 10) { // Near the end, loop back to start
                heroCarousel.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                heroCarousel.scrollBy({ left: slideWidth, behavior: 'smooth' });
            }
        };

        // Function to scroll to previous slide
        const scrollPrev = () => {
            const currentScroll = heroCarousel.scrollLeft;
            
            if (currentScroll <= 10) { // Near the start, loop to end
                const maxScroll = heroCarousel.scrollWidth - heroCarousel.clientWidth;
                heroCarousel.scrollTo({ left: maxScroll, behavior: 'smooth' });
            } else {
                heroCarousel.scrollBy({ left: -slideWidth, behavior: 'smooth' });
            }
        };

        // Event listeners for buttons
        heroPrev.addEventListener('click', () => {
            scrollPrev();
        });

        heroNext.addEventListener('click', () => {
            scrollNext();
        });
    }

    // Initialize section carousels (like hero but manual control)
    initializeSectionCarousel('internshipCarousel', 'internshipPrev', 'internshipNext');
    initializeSectionCarousel('airshowsCarousel', 'airshowsPrev', 'airshowsNext');
    initializeSectionCarousel('projectsCarousel', 'projectsPrev', 'projectsNext');

    // Regular carousels (no auto-scroll)
    const carousels = document.querySelectorAll('.scroll-carousel');
    
    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel__track');
        const prevButton = carousel.querySelector('.carousel__button--prev');
        const nextButton = carousel.querySelector('.carousel__button--next');

        if (track && prevButton && nextButton) {
            prevButton.addEventListener('click', () => {
                track.scrollBy({ left: -320, behavior: 'smooth' });
            });

            nextButton.addEventListener('click', () => {
                track.scrollBy({ left: 320, behavior: 'smooth' });
            });

            // Add touch/mouse wheel support
            track.addEventListener('wheel', (e) => {
                if (e.deltaY !== 0) {
                    e.preventDefault();
                    track.scrollBy({ left: e.deltaY, behavior: 'smooth' });
                }
            });
        }
    });
}

// Function to initialize section carousels (like hero but manual control)
function initializeSectionCarousel(carouselId, prevBtnId, nextBtnId) {
    const carousel = document.getElementById(carouselId);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);

    if (!carousel || !prevBtn || !nextBtn) return;

    let currentSlide = 0;
    const slides = carousel.children;
    const totalSlides = slides.length;

    function showSlide(index) {
        const translateX = -index * (100 / totalSlides);
        carousel.style.transform = `translateX(${translateX}%)`;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    // Set up navigation buttons
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Initialize first slide
    showSlide(0);
}

// Navigation function for target-based carousels with looping
function navigateCarousel(slideIdPrefix, totalSlides, direction, startIndex = 1) {
    // Get current slide from URL hash or default to first slide
    let currentSlide = startIndex;
    
    const currentHash = window.location.hash;
    if (currentHash) {
        const slideId = currentHash.substring(1); // Remove the #
        if (slideId.startsWith(slideIdPrefix)) {
            const slideNumber = parseInt(slideId.replace(slideIdPrefix, ''));
            if (!isNaN(slideNumber) && slideNumber >= startIndex && slideNumber < startIndex + totalSlides) {
                currentSlide = slideNumber;
            }
        }
    }
    
    // Calculate next/previous slide with looping
    let targetSlide;
    if (direction === 1) { // Next
        targetSlide = currentSlide + 1;
        if (targetSlide >= startIndex + totalSlides) {
            targetSlide = startIndex; // Loop back to first slide
        }
    } else { // Previous
        targetSlide = currentSlide - 1;
        if (targetSlide < startIndex) {
            targetSlide = startIndex + totalSlides - 1; // Loop to last slide
        }
    }
    
    console.log(`Current: ${currentSlide}, Target: ${targetSlide}, Direction: ${direction}`); // Debug info
    
    // Navigate to the target slide
    window.location.hash = '#' + slideIdPrefix + targetSlide;
}