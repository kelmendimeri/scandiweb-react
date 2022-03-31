<?php

include "../config/config.php";
include "../Products/Dvd.php";

// creating connection to dvd
$conn = new Config();
$db = $conn->connect();

$new_sql = $db->query("SELECT max(ID) from dvd");
$res = $new_sql->fetchAll(PDO::FETCH_COLUMN, 0);
//        echo var_dump($res);
echo $res['0'];

// creating DVD inserting object for adding records to MySQL
$dvd = new DVD();
// geting data from post method 
$formdata = json_decode(file_get_contents('php://input'), true);

if (isset($formdata)) {
    $dvd->setSize($formdata["Size"]);
    $dvd->setSKU($formdata["SKU"]);
    $dvd->setName($formdata["Name"]);
    $dvd->setPrice($formdata["Price"]);

    try {
        $sql_add_product = "INSERT INTO dvd(Size) VALUES(:size);
            INSERT INTO productlist(SKU, Name, Price, dvd_id) VALUES(:sku,:name,:price, (SELECT max(ID) from dvd));";
        $query = $db->prepare($sql_add_product);
        $query->bindParam(":size", $dvd->getSize());
        $query->bindParam(":sku", $dvd->getSKU());
        $query->bindParam(":name", $dvd->getName());
        $query->bindParam(":price", $dvd->getPrice());
        $query->execute();
    } catch (Exception $e) {
        echo $e->getMessage();
    }
}
