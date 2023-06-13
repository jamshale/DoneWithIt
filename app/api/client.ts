import { ApiErrorResponse, ApiOkResponse, create } from 'apisauce'
import { AxiosRequestConfig } from 'apisauce/node_modules/axios'
import cache from '../utility/cache'
import authStorage from '../auth/storage'

const apiClient = create({
    baseURL: 'https://a2f0-70-66-140-105.ngrok-free.app/api'
})

apiClient.addAsyncRequestTransform(async (request) => {
    const authToken = await authStorage.getToken()
    if (!authToken) return
    if (request.headers)
        request.headers["x-auth-token"] = authToken
})

const get = apiClient.get
apiClient.get = async (url: string, params?: {} | undefined, axiosConfig?: AxiosRequestConfig<any> | undefined): Promise<any> => {
    const response = await get(url, params, axiosConfig)
    if (response.ok) {
        cache.store(url, response.data)
        return response
    }

    const data = await cache.get(url)
    return data ? { ok: true, data } : response
}

export default apiClient