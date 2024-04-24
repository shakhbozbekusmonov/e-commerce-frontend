import axios, { AxiosRequestConfig } from 'axios'

const axiosInstance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
	timeout: 1000,
	headers: {
		'Content-Type': 'application/json',
	},
})

class APIClient<T> {
	endpoint: string

	constructor(endpoint: string) {
		this.endpoint = endpoint
	}

	getAll = async (config?: AxiosRequestConfig) => {
		return axiosInstance.get<T>(this.endpoint, config).then(res => res.data)
	}

	get = async (id: string | number, config?: AxiosRequestConfig) => {
		return axiosInstance
			.get<T>(`${this.endpoint}/${id}`, config)
			.then(res => res.data)
	}

	post = async (data: T, config?: AxiosRequestConfig) => {
		return axiosInstance
			.post<T>(this.endpoint, data, config)
			.then(res => res.data)
	}

	edit = async (id: string | number, data: T, config?: AxiosRequestConfig) => {
		return axiosInstance
			.put<T>(`${this.endpoint}/${id}`, data, config)
			.then(res => res.data)
	}

	delete = async (id: string | number, config?: AxiosRequestConfig) => {
		return axiosInstance
			.delete<T>(`${this.endpoint}/${id}`, config)
			.then(res => res.data)
	}
}

export { APIClient }
