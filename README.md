# __Pseudocódigo Validador de Tarjeta de Credito__

## 	__Pseudocódigo__
##### 1. Crearemos una funcion llamada isValidCard, con un parametro Card
##### 2. Declaramos la variable sum y la variable result. Result guardara la input del usuario (numerode tarjeta a evaluar) 
##### 3. Definimos un if, que verifica que result no esté vacio o su largo sea mayor a 13 digitos
##### 4. En caso de cumplir lo anterior, se retorna un mensaje: "El Largo de la Tarjeta NO es Válida"
##### 5. En caso contrario en else, Invierte el arreglo mediante un for
##### 6. En el for declaramos una variable i=0, hacemos i sea menor al largo del arreglo y que avance de uno a uno
##### 7. Dentro del for declaramos una variable item, que guardara el valor de la posicion eliminada mediante el uso de pop.
##### 8. Usando splice daremos vuelta los valos del arreglo y cerramos el for
##### 9. Para la multiplicacion de las variables impares, haremos un for igual al anterior pero avanzara de 2 en 2
##### 10. Dentro del for, haremos un if con el cuál evaluaremos si el resultado de la suma es o no mayor o igual a 10
##### 11. En caso verdadero,  se sumaran las unidades y las decenas del numero contenido en esa posición
##### 12. Cada valor de posicion se divide por 10 para obtener las decenas pero antes se tansforma a entero
##### 13. Las unidades se calculan el modulo del valor de la posición
##### 14. Luego de esto, hacemos un 3er for que sume el contenido de todas las posiciones del arreglo y 
##### 15. Las guarde en la variable sum y cerramos el for
##### 16. Haremos un if ,donde compararemos el valor de sum%10 sea igual a 0
##### 17. Si es verdadero retornaremos un alert'Tarjeta Válida' y si es falso alert('Tarjeta Inválida');
##### 18. Cerramos la función

## Diagrama de Flujo
  http:


###### *Autor: Lucia Lagos*
