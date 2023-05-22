function login(e){
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var account
    for(var i=0;i<localStorage.length;i++){
        var key=localStorage.key(i)
        account=JSON.parse(localStorage.getItem(key))
        // if(account && username == account.username && password == account.password){
        if(account && account && email == account.username && password == account.password){
        sessionStorage.setItem("userloginname",account.name)
        alert("Đăng nhập thành công")
        window.location.href = "index.html"
        return;
    }
}
alert("Đăng nhập thất bại !! Vui lòng thử lại")
}
