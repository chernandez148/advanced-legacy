document.addEventListener("DOMContentLoaded", function() {
    // Select all the elements to observe
    const titleContainer = document.querySelector('.title-container');

    const info = document.querySelector('.info');
    const infoLeft = document.querySelector('.info-left');
    const infoRight = document.querySelector('.info-right');

    const about = document.querySelector('.about');
    const aboutLeft = document.querySelector('.about-left');
    const aboutRight = document.querySelector('.about-right');

    const whatWeDo = document.querySelector('.what-we-do');
    const whatWeDoLeft = document.querySelector('.what-we-do-left');
    const whatWeDoRight = document.querySelector('.what-we-do-right');

    const portfolio = document.querySelector('.portfolio');
    const portfolioTop = document.querySelector('.top'); // Assuming you meant the left section
    const portfolioMiddle = document.querySelector('.middle'); // Assuming you meant the right section

    // Function to handle visibility
    const handleVisibility = (entry, selectorLeft, selectorRight) => {
        if (entry.isIntersecting) {
            selectorLeft.style.left = "0"; // Show the left element
            selectorLeft.style.opacity = 1;
            selectorRight.style.right = "0"; // Show the right element
            selectorRight.style.opacity = 1;
        } else {
            selectorLeft.style.left = "-200px"; // Hide the left element
            selectorLeft.style.opacity = 0;
            selectorRight.style.right = "-200px"; // Hide the right element
            selectorRight.style.opacity = 0;
        }
    };

    // Options for the Intersection Observer
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.25 // Trigger when 25% of the element is visible
    };

    // Create the Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Check visibility for each element
            if (entry.target === info) {
                handleVisibility(entry, infoLeft, infoRight); // Handle info visibility
            } else if (entry.target === about) {
                handleVisibility(entry, aboutLeft, aboutRight); // Handle about visibility
            } else if (entry.target === whatWeDo) {
                handleVisibility(entry, whatWeDoLeft, whatWeDoRight); // Handle what we do visibility
            } else if (entry.target === portfolio) {
                handleVisibility(entry, portfolioTop, portfolioMiddle); // Handle portfolio visibility
            }
        });
    }, options);

    // Start observing each element
    observer.observe(info);
    observer.observe(about);
    observer.observe(whatWeDo);
    observer.observe(portfolio);

    // Optional: Add a timeout to delay the animation slightly after page load
    setTimeout(() => {
        titleContainer.classList.add('visible');
    }, 100); // Adjust the timeout as needed
});
