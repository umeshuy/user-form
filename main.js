function submit(){
var userName = documnet.getElementById('name').value;
var email = documnet.getElementById('email').value;

var abc = localStorage.setItem('name', userName);
var def = localStorage.setItem('email', email);
}

//delete function
function deleteUser(email){
    localStorage.removeItem(email);
    removeUser(email);
}

function removeUser(email){
    var parent = document.getElementById('myforms');
    var child = document.getElementById('');
    if(child){
        parent.removeChild(child);
    }
}

function editDetails(email,name){
document.getElementById('name').value = name;
document.getElementById('email').value = email;
removeUser(email);
}