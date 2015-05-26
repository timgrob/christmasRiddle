/**
 * @author Tim Grob
 */

function checkAnswer() {
	var countT = 0;
	var countF = 0;
	var noInput = 0;
		
	// question 1
	if (document.getElementById("cyrilQ1_1").checked) {
		countF = countF + 1;	
		var inputVal = document.getElementById("cyrilQ1_1");
		inputVal.style.background = "green";
		
	} else if (document.getElementById("cyrilQ1_2").checked){
		countT = countT + 1;
		var inputVal = document.getElementById("cyrilQ1_2");
		inputVal.style.backgroundColor = "red";
		
		} else if (document.getElementById("cyrilQ1_3").checked) {
			countF = countF + 1;
			var inputVal = document.getElementById("cyrilQ1_3");
			inputVal.style.backgroundColor = "red";
			
		} else {
			noInput = noInput + 1;
		}
	
	// question 2	
	if (document.getElementById("cyrilQ2_1").checked) {
		countT = countT + 1;	
		var inputVal = document.getElementById("cyrilQ2_1");
		inputVal.style.background = "red";
		
	} else if (document.getElementById("cyrilQ2_2").checked){
		countF = countF + 1;
		var inputVal = document.getElementById("cyrilQ2_2");
		inputVal.style.backgroundColor = "green";
		
		} else if (document.getElementById("cyrilQ2_3").checked) {
			countF = countF + 1;
			var inputVal = document.getElementById("cyrilQ2_3");
			inputVal.style.backgroundColor = "red";
			
		} else {
			noInput = noInput + 1;
		}
		
	// question 3	
	if (document.getElementById("cyrilQ3_1").checked) {
		countF = countF + 1;	
		var inputVal = document.getElementById("cyrilQ3_1");
		inputVal.style.background = "red";
		
	} else if (document.getElementById("cyrilQ3_2").checked){
		countF = countF + 1;
		var inputVal = document.getElementById("cyrilQ3_2");
		inputVal.style.backgroundColor = "green";
		
		} else if (document.getElementById("cyrilQ3_3").checked) {
			countT = countT + 1;
			var inputVal = document.getElementById("cyrilQ3_3");
			inputVal.style.backgroundColor = "red";
			
		} else {
			noInput = noInput + 1;
		}
		
	if (noInput==3){
		alert("Don't be lazy Cyril, fill out the form");
	}	
	
	if (countF!=0){
		alert("No no no no, you got it wrong");
	}	
	
	if (countT == 3) {
		window.open ('submission/submissionCyril.html','_self',false);
	} else {
		return false;
	}
}
		
