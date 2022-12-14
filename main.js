function submit(){
var userName = documnet.getElementById('name').value;
var email = documnet.getElementById('email').value;

var abc = localStorage.setItem('name', userName);
var def = localStorage.setItem('email', email);
}