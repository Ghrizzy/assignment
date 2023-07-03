
  // function showbutton(){
  //   var x = document.getElementById("signup")
  //   var y = document.getElementById("btn")
  //   x.style.display = "flex"
  //   y.style.display = "none"

  // }

// const a = document.getElementById("btn")
//  window.addEventListener("resize", NameHide) 
//  function NameHide(){
//     const b = document.getElementById("rev")
//     b.innerHTML = Math.random()
//     window.style.width = "50vh"
// }

// const c = document.getElementById("btn")
//  c.addEventListener("click", NameHide) 
//  function NameHide(){
//     document.getElementById("idf").style.display = "none"
     
// }
// c.removeEventListener("click", NameHide) 
//  function NameHide(){
//     document.getElementById("idf").style.display = "none"
     
// }
 
const firstname = document.getElementById("firstname")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confpass = document.getElementById("confpass")
const form = document.getElementById("form")
const errormessage = document.getElementById("errormessage")
const Email = document.getElementById("email")

form.addEventListener("submit", (e)=>{
    const errors = [];

    if(firstname.value.length < 4){
        errors.push("firstname should not be less than four character")
    }

    if(password.value.length < 7){
        errors.push("password should be more than 7 charcters")
    }
    var x = document.myform.email.value;
    var atposition =x.indexOf("@")
    if(atposition < 1){
      errors.push("email must have an @")
    }

    var firstpassword = document.myform.password.value;
    var secondpassword = document.myform.confpass.value;
    if(password==confpass){
      return true;
    }
    else{
      errors.push("password is not a match")
    }

    if(errors.length > 0){
        e.preventDefault();
        errormessage.innerHTML = errors.join(', ')
    }
})

