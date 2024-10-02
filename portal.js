function checkKey() {
    const keyInput = document.getElementById('keyInput').value.trim();
    const portalKey = "h31101c4rus";
    const decryptedPW = CryptoJS.AES.decrypt(keyInput, portalKey).toString(CryptoJS.enc.Utf8);

    if (decryptedPW === "p1nn0ch10") {
        console.log('success')
        window.location.href = " https://icarus-6gt4.onrender.com";
    } else {
        document.getElementById('keyMessage').innerText = "Incorrect key. Please try again.";
        document.getElementById('keyMessage').className = "message error";
    }
}
