        document.addEventListener('DOMContentLoaded',function(){
             var tab = document.getElementsByClassName('tab')[0];
             var tabItem = tab.children[0].children;
             var tabContent = tab.children[1].children;

             tabXh();
            function tabXh(){
                tabItem[0].className = 'active';
            for(var i=0;i<tabItem.length;i++){
                if(i>0){
                    tabContent[i].style.display = 'none';
                }
                tabItem[i].onclick = function(){
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
            }
            // var Tab = document.getElementsByClassName('Tab')[0];
            // var tabItem = Tab.children[0].children;
            //  var tabContent = Tab.children[1].children;

            //  tabXh();

            // 记录window.onload = function(){
            var goods = document.getElementsByClassName('goods')[0];
            var history = document.getElementsByClassName('history')[0];
            var img = document.querySelector('.ss').children[0];
            var xt = document.querySelector('.xt');
            var title = document.querySelector('.title');
            var jiaGe = document.querySelector('.jiaGe');
            var st = document.querySelector('.st');
            // img.src = 


            // 用于保存当前商品信息
            var currentGoods;

            // 用于保存浏览记录
            var historyList = [];

            // 先获取cookie
            var cookie = document.cookie.split('; ');
            cookie.forEach(function(item){
                var arr = item.split('=');
                if(arr[0] === 'currentGoods'){
                    currentGoods = JSON.parse(arr[1]);
                }else if(arr[0] === 'historyList'){
                    historyList = JSON.parse(arr[1]);
                }
            });
            //获取数据
             console.log(historyList);
             historyList.forEach(function(item){
                console.log(item.imgurl)
                img.src = item.imgurl;
                xt.src = item.imgurl;
                st.src = item.imgurl;
                title.innerHTML = item.title;
                jiaGe.innerHTML = item.price;
             });
             // var gw = document.querySelector('.gw');
             // var carList = myCar.querySelector('ul');
             // console.log(gw)
             // gw.onclick = function(){

             // }
            // 如果当前商品已经存在historyList，则删除（放置重复）
            for(var i=0;i<historyList.length;i++){
                if(historyList[i].guid === currentGoods.guid){
                    historyList.splice(i,1);
                    break;
                }
            }

            historyList.unshift(currentGoods);

            // 重新把history写回cookie
            // 3天有效期
            var now = new Date();
            now.setDate(now.getDate()+3);
            document.cookie = 'historyList=' + JSON.stringify(historyList) + ';expires=' + now;

            // 把当前商品信息写入goods
            var img = document.createElement('img');
            img.src = currentGoods.imgurl;

            var h1 = document.createElement('h1');
            h1.innerText = currentGoods.title;

            var price = document.createElement('p');
            price.className = 'price';
            price.innerText = currentGoods.price;

            goods.appendChild(img);
            goods.appendChild(h1);
            goods.appendChild(price);

            // 把历史记录写入页面.history
            var ul = document.createElement('ul');
            historyList.forEach(function(item){
                var li = document.createElement('li');
                li.setAttribute('data-guid',item.guid);

                var link = document.createElement('a');
                link.href = 'details.html';

                var img = document.createElement('img');
                img.src = item.imgurl;

                // 把图片插入a标签
                link.appendChild(img);

                // 标题
                var h4 = document.createElement('h4');
                h4.innerHTML = item.title;

                // 价格
                var price =document.createElement('p');
                price.className = 'price';
                price.innerText = item.price;

                // 组合
                li.appendChild(link);
                li.appendChild(h4);
                li.appendChild(price);

                ul.appendChild(li);
            });

            history.appendChild(ul);
        
            
        })