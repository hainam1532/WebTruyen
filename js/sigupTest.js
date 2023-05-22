function signup(e){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var name= document.getElementById("name").value
    var password = document.getElementById("password").value;
    var user = {
        username: username,
        name: name,
        password: password,
    };
    // document.getElementById("profile_name").innerText=name
    var json = JSON.stringify(user);
    localStorage.setItem(name,json);
    alert("Đăng ký thành công !");
    back();
}

function back(){
    window.location.href = "login.html";
    // window.open("login.html")
}
