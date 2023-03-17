// Define as funções para cada operação de imc   
function IMC_H(peso, altura) {
    
    
    peso = parseFloat(document.getElementById("peso").value);
    altura = parseFloat(document.getElementById("altura").value);
    
    
   
    return peso / (altura * altura);
}

function IMC_F(peso, altura) {
    
    peso = parseFloat(document.getElementById("peso").value);
    altura = parseFloat(document.getElementById("altura").value);

    return peso / (altura * altura);
}


function calcularIMC(){ 
    //declaração das variaveis
        var peso;
        var altura;

        var resultado;

        var peso = parseFloat(document.getElementById("peso").value);
        var altura = parseFloat(document.getElementById("altura").value);
        
        var Genero = document.getElementById("genero").value;
        
         // Verifica se os campos de peso e altura foram preenchidos corretamente
        if(isNaN(peso) || isNaN(altura)){
            alert("Preencha corretamente os campos de peso e altura."); // retorna 0 para indicar que a função não funcionou corretamente
            return 0; 
        }   
        
        if (Genero === "Masculino") {
                // Executa a função de cálculo do IMC para o homem
                resultado = IMC_H(peso, altura);
                document.getElementById("resulIMC").value = resultado;
            } 
            
            else if (Genero === "Feminino") {
                // Executa a função de cálculo do IMC para o homem
                resultado = IMC_F(peso, altura);
                document.getElementById("resulIMC").value = resultado;
            } 
            
            else {
                alert("Houve um erro ao calcular o IMC.");
                alert("Por favor, selecione o gênero.");
            }

        if(isNaN(resultado)){
            
            return 0; // retorna 0 para indicar que a função não funcionou corretamente
        }

        document.getElementById("resulIMC").value = resultado;
        return 1;

} 