<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;
	
  require '../phpmailer/src/Exception.php';
  require '../phpmailer/src/PHPMailer.php';
  require '../phpmailer/src/SMTP.php';

  $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
  $nominative = filter_input(INPUT_POST, 'nominative', FILTER_SANITIZE_STRING);
  $mobile = filter_input(INPUT_POST, 'mobile', FILTER_SANITIZE_STRING);
  $subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_STRING);
  $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);
  $agree = filter_input(INPUT_POST, 'agree', FILTER_SANITIZE_STRING);


  if(isset($_POST['captcha'])) {
    $secret_key = ''; 
    $response = $_POST["captcha"];

    // reCAPTCHA response verification
    $verify_captcha = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secret_key.'&response='.$response); 
             
    // Decode reCAPTCHA response 
    $verify_response = json_decode($verify_captcha); 
             
    // Check if reCAPTCHA response returns success 
    if($verify_response->success)
    {                             
        if($agree == 1)
        {
            $emailTo = $email;
            $emailFrom = $email;
    		$converted_bool = $agree ? 'Accettato' : 'Non accettato';
            
            $mail = new PHPMailer(true);
            try 
            {
                //Server settings
                $mail->SMTPDebug = 0;     
        	    $mail->isSMTP();                              
        		$mail->Host = 'smtps.aruba.it';  
        		$mail->SMTPAuth = true;                               
        		$mail->Username = '';              
        		$mail->Password = '';                   
        		$mail->SMTPSecure = 'ssl';                           
        		$mail->Port = 465;
            
                //Recipients
                $mail->setFrom('a.mari@andreamari.cloud', 'Andrea Mari');
                $mail->addAddress($emailTo, $nominative );              
                $mail->addReplyTo('no-reply@example.com', 'No Reply');
                
                $template = file_get_contents('https://www.andreamari.cloud/assets/template/contatto/it/user_template_it.html');

                //HTMLContent
                $mail->isHTML(true);                                  
                $mail->Subject = $subject;

                $template = str_replace('%nominative%', $nominative, $template);
                $template = str_replace('%emailFrom%', $emailFrom, $template);
                $template = str_replace('%phone%', $mobile, $template);
                $template = str_replace('%subject%', $subject, $template);
                $template = str_replace('%text%', $message, $template);
                $template = str_replace('%agree%', $converted_bool, $template);
                                        
                $mail->MsgHTML($template);
                $mail->send();
                                            
                $status = [ 'success' => 'inviato', 'message' => 'Messaggio inviato con successo. Troverai una mail di conferma' ];
                echo json_encode($status);                                                 
            } 
            catch (Exception $e) 
            {
                $status = [ 'failed' => 'phpmailer', 'message' => "{$mail->ErrorInfo}" ];
                echo json_encode($status);
            }

            /********************************************************************************************************************/
            /********************************************************************************************************************/
            /********************************************************************************************************************/

            $emailToAdmin = 'a.mari@andreamari.cloud';
    		$converted_bool = $agree ? 'Accettato' : 'Non accettato';
    		$text = $message;                              
            $mail = new PHPMailer(true);
            try 
            {
                //Server settings
                $mail->SMTPDebug = 0;     
        	    $mail->isSMTP();                              
        		$mail->Host = 'smtps.aruba.it';  
        		$mail->SMTPAuth = true;                               
        		$mail->Username = '';              
        		$mail->Password = '';                   
        		$mail->SMTPSecure = 'ssl';                           
        		$mail->Port = 465;
            
                //Recipients
                $mail->setFrom('a.mari@andreamari.cloud', 'Andrea Mari');
                $mail->addAddress($emailToAdmin, 'Andrea Mari' );              
                $mail->addReplyTo('no-reply@example.com', 'No Reply');
                
                $message_admin = file_get_contents('https://www.andreamari.cloud/assets/template/contatto/it/admin_template.html');

                //HTMLContent
                $mail->isHTML(true);                                  
                $mail->Subject = $subject;

                $message_admin = str_replace('%nominative%', $nominative, $message_admin);
                $message_admin = str_replace('%emailFrom%', $emailFrom, $message_admin);
                $message_admin = str_replace('%phone%', $mobile, $message_admin);
                $message_admin = str_replace('%subject%', $subject, $message_admin);
                $message_admin = str_replace('%text%', $text, $message_admin);
                $message_admin = str_replace('%agree%', $converted_bool, $message_admin);
                                        
                $mail->MsgHTML($message_admin);
                $mail->send();                                                                                            
            } 
            catch (Exception $e) 
            {
                $status = [ 'failed' => 'phpmailer', 'message' => "{$mail->ErrorInfo}" ];
                echo json_encode($status);
            }
        }
        else
        {
             $status = [ 'failed' => 'consent', 'message' => 'Non hai acconsentito al trattamento dei dati. Impossibile procedere con la richiesta' ];
             echo json_encode($status);
        }
    }
    else
    { 
        $status = [ 'failed' => 'captcha', 'message' => 'Verifica del recaptcha non riuscita, verifica di nuovo' ];
        echo json_encode($status);
    } 
  }
  else
  { 
    $status = [ 'failed' => 'captcha', 'message' => 'Si prega di selezionare la casella captcha' ];
    echo json_encode($status);
  }  
?>