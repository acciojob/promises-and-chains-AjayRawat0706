//your JS code here. If required.
function validateAge(age){
	
	return new Promise((resolve,reject)=>{
		 setTimeout(() => {
            if (age >= 18) {
                resolve();
            } else {
                reject();
            }
        }, 4000);
		
	})
}

const form = document.getElementById('ageForm');
form.addEventListener('submit', function(event) {
	event.preventDefault();
	let age=document.getElementById('age').value;
	let name=document.getElementById('name').value;
	if(age ==="" || name===""){
		alert("Please enter valid details.")
		return;
	}
	else{
		validateAge(age)
		.then(()=>{
			alert(`Welcome, ${name}. You can vote.`)
		})
		.catch(()=>{
			 alert(`Oh sorry ${name}. You aren't old enough.`);
		})
	}
})