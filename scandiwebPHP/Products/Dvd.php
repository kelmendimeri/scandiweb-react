<?php

include "../Products.php";

class DVD extends Products
{
    protected $SKU;
    protected $Name;
    protected $Price;
    protected $Size;

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
}
