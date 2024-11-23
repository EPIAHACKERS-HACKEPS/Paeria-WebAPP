import { LocalNotifications } from '@capacitor/local-notifications'

const capacitor = async () => {

  try {
    const promises = []
    promises.push(LocalNotifications.createChannel({
      id: 'parking_channel',
      name: 'Parking channel',
      description: 'Channel for parking notifications',
      sound: 'bell.wav',
      importance: 3,
      visibility: 1,
      lights: true,
      vibration: true
    }))

    promises.push(LocalNotifications.requestPermissions())

    await Promise.all(promises)
  } catch {
    // Handle error
  }
}

capacitor()