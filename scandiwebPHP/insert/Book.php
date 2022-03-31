<?php

include "../config/config.php";
include "../Products/Book.php";

// creating connection to database
$conn = new Config();
$db = $conn->connect();

// creating DVD inserting object for adding records to MySQL
$book = new Book();

$formdata = json_decode(file_get_contents('php://input'), true);
if (isset($formdata)) {
    $book->setWeight($formdata["Weight"]);
    $book->setSKU($formdata["SKU"]);
    $book->setName($formdata["Name"]);
    $book->setPrice($formdata["Price"]);

    try {
        $sql_add_product = "INSERT INTO book(Weight) VALUES(:weight);
        INSERT INTO productlist(SKU, Name, Price, book_id) VALUES(:sku,:name,:price, (SELECT max(ID) from book));";
        $query = $db->prepare($sql_add_product);
        $query->bindParam(":weight", $book->getWeight());
        $query->bindParam(":sku", $book->getSKU());
        $query->bindParam(":name", $book->getName());
        $query->bindParam(":price", $book->getPrice());
        $query->execute();
    } catch (Exception $e) {
        echo $e->getMessage();
    }
}
