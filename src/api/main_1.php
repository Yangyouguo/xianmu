<?php
    $main_1 = array();
    for($i=0;$i<100;$i++){
        $goods = array(
            'id'=> $i+1,
            'imgurl' => '../img/gl'.$i.'.jpg'
        );

        $main_1[$i] = $goods;
    }
    echo json_encode($main_1,JSON_UNESCAPED_UNICODE);
?>
