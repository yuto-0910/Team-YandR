<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $productName = $_POST['product_name'];
    $boxCount = $_POST['box_count'];
    $phoneNumber = $_POST['phone_number'];
    // 他のフォームデータを受け取る

    $to = 'yuto_0910@icloud.com'; // 送信先のメールアドレス
    $subject = '注文確定';
    $message = "商品名: " . $productName . "\n" .
               "箱数: " . $boxCount . "\n" .
               "電話番号: " . $phoneNumber . "\n";
               // 他のフォームデータをメッセージに追加

    $headers = 'From: yuto_0910@icloud.com' . "\r\n"; // 送信者のメールアドレス

    mail($to, $subject, $message, $headers); // メール送信
    echo "注文が確定しました。";
}
?>
