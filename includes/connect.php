<?php
     
     $user = "root";
     $pw = "";
     

     try {
         $conn = new PDO("mysql:host=localhost;dbname=testusersss", $user, $pw);
        //  var_dump($conn);
     } catch(PDOException $exception) {
         echo 'connection error! something is broke' . $exception->getMessage();
     }

?>