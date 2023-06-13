import { ImageSourcePropType } from 'react-native/types'
import client from './client'
import { ApiResponse, ApiErrorResponse } from 'apisauce'
import { Item } from '../components/Picker'

const endpoint = '/listings'

interface Image {
    url: string
}

export interface Listing {
    category?: Item
    description: string
    id: number
    images: Image[]
    location?: Location
    price?: number
    title: string
}

export interface Location {
    latitude?: number
    longitude?: number
}

const getListings = () => client.get<Listing[]>(endpoint)

const createListing = (listing: Listing, onUploadProgress: (progess: number) => void): Promise<ApiResponse<any>> => {
    const data = new FormData()
    data.append('title', listing.title)
    data.append('price', listing.price ? listing.price.toString() : "0")
    data.append('categoryId', listing.category ? listing.category.value.toString() : "")
    data.append('description', listing.description)

    data.append('location', JSON.stringify(listing.location))
    return client.post(endpoint, data, {
        onUploadProgress: (progress) => {
            onUploadProgress(progress.loaded / progress.total)
        }
    })
}

export default {
    getListings,
    createListing
}