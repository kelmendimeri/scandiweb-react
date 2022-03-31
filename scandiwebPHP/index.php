<?php

// here we gonna route the post methods for insertion of the data to the database

include "config/config.php";
include "Book.php";
$conn = new Config();
$db = $conn->connect();

$book = new Book();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  switch ($method) {
    case "Book":
      // $SKU = $_POST["SKU"];
      // $Name = $_POST["Name"];
      // $Price = $_POST["Price"];
      $Weight = 255;

      // fetching data in descending order (lastest entry first)
      $sql = "INSERT INTO book(Weight) VALUES(:weight)";
      $query = $db->prepare($sql);

      $query->bindparam(":weight", $Weight);
      $query->execute();

      $new_sql = $db->query("SELECT max(ID) from book");
      $res = $new_sql->fetchAll(PDO::FETCH_COLUMN, 0);
      //        echo var_dump($res);
      echo $res["0"];

      break;
  }
}
