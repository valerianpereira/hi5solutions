
<?php

// Clean Up
function clean_string($string) {
	$bad = array("content-type","bcc:","to:","cc:","href");
	return str_replace($bad,"",$string);
}

// Print Format
function printerr($strr){
	echo '<pre>';
	print_r($strr);
	echo '</pre>';
}

//echo '{suc}Email sent successfully{/suc}';
//printerr($_POST);
//die();

if(!empty($_POST['submit_contact'])) {

    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "info@hi5solutions.in";
    $email_subject = 'Contact Us : '.$_POST['name'].' | Email from Hi5Solution Website';

    $first_name = $_POST['fname']; // required
    $email_from = $_POST['email']; // required
    $comments = $_POST['msg']; // required
    $partType = $_POST['part_type']; // optional
    $phone = $_POST['phone']; // optional
    $subject = $_POST['location']; // optional

    $email_message = "Form Details Below.\n\n";

    $email_message .= "Subject: ".clean_string($subject)."\n\n";
    $email_message .= "First Name: ".clean_string($first_name)."\n\n";
    $email_message .= "Email: ".clean_string($email_from)."\n\n";

    $email_message .= "Phone: ".clean_string($phone)."\n\n";
    $email_message .= "Type: ".clean_string($partType)."\n\n";
    $email_message .= "Message: ".clean_string($comments)."\n\n";

	// create email headers
	$headers = 'From: '.$email_from."\r\n".
	'Reply-To: '.$email_from."\r\n" .
	'X-Mailer: PHP/' . phpversion();
	@mail($email_to, $email_subject, $email_message, $headers);

	echo '{suc}Email sent successfully{/suc}';

}
