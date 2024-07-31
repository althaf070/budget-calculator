function register(){
    const uname=document.getElementById("uname").value

    const password=document.getElementById("password").value
    const user={
        name:uname,
        email:email.value,
        password:password,
        income:0,
        expense:0,
        incomeArray:[],
        expenseArray:[]
    }
    if(user.name=="" || user.email=="" || user.password==""){
        alert("Please enter all feilds")
        return
    }
    if(email in localStorage){
        alert("User email Already registered")
    }else{
        localStorage.setItem('user',JSON.stringify(user))
        alert("Successfully added user")
        
    window.location.href="home.html"
    }

    }