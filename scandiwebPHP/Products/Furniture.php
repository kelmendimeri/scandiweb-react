<?php

include "./Product_CRUD.php";
include "../config/config.php";

class Furniture
{
    protected $Height;
    protected $Width;
    protected $Length;

    /**
     * @param mixed $Height
     */
    public function setHeight($Height): void
    {
        $this->Height = $Height;
    }

    /**
     * @return mixed
     */
    public function getHeight(): float
    {
        return $this->Height;
    }
    /**
     * @param mixed $Width
     */
    public function setWidth($Width): void
    {
        $this->Width = $Width;
    }

    /**
     * @return mixed
     */
    public function getWidth(): float
    {
        return $this->Width;
    }
    /**
     * @param mixed $Length
     */
    public function setLength($Length): void
    {
        $this->Length = $Length;
    }

    /**
     * @return mixed
     */
    public function getLength(): float
    {
        return $this->Length;
    }

    public function insertFurniture()
    {
        $product = new Product_CRUD();
        $conn = new Config();
        $db = $conn->connect();

        $formdata = json_decode(file_get_contents('php://input'), true);
        if (
            isset($formdata)
        ) {

            $this->setHeight($formdata["Height"]);
            $this->setWidth($formdata["Width"]);
            $this->setLength($formdata["Length"]);
            $product->setSKU($formdata["SKU"]);
            $product->setName($formdata["Name"]);
            $product->setPrice($formdata["Price"]);

            try {
                $sql_add_product = "insert into furniture(Height,Width,Length)
                Select :height, :width, :length Where not exists(select * from furniture where Height=:height or Width=:width or Length=:length);
                insert into productlist(SKU,Name,Price,furniture_id)
                Select :sku,:name,:price,(SELECT max(ID) from furniture) Where not exists(select * from productlist where SKU=:sku )
               ;";
                $query = $db->prepare($sql_add_product);
                $query->bindParam(":height", $this->getHeight());
                $query->bindParam(":width", $this->getWidth());
                $query->bindParam(":length", $this->getLength());
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

$f = new Furniture();
$f->insertFurniture();
