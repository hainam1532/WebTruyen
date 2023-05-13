window.addEventListener('load', (e) => {
    e.preventDefault();
    const sign_up_email = document.querySelector('#sign_up_email')
    const sign_up_name = document.querySelector('#sign_up_name')
    const sign_up_password = document.querySelector('#sign_up_password')
    const sign_up_btn = document.querySelector('.site-btn')
    const sign_up = document.querySelector('#sign_up')
    const header_right = document.querySelector('.header__right')``
  
    sign_up.addEventListener('submit', (e) => {
      e.preventDefault(); // ngăn chặn submit form
      const email = sign_up_email.value
      const name = sign_up_name.value
      const password = sign_up_password.value
      if (email && name && password) {
        const profile_name = document.createElement('p')
        profile_name.classList.add('profile_name')
        profile_name.innerHTML = name
        header_right.appendChild(profile_name)
        sign_up_email.value = ''
        sign_up_name.value = ''
        sign_up_password.value = ''
      }
    })
  
    sign_up_btn.addEventListener('click', () => {
      dangky()
    })
  })
  
  function dangky() {
    window.open('index.html')
  }
  
