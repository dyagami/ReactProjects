<!DOCTYPE html>
<html>
<head>
<title>Copy me (≧ε≦σ)</title>
<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>

<div class="logotext">
<p><a href="#" onclick="copyToClipboard(); return false;">Copy Me (≧ε≦σ)</a></p>

</div>
<nav class="copytext">
<div class="textvalue" id="content">
<?php
$filename = "paste.txt";
$content = file_get_contents($filename);
$content = htmlspecialchars($content);
$contentout = str_replace(PHP_EOL, '<br>', $content);
echo "<p>" . $contentout . "</p>";
?>
</div>
</nav>
 
<script>
function copyToClipboard() {
  var content = document.getElementById('content').innerText;
  var tempInput = document.createElement('textarea');
  tempInput.value = content;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
  alert("I'm copied (´｡• ᵕ •｡`) ");
}
</script>
 
</body>
</html>
