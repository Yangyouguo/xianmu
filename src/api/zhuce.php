<?php
    require('connect.php');
    
    $username = isset($_GET['username']) ? $_GET['username'] : null;
    $num = isset($_GET['num']) ? $_GET['num'] : null;
    $type = isset($_GET['type']) ? $_GET['type'] : null;
    $sql = "select username from user where username='$username'";

    $result = $conn->query($sql);

    
    if($result->num_rows>0){
        echo "fail";
    }else{
        if($type === 'reg'){
            // $num = md5($num);

            $sql = "insert into user(username,num) values('$username','$num')";

            $res = $conn->query($sql);

            if($res){
                echo "success";
            }else{
                echo "fail";
            }
        }else{
            echo "success";
        }
    }

?>