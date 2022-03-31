<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include "../config/config.php";
include "../Products/Book.php";

// creating connection to database
$conn = new Config();
$db = $conn->connect();


// geting data from post method 
$formdata = json_decode(file_get_contents('php://input'), true);

if ($formdata) {
    # code...
    $query = $db->exec("call MassDelete(" . $formdata['id'] . ")");
}
