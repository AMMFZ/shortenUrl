<?php
//This Class To Create Code 
class code{
     public $code;
     public function mycode(){
        $this->code = rand(11111111,999999999);
        $this->code = str_replace(0,"A",$this->code);
        $this->code = str_replace(1,"B",$this->code);
        $this->code = str_replace(2,"C",$this->code);
        $this->code = str_replace(3,"DE",$this->code);
        $this->code = str_replace(4,"F",$this->code);
        $this->code = str_replace(5,"GI",$this->code);
        $this->code = str_replace(6,"JU",$this->code);
        $this->code = str_replace(7,"KL",$this->code);
        $this->code = str_replace(8,"MZ",$this->code);
        $this->code = str_replace(9,"NO",$this->code);
        $this->code = substr($this->code,0,4);
        
        return $this->code;
     }
}
$class_code = new code();
?>