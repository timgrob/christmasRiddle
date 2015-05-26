/**
 * @author Tim Grob
 */

function checkAnswer() {
	var countT = 0;
	var countF = 0;
	var noInput = 0;
		
	// question 1
	if (document.getElementById("täseQ1_1").checked) {
		countF = countF + 1;	
		var inputVal = document.getElementById("täseQ1_1");
		inputVal.style.background = "green";
		
	} else if (document.getElementById("täseQ1_2").checked){
		countT = countT + 1;
		var inputVal = document.getElementById("täseQ1_2");
		inputVal.style.backgroundColor = "red";
		
		} else if (document.getElementById("täseQ1_3").checked) {
			countF = countF + 1;
			var inputVal = document.getElementById("täseQ1_3");
			inputVal.style.backgroundColor = "red";
			
		} else {
			noInput = noInput + 1;
		}
	
	// question 2	
	if (document.getElementById("täseQ2_1").checked) {
		countF = countF + 1;	
		var inputVal = document.getElementById("täseQ2_1");
		inputVal.style.background = "red";
		
	} else if (document.getElementById("täseQ2_2").checked){
		countT = countT + 1;
		var inputVal = document.getElementById("täseQ2_2");
		inputVal.style.backgroundColor = "green";
		
		} else if (document.getElementById("täseQ2_3").checked) {
			countF = countF + 1;
			var inputVal = document.getElementById("täseQ2_3");
			inputVal.style.backgroundColor = "red";
			
		} else {
			noInput = noInput + 1;
		}
		
	if (noInput==2){
		alert("Zu erst die Arbeit, dann das Vergnügen Täse");
	}	
	
	if (countF!=0){
		alert("I am sorry Täse, etwas ist noch falsch");
	}	
	
	if (countT == 2) {
		window.open ('submission/submissionTäse.html','_self',false);
	} else {
		return false;
	}
}
		
