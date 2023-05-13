function login(e){
    event.preventDefault();
    var email = document.getElementById("Email").Value;
    var password = document.getElementById("Password").Value;
    var user = localStorage.getItem(email);
    var data = JSON.parse(user);
    if(user == null){
        alert("Vui lòng nhập email và password !!!")
    }
    else if(email == data.email && password == data.password){
        alert("Đăng nhập thành công")
        window.location.href = "index.html"
    }
    else{
        alert("Đăng nhập thất bại !! Vui lòng thử lại")
    }

}