// Classe para verificação e validação de valores, segundo o tipo de valor requisitado

class Utilities{
    constructor(){}

    validNumber(value){
        let isNumber = !(isNaN(value)); // Se não (não é um número), é um número
        let isPositive = (value >= 0);

        return (isNumber && isPositive);
    }

    validString(value){
        let isNotNumber = (!this.validNumber(value));
        let isNotEmpty = (value != "");
        
        return (isNotNumber && isNotEmpty);
    }
}

export default Utilities;