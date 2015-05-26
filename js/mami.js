/**
 * @author Tim Grob
 */

function checkAnswer() {
	var countT = 0;
	var countF = 0;
	var noInput = 0;
		
	// question 1
	if (document.getElementById("mamiQ1_1").checked) {
		countF = countF + 1;	
		var inputVal = document.getElementById("mamiQ1_1");
		inputVal.style.background = "green";
		
	} else if (document.getElementById("mamiQ1_2").checked){
		countT = countT + 1;
		var inputVal = document.getElementById("mamiQ1_2");
		inputVal.style.backgroundColor = "red";
		
		} else if (document.getElementById("mamiQ1_3").checked) {
			countF = countF + 1;
			var inputVal = document.getElementById("mamiQ1_3");
			inputVal.style.backgroundColor = "red";
			
		} else {
			noInput = noInput + 1;
		}
	
	// question 2	
	if (document.getElementById("mamiQ2_1").checked) {
		countT = countT + 1;	
		var inputVal = document.getElementById("mamiQ2_1");
		inputVal.style.background = "red";
		
	} else if (document.getElementById("mamiQ2_2").checked){
		countF = countF + 1;
		var inputVal = document.getElementById("mamiQ2_2");
		inputVal.style.backgroundColor = "green";
		
		} else if (document.getElementById("mamiQ2_3").checked) {
			countF = countF + 1;
			var inputVal = document.getElementById("mamiQ2_3");
			inputVal.style.backgroundColor = "red";
			
		} else {
			noInput = noInput + 1;
		}
		
	// question 3	
	if (document.getElementById("mamiQ3_1").checked) {
		countF = countF + 1;	
		var inputVal = document.getElementById("mamiQ3_1");
		inputVal.style.background = "red";
		
	} else if (document.getElementById("mamiQ3_2").checked){
		countF = countF + 1;
		var inputVal = document.getElementById("mamiQ3_2");
		inputVal.style.backgroundColor = "green";
		
		} else if (document.getElementById("mamiQ3_3").checked) {
			countT = countT + 1;
			var inputVal = document.getElementById("mamiQ3_3");
			inputVal.style.backgroundColor = "red";
			
		} else {
			noInput = noInput + 1;
		}
		
	if (noInput==3){
		alert("Please fill out the form first Mami");
	}	
	
	if (countF!=0){
		alert("I am sorry Mami, but some answers are wrong");
	}	
	
	if (countT == 3) {
		window.open ('submission/submissionMami.html','_self',false);
	} else {
		return false;
	}
}
		
