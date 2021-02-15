
var a = new Array();
function store() {

    var name = document.getElementById("username");
    var pw = document.getElementById("pw");
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');

    }else if(pw.value.length > 8){
        alert('Max of 8');

    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else{
        // localStorage.setItem('name', name.value);
        // localStorage.setItem('pw', pw.value);
        // alert('Your account has been created');
    



    // var name = document.getElementById("username");
    var email = document.getElementById("email");
    var mobile  = document.getElementById("phone");
    // var pw = document.getElementById("pw");
    var birthdate = document.getElementById("birthday");
    var gender = document.getElementById("gender");

    localData = localStorage.getItem('Data');

    if (localData) {
        a = JSON.parse(localData);
    }

    a.push({ 'name': name.value, 'email': email.value, 'mobile': mobile.value, 'birthday': birthdate.value, 'password': pw.value , 'gender': gender.value , 'todo' : []});
    localStorage.setItem('Data', JSON.stringify(a));
    alert("Your account has been created");
    // window.location.replace('/login.html');
  }

  }
  
  //checking
  function check() {

    var stored1 = localStorage.getItem('Data');
    var storedVal = JSON.parse(stored1);
    console.log(storedVal);

    var user_Mobile_Email = document.getElementById('username');
    var user_Password = document.getElementById('pw');

    for (var i = 0; i < storedVal.length; i++) {
        console.log(storedVal[i].email, storedVal[i].password);

        if ((user_Mobile_Email.value == storedVal[i].email || user_Mobile_Email.value == storedVal[i].mobile) && user_Password.value == storedVal[i].password) {
            document.cookie = `email=${storedVal[i].email}`;
            alert('You are logged in.');
            window.location.replace("taskkeeper_dashboard.html");
            // window.location.replace('/');
            break;
        }
        else if (i == (storedVal.length - 1)) {
            console.log(i);
            alert('Login falied : please check your email or password');
        }
    }
}
