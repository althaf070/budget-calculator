function login(){
const password=document.getElementById("password").value
const email=document.getElementById("email").value

const storedUser = JSON.parse(localStorage.getItem('user'));
console.log(storedUser);
if(!storedUser || storedUser.password !== password || storedUser.email !== email){
    alert("Please enter correct password and email")
}else{
    alert("You are Logged in successfully");
    window.location.href = "home.html";
}
}