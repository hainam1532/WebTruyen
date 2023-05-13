function signup(e){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var user = {
        username : username,
        password : password,
    };
    var json = JSON.stringify(user);
    localStorage.setItem(username,json);
    alert("Đăng ký thành công !");
    return back();
}

function back(){
    window.location.href = "login.html";
}
