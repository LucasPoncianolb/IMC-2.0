
let text = document.querySelector("#text")

let calcular = document.querySelector("#calcular")




const imc = (peso, altura) =>{
  let nome = document.querySelector("#nome").value;
  var altura = parseFloat(document.querySelector("#altura").value)
  var peso = parseFloat(document.querySelector("#peso").value)
  const calc = peso / (altura * altura);

 if(nome != '' && (!isNaN(altura))){
  if(calc <= 18.5){
    text.innerHTML = `<p>Olá ${nome}, calculamos o seu IMC e o resultado foi <span>${calc}</span> o que significa que está <span>abaixo do peso ideal</span></p>`
  }else if(calc <= 25){
    text.innerHTML = `<p>Olá ${nome}, calculamos o seu IMC e o resultado foi <span>${calc}</span> o que significa que está com <span class= verde>o peso ideal </span</p>`
  }else if(calc <= 35){
    text.innerHTML = `<p>Olá ${nome}, calculamos o seu IMC e o resultado foi  <span>${calc}</span> o que significa que está <span>acima do peso do peso ideal<span></p>`
  }
 }else{
  alert("esqueceu o campo nome")
 }
}
addEventListener('keydown', (event)=>{
  if (event.key ==="Enter"){
    imc()
  }
})

calcular.addEventListener("click", imc)
