<?php

// Strip CR/LF so user input can never inject extra mail headers
function clean_string($string) {
	return trim(str_replace(array("\r", "\n", "%0a", "%0d"), " ", (string)$string));
}

if(!empty($_POST['submit_contact'])) {

    $first_name = clean_string($_POST['fname'] ?? '');      // required
    $email_from = clean_string($_POST['email'] ?? '');      // required
    $comments   = trim((string)($_POST['msg'] ?? ''));      // required, body only
    $partType   = clean_string($_POST['part_type'] ?? '');  // optional
    $phone      = clean_string($_POST['phone'] ?? '');      // optional
    $subject    = clean_string($_POST['location'] ?? '');   // optional

    if ($first_name === '' || $comments === '' || !filter_var($email_from, FILTER_VALIDATE_EMAIL)) {
        echo '{err}Please enter your name, a valid email and a message{/err}';
        exit;
    }

    $email_to = "info@hi5solutions.in";
    $email_subject = 'Contact Us : '.$first_name.' | Email from Hi5Solution Website';

    $email_message = "Form Details Below.\n\n";
    $email_message .= "Subject: ".$subject."\n\n";
    $email_message .= "First Name: ".$first_name."\n\n";
    $email_message .= "Email: ".$email_from."\n\n";
    $email_message .= "Phone: ".$phone."\n\n";
    $email_message .= "Type: ".$partType."\n\n";
    $email_message .= "Message: ".$comments."\n\n";

	// Send from our own domain (passes SPF); visitor goes in Reply-To
	$headers = 'From: Hi5 Solutions Website <info@hi5solutions.in>'."\r\n".
	'Reply-To: '.$email_from."\r\n".
	'X-Mailer: PHP/' . phpversion();

	if (mail($email_to, $email_subject, $email_message, $headers, '-finfo@hi5solutions.in')) {
		echo '{suc}Email sent successfully{/suc}';
	} else {
		echo '{err}Could not send email, please call or email us directly{/err}';
	}
}
