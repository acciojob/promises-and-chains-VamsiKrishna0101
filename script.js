//your JS code here. If required.
function validate() {
	const age=document.getElementById("age").value
	const name=document.getElementById("name").value
	if(age<0||!name.trim()){
		alert("Please enter valid details")
		return
	}
	let mypromise=new Promise((res,rej)=>{
         setTimeout(()=>{
			 if(age<18){
				 rej(`oh sorry ${name}. You aren't old enough.`)
			 }else{
				 res(`Welcome, ${name}. You can vote.`)
			 }
		 },4000)
	})
	mypromise.then((message)=>alert(message))
	.catch((message)=>alert(message))
}
