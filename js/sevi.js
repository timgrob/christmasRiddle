/**
 * @author Tim Grob
 */

function checkAnswer() {
	var countT = 0;
	var countF = 0;
	var noInput = 0;
		
	// question 1
	if (document.getElementById("seviQ1_1").checked) {
		countT = countT + 1;	
		var inputVal = document.getElementById("seviQ1_1");
		inputVal.style.background = "green";
		
	} else if (document.getElementById("seviQ1_2").checked){
		countF = countF + 1;
		var inputVal = document.getElementById("seviQ1_2");
		inputVal.style.backgroundColor = "red";
		
		} else if (document.getElementById("seviQ1_3").checked) {
			countF = countF + 1;
			var inputVal = document.getElementById("seviQ1_3");
			inputVal.style.backgroundColor = "red";
			
		} else {
			noInput = noInput + 1;
		}
	
	// question 2	
	if (document.getElementById("seviQ2_1").checked) {
		countF = countF + 1;	
		var inputVal = document.getElementById("seviQ2_1");
		inputVal.style.background = "red";
		
	} else if (document.getElementById("seviQ2_2").checked){
		countT = countT + 1;
		var inputVal = document.getElementById("seviQ2_2");
		inputVal.style.backgroundColor = "green";
		
		} else if (document.getElementById("seviQ2_3").checked) {
			countF = countF + 1;
			var inputVal = document.getElementById("seviQ2_3");
			inputVal.style.backgroundColor = "red";
			
		} else {
			noInput = noInput + 1;
		}
		
	// question 3	
	if (document.getElementById("seviQ3_1").checked) {
		countF = countF + 1;	
		var inputVal = document.getElementById("seviQ3_1");
		inputVal.style.background = "red";
		
	} else if (document.getElementById("seviQ3_2").checked){
		countF = countF + 1;
		var inputVal = document.getElementById("seviQ3_2");
		inputVal.style.backgroundColor = "green";
		
		} else if (document.getElementById("seviQ3_3").checked) {
			countT = countT + 1;
			var inputVal = document.getElementById("seviQ3_3");
			inputVal.style.backgroundColor = "red";
			
		} else {
			noInput = noInput + 1;
		}
		
	if (noInput==3){
		alert("C'mon Sevi, I know you can do it");
	}	
	
	if (countF!=0){
		alert("You idiot, think again");
	}	
	
	if (countT == 3) {
		window.open ('submission/submissionSevi.html','_self',false);
	} else {
		return false;
	}
}
		
