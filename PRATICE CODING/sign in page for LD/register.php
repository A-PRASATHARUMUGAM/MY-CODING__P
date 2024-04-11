<?php include('server.php') ?>
<!DOCTYPE html>
<html>
<head>
	<title>Registration system PHP and MySQL </title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="signin.css	" type="text/css">

</head>

<body>
	
	
	
	<form method="post" action="register.php" class="form-container" >
		
		
		<h2 class="form-title">Register</h2>
		<?php include('error.php'); ?>
		
		<div class="input-group">
			<input type="text" name="username" value="<?php echo $username; ?>" placeholder="Enter username">
		</div>
		<div class="input-group">
			<input type="email" name="email" value="<?php echo $email; ?>" placeholder="Enter email">
		</div>
		<div class="input-group">
			<input type="password" name="password_1" placeholder="Enter password">
		</div>
		<div class="input-group">
			<input type="password" name="password_2" placeholder="Enter confirm password">
		</div>
		<div class="input-group">
			<button type="submit" class="btn" name="reg_user"> Register </button>
		</div>
		


<p>
			Already having an account?
			<a href="login.php">
				Login Here!
			</a>
		</p>



	</form>
</body>
</html>
