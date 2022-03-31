<?php

include "../Products.php";

class Book extends Products
{
    protected $SKU;
    protected $Name;
    protected $Price;
    protected $Weight;

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
}
