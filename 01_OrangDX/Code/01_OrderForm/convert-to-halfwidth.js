// convert-to-halfwidth.js

function convertToHalfWidth(inputElement) {
    inputElement.value = inputElement.value.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    });
}

window.onload = function() {
    // 郵便番号の入力フィールドに適用
    var postalCodeInput = document.getElementById('postal-code');
    postalCodeInput.addEventListener('input', function() {
        convertToHalfWidth(this);
    });

    // 電話番号の入力フィールドにも適用
    var phoneNumberInput = document.getElementById('phone-number');
    phoneNumberInput.addEventListener('input', function() {
        convertToHalfWidth(this);
    });
};
