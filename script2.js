const morseCode = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', ' ': ' '
};

function mostrarMorse() {
    const nome = document.getElementById("nome").value.toUpperCase();
    let resultado = "";
    for (let i = 0; i < nome.length; i++) {
        resultado += morseCode[nome[i]] + " ";
    }
    document.getElementById("mensagem").textContent = resultado;
}
const klingonDictionary = {
    "OLA": "nuqneH",
    "MUNDO": 'Qo\'noS',
    "EU": 'wa\'',
    "NOME": 'tlhIngan',
    "É": 'puq',
    "AMIGO":'bIjat',
    "HONRA":'hon',
    "FORÇA":'e',
    "GUERRA":'ut',
    "PAZ":'	pagh',
    "LUTAR":'batlh',
    "NAVE":'e',
    "BATALHA/ESPADA":'batlh',
    "vitoria":'oHpu/ghoj',
    "SANGUE":'loS',
    "MEDO":'oHwachu',
    "imperio klingon":'ghojpa',
};
function mostrarKlingon() {
    const nome = document.getElementById("nome").value.toUpperCase();
    let resultadoKlingon = "";
    const palavras = nome.split(" ");
    palavras.forEach(palavra => {
        resultadoKlingon += klingonDictionary[palavra.toUpperCase()] + " ";
    });
    document.getElementById("mensagemKlingon").textContent = resultadoKlingon;
}