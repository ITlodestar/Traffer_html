<?php 
    $name = $_REQUEST['name']; 
    $email = $_REQUEST['email'];
    $message = $_REQUEST['message'];

    //echo $name.", ".$phone.", ".$email.", ".$message;
	$msg = "Новая заявка с сайта gembl-hub.net\n";
	$msg .= "Имя: $name\n";
	$msg .= "Емейл: $email\n";
	$msg .= "Сообщение: $message\n";
	
	//send_tg_msg($msg, 51337503);
	send_tg_msg($msg, 642707493 );
	
	
	
	
	function send_tg_msg($msg, $tgid) {
        $token="6060960614:AAEoR8QxvT8t2YXcVowIrEDLbQtqZmx-1I4";
        $msg = urlencode($msg);
        $msg = "https://api.telegram.org/bot$token/sendMessage?chat_id=$tgid&text=". $msg;

        file_get_contents($msg);

}


	
?>