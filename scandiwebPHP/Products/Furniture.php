<?php

include "../Products.php";

class Furniture extends Products
{
    protected $SKU;
    protected $Name;
    protected $Price;
    protected $Height;
    protected $Width;
    protected $Length;

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
}
