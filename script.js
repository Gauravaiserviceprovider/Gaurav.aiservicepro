// ==========================================
// ⚙️ CONFIGURATION
// ==========================================
const config = {
    // Aapka Sahi WhatsApp Number (91 ke sath)
    whatsapp_number: "918989925852" 
};

// ==========================================
// 🚀 LOGIC
// ==========================================

// 1. Mobile Menu Toggle
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    if(nav) nav.classList.toggle('active');
}

// 2. Payment Page Logic
let currentAmount = 51;

function setAmount(amount) {
    currentAmount = amount;
    
    // Text Update
    const displayEl = document.getElementById('displayAmount');
    if(displayEl) displayEl.innerText = "₹" + amount;
    
    // Button Highlight
    const btn51 = document.getElementById('btn-51');
    const btn1499 = document.getElementById('btn-1499');
    
    if(btn51 && btn3000) {
        btn51.classList.remove('active');
        btn1499.classList.remove('active');
        
        if(amount === 51) {
            btn51.classList.add('active');
        } else {
            btn1499.classList.add('active');
        }
    }

    // Image Change Logic
    const qrImage = document.getElementById('qrImage');
    if(qrImage) {
        if(amount === 3000) {
            qrImage.src = "qr-1499.jpg"; 
        } else {
            qrImage.src = "qr-51.jpg"; 
        }
    }
}

// 3. WhatsApp Button Logic
function openWhatsApp() {
    const message = `Hello Gaurav, I have paid ₹${currentAmount}. Here is the screenshot and my details (Email/Phone).`;
    const url = `https://wa.me/${config.whatsapp_number}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// ==========================================
// 🎥 VIDEO SLIDER LOGIC
// ==========================================
const slides = document.querySelectorAll('.video-card');
let slideIndex = 0;

function showSlides() {
    // Agar slides nahi mili to code mat chalao
    if (slides.length === 0) return;

    // Sabhi slides ko chhupa do
    slides.forEach(slide => {
        slide.classList.remove('active-slide');
    });

    // Next slide par jao
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Current slide ko dikhao
    slides[slideIndex - 1].classList.add('active-slide');
}

// Har 3 second mein change karo
if (slides.length > 0) {
    // Pehli slide turant dikhao
    slides[0].classList.add('active-slide');
    // Timer shuru karo
    setInterval(showSlides, 3000);
}
