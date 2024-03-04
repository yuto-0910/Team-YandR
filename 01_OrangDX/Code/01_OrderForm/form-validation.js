// form-validation.js

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('info-form');
    form.addEventListener('submit', function(event) {
        // 電話番号のバリデーション
        var phoneInput = document.getElementById('phone-number');
        var phoneValid = validatePhoneNumber(phoneInput.value);

        if (!form.checkValidity() || !phoneValid) {
            event.preventDefault(); // フォームの送信を阻止
            alert('必須項目をすべて正しく入力してください。');
        } else {
            // フォームデータをローカルストレージに保存
            localStorage.setItem('phone_number', form.phone_number.value);
            localStorage.setItem('email', form.email.value);
            localStorage.setItem('postal_code', form.postal_code.value);
            // 他の必要なデータも同様に保存
        }
    });
});

function validatePhoneNumber(phoneNumber) {
    var regex = /^[0-9-+()]{10,15}$/; // 電話番号の形式を定義する正規表現
    return regex.test(phoneNumber);
}

// form-validation.js

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('info-form');
    form.addEventListener('submit', function(event) {
        var productName = document.getElementById('product-name').value;
        var boxCount = document.getElementById('box-count').value;

        if (!form.checkValidity() || productName === "" || boxCount === "") {
            event.preventDefault(); // フォームの送信を阻止
            alert('必須項目をすべて正しく入力してください。');
        } else {
            // フォームデータをローカルストレージに保存
            localStorage.setItem('product_name', productName);
            localStorage.setItem('box_count', boxCount);
            // 他の必要なデータも同様に保存
        }
    });
});

// form-validation.js

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('info-form');
    form.addEventListener('submit', function(event) {
        // バリデーションチェック
        if (!form.checkValidity()) {
            event.preventDefault(); // フォームの送信を阻止
            alert('必須項目をすべて正しく入力してください。');
            return;
        }

        // 各フォームフィールドの値をローカルストレージに保存
        Array.from(form.elements).forEach(function(element) {
            if (element.name) {
                localStorage.setItem(element.name, element.value);
            }
        });
    });
});
