<?php
$filename = "paste.txt";
if (isset($_POST['newValue'])) {
	newValue = $_POST['newValue'];
	file_put_contents($filename, $newValue);
	header('Location: index.php');
	exit();
	}


?>
