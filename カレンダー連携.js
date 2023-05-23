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



//カレンダーから情報を抜き取る関数
function getcalendar(events, date) {
    const strarray = [];
    const DAY = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + "の予定";
    // 予定が0件の場合
    if (events.length === 0) {
        console.log("No events found.");
    }
    // 予定が1件以上の場合
    else {
        console.log("Events:");

        // 予定の件数だけ実行
        for (event in events) {

            // 予定のタイトルを取得
            let title = events[event].getTitle();
            // 予定の開始時刻・終了時刻を取得
            let startHour = events[event].getStartTime().getHours();
            let startMinute = events[event].getStartTime().getMinutes();
            let endHour = events[event].getEndTime().getHours();
            let endMinute = events[event].getEndTime().getMinutes();
            let arr = title + '（' + startHour + '時' + startMinute + '分～' + endHour + '時' + endMinute + '分）'
            strarray.push(arr)
        }
        const contents = strarray.join("\n");
        if ((contents.includes("XXXX")) || (contents.includes("XXXX")) || (contents.includes(" XXXX"))) {　//指定されたキーワードがある際には重要なMTGと表示する
            var sentcon = DAY + "\n重要なMTGがあるよ！\n" + contents;
        }
        else { var sentcon = DAY + "\n" + contents }
        console.log(sentcon);
        senddisco(sentcon);
        sendLINE(sentcon)
    }
}

function main() {
    // 対象のカレンダーID
    const calendarId = 'XXXX'; //カレンダーidを取得
    // カレンダーオブジェクト取得
    const calendar = CalendarApp.getCalendarById(calendarId);

    // 現在日時を取得
    const date = new Date();
    Logger.log(date);
    // 指定日（当日）の予定オブジェクトの配列を取得
    const events = calendar.getEventsForDay(date);
    getcalendar(events, date);
    // 明日




    // 明日
    const tomorrow = new Date(date.setDate(date.getDate() + 1));
    Logger.log(tomorrow);
    const TomorrowEve = calendar.getEventsForDay(tomorrow);
    getcalendar(TomorrowEve, tomorrow);



}




