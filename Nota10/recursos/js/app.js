let cont = 0

function registerLogin(){

    let login = localStorage.getItem("login")
    if(login === null){
        localStorage.setItem("login","icet2024")
        localStorage.setItem("password","icet2024")        
    } 
} 

function userValidation(){

  let loginStorage =   localStorage.getItem('login')

  let passwordStorage = localStorage.getItem('password')

  if(loginStorage === null || passwordStorage === null ){
        alert("realize seu cadastro")
  }

  const loginInput = document.getElementById('login').value

  const passwordInput = document.getElementById('password').value

  if((loginStorage == loginInput  && passwordStoragetorage == passwordInput) &&
    (loginStorage != ''  && passwordStoragetorage != '' )){
        window.location.href="home.html"
  }else{
    if(cont == 0){
        createElementSpanLogin()
     cont = 1
    }
  }
}

function createElementSpanLogin(){
    let  spanWrongPassword = document.createElement('span')

     spanWrongPassword = document.createElement('span')

     spanWrongPassword.innerHTML = 'Login ou Senha errados'

     //spanWrongPassword.style = 'color:red;padding:10px; border:1px solid black;'
     const wrongPasswordId = document.getElementById('wrongPassword')

     //wrongPasswordId.style = 'margin : 20px'
     wrongPasswordId.append(spanWrongPassword)

     console.log(spanWrongPassword)
}