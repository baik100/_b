const buttonSignUp = document.querySelector('#signUp');


const signUp = function (e) {

    // Prevent actual submit
    e.preventDefault();


    // Get form values
    const userId = document.querySelector('#userId').value;
    const userPassword = document.querySelector('#userPassword').value;
    const userPasswordConfirm = document.querySelector('#userPasswordConfirm').value;
    const userPhone = document.querySelector('#userPhone').value;
    const userEmail = document.querySelector('#userEmail').value;


    // Validate
    if(! userId){
        alert('아이디를 입력해주세요')
        document.getElementById('userId').focus();
        // 커서가 가도록 한다.
        return;
        // 원상태로 돌아가기
    }
    // false = '', undefined, null

    if(! userPassword){
        alert('비밀번호를 입력해주세요')
        document.getElementById('userPassword').focus();
        // 커서가 가도록 한다.
        return;
        // 원상태로 돌아가기
    }
    if(! userPasswordConfirm){
        alert('비밀번호를 입력해주세요')
        document.getElementById('userPasswordConfirm').focus();
        // 커서가 가도록 한다.
        return;
        // 원상태로 돌아가기
    }
    if(! userPhone){
        alert('전화번호를 입력해주세요')
        document.getElementById('userPhone').focus();
        // 커서가 가도록 한다.
        return;
        // 원상태로 돌아가기
    }
    if(! userEmail){
        alert('이메일을 입력해주세요')
        document.getElementById('userEmail').focus();
        // 커서가 가도록 한다.
        return;
        // 원상태로 돌아가기
    }

    // Compare Values
    if(userPassword !== userPasswordConfirm){
        alert('비밀번호가 서로 다릅니다')
        document.getElementById('userPassword').value = '';
        document.getElementById('userPasswordConfirm').value = '';

        document.getElementById('userPassword').focus();
        return;
    }

    // Check Password length
    if(userPassword.length < 8){
        alert('비밀번호를 최소 8자리이상 작성해야 합니다')
        document.getElementById('userPassword').value = '';
        document.getElementById('userPasswordConfirm').value = '';

        document.getElementById('userPassword').focus();
        return;
    }

    // Check Email address
    const rehExp = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;
    if(!rehExp.test(userEmail)){
        alert('이메일 형식이 다릅니다')
        document.getElementById('userEmail').value = '';
        document.getElementById('userEmail').focus();
        return;
    }

    alert('회원가입이 완료되었습니다.')
}

buttonSignUp.addEventListener('click', signUp);