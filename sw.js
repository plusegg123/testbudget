const APP_URL = "https://plusegg123.github.io/testbudget/tasks_app.html";
self.addEventListener("push", e => {
  let d = {};
  try { if (e.data) d = e.data.json() } catch (err) {}
  e.waitUntil(self.registration.showNotification(d.title || "Дела", {
    body: d.body || "Список дел обновился",
    data: {url: APP_URL}
  }));
});
self.addEventListener("notificationclick", e => {
  e.notification.close();
  e.waitUntil(clients.openWindow(e.notification.data.url));
});
