jQuery(function($){
    // $('header').load('html/header.html');
    $('footer').load('html/footer.html');
});
document.addEventListener('DOMContentLoaded',function(){
            var toTop = document.getElementById('toTop');
            window.onscroll = function(){
                var scrollTop = window.scrollY;

                if(scrollTop >= 700){
                    toTop.style.display = 'block';
                }else{
                    toTop.style.display = 'none';
                }
            }

            toTop.onclick = function(){

                var timer = setInterval(function(){
                    var scrollTop = window.scrollY;
                    var speed = parseInt(scrollTop/5);

                    scrollTop -= speed;

                    if(speed <= 10){
                        clearInterval(timer);
                        scrollTop = 0;
                    }

                    scrollTo(0,scrollTop);
                    
                },30)
            }
            
        });

jQuery(function($){
    var bans= document.querySelectorAll('.banner_list li');
    let $banner = $('#banner');
        var page = document.querySelectorAll('.banner_page span')
        console.log(page)
        $(bans).not(':first').hide();
        $(page).first().addClass('active');
        var time;
        var idx = 0;
        var a;
        console.log(a);
        move();
        function move(){
            time = setInterval(function(){
                a= idx;
                idx++;
                if(idx==bans.length){
                    idx =0 ;
                }
                $(bans).eq(idx).stop().fadeIn().siblings('li').stop().fadeOut();
                $(page).eq(idx).addClass('active').siblings().removeClass('active');
            },3000);
            
        }
        $('.banner_list').on('mouseenter',function(){
            clearInterval(time);
            $('.banner_page').on('mouseenter','span',function(){
                let idx = $(this).index();
                a = idx;
                $(bans).eq(idx).stop().fadeIn().siblings('li').stop().fadeOut();
                $(page).eq(idx).addClass('active').siblings().removeClass('active');
            });
            $('.ban_float').show();
            $('.banner_prev').on('mousedown',function(){
                idx = (a=undefined? 0: a);
                 console.log(idx)
                idx--;
                if(idx<0){
                    idx = 6;
                }
                a=idx*1;
                
                $(bans).eq(idx).stop().fadeIn().siblings('li').stop().fadeOut();
                $(page).eq(idx).addClass('active').siblings().removeClass('active');
            });
            $('.banner_next').on('mousedown',function(){
                idx = (a=undefined? 0: a); 
                (function(idx){
                    idx++;
                    if(idx==bans.length){
                        idx =0 ;
                    }
                    a = idx*1;
                    console.log(idx)
                    $(bans).eq(idx).stop().f

                    $(bans).eq(idx).stop().fadeIn().siblings('li').stop().fadeOut();
                    $(page).eq(idx).addClass('active').siblings().removeClass('active');

                })(idx)
            })
        }).on('mouseleave',function(){
            $('.ban_float').hide();
            clearInterval(time)
           
            idx = (a=undefined? 0: a); 
            console.log(idx)
            move();
        });

        // var xd = document.getElementsByClassName('xd');
        // console.log(xd);
        // window.onscroll = function(){
        //     var scrollTop = window.scrollY;
        //     if(scrollTop >= 1000){
        //         xd.style.display = 'block';
        //     }else{
        //         xd.style.display = 'none';
        //     }
        // }
        // xd.onclick = function(){
        //     var timer =setInterval(function(){
        //         var scrollTop = window.scrollY;
        //         var speed = parseInt(scrollTop/5);
        //         scrollTop -= speed;
        //         if(speed <= 10){
        //             clearInterval(timer);
        //             scrollTop = 0;
        //         }
        //         scrollTo(0,scrollTop);
        //     },30)
        // }
        // 
        
        // main_1精选
        let main_1 = document.querySelector('.main_1');
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4){
                    let data = JSON.parse(xhr.responseText)
                    console.log(data);

                    main_1.innerHTML = data.map(item=>{
                        return `
                            <li data-id="${item.id}">
                                <img src="${item.imgurl}">
                            </li>
                        `
                    }).join('')
                }
            }
            xhr.open('get','http://localhost:1008/data/main_1.json',true);
            xhr.send();

            // main_2精选
})


