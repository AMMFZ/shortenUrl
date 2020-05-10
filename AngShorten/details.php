<?php
require ('connect.php');
$id = $_GET['id'];
$my_details = [];
$query = @mysqli_query($con, "SELECT `zwar` FROM `link` WHERE `id`=$id LIMIT 1");
$grow = mysqli_fetch_assoc($query);
$zwar = $grow['zwar'];
$upQuery = @mysqli_query($con, "UPDATE `link` SET `zwar`=$zwar+1 WHERE `id`= $id LIMIT 1");
if($upQuery){
    $lquery = @mysqli_query($con, "SELECT * FROM `link` WHERE `id`=$id LIMIT 1");
    while($row = @mysqli_fetch_array($lquery)){
        $start = 0;
        $my_details[$start]['id']= $row['id'];
        $my_details[$start]['url_short']= $row['url_short'];
        $my_details[$start]['time']= date("d-m-Y",$row['time']);
        $my_details[$start]['code']= $row['code'];
        $my_details[$start]['zwar']= $row['zwar'];
        $start++;
    }
    echo json_encode($my_details);
}
?>