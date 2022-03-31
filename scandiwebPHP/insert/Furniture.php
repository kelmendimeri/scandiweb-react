<?php

include "../config/config.php";
include "../Products/Furniture.php";

// creating connection to dvd
$conn = new Config();
$db = $conn->connect();

// creating Furniture inserting object for adding records to MySQL
$furniture = new Furniture();


// geting data from post method 
$formdata = json_decode(file_get_contents('php://input'), true);

if (isset($formdata)) {
    $furniture->setHeight($formdata["Height"]);
    $furniture->setWidth($formdata["Width"]);
    $furniture->setLength($formdata["Length"]);
    $furniture->setSKU($formdata["SKU"]);
    $furniture->setName($formdata["Name"]);
    $furniture->setPrice($formdata["Price"]);

    try {
        $sql_add_product = "INSERT INTO furniture(Height,Width,Length) VALUES(:height, :width, :length);
                INSERT INTO productlist(SKU, Name, Price, furniture_id) VALUES(:sku,:name,:price, (SELECT max(ID) from furniture));";
        $query = $db->prepare($sql_add_product);
        $query->bindParam(":height", $furniture->getHeight());
        $query->bindParam(":width", $furniture->getWidth());
        $query->bindParam(":length", $furniture->getLength());
        $query->bindParam(":sku", $furniture->getSKU());
        $query->bindParam(":name", $furniture->getName());
        $query->bindParam(":price", $furniture->getPrice());
        $query->execute();
    } catch (Exception $e) {
        echo $e->getMessage();
    }
}
