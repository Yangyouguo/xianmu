        document.addEventListener('DOMContentLoaded',function(){
             var tab = document.getElementsByClassName('tab')[0];
             var tabItem = tab.children[0].children;
             var tabContent = tab.children[1].children;


            tabItem[0].className = 'active';
            for(var i=0;i<tabItem.length;i++){
                if(i>0){
                    tabContent[i].style.display = 'none';
                }
                tabItem[i].onclick = function(){createCode(); 
                    var idx;
                    for(var i=0;i<tabItem.length;i++){
                        if(tabItem[i] === this){
                            idx = i;
                        }
                        tabItem[i].className = '';
                        tabContent[i].style.display = 'none';
                    }
                    this.className = 'active';
                    tabContent[idx].style.display = 'block';

                }
            }

            // jQuery(function($){
            //     let $yanzheng = $('#yanzheng');
            //     let $code = $('#code');
            //     let $btnLogin = $('#btnLogin');
            //     let $huan = $('#huan');
            //     let $huan2 = $('#huan2');
            //     let $huan3 = $('#huan3');
            //     let $yam = $('.yam');
            // })
            var yanzheng = document.getElementById('yanzheng');
            var code = document.getElementById('code');
            var btnLogin = document.getElementById('btnLogin');
            var yzm = document.getElementsByClassName('yzm');
            var huan3 = document.getElementById('huan3');
            var huan2 = document.getElementById('huan2');
            var huan = document.getElementById('huan');




            for(var i = 0; i < yzm.length; i++){
                yzm[i].innerHTML = createCode();
            }

            function createCode(){
                var num = randomNumber(1000,9999);
                return num;
            }
            // 登录验证
            btnLogin.onclick = function(){
                // 获取输入的验证码
                var _vcode = yanzheng.value;

                if(_vcode != code.innerHTML){
                    alert('验证码不正确')
                }else{
                    location.href = '09success.html';
                }
            }
            // 点击刷新
            huan.onclick = function(){
                code.innerHTML = createCode();
            }
            // 点击刷新
            huan2.onclick = function(){
                code.innerHTML = createCode();
                console.log(createCode());
            }
                // 点击刷新
            huan3.onclick = function(){
                code.innerHTML = createCode();
                console.log(createCode());
            }

        })