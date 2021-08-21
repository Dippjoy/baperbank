document.getElementById('login-submit').addEventListener('click',function(){
    const userEmail = document.getElementById('email-input').value
    const userPassword = document.getElementById('password-input').value
    if(userEmail== "dj@gmail.com" && userPassword =="secret"){
        window.location.href="account.html"
    }
})