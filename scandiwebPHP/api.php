<?php
include_once "config/config.php";
$json_array = [];
$db = new Config();
//fetching data in descending order (lastest entry first)
$result = $db->connect()
  ->query("select productlist.ID, SKU, Name, Price, dvd.Size, book.Weight, furniture.Height, furniture.Width, furniture.Length
from productlist
left outer join dvd on productlist.dvd_id = dvd.ID
left outer join book on productlist.book_id = book.ID
left outer join furniture on productlist.furniture_id = furniture.ID");

while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
  $json_array[] = $row;
}

echo json_encode($json_array);
