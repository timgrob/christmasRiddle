/**
 * @author Tim Grob
 */

function checkAnswer() {
	var countT = 0;
	var countF = 0;
	var noInput = 0;
		
	// question 1
	if (document.getElementById("leaQ1_1").checked) {
		countF = countF + 1;	
		var inputVal = document.getElementById("leaQ1_1");
		inputVal.style.background = "green";
		
	} else if (document.getElementById("leaQ1_2").checked){
		countT = countT + 1;
		var inputVal = document.getElementById("leaQ1_2");
		inputVal.style.backgroundColor = "red";
		
		} else if (document.getElementById("leaQ1_3").checked) {
			countF = countF + 1;
			var inputVal = document.getElementById("leaQ1_3");
			inputVal.style.backgroundColor = "red";
			
		} else {
			noInput = noInput + 1;
		}
	
	// question 2	
	if (document.getElementById("leaQ2_1").checked) {
		countF = countF + 1;	
		var inputVal = document.getElementById("leaQ2_1");
		inputVal.style.background = "red";
		
	} else if (document.getElementById("leaQ2_2").checked){
		countF = countF + 1;
		var inputVal = document.getElementById("leaQ2_2");
		inputVal.style.backgroundColor = "green";
		
		} else if (document.getElementById("leaQ2_3").checked) {
			countT = countT + 1;
			var inputVal = document.getElementById("leaQ2_3");
			inputVal.style.backgroundColor = "red";
			
		} else {
			noInput = noInput + 1;
		}
		
	// question 3	
	if (document.getElementById("leaQ3_1").checked) {
		countF = countF + 1;	
		var inputVal = document.getElementById("leaQ3_1");
		inputVal.style.background = "red";
		
	} else if (document.getElementById("leaQ3_2").checked){
		countT = countT + 1;
		var inputVal = document.getElementById("leaQ3_2");
		inputVal.style.backgroundColor = "green";
		
		} else if (document.getElementById("leaQ3_3").checked) {
			countF = countF + 1;
			var inputVal = document.getElementById("leaQ3_3");
			inputVal.style.backgroundColor = "red";
			
		} else {
			noInput = noInput + 1;
		}
		
	if (noInput==3){
		alert("Lea Lea, you haven't filled out the form yet");
	}	
	
	if (countF!=0){
		alert("Really, this isn't a university exam, this is life");
	}	
	
	if (countT == 3) {
		window.open ('submission/submissionLea.html','_self',false);
	} else {
		return false;
	}
}
		
