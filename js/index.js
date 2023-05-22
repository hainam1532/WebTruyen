window.onload=function(){
    var logout=document.getElementById('logout')
    var userloginname=sessionStorage.getItem('userloginname')
    if(userloginname){
    var account=JSON.parse(localStorage.getItem(userloginname))
    document.getElementById("profile_name").textContent=account.name
    logout.style.display='block'
}else{
    logout.style.display='none'
}}
function log_out(){
    sessionStorage.removeItem("userloginname")
    window.location.href='login.html'
}