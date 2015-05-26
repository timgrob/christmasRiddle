/**
 * @author Tim Grob
 */

function checkAnswer() {
	var countT = 0;
	var countF = 0;
	var noInput = 0;
		
	// question 1
	if (document.getElementById("familyQ1_1").checked) {
		countT = countT + 1;	
		var inputVal = document.getElementById("familyQ1_1");
		inputVal.style.background = "green";
		
	} else if (document.getElementById("familyQ1_2").checked){
		countF = countF + 1;
		var inputVal = document.getElementById("familyQ1_2");
		inputVal.style.backgroundColor = "red";
		
		} else if (document.getElementById("familyQ1_3").checked) {
			countF = countF + 1;
			var inputVal = document.getElementById("familyQ1_3");
			inputVal.style.backgroundColor = "red";
			
		} else {
			noInput = noInput + 1;
		}
	
	// question 2	
	if (document.getElementById("familyQ2_1").checked) {
		countT = countT + 1;	
		var inputVal = document.getElementById("familyQ2_1");
		inputVal.style.background = "red";
		
	} else if (document.getElementById("familyQ2_2").checked){
		countF = countF + 1;
		var inputVal = document.getElementById("familyQ2_2");
		inputVal.style.backgroundColor = "green";
		
		} else if (document.getElementById("familyQ2_3").checked) {
			countF = countF + 1;
			var inputVal = document.getElementById("familyQ2_3");
			inputVal.style.backgroundColor = "red";
			
		} else {
			noInput = noInput + 1;
		}
		
	// question 3	
	if (document.getElementById("familyQ3_1").checked) {
		countF = countF + 1;	
		var inputVal = document.getElementById("familyQ3_1");
		inputVal.style.background = "red";
		
	} else if (document.getElementById("familyQ3_2").checked){
		countF = countF + 1;
		var inputVal = document.getElementById("familyQ3_2");
		inputVal.style.backgroundColor = "green";
		
		} else if (document.getElementById("familyQ3_3").checked) {
			countT = countT + 1;
			var inputVal = document.getElementById("familyQ3_3");
			inputVal.style.backgroundColor = "red";
			
		} else {
			noInput = noInput + 1;
		}
		
	// question 4	
	if (document.getElementById("familyQ4_1").checked) {
		countF = countF + 1;	
		var inputVal = document.getElementById("familyQ4_1");
		inputVal.style.background = "red";
		
	} else if (document.getElementById("familyQ4_2").checked){
		countT = countT + 1;
		var inputVal = document.getElementById("familyQ4_2");
		inputVal.style.backgroundColor = "green";
		
		} else if (document.getElementById("familyQ4_3").checked) {
			countF = countF + 1;
			var inputVal = document.getElementById("familyQ4_3");
			inputVal.style.backgroundColor = "red";
			
		} else {
			noInput = noInput + 1;
		}
		
	if (noInput==4){
		alert("Zuerst muss das Raetsel geloest werden");
	}	
	
	if (countF!=0){
		alert("Die zusaetzliche Anzahl an Leute fuehrt wohl bei euch zu keinem Vorteil");
	}	
	
	if (countT == 4) {
		window.open ('submissionFamily.html','_self',false);
	} else {
		return false;
	}
}
		
