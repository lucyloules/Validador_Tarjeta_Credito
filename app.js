function isValidCard(Card){
	// Mediante prompt le pediremos al usuario que ingrese una frase
	var sum=0;
	var result= prompt("Ingrese una tarjeta de crédito:");
	if((result = "") || (result.lenth>13)){
		return "El Largo de la Tarjeta NO es Válida";
	}
	else{
		//invierte el arreglo
		for (var i = 0; i < result.length; i++) {
  			var item = result.pop();
  			result.splice(i, 0, item);
		}
		//Multiplica por 2 las posiciones pares
		for (var i = 0; i < result.length; i+2) {
			// si el resultado es 10 o mayor, sumar unidades con decenas
			if(result[i]>9){
				/*Decenas: Divido por 10 y Convierto a entero
				 Unidades: aplico modulo */
				result[i]= ParseInt(result[i]/10)+(result[i]%10); 
			}
		}
		//Suma el contenido de las posiciones del arreglo 
		//y lo acumula en variable sum
		for (var i = 0; i < result.length; i+2){
			sum=sum + result[i];
		}
		/* Criterio de algoritmo Luhn, residuo=0 tarjeta valida y 
		residuo distinto de 0 tarjeta inválida*/
		if (sum%10===0){
			return 'Tarjeta Válida';
		}else{
			return 'Tarjeta Inválida';
		}

	
	}
	
}










//Ejemplo del  Algoritmo de Luhn
/*/ takes the form field value and returns true on valid number
function valid_credit_card(value) {
  // accept only digits, dashes or spaces
	if (/[^0-9-\s]+/.test(value)) return false;

	// The Luhn Algorithm. It's so pretty.
	var nCheck = 0, nDigit = 0, bEven = false;
	value = value.replace(/\D/g, "");

	for (var n = value.length - 1; n >= 0; n--) {
		var cDigit = value.charAt(n),
			  nDigit = parseInt(cDigit, 10);

		if (bEven) {
			if ((nDigit *= 2) > 9) nDigit -= 9;
		}

		nCheck += nDigit;
		bEven = !bEven;
	}

	return (nCheck % 10) == 0;
}*/