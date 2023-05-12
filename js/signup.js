window.addEventListener('load',()=>{
    const sign_up_email=document.querySelector('#sign_up_email')
    const sign_up_name=document.querySelector('#sign_up_name')
    const sign_up_passowrd=document.querySelector('#sign_up_password')
    const sign_up_btn=document.querySelector('.site-btn')
    const sign_up=document.querySelector('#sign_up')
    const header_right=document.querySelector('.header__right')
    sign_up.addEventListener('submit',()=>{
        const email=sign_up_email.value
        const name=sign_up_name.value
        const passowrd=sign_up_passowrd.value
        sign_up_btn.addEventListener('click',()=>{
            if(email && name && passowrd){
                const profile_name=document.createElement('p')
                profile_name.classList.add('profile_name')
                profile_name.innerHTML=name
                header_right.appendChild(profile_name)
                sign_up_email.value=''
                sign_up_name.value=''
                sign_up_passowrd.value=''
                return dangky()
            }
        })
    })
})
function dangky(){
    window.open('index.html')
}
