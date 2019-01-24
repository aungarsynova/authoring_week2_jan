<?php
    include 'functions.php';

    //remember to use the techniques oan is showing you to clean up
    //user input (prepaer statements, etc)

    if(isset($_GET['users'])) {
        $data = get_single_user($conn, $_GET['users']);
        echo json_encode($data);
    } else {
        $data = get_all_users($conn);
        echo json_encode($data);
    }
?>