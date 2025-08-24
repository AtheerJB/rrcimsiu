<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $target_dir = "uploads/"; // تأكد من وجود هذا المجلد
    if (!is_dir($target_dir)) {
        mkdir($target_dir);
    }
    $target_file = $target_dir . basename($_FILES["file"]["name"]);
    if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
        echo "تم رفع الملف بنجاح.";
    } else {
        echo "حدث خطأ أثناء رفع الملف.";
    }
}
?>