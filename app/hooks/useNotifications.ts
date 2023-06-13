import { useNavigation } from "@react-navigation/native"
import { useEffect } from "react"
import routes from "../navigation/routes"
import * as Notifications from 'expo-notifications'
import expoPushTokensApi from "../api/expoPushTokens"

const useNotifications = (notificationListener?: () => void) => {
    const { navigate } = useNavigation()
    useEffect(() => {
        registerForPushNotifications()
        if (notificationListener) Notifications.addNotificationReceivedListener(notificationListener)
    }, [])

    const registerForPushNotifications = async () => {
        try {
            const permission = await Notifications.getPermissionsAsync()
            console.log(permission.granted)
            if (permission.granted) return
            const tokenResponse = await Notifications.getExpoPushTokenAsync()
            expoPushTokensApi.register(tokenResponse)
            console.log(tokenResponse)
        } catch (error) {
            console.log("Error getting push token", error)
        }
    }
}

export default useNotifications