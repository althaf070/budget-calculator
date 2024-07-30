function login(){
const password=document.getElementById("password").value
const email=document.getElementById("email").value

const storedUser = JSON.parse(localStorage.getItem('user'));
console.log(storedUser);
if(!storedUser || storedUser.password !== password){
    alert("Please enter correct password")
}else{
    alert("You are Logged in successfully");
    window.location.href = "home.html";
}
}