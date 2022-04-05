<?php

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
}
