function xorEncryptDecrypt(input, key) {
    let output = '';
    for (let i = 0; i < input.length; i++) {
        output += String.fromCharCode(input.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return output;
}

const filename = '(![]+[])[(+[])]+(![]+[])[(+!+[])]+(![]+[])[(+!+[]+((+!+[])+(+!+[])))]+([]+[]+[][[]])[((+!+[])+(+!+[]))]+(![]+[])[(+[])]+(![]+[])[(+!+[])]+(![]+[])[(+!+[]+((+!+[])+(+!+[])))]+(typeof [])[((+!+[])+(+!+[]))]+([]+[]+[][[]])[((+!+[])+(+!+[]))]+(![]+[])[(+[])]+`/`+(!![]+[])[(+[])]+\'h\'+`3`+`=`+(typeof [])[(+!+[])]+([]+[]+[][[]])[(+!+[]+((+!+[])+(+!+[])))]+(!![]+[])[(+!+[])]+`4`+(![]+[])[(+!+[]+((+!+[])+(+!+[])))]+(!![]+[])[(+[])]+\'q\'+(!![]+[])[((+!+[])+(+!+[]))]+`0`+(!![]+[])[(+[])]+`3`+`4`+(![]+[])[(+[])]+(!![]+[])[(+!+[])]+(typeof ![])[(+!+[])]+`3`+`9`+`0`+(typeof +[])[((+!+[])+(+!+[]))]+(typeof ![])[(+!+[])]+(RegExp().constructor.name)[((+!+[])+(+!+[]))+(+!+[]+((+!+[])+(+!+[])))]+([]+[]+([]).constructor)[(+[+!+[]+[+[]+[+[]]]])/((+!+[])+(+!+[]))/((+!+[])+(+!+[]))-(+!+[])]+([]+[]+[][[]])[(+[+!+[]+[+[]]])/((+!+[])+(+!+[]))]+([]+[]+[][[]])[(+!+[]+((+!+[])+(+!+[])))]+`.`+(!![]+[])[(+[])]+(RegExp().constructor.name)[(+!+[]+((+!+[])+(+!+[])))+(+!+[])]+(!![]+[])[(+[])]';
const key = '(![]+[])[(+!+[])]+(typeof [])[(+!+[])]+(typeof ![])[(+!+[])]+([]+[]+([]).constructor)[(+[+!+[]+[+[]+[+[]]]])/((+!+[])+(+!+[]))/((+!+[])+(+!+[]))-(+!+[])]+([]+[]+[][[]])[(+!+[]+((+!+[])+(+!+[])))]+(!![]+[])[(+[])]+\'h\'+([]+[]+[][[]])[(+!+[]+((+!+[])+(+!+[])))]+\'h\'+([]+[]+[][[]])[(+!+[]+((+!+[])+(+!+[])))]+(![]+[])[(+!+[])]+([]+[]+([]).constructor)[(+[+!+[]+[+[]+[+[]]]])/((+!+[])+(+!+[]))/((+!+[])+(+!+[]))-(+!+[])]+([]+[]+[][[]])[(+!+[]+((+!+[])+(+!+[])))]+([]+[]+[][[]])[(+!+[])]+(![]+[])[(+!+[]+((+!+[])+(+!+[])))]+`,`+(RegExp().constructor.name)[((+!+[])+(+!+[]))+(+!+[]+((+!+[])+(+!+[])))]+(![]+[])[(+!+[])]+(!![]+[])[(+!+[])]+(![]+[])[(+!+[])]+(![]+[])[((+!+[])+(+!+[]))]+(![]+[])[((+!+[])+(+!+[]))]+([]+[]+[][[]])[(+!+[]+((+!+[])+(+!+[])))]+(![]+[])[((+!+[])+(+!+[]))]+([]+[]+[][[]])[(+!+[]+((+!+[])+(+!+[])))]+([]+[]+[][[]])[((+!+[])+(+!+[]))]+(typeof [])[(+!+[])]+(([]).constructor.name)[(+!+[])+(+!+[]+((+!+[])+(+!+[])))]+([]+[]+[][[]])[(+!+[])]+(typeof ![])[(+!+[])]+([]+[]+[][[]])[(+!+[])]+([]+[]+[][[]])[(+!+[]+((+!+[])+(+!+[])))]';

const encryptedFilename = xorEncryptDecrypt(filename, key);
const base64EncodedFilename = btoa(encryptedFilename);

async function validateFlag() {
    try {
        const encryptedFilenameBuffer = btoa(base64EncodedFilename);
        const decryptedFilename = xorEncryptDecrypt(encryptedFilenameBuffer.toString(), key);

        const response = await fetch(decryptedFilename);
        if (!response.ok) {
            throw new Error('Failed to fetch the flag file');
        }

        const flag = await response.text();
        const userInput = document.getElementById('userInput').value.trim();
        const messageElement = document.getElementById('message');

        if (userInput === flag.trim()) {
            messageElement.innerText =
                "Well done. You have been selected for the Icarus case. Please head to this website [coming soon]";
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
