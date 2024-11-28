// Carousel functionality
let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');

function showCarousel() {
    carouselItems.forEach((item, index) => {
        item.classList.remove('active');
        if (index === currentIndex) {
            item.classList.add('active');
        }
    });
    currentIndex = (currentIndex + 1) % carouselItems.length;
}

setInterval(showCarousel, 3000);

// Search functionality
function performSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    if (!query) {
        alert('Please enter a search term.');
        return;
    }
    const sections = document.querySelectorAll('section');
    let found = false;

    sections.forEach((section) => {
        const sectionText = section.innerText.toLowerCase();
        if (sectionText.includes(query)) {
            alert(`Found: ${query} in ${section.querySelector('h2').innerText}`);
            found = true;
        }
    });

    if (!found) {
        alert('No matching information found.');
    }
}

// Button click functionality
function showInfo(section) {
    alert(`You are exploring the ${section} section!`);
}