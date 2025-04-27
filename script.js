//your JS code here. If required.
function validateAge(age){
	return new Promise((resolve,reject)=>{
		if(age>=18){
			setTimeout(()=>{
				resolve(
				alert("Welcome, . You can vote.")
					)
			},4000)
		}
		else{
			setTimeout(()=>{
				reject(
				alert("Oh sorry . You aren't old enough.")
					)
			},4000)
		}
		
	})
}

const form = document.getElementById('ageForm');
form.addEventListener('submit', function(event) {
	let age=document.getElementById('age').value;
	let name=document.getElementById('name').value;
	if(age ==null || name==null){
		alert("Please enter valid details.")
		return;
	}
	else{
		validateAge(age);
	}
})