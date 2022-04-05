<?php

include '../config/config.php';
include './Product.php';
include './Book.php';
include './Dvd.php';
include './Furniture.php';


class CRUD
{
    public function connection()
    {
        $conn = new Config();
        return $conn->connect();
    }
    public function api()
    {

        $json_array = [];
        $db = $this->connection();
        //fetching data in descending order (lastest entry first)
        $result = $db->query("select productlist.ID, SKU, Name, Price, dvd.Size, book.Weight, furniture.Height, furniture.Width, furniture.Length
from productlist
left outer join dvd on productlist.dvd_id = dvd.ID
left outer join book on productlist.book_id = book.ID
left outer join furniture on productlist.furniture_id = furniture.ID");

        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            $json_array[] = $row;
        }

        echo json_encode($json_array);
    }
    public function massDelete()
    {
        $db = $this->connection();
        // geting data from post method 
        $formdata = json_decode(file_get_contents('php://input'), true);

        if ($formdata) {
            # code...
            $db->exec("call MassDelete(" . $formdata['id'] . ")");
        }
    }

    public function insertion()
    {
        $product = new Product();

        $db = $this->connection();
        $formdata = json_decode(file_get_contents('php://input'), true);

        if (isset($formdata)) {

            $product->setSKU($formdata["SKU"]);
            $product->setName($formdata["Name"]);
            $product->setPrice($formdata["Price"]);
            if (isset($formdata['Weight'])) {
                $book = new Book();
                $book->setWeight($formdata["Weight"]);
                try {
                    $sql_add_product = "insert into book(Weight)
                    Select :weight Where not exists(select * from book where Weight=:weight);
                    insert into productlist(SKU,Name,Price,book_id)
                    Select :sku,:name,:price,(SELECT max(ID) from book) Where not exists(select * from productlist where SKU=:sku )
                    ;";
                    $query = $db->prepare($sql_add_product);
                    $query->bindParam(":weight", $book->getWeight());
                    $query->bindParam(":sku", $product->getSKU());
                    $query->bindParam(":name", $product->getName());
                    $query->bindParam(":price", $product->getPrice());
                    $query->execute();
                    // close connection
                    $conn = null;
                } catch (Exception $e) {
                    echo $e->getMessage();
                }
            } elseif (isset($formdata['Size'])) {
                $dvd = new DVD();
                $dvd->setSize($formdata["Size"]);
                try {
                    $sql_add_product = "insert into dvd(Size)
                    Select :size Where not exists(select * from dvd where Size=:size);
                    insert into productlist(SKU,Name,Price,dvd_id)
                    Select :sku,:name,:price,(SELECT max(ID) from dvd) Where not exists(select * from productlist where SKU=:sku )
                    ;";
                    $query = $db->prepare($sql_add_product);
                    $query->bindParam(":size", $dvd->getSize());
                    $query->bindParam(":sku", $product->getSKU());
                    $query->bindParam(":name", $product->getName());
                    $query->bindParam(":price", $product->getPrice());
                    $query->execute();
                    // close connection
                    $conn = null;
                } catch (Exception $e) {
                    echo $e->getMessage();
                }
            } else {
                $furniture = new Furniture();
                // in case the else will take anything that can crush the site if will prevent 
                if (isset($formdata['Height']) && isset($formdata['Width']) && isset($formdata['Length'])) {

                    $furniture->setHeight($formdata["Height"]);
                    $furniture->setWidth($formdata["Width"]);
                    $furniture->setLength($formdata["Length"]);
                    try {
                        $sql_add_product = "insert into furniture(Height,Width,Length)
                            Select :height, :width, :length Where not exists(select * from furniture where Height=:height or Width=:width or Length=:length);
                            insert into productlist(SKU,Name,Price,furniture_id)
                            Select :sku,:name,:price,(SELECT max(ID) from furniture) Where not exists(select * from productlist where SKU=:sku )
                           ;";
                        $query = $db->prepare($sql_add_product);
                        $query->bindParam(":height", $furniture->getHeight());
                        $query->bindParam(":width", $furniture->getWidth());
                        $query->bindParam(":length", $furniture->getLength());
                        $query->bindParam(":sku", $product->getSKU());
                        $query->bindParam(":name", $product->getName());
                        $query->bindParam(":price", $product->getPrice());
                        $query->execute();
                        // close connection
                        $conn = null;
                    } catch (Exception $e) {
                        echo $e->getMessage();
                    }
                }
            }
        }
    }
}

$crud = new CRUD();
switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        $crud->api();
        break;
    case 'DELETE':
        $crud->massDelete();
        break;
    case 'POST':
        $crud->insertion();
        break;
}
