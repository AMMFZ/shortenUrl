<?php
require ('connect.php');
$id = $_GET['id'];
$query = @mysqli_query($con, "DELETE FROM `link` WHERE `id`=$id LIMIT 1");
if($query){
    $msg = '1 row deleted successfully';
    echo json_encode($msg);
}
?>