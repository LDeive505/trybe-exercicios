type Notification = {
  type: string,
  menssage: string
}

export default function progressNotification(notification: Notification): void {
  console.log(`${notification.type}: ${notification.menssage}`);
}
