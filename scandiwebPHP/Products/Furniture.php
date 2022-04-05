<?php

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
}
