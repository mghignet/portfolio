<?php
	$config['base_url'] = '/mgv3/';



	session_start();
	header('Cache-control: private'); // IE 6 FIX

	if(isset($_GET['lang'])) {
		$lang = $_GET['lang'];
		$_SESSION['lang'] = $lang;
		setcookie('lang', $lang, time() + (3600 * 24 * 30)); //30 days
	} else if(isset($_SESSION['lang'])) {
		$lang = $_SESSION['lang'];
	} else if(isset($_COOKIE['lang'])) {
		$lang = $_COOKIE['lang'];
	} else {
		$lang = 'fr';
	}
	if($lang != 'fr' && $lang != 'en') $lang = 'en';
	
	require_once('lang/lang.'.$lang.'.php');
?>

<!DOCTYPE html>
<?php
	require_once 'lib/phamlp/haml/HamlParser.php';
  $haml = new HamlParser(array('style'=>'nested', 'ugly'=>'compressed'));
?>
<html>
	<?php
	  $head = $haml->parse('views/head.haml');
	  echo $head;
	?>
	<script src="javascript/main.js" type="text/javascript"></script>

	<body data-spy="scroll" data-target=".navbar">
		<div id="website">
			<?php
			  $header = $haml->parse('views/header.haml');
			  eval("?>".$header);
			?>
			<?php
			  $home = $haml->parse('views/home.haml');
			  eval("?>".$home);
			?>
			<?php
			  $footer = $haml->parse('views/footer.haml');
			  eval("?>".$footer);
			?>
		</div>
	</body>
</html>