// 全角文字を半角に変換する関数
function convertToHalfWidth(inputElement) {
    // 全角アルファベット・数字を半角に変換
    inputElement.value = inputElement.value.replace(/[Ａ-Ｚａ-ｚ０-９]/g, 
        function(s) { return String.fromCharCode(s.charCodeAt(0) - 0xFEE0); });
}

// ページロード後に実行
window.onload = function() {
    // 郵便番号フィールドに全角→半角変換を適用
    document.getElementById('postal-code').addEventListener('input', function() {
        convertToHalfWidth(this);
    });

    // 電話番号フィールドにも同様の処理を適用
    document.getElementById('phone-number').addEventListener('input', function() {
        convertToHalfWidth(this);
    });
};
