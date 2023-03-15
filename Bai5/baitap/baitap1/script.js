document.getElementById("calc").addEventListener("submit", calculate); 	
	
function calculate(e){
var radios = document.getElementsByName('gender');
var height = Number(document.getElementById("num1").value);
var weight = Number(document.getElementById("num2").value);
var height2 = height * height;
var bmi = (weight / height2)
	document.getElementById("result").innerHTML = bmi.toFixed(2);
	for (var i = 0, length = radios.length; i < length; i++)
{
 if (radios[i].checked)
 {
    break;
 }
}
if (radios[i].value == 0){
	  
  if(bmi <= 19.1) {
		document.getElementById("message").innerHTML = "Gầy!";
	}
	else if (19.1 <=bmi <= 25.8) {
		document.getElementById("message").innerHTML = "Bình thường";
	}
	
  else if (25.8 <bmi <= 27.3) {
		document.getElementById("message").innerHTML = "Thừa cân nhẹ";
	}
	
  else if (27.3< bmi <= 32.3) {
		document.getElementById("message").innerHTML = "Trên lý tưởng!";
	}
	
  else if (bmi => 32.3) {
	    document.getElementById("message").innerHTML = "Béo phì";
	} 
  }
	else{
			if (bmi <= 20.7) {
		document.getElementById("message").innerHTML = "Gầy";
	}
   else if (20.7<bmi <= 26.4) {
		document.getElementById("message").innerHTML = "Bình thường!";
	}
	
   else if (26.4<bmi <= 27.8) {
		document.getElementById("message").innerHTML = "Thừa cân nhẹ";
	}
	
   else if (27.8<bmi <= 31.1) {
		document.getElementById("message").innerHTML = "Trên lý tưởng";
	}
	
  else if (bmi => 31.1) {
	    document.getElementById("message").innerHTML = "Béo phì!";
	} 		
}
}