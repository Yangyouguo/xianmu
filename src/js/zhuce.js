        document.addEventListener('DOMContentLoaded',function(){
            let username = document.querySelector('#username');
            let num = document.querySelector('#num');
            let btnReg = document.querySelector('.btnReg');
            let group = username.parentNode;
            let txt = username.nextElementSibling;
            /*
                4-20个字符，一个汉字为两个字符，推荐使用中文会会员名字。一旦注册成功会员名将不能修改。
            */
            // var username = document.getElementById('username').value;

            // if(!/^\.[\u4e00-\u9fa5]{4,19}$/ig.test(username)){
            //     alert('用户名不合法');

            //     return false;
            // }

            // var phone = document.getElementById('phone').value;
            // if(!/^1[3-8]\d{9}$/i.test(identity)){
            //     alert('手机号不合法');

            //     return false;
            // }

            username.onblur = function(){
                let _username = username.value;

                ajax({
                    url:'../api/zhuce.php',
                    data:{username:_username},
                    success:function(data){
                        if(data === 'success'){
                            group.classList.remove('has-error');
                            group.classList.add('has-success');
                            txt.innerHTML = '';
                        }else{
                            group.classList.remove('has-success');
                            group.classList.add('has-error');
                            txt.innerHTML = _username + ' 用户名已经存在'
                            
                        }
                    }
                })
            }

            // 注册
            btnReg.onclick = function(){
                let _username = username.value;
                let _num = num.value;

                ajax({
                    url:'../api/zhuce.php',
                    data:{
                        username:_username,
                        num:_num,
                        type:'reg'

                    },
                    success:function(data){
                        if(data == 'success'){
                            window.location.href="html/denglu.html";
                        }
                    }
                })
            }
        })