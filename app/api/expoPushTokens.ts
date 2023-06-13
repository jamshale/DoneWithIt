import client from './client'
import * as Notifications from 'expo-notifications'

const register = (pushToken: Notifications.ExpoPushTokenOptions) => client.post('/expoPushTokens', { token: pushToken.devicePushToken })

export default {
    register
}