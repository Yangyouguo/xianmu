var bans= document.querySelectorAll('.banner_list li');
        console.log(banner,bans)
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