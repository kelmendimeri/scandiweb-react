<?php


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
}
