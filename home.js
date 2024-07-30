
window.addEventListener("DOMContentLoaded",()=>{
    const user = JSON.parse(localStorage.getItem('user'));
    console.log("-----");
console.log(user);
if (user && user.name) {
    document.getElementById('uname').textContent = `Welcome, ${user.name}`;
    bal.textContent=user.balance
  }
})

