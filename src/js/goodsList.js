jQuery(function($){
    $('header').load('./header.html');
    $('top').load('./header.html .toTop');
    $('footer').load('./footer.html');
});
document.addEventListener('DOMContentLoaded',function(){

        // 商品数据
        var list = [{
            "imgurl":"../img/gl2.jpg",
            "title":"男五双装潮流元素提花短袜",
            "price":5186,
            "guid":"g001"
        },{
            "imgurl":"../img/gl3.jpg",
            "title":"男五双装潮流元素提花短袜",
            "price":21128,
            "guid":"g002"
        },{
            "imgurl":"../img/gl3.jpg",
            "title":"男五双装潮流元素提花短袜",
            "price":10461,
            "guid":"g003"
        },{
            "imgurl":"../img/gl4.jpg",
            "title":"Bottega Veneta",
            "price":15278,
            "guid":"g004"
        },{
            "imgurl":"../img/gl1.jpg",
            "title":"男五双装潮流元素提花短袜",
            "price":23644,
            "guid":"g005"
        },{
            "imgurl":"../img/gl3.jpg",
            "title":"Bottega Veneta8175",
            "price":23254,
            "guid":"g006"
        },{
            "imgurl":"../img/gl2.jpg",
            "title":"男五双装潮流元N 4906",
            "name":"Bottega Veneta",
            "price":5556,
            "yPrice":3290,
            "guid":"g007"
        },{
            "imgurl":"../img/gl2.jpg",
            "title":"男五双装潮流元素 4906",
            "name":"Bottega Veneta",
            "price":'5556',
            "jia":3290,
            "guid":"g008"
        },{
            "imgurl":"../img/gl1.jpg",
            "title":"男五双装潮流元素提花短袜",
            "price":7636,
            "guid":"g009"
        },{
            "imgurl":"../img/gl2.jpg",
            "title":"男五双装潮流元素提花短袜",
            "price":12076,
            "guid":"g010"
        }];


        var goodsList = document.getElementsByClassName('goods-list')[0];

        //遍历数据，写入页面.goods-list
        var ul = document.createElement('ul');
        list.forEach(function(item){
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


            var btnAdd = document.createElement('button');
            btnAdd.className = 'add2cart';
            btnAdd.innerText = '折扣';

            // 组合
            li.appendChild(link);
            li.appendChild(h4);
            li.appendChild(price);
            li.appendChild(btnAdd);

            ul.appendChild(li);
        });

        goodsList.appendChild(ul);
        console.log(goodsList);
        console.log(list);
        var jg = document.getElementById('jg');
            var cx = 1;
            jg.onclick = function(){
                if(cx == 1){
                    // 价格从小到大排序
                    for(j=0;j<list.length;j++){
                        for( i=0;i<list.length-1;i++){
                            console.log(list[i].price);
                            if(list[i].price<list[i+1].price){
                               var temp = list[i];
                               list[i] = list[i+1];
                               list[i+1] = temp;
                            }
                        }
                    }
                }
            }

        // 点击商品时，进入商品详情页
        // 进入商品详情页前，把当前商品的信息保存到cookie

        // 利用事件委托把事件绑定到goodsList
        goodsList.onclick = function(e){
            e = e || window.event;
            var target = e.target || e.srcElement;

            if(target.tagName.toLowerCase() === 'img'){
                var currentGUID = target.parentElement.parentElement.getAttribute('data-guid');

                // 根据guid获取整个商品的信息
                var currentGoods = list.filter(function(item){
                    return item.guid === currentGUID;
                })[0];

                // 把当前商品写入cookie
                var now = new Date();
                now.setDate(now.getDate()+3);
                document.cookie = 'currentGoods=' + JSON.stringify(currentGoods) + ';expires=' + now;
            }
            console.log(goodsList.length);
        }
    });