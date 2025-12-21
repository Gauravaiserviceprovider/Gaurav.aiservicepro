// ==========================================
// ⚙️ CONFIGURATION (Yahan Edit Karein)
// ==========================================
const config = {
    // Apna WhatsApp Number yahan likhein (91 ke sath)
    whatsapp_number: "+91 7509 5424 82" 
};

// ==========================================
// 🚀 LOGIC (Isse mat chedein)
// ==========================================

// 1. Mobile Menu Toggle
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    if(nav) nav.classList.toggle('active');
}

// 2. Payment Page Logic (Image Switcher)
let currentAmount = 51;

function setAmount(amount) {
    currentAmount = amount;
    
    // Text Update karega
    const displayEl = document.getElementById('displayAmount');
    if(displayEl) displayEl.innerText = "₹" + amount;
    
    // Buttons ko highlight karega
    const btn51 = document.getElementById('btn-51');
    const btn1499 = document.getElementById('btn-1499');
    
    if(btn51 && btn1499) {
        btn51.classList.remove('active');
        btn1499.classList.remove('active');
        
        if(amount === 51) {
            btn51.classList.add('active');
        } else {
            btn1499.classList.add('active');
        }
    }

    // Image Change karega (Folder se photo uthayega)
    const qrImage = document.getElementById('qrImage');
    if(qrImage) {
        if(amount === 51) {
            qrImage.src = "qr-51.jpg"; // 51 wali photo
        } else {
            qrImage.src = "qr-1499.jpg"; // 1499 wali photo
        }
    }
}

// 3. WhatsApp Button Logic
function openWhatsApp() {
    const message = `Hello Gaurav, I have paid ₹${currentAmount}. Here is the screenshot and my details (Email/Phone).`;
    const url = `https://wa.me/${config.whatsapp_number}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
