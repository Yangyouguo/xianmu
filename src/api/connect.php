<?php
	// 连接数据库
	$servername = "localhost";//服务器的名称
    $username = "root";//用户名
    $password = "";//密码
    $dbname = 'user';

	// 创建连接
    $conn = new mysqli($servername, $username, $password, $dbname);

    //查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');

?>