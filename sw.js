// 検証専用SW。たくまくんアプリ本体の push ハンドラと同じペイロード形式 {data:{title,body,url}} を表示する。
self.addEventListener('push', (event) => {
  const payload = event.data ? event.data.json() : {};
  const d = payload.data || {};
  event.waitUntil(self.registration.showNotification(d.title || '(no title)', { body: d.body || '', data: d }));
});
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
});
