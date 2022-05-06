<?php
if (isset($_POST['submit'])) {
    if (isset($_POST['name']) && isset($_POST['email']) &&
        isset($_POST['feedback'])) {

        $name = $_POST['name'];

        $email = $_POST['email'];

        $feedback = $_POST['feedback'];
        $host = "localhost";
        $dbUsername = "root";
        $dbPassword = "";
        $dbName = "business";
        $conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);
        if ($conn->connect_error) {
            die('Could not connect to the database.');
        }
        else {
            $Select = "SELECT email FROM feedback WHERE email = ? LIMIT 1";
            $Insert = "INSERT INTO feedback(name, email, feedback) values(?, ?, ?)";
            $stmt = $conn->prepare($Select);
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $stmt->bind_result($resultEmail);
            $stmt->store_result();
            $stmt->fetch();
            $rnum = $stmt->num_rows;
            if ($rnum == 0) {
                $stmt->close();
                $stmt = $conn->prepare($Insert);
                $stmt->bind_param("sss",$name,  $email, $feedback);
                if ($stmt->execute()) {
                    echo "Thanks for the feedback";
                }
                else {
                    echo $stmt->error;
                }
            }
            else {
                echo "Someone has already used the same email.";
            }
            $stmt->close();
            $conn->close();
        }
    }
    else {
        echo "All field are required.";
        die();
    }
}
else {
    echo "Submit button is not set";
}