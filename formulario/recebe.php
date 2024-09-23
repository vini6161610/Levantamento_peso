<?php

if(isset($_POST["nome"]) or isset($_POST["email"]))  {
    
    $nome = $_POST["nome"];
    $email = $_POST["email"];
 

    echo "<h2>Dados recebidos com sucesso!</h2>";
    echo "Usuario: $nome <br>";
    echo "E-mail: $email; <br>";
  
    

}

?>


