
function handleSubmit() {
    let elmName = document.getElementById('inputName').value;
    let elmPassword = document.getElementById('inputPassword').value;
    // console.log(elmName, elmPassword);
    if (elmName.toLowerCase() === 'aptech' && elmPassword.toLowerCase() === 'aptech') {
        alert('sucess login');
        window.location.href = `../exam1/exam1.html?islogin=true`;
    } else {
        alert('fail login')
    }
}
