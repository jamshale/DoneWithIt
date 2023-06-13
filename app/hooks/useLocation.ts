import { useState, useEffect } from "react"
import * as Location from 'expo-location'

interface Location {
    latitude?: number
    longitude?: number
}

const useLocation = () => {
    const [location, setLocation] = useState<Location>()

    const getLocation = async () => {
        try {
            const { granted } = await Location.requestForegroundPermissionsAsync()
            if (!granted) return
            const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync()

            setLocation({ latitude: latitude, longitude: longitude })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getLocation()
    }, [])

    return location
}


export default useLocation