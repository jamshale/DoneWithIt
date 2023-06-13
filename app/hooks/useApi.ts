import { ApiResponse } from "apisauce"
import { useState } from "react"

const useApi = <T>(apiFunc: Function): { data: T | undefined; error: boolean; loading: boolean; request: (args?: any) => Promise<ApiResponse<T, Error>> } => {
    const [data, setData] = useState<T | undefined>()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const request = async (...args: any[]) => {
        setLoading(true)
        const response = await apiFunc(...args)

        setLoading(false)
        setError(!response.ok || response.data.error !== undefined)
        setData(response.data)
        return response
    }

    return { data, error, loading, request }
}

export default useApi