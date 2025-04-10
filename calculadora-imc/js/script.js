var btncalcular = document.querySelector("#btncalcular");
var peso = document.querySelector("#peso");
var altura = document.querySelector("#altura");
var res = document.querySelector(".res");

function calcular(event) {
    event.preventDefault();  
    var pesovalue = peso.value;
    var alturavalue = altura.value;

    if(pesovalue == 0 || alturavalue == 0){
        res.innerHTML = "Erro"
        return
    }

    var IMC = (pesovalue / Math.pow(alturavalue, 2)).toFixed(2);

    console.log(IMC)

    if(IMC < 17){
        res.innerHTML =  `<div class="status">
        <p>Peso</p>
        <p>Altura</p>
        <p>IMC</p>
        <p>Resultado</p>
    </div>
    <div class="parametro">
        <p>${pesovalue} </p>
        <p>${alturavalue} </p>
        <p>${IMC} </p>
        <p>Muito abaixo do peso</p>
    </div>`
    }else if(IMC >=17 && IMC <= 18.49){
        res.innerHTML =  `<div class="status">
        <p>Peso</p>
        <p>Altura</p>
        <p>IMC</p>
        <p>Resultado</p>
    </div>
    <div class="parametro">
        <p>${pesovalue} </p>
        <p>${alturavalue} </p>
        <p>${IMC} </p>
        <p>Abaixo do peso</p>
    </div>`
        }else if(IMC >=18,5 && IMC <= 24.99){
            
            res.innerHTML =  `<div class="status">
            <p>Peso</p>
            <p>Altura</p>
            <p>IMC</p>
            <p>Resultado</p>
        </div>
        <div class="parametro">
            <p>${pesovalue} </p>
            <p>${alturavalue} </p>
            <p>${IMC} </p>
            <p>Peso normal</p>
        </div>`

        }else if(IMC >=25 && IMC <= 29.99) {
            res.innerHTML =  `<div class="status">
            <p>Peso</p>
            <p>Altura</p>
            <p>IMC</p>
            <p>Resultado</p>
        </div>
        <div class="parametro">
            <p>${pesovalue} </p>
            <p>${alturavalue} </p>
            <p>${IMC} </p>
            <p>Acima do peso</p>
        </div>`
        }else if(IMC >=30 && IMC <= 34.99){

            res.innerHTML =  `<div class="status">
            <p>Peso</p>
            <p>Altura</p>
            <p>IMC</p>
            <p>Resultado</p>
        </div>
        <div class="parametro">
            <p>${pesovalue} </p>
            <p>${alturavalue} </p>
            <p>${IMC} </p>
            <p>Obesidade I</p>
        </div>`  
        }else if(IMC >=35 && IMC <= 39.99 ){

            res.innerHTML =  `<div class="status">
            <p>Peso</p>
            <p>Altura</p>
            <p>IMC</p>
            <p>Resultado</p>
        </div>
        <div class="parametro">
            <p>${pesovalue} </p>
            <p>${alturavalue} </p>
            <p>${IMC} </p>
            <p>Obesidade II(severa)</p>
        </div>`  

        }else if(IMC >40){

            res.innerHTML =  `<div class="status">
            <p>Peso</p>
            <p>Altura</p>
            <p>IMC</p>
            <p>Resultado</p>
        </div>
        <div class="parametro">
            <p>${pesovalue} </p>
            <p>${alturavalue} </p>
            <p>${IMC} </p>
            <p>Obesidade III(mórbida)</p>
        </div>` 
        }
        
        peso.value = ""
        altura.value = ""
        btncalcular.value = "Refazer"

}
btncalcular.addEventListener("click", calcular);