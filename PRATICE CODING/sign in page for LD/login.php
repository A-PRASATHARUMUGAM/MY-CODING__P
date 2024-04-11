<?php include('server.php') ?>
<!DOCTYPE html>
<html>
<head>
	<title> Login </title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="signin.css">
</head>
<body>

	<form method="post" action="login.php" class="form-container">
		<h2 class="form-title">Sign up</h2>

		<?php include('error.php'); ?>

		<div class="input-group">
	
			<input type="text" name="username"  placeholder="Enter username" required>
		</div>
		<div class="input-group">
			<input type="password" name="password" placeholder="Enter password" required>
		</div>
		<div class="input-group">
			<button type="submit" class="btn" name="login_user" >Login </button>
		</div>
		


<p>
			 	New Here? 
			<a href="register.php"> Click here to register !</a>
		</p>



	</form>
</body>

</html>
