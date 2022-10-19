// escribir una función que dado un arreglo de entrada devuelva un arreglo de la misma longitud 
//con los nombres de los tipos de variables de cada dato 
//ejemplo: 
//  [1,"Gato",true,{username:"Mario"}] -> ["number","string", "boolean","object"]
// 

function arrayMap(arreglo){
    result = [];
    
    for(var i=0; i<= arreglo.length-1; i++){
        if(Array.isArray(arreglo[i])){
            result.push("array");
        }
        else{
            result.push(typeof(arreglo[i]))
        }
    }
    return result; 
}

console.log(arrayMap([1,"Gato",true,{username:"Mario"}]))
console.log(arrayMap([1,"Gato",true,{username:"Mario"},[1,2,3,4]]))