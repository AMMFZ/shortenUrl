<?php
require 'connect.php';
$ip = $_SERVER['REMOTE_ADDR'];
$links = [];
$sql = "SELECT * FROM `link` WHERE `ip`='$ip' ORDER BY `id` DESC";
if($result = mysqli_query($con,$sql)){
    $cr = 0;
    while($row = mysqli_fetch_assoc($result)){
        $links[$cr]['id'] = $row['id'];
        $links[$cr]['url_short'] = $row['url_short'];
        $links[$cr]['code'] = $row['code'];
        $links[$cr]['time'] = date("d-m-Y",$row['time']);
        $links[$cr]['zwar'] = $row['zwar'];
        $cr ++;
    }
    // print_r($students); // Array
    echo json_encode($links); // convert to Json
}else{
    http_response_code(404);
}
?>