<?php

/**
 * Database Connection
 */
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Max-Age: 86400');
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Methods:  POST, PUT, OPTIONS, GET, DELETE, PATCH');

class Config
{
  private $servername = "localhost";
  private $username = "root"; //id18693023_root
  private $password = ""; //J2D-zZTDgXRF!i-t
  private $database = "dbscandiweb"; //id18693023_dbscandiweb
  public $conn;

  public function __construct()
  {
    $this->connect();
  }

  public function connect()
  {
    try {
      $conn = new PDO(
        "mysql:host=$this->servername;dbname=$this->database",
        $this->username,
        $this->password
      );
      // set the PDO error mode to exception
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      // echo "Connected";
      return $conn;
    } catch (PDOException $e) {
      echo "Connection failed: " . $e->getMessage();
    }
  }
}
