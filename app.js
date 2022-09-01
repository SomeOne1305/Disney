const togglePassword = document.querySelectorAll('#togglePassword');
const password = document.querySelectorAll('#password');
password.forEach((item, index)=>{
    item.addEventListener('input', ()=>{
        if (item.value.length > 0) {
            document.querySelector('.eye')[index].style.visibility = 'visible'
        } else {
            document.querySelector('.eye')[index].style.visibility = 'hidden'
        }
    })
})
let li = document.querySelectorAll('nav ul li');
li.forEach(item=>{
    item.addEventListener('click', ()=>{
        document.querySelector('.signUp').style.transform = 'scale(1)'
    })
})
document.querySelector('#quit').addEventListener('click', ()=>{
    document.querySelector('.signUp').style.transform = 'scale(0)'
})
togglePassword.forEach((item, index)=>{
    item.addEventListener('click', function (e) {
        const type = password[index].getAttribute('type') === 'password' ? 'text' : 'password';
        password[index].setAttribute('type', type);
        if (password[index].getAttribute('type') === 'text') {
            item.classList.remove('fa-eye')
            item.classList.add('fa-eye-slash');
        } else {
            item.classList.add('fa-eye')
            item.classList.remove('fa-eye-slash');
        }
    });
})