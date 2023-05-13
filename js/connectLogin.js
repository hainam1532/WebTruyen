$(document).ready(() => {
  $('form').submit((event) => {
    event.preventDefault(); // Ngăn chặn trình duyệt gửi yêu cầu mặc định

    const email = $('#email').val();
    const password = $('#password').val();

    $.ajax({
      url: '/login', // Địa chỉ của API đăng nhập
      method: 'POST',
      data: {
          email: email,
          password: password
      },
      success: (response) => {
        alert(response.message);
        window.location.href = 'index.html'; // Chuyển hướng tới trang bảo mật
      },
      error: (xhr, status, error) => {
        const errorMessage = xhr.responseJSON.message;
        alert(errorMessage);
      }
    });
  });
});
