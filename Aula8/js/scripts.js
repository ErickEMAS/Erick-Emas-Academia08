/*
let meNome = ["Erick", "Alexandre", "Mendes", "de", "Souza"];

let i = 4;

for(let indice = 0; indice < meNome.length; indice++){
    console.log(meNome[indice]);
}

console.log(" ");

while(i > meNome.length - meNome.length + -1){
    console.log(meNome[i]);
    i--;
}*/

var material = prompt("Escolha o material da escada");
var quantidade = Number(prompt("Escolha a quantidade de dregaus"));
var escada = "";

for(let i = 0; i < quantidade; i++){
    escada += material; 

    console.log(escada);


    var node = document.createElement("p");                 
    var textnode = document.createTextNode(escada);         
    node.appendChild(textnode);                             
    document.querySelector("#escada").appendChild(node); 
}