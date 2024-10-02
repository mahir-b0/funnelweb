function xorEncryptDecrypt(input, key) {
    let output = '';
    for (let i = 0; i < input.length; i++) {
        output += String.fromCharCode(input.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return output;
}

const filename = (![]+[])[(+[])]+(![]+[])[(+!+[])]+(![]+[])[(+!+[]+((+!+[])+(+!+[])))]+([]+[]+[][[]])[((+!+[])+(+!+[]))]+(![]+[])[(+[])]+(![]+[])[(+!+[])]+(![]+[])[(+!+[]+((+!+[])+(+!+[])))]+(typeof [])[((+!+[])+(+!+[]))]+([]+[]+[][[]])[((+!+[])+(+!+[]))]+(![]+[])[(+[])]+`/`+(!![]+[])[(+[])]+`h`+`3`+`=`+(typeof [])[(+!+[])]+([]+[]+[][[]])[(+!+[]+((+!+[])+(+!+[])))]+(!![]+[])[(+!+[])]+`4`+(![]+[])[(+!+[]+((+!+[])+(+!+[])))]+(!![]+[])[(+[])]+'q'+(!![]+[])[((+!+[])+(+!+[]))]+`0`+(!![]+[])[(+[])]+`3`+`4`+(![]+[])[(+[])]+(!![]+[])[(+!+[])]+(typeof ![])[(+!+[])]+`3`+`9`+`0`+(typeof +[])[((+!+[])+(+!+[]))]+(typeof ![])[(+!+[])]+(RegExp().constructor.name)[((+!+[])+(+!+[]))+(+!+[]+((+!+[])+(+!+[])))]+([]+[]+([]).constructor)[(+[+!+[]+[+[]+[+[]]]])/((+!+[])+(+!+[]))/((+!+[])+(+!+[]))-(+!+[])]+([]+[]+[][[]])[(+[+!+[]+[+[]]])/((+!+[])+(+!+[]))]+([]+[]+[][[]])[(+!+[]+((+!+[])+(+!+[])))]+`.`+(!![]+[])[(+[])]+(RegExp().constructor.name)[(+!+[]+((+!+[])+(+!+[])))+(+!+[])]+(!![]+[])[(+[])];
const key = 'supersecretkey123';

const encryptedFilename = xorEncryptDecrypt(filename, key);
const base64EncodedFilename = btoa(encryptedFilename);

async function validateFlag() {
    try {
        const decryptedFilename = xorEncryptDecrypt(atob(base64EncodedFilename), key);

        const response = await fetch(decryptedFilename);
        if (!response.ok) {
            throw new Error('Failed to fetch the flag file');
        }

        const flag = await response.text();
        const userInput = document.getElementById('userInput').value.trim();
        const messageElement = document.getElementById('message');

        if (userInput === flag.trim()) {
            const portalPW = "p1nn0ch10";
            const portalKey = "h31101c4rus"
            const encryptedKey = CryptoJS.AES.encrypt(portalPW, portalKey).toString();
            messageElement.innerHTML =
                `Well done. You have been selected for the Icarus case. Your key is <strong>${encryptedKey}</strong>. Please head to this website: <a href='portal.html'>Portal</a>`;
            messageElement.className = "message success";
        } else {
            messageElement.innerText = "Incorrect information. Try again.";
            messageElement.className = "message error";
        }
    } catch (error) {
        console.error(error);
        const messageElement = document.getElementById('message');
        messageElement.innerText = "An error occurred while validating the information.";
        messageElement.className = "message error";
    }
}
