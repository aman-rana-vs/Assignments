import { COVID_API_URL } from '../../constants/api-constants'

export const fetchData = async (url: string) => {
  try {
    const res = await fetch(url)
    const data = await res.json()
    return {
      success: true,
      data: data,
    }
  } catch (err) {
    return {
      success: true,
      error: err,
    }
  }
}
