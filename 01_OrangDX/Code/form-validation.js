document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('info-form'); // フォーム要素を取得
    form.addEventListener('submit', function(event) {
        var phoneInput = document.getElementById('phone-number'); // 電話番号入力フィールドを取得
        var phoneValid = validatePhoneNumber(phoneInput.value); // 電話番号が正しい形式か検証

        if (!form.checkValidity() || !phoneValid) {
            event.preventDefault(); // バリデーション失敗時はフォームの送信を阻止
            alert('必須項目をすべて正しく入力してください。');
        } else {
            // バリデーション成功時はデータをローカルストレージに保存
            localStorage.setItem('phone_number', form.phone_number.value);
            localStorage.setItem('email', form.email.value);
            localStorage.setItem('postal_code', form.postal_code.value);
            // 必要に応じて他のデータも保存
        }
    });
});

// 電話番号のバリデーション関数
function validatePhoneNumber(phoneNumber) {
    var regex = /^[0-9-+()]{10,15}$/; // 電話番号の形式を定義する正規表現
    return regex.test(phoneNumber); // 正規表現による検証結果を返す
}
// form-validation.js

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('info-form'); // フォーム要素を取得
    form.addEventListener('submit', function(event) {
        var productName = document.getElementById('product-name').value; // 商品名入力フィールドの値を取得
        var boxCount = document.getElementById('box-count').value; // 箱数入力フィールドの値を取得

        if (!form.checkValidity() || productName === "" || boxCount === "") {
            event.preventDefault(); // バリデーション失敗時はフォームの送信を阻止
            alert('必須項目をすべて正しく入力してください。');
        } else {
            // バリデーション成功時はデータをローカルストレージに保存
            localStorage.setItem('product_name', productName);
            localStorage.setItem('box_count', boxCount);
            // 必要に応じて他のデータも保存
        }
    });
});


// form-validation.js

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('info-form'); // フォーム要素を取得
    form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
            event.preventDefault(); // バリデーション失敗時はフォームの送信を阻止
            alert('必須項目をすべて正しく入力してください。');
            return;
        }

        // フォーム内のすべての入力要素をループし、ローカルストレージに保存
        Array.from(form.elements).forEach(function(element) {
            if (element.name) { // 入力要素に名前がある場合のみ保存
                localStorage.setItem(element.name, element.value);
            }
        });
    });
});
