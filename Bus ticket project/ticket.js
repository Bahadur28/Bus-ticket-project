// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on links
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Scroll to booking section
function scrollToBooking() {
    document.getElementById('booking').scrollIntoView({
        behavior: 'smooth'
    });
}

// Sample bus data
const busData = [
    {
        id: 1,
        name: "গ্রীন লাইন",
        type: "এসি",
        from: "ঢাকা",
        to: "চট্টগ্রাম",
        departure: "২০:০০",
        arrival: "০২:০০",
        price: ৭০০,
        seats: ৩৫
    },
    {
        id: 2,
        name: "শাহাগ",
        type: "নন-এসি",
        from: "ঢাকা",
        to: "চট্টগ্রাম",
        departure: "২১:৩০",
        arrival: "০৩:৩০",
        price: ৫৫০,
        seats: ৪০
    },
    {
        id: 3,
        name: "হানিফ",
        type: "এসি",
        from: "ঢাকা",
        to: "চট্টগ্রাম",
        departure: "২২:০০",
        arrival: "০৪:০০",
        price: ৬৫০,
        seats: ৩০
    },
    {
        id: 4,
        name: "ইনা",
        type: "এসি",
        from: "ঢাকা",
        to: "চট্টগ্রাম",
        departure: "১৯:৩০",
        arrival: "০১:৩০",
        price: ৮০০,
        seats: ২৫
    }
];

// Search buses function
function searchBuses() {
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;
    const passengers = document.getElementById('passengers').value;

    if (!from || !to || !date) {
        alert('দয়া করে সব তথ্য পূরণ করুন');
        return;
    }

    // Show buses section
    document.getElementById('buses').style.display = 'block';

    // Filter buses based on selection (in real app, this would be API call)
    const filteredBuses = busData.filter(bus => 
        bus.from.toLowerCase() === from && bus.to.toLowerCase() === to
    );

    displayBuses(filteredBuses);
    
    // Scroll to buses section
    document.getElementById('buses').scrollIntoView({
        behavior: 'smooth'
    });
}

// Display buses function
function displayBuses(buses) {
    const busesList = document.getElementById('busesList');
    busesList.innerHTML = '';

    if (buses.length === 0) {
        busesList.innerHTML = '<p class="no-buses">কোন বাস পাওয়া যায়নি। অনুগ্রহ করে অন্য রুট চেষ্টা করুন।</p>';
        return;
    }

    buses.forEach(bus => {
        const busCard = document.createElement('div');
        busCard.className = 'bus-card';
        busCard.innerHTML = `
            <div class="bus-info">
                <h3>${bus.name} - ${bus.type}</h3>
                <div class="bus-details">
                    <span><i class="fas fa-clock"></i> ${bus.departure} - ${bus.arrival}</span>
                    <span><i class="fas fa-chair"></i> ${bus.seats} সিট খালি</span>
                </div>
            </div>
            <div class="bus-price">
                <div class="price">${bus.price} টাকা</div>
                <button class="book-btn" onclick="bookTicket(${bus.id})">বুক করুন</button>
            </div>
        `;
        busesList.appendChild(busCard);
    });
}

// Book ticket function
function bookTicket(busId) {
    const bus = busData.find(b => b.id === busId);
    if (bus) {
        alert(`টিকিট বুকিং সফল!\n\nবাস: ${bus.name}\nভাড়া: ${bus.price} টাকা\nসময়: ${bus.departure}`);
        // In real application, redirect to payment page
    }
}

// Login Modal functionality
const loginBtn = document.querySelector('.login-btn');
const modal = document.getElementById('loginModal');
const closeBtn = document.querySelector('.close');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Form submission
document.querySelector('.login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // In real application, this would be API call
    alert('লগইন সফল!');
    modal.style.display = 'none';
    this.reset();
});

// Set minimum date to today
const dateInput = document.getElementById('date');
const today = new Date().toISOString().split('T')[0];
dateInput.min = today;

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(44, 62, 80, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#2c3e50';
        navbar.style.backdropFilter = 'none';
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    console.log('বাস টিকিট বুকিং সাইট লোড হয়েছে');
});