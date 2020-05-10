<?php
include 'connect.php';
require 'code.php';
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    // convert json to object
    $request = json_decode($postdata);
    // sanitize data
    $geturl = mysqli_real_escape_string($con, trim($request->link));
    $code = $class_code -> mycode();
    $time = time();
    $ip = $_SERVER['REMOTE_ADDR'];

    if(!$geturl || $geturl == ''){
        $msg = ["a link is required :("];
        echo json_encode($msg);
    }else{
        if(filter_var($geturl, FILTER_SANITIZE_URL)){
           if(!filter_var($geturl, FILTER_VALIDATE_URL)){
               $msg = ["link must start with http or https :("];
               echo json_encode($msg);
           }else{
               $query=mysqli_query($con, "insert into link (url_short,code,time,ip,zwar)
                               values('$geturl','$code','$time','$ip','1')");
               if($query){
                 $success =  'your link shorted :)';
                 $yourres =  'http://localhost/link/'.$code;
                 $msg = [$success,$geturl,$yourres];
                 echo json_encode($msg);
               }else{
                 $msg = ["un expected error :("];
                 echo json_encode($msg);
               }
           }
        }
    }
}
?>