module.exports = function solveEquation(equation) {
// your implementation
	var posAstFirst = equation.indexOf("*", 1) ;
	var posAstSecond = equation.indexOf("*", 10) ;
   
	var stringA = equation.substring(0, posAstFirst-1);
	var stringB = equation.substring(posAstFirst+8, posAstSecond-1);
	var stringC = equation.substring(posAstSecond+6, equation.length);
  
	var zn1 = equation.substring(posAstFirst+6, posAstFirst+7);
	var zn2 = equation.substring(posAstSecond+4, posAstSecond+5);
		
	if (zn1 === '-') stringB = -stringB;
	if (zn2 === '-') stringC = -stringC;
	
	var D = stringB * stringB - 4 * stringA * stringC;
	var X1 = Math.round(   ( - stringB + Math.sqrt(D) ) / ( 2*stringA )   );
	var X2 = Math.round(   ( - stringB - Math.sqrt(D) ) / ( 2*stringA )   );
	
	if(X2>X1)  var solutions = [X1, X2];
    else  solutions = [X2, X1];
	
	console.log(solutions);
	return solutions; 
	
}

