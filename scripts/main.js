const pato = document.getElementById("pato");
const urso = document.getElementById("urso");
const raposa = document.getElementById("raposa");
const coelho = document.getElementById("coelho");
const seguranca = document.getElementById("seg");
const botaoSeg = document.getElementById("botaoSeg");
const botaoUrso = document.getElementById("botaoUrso");
const botaoCoelho = document.getElementById("botaoCoelho");
const botaoPato = document.getElementById("botaoPato");
const botaoRaposa = document.getElementById("botaoRaposa");

async function switchImagePato(){
    const response = await fetch("https://random-d.uk/api/quack");
    const data = await response.json();
    console.log(data);
    imagem.src = data.url;
}
async function switchImageUrso(){
    const response = await fetch(" https://random-d.uk/api/v2/randomimg");
    const data = await response.json();
    console.log(data);
    imagem.src = data.url;
}
async function switchImageRaposa(){
    const response = await fetch("https://randomfox.ca/floof/");
    const data = await response.json();
    raposa.src = data.image;
}
async function switchImageCoelho(){
    const response = await fetch("https://rabbit-api-two.vercel.app/api/random");
    const data = await response.json();
    console.log(data);
    coelho.src = data.url;
}
async function switchImageSeguranca(){
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    seguranca.src = data.results[0].picture.large;
}

botaoRaposa.addEventListener("click", function(){
    switchImageRaposa();
})
botaoCoelho.addEventListener("click", function(){
    switchImageCoelho();
})
botaoSeg.addEventListener("click", function(){
    switchImageSeguranca();
})
botaoUrso.addEventListener("click", function(){
    switchImageUrso();
})
botaoPato.addEventListener("click",function(){
    switchImagePato();
})