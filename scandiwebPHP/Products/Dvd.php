<?php

include "./Product_CRUD.php";
include "../config/config.php";

class DVD
{
    protected $Size;

    /** @param mixed $Size
     */
    public function setSize($Size): void
    {
        $this->Size = $Size;
    }

    /**
     * @return mixed
     */
    public function getSize(): int
    {
        return $this->Size;
    }

    public function insertDvd()
    {
        $conn = new Config();
        $db = $conn->connect();
        $product = new Product_CRUD();

        $formdata = json_decode(file_get_contents('php://input'), true);
        if (isset($formdata)) {

            $this->setSize($formdata["Size"]);
            $product->setSKU($formdata["SKU"]);
            $product->setName($formdata["Name"]);
            $product->setPrice($formdata["Price"]);

            try {
                $sql_add_product = "insert into dvd(Size)
                Select :size Where not exists(select * from dvd where Size=:size);
                insert into productlist(SKU,Name,Price,dvd_id)
                Select :sku,:name,:price,(SELECT max(ID) from dvd) Where not exists(select * from productlist where SKU=:sku )
               ;";
                $query = $db->prepare($sql_add_product);
                $query->bindParam(":size", $this->getSize());
                $query->bindParam(":sku", $product->getSKU());
                $query->bindParam(":name", $product->getName());
                $query->bindParam(":price", $product->getPrice());
                $query->execute();
                $conn = null;
            } catch (Exception $e) {
                echo $e->getMessage();
            }
        }
    }
}


$d = new DVD();
$d->insertDvd();
