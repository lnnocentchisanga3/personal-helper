
		
		function getCalculate() {
			var amount = document.getElementById('amount').value;
			document.getElementById('amount').value = null;

			if (amount <= 150){
				document.getElementById('display').innerHTML = "The charged fee is: K"+2.50;
			}else if (amount == 151 && amount <= 299) {
				document.getElementById('display').innerHTML = "what the fuck is: K"+5;
			}else if (amount >= 300 && amount <= 599 ){
				document.getElementById('display').innerHTML = "The charged fee is: K"+7.250;
			}else if(amount >= 600 && amount <= 899){
				document.getElementById('display').innerHTML = "The charged fee is: K"+10;
			}else if(amount >= 900 && amount <= 1200){
				document.getElementById('display').innerHTML = "The charged fee is: K"+15;
			}else{
				document.getElementById('display').innerHTML = "Enter the lower amount";
			}
		}
	

	document.getElementById('cls').addEventListener('click', function(){
		document.getElementById('display').innerHTML = "The charged fee is: K";
		var value = "Enter the Amount in kwacha" 
		document.getElementById('amount').value = null;
	});

document.getElementById('next').addEventListener('click', function(){
		alert("hello");
	})






function planMoney() {
	var money = document.getElementById('amountPlan').value;
	if (money == "!@#$%&*{}+_)("){
		document.getElementById('show').innerHTML = "Enter the Valid Money";
	}
	document.getElementById('amountPlan').value = null;

	document.getElementById('show').innerHTML = "Your Money is: K"+money;
	document.getElementById('showTitle').innerHTML = "Your money is divided into the following accounts";
//Disaater account
	var ans = 10/100;
	var fans = ans * money;

	if (fans == 0.1 || fans == 0.2 || fans == 0.3 || fans == 0.4 || fans == 0.5 || fans == 0.6 || fans == 0.7 || fans == 0.8 || fans == 0.9) {
		var convert = fans*10;
		document.getElementById('showMe').innerHTML = convert+" ngwe";
	}else{
		document.getElementById('showMe').innerHTML = "Disaster account: K "+fans;
	}

//Business account 

var ansBus = 40/100;
	var fansBus = ansBus * money;

	if (fansBus == 0.1 || fansBus == 0.2 || fansBus == 0.3 || fansBus == 0.4 || fansBus == 0.5 || fansBus == 0.6 || fansBus == 0.7 || fansBus == 0.8 || fansBus == 0.9) {
		var convertBus = fansBus*10;
		document.getElementById('showBus').innerHTML = convertBus+" ngwe";
	}else{
		document.getElementById('showbBus').innerHTML = "K "+fansBus;
	}

}

