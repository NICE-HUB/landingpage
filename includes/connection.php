$conn = mysqli_connect('localhost','root','test_db') or die(error);

$query = "SELECT * FROM products;"

$result = mysqli_query($conn,$query) or die(error);
$data = mysqli_fetch_all($result,MYSQLI_ASSOC);