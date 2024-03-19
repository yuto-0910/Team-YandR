/// ページの読み込み完了時に実行されるイベントリスナーを登録
document.addEventListener('DOMContentLoaded', function() {
    // 「住所検索」ボタンをHTMLから取得
    var searchButton = document.getElementById('address-search');
    // 郵便番号を入力するフィールドをHTMLから取得
    var postalCodeInput = document.getElementById('postal-code');

    // 「住所検索」ボタンがクリックされたときの処理を定義
    searchButton.addEventListener('click', function() {
        var zipCode = postalCodeInput.value; // 入力された郵便番号を取得
        getAddress(zipCode); // 郵便番号をもとに住所を検索する関数を呼び出し
    });
});

// 郵便番号を引数にして住所情報を取得する関数
function getAddress(zipCode) {
    // 郵便番号が7桁でなければ警告を表示
    if (zipCode.length !== 7) {
        alert('正しい郵便番号を入力してください。');
        return;
    }

    // 郵便番号APIにアクセスし、住所情報を取得
    fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipCode}`)
        .then(response => response.json()) // レスポンスをJSON形式で解析
        .then(data => {
            if (data.results) {
                // APIから住所情報が返された場合、各フィールドに情報を設定
                document.getElementById('prefecture').value = data.results[0].address1; // 都道府県
                document.getElementById('city').value = data.results[0].address2; // 市区町村
                document.getElementById('address-details').value = data.results[0].address3; // 町名
            } else {
                // APIから住所情報が返されなかった場合、警告を表示し、住所フィールドをクリア
                alert('該当する住所が見つかりません。郵便番号を確認してください。');
                clearAddressFields();
            }
        })
        .catch(error => {
            // 通信エラーなどの問題が発生した場合、エラーメッセージを表示し、住所フィールドをクリア
            console.error('住所情報の取得に失敗しました', error);
            alert('住所情報の取得中にエラーが発生しました。');
            clearAddressFields();
        });
}

// 住所情報の入力フィールドをクリアする関数
function clearAddressFields() {
    document.getElementById('prefecture').value = '';
    document.getElementById('city').value = '';
    document.getElementById('address-details').value = '';
}
