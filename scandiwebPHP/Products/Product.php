<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include '../AbsProducts.php';

class Product extends AbsProducts
{

    protected $SKU;
    protected $Name;
    protected $Price;

    /**
     * @param mixed $SKU
     */
    public function setSKU($data): void
    {
        $this->SKU = $data;
    }

    /**
     * @return mixed
     */
    public function getSKU(): string
    {
        return $this->SKU;
    }

    /**
     * @param mixed $Name
     */
    public function setName($data): void
    {
        $this->Name = $data;
    }

    /**
     * @return mixed
     */
    public function getName(): string
    {
        return $this->Name;
    }

    /**
     * @param mixed $Price
     */
    public function setPrice($data): void
    {
        $this->Price = $data;
    }

    /**
     * @return mixed
     */
    public function getPrice(): float
    {
        return $this->Price;
    }
}
