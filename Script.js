const config = {
    whatsapp_number: "919876543210" // Apna number yahan check kar lein
};

function toggleMenu() {
    const nav = document.getElementById('navLinks');
    if(nav) nav.classList.toggle('active');
}

let currentAmount = 51;

function setAmount(amount) {
    currentAmount = amount;
    
    // Text Update
    const displayEl = document.getElementById('displayAmount');
    if(displayEl) displayEl.innerText = "₹" + amount;
    
    // Button Highlight
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

    // Image Change Logic
    const qrImage = document.getElementById('qrImage');
    if(qrImage) {
        if(amount === 1499) {
            // Yahan file ka naam wahi hona chahiye jo repo me hai
            qrImage.src = "qr-1499.jpg"; 
        } else {
            qrImage.src = "qr-51.jpg";
        }
    }
}

function openWhatsApp() {
    const message = `Hello Gaurav, I have paid ₹${currentAmount}. Here is the screenshot and my details (Email/Phone).`;
    const url = `https://wa.me/${config.whatsapp_number}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
