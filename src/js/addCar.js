

jQuery(function($){
            // header
            $('header').load('./header.html #nav');
            // footer
            $('footer').load('./footer.html');

            let $btnAll = $('#all');
            let $btnFx = $('#btnFx');
            let $keyword = $('#keyword');
            let $table = $('.datalist');
            let $trs = $table.children('tbody').children('tr');

            let $checkboxs = $table.find(':checkbox').not('#all');

            $trs.filter(':even').addClass('even');

            $btnAll.on('click',function(){

                $checkboxs.prop('checked',this.checked);

                $trs[this.checked ? 'addClass' : 'removeClass']('selected');
            });

            $table.on('click','tbody td',function(){

                let $currentTr = $(this).closest('tr');

                $currentTr.toggleClass('selected')

                .find(':checkbox').prop('checked',$currentTr.hasClass('selected'))
                checkall()
            });
            // 反选
            $btnFx.click(function(){
                $checkboxs.each(function(idx,ele){
                    ele.checked = !ele.checked;
                    $(this).closest('tr')[this.checked ? 'addClass' : 'removeClass']('selected');
                });
                checkall();
            })
            function checkall(){
                let $checkeds = $checkboxs.filter(':checked');
                $btnAll.prop('checked',$checkboxs.length===$checkeds.length);
            }
        })