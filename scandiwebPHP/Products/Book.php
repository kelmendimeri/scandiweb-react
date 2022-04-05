<?php

include "./Product_CRUD.php";
include "../config/config.php";

class Book
{
    protected $Weight;
    /**
     * @param mixed $Weight
     */
    public function setWeight($data): void
    {
        $this->Weight = $data;
    }

    /**
     * @return mixed
     */
    public function getWeight(): float
    {
        return $this->Weight;
    }

    public function insertBook()
    {

        $product = new Product_CRUD();
        $conn = new Config();
        $db = $conn->connect();
        $formdata = json_decode(file_get_contents('php://input'), true);
        if (
            isset($formdata) && $formdata["Weight"] != "" ||
            $formdata["SKU"] != " " || $formdata["Price"] != "" || $formdata["Name"] != " "
        ) {

            $this->setWeight($formdata["Weight"]);
            $product->setSKU($formdata["SKU"]);
            $product->setName($formdata["Name"]);
            $product->setPrice($formdata["Price"]);

            try {

                $sql_add_product = "insert into book(Weight)
                Select :weight Where not exists(select * from book where Weight=:weight);
                insert into productlist(SKU,Name,Price,book_id)
                Select :sku,:name,:price,(SELECT max(ID) from book) Where not exists(select * from productlist where SKU=:sku )
               ;";
                $query = $db->prepare($sql_add_product);
                $query->bindParam(":weight", $this->getWeight());
                $query->bindParam(":sku", $product->getSKU());
                $query->bindParam(":name", $product->getName());
                $query->bindParam(":price", $product->getPrice());
                $query->execute();
                $conn = null;
                echo "<script>alert('kelmend')</script>";
            } catch (Exception $e) {
                echo $e->getMessage();
            }
        }
    }
}

$b = new Book();
$b->insertBook();
