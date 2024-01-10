//ディスコードに送る関数
function senddisco(sentcon) {
    const WEBHOOK_URL = "";//取得したWebhookURLを追加

    const payload = {
        username: "XXXX", //好きな名前を入れてください
        content: sentcon,
    };

    UrlFetchApp.fetch(WEBHOOK_URL, {
        method: "post",
        contentType: "application/json",
        payload: JSON.stringify(payload),
    });

}
