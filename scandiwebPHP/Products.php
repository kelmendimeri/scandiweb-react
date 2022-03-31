<?php

abstract class Products
{
  protected $SKU, $Name, $Price;

  abstract protected function setSKU($sku);
  abstract protected function setName($name);
  abstract protected function setPrice($price);
  abstract protected function getSKU();
  abstract protected function getName();
  abstract protected function getPrice();
}
