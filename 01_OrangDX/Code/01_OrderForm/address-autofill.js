// address-autofill.js
document.addEventListener('DOMContentLoaded', function() {
    // 「住所検索」ボタンのイベントリスナーを設定
    var searchButton = document.getElementById('address-search');
    var postalCodeInput = document.getElementById('postal-code');

    searchButton.addEventListener('click', function() {
        var zipCode = postalCodeInput.value;
        getAddress(zipCode);
    });
});

function getAddress(zipCode) {
    if (zipCode.length !== 7) {
        alert('正しい郵便番号を入力してください。');
        return;
    }

    fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipCode}`)
        .then(response => response.json())
        .then(data => {
            if (data.results) {
                document.getElementById('prefecture').value = data.results[0].address1;
                document.getElementById('city').value = data.results[0].address2;
                document.getElementById('address-details').value = data.results[0].address3; // 町名まで含む住所情報
            } else {
                alert('該当する住所が見つかりません。郵便番号を確認してください。');
                clearAddressFields();
            }
        })
        .catch(error => {
            console.error('住所情報の取得に失敗しました', error);
            alert('住所情報の取得中にエラーが発生しました。');
            clearAddressFields();
        });
}

function clearAddressFields() {
    document.getElementById('prefecture').value = '';
    document.getElementById('city').value = '';
    document.getElementById('address-details').value = '';
}
