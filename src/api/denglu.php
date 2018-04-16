<?php
    require('connect.php');
    
    $username = isset($_GET['username']) ? $_GET['username'] : null;
    $password = isset($_GET['password']) ? $_GET['password'] : null;
    
    $mima = md5($password);
    $sql = "select * from name where username='$username' and password='$password'";
    $result = $conn->query($sql);

    if($result->num_rows>0){
            echo "success";
            $mima = md5($password);
        }else{
            echo "fail";
        }

?>