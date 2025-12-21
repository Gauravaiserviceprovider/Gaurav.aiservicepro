// ==========================================
// ⚙️ CONFIGURATION (EDIT THIS)
// ==========================================
const config = {
    // Aapki UPI ID (Image se li gayi hai)
    upi_id: "sauravvarmag8@oksbi", 
    
    // Yahan apna WhatsApp number daalein (Country code 91 ke sath)
    whatsapp_number: "75091542482" 
};

// ==========================================
// 🚀 LOGIC (DO NOT EDIT BELOW)
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
    
    // Update UI Text
    const displayEl = document.getElementById('displayAmount');
    if(displayEl) displayEl.innerText = "₹" + amount;
    
    // Update Buttons
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

    // Generate New QR Code
    const qrImage = document.getElementById('dynamicQR');
    if(qrImage) {
        // This API creates a QR code containing your UPI payment link
        const qrData = `upi://pay?pa=${config.upi_id}&pn=SauravVerma&am=${amount}&tn=Service_Payment`;
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(qrData)}`;
    }
}

// 3. Send Form Data to WhatsApp
function sendToWhatsApp(e) {
    e.preventDefault(); // Stop page reload

    // Get values
    const userPhone = document.getElementById('userPhone').value;
    const userEmail = document.getElementById('userEmail').value;
    const accEmail = document.getElementById('accountEmail').value;
    const accPass = document.getElementById('accountPass').value;

    // Create Message
    const message = `
*NEW ORDER PAYMENT* 
---------------------
*Amount Selected:* ₹${currentAmount}
*My WhatsApp:* ${userPhone}
*My Email:* ${userEmail}

*ACCOUNT DETAILS FOR SETUP:*
*Email:* ${accEmail}
*Password:* ${accPass}

Please verify payment and activate service.
    `.trim();

    // Open WhatsApp
    const url = `https://wa.me/${config.whatsapp_number}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
