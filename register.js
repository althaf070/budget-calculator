function register(){
    const uname=document.getElementById("uname").value

    const password=document.getElementById("password").value
    const user={
        name:uname,
        email:email.value,
        password:password,
        balance:0,
        spent:0
    }
    if(user.name=="" || user.email=="" || user.password==""){
        alert("Please enter all feilds")
        return
    }
    if(localStorage.getItem(user.email)){
        alert("User already exists")
        return
    }else{
        localStorage.setItem('user',JSON.stringify(user))
        alert("Successfully added user")
        
    window.location.href="home.html"
    }

    }