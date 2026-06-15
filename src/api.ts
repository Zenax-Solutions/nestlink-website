const API_URL = 'http://localhost:4000/api'
export const UPLOADS_URL = 'http://localhost:4000'

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    ...options,
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Request failed' }))
    throw new Error(err.error)
  }
  return res.json()
}

export function setToken(token: string) {
  localStorage.setItem('nl_token', token)
}

export function getToken(): string | null {
  return localStorage.getItem('nl_token')
}

function authHeaders(): Record<string, string> {
  const token = getToken()
  return token ? { Authorization: `Bearer ${token}` } : {}
}

// Auth
export const auth = {
  login: (username: string, password: string) =>
    request<{ token: string; username: string }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    }),
}

// Blogs
export interface Blog {
  id: number
  slug: string
  title: string
  excerpt: string
  category: string
  author: string
  read_time: string
  date: string
  image: string
  content: string
  sidebar: string
}

export const blogs = {
  list: () => request<Blog[]>('/blogs'),
  get: (slug: string) => request<Blog>(`/blogs/${slug}`),
  create: (data: Partial<Blog>) =>
    request<{ id: number }>('/blogs', {
      method: 'POST',
      headers: authHeaders(),
      body: JSON.stringify(data),
    }),
  update: (id: number, data: Partial<Blog>) =>
    request<{ success: boolean }>(`/blogs/${id}`, {
      method: 'PUT',
      headers: authHeaders(),
      body: JSON.stringify(data),
    }),
  delete: (id: number) =>
    request<{ success: boolean }>(`/blogs/${id}`, {
      method: 'DELETE',
      headers: authHeaders(),
    }),
}

// Portfolio
export interface PortfolioItem {
  id: number
  title: string
  category: string
  description: string
  image: string
}

export const portfolio = {
  list: () => request<PortfolioItem[]>('/portfolio'),
  get: (id: number) => request<PortfolioItem>(`/portfolio/${id}`),
  create: (data: Partial<PortfolioItem>) =>
    request<{ id: number }>('/portfolio', {
      method: 'POST',
      headers: authHeaders(),
      body: JSON.stringify(data),
    }),
  update: (id: number, data: Partial<PortfolioItem>) =>
    request<{ success: boolean }>(`/portfolio/${id}`, {
      method: 'PUT',
      headers: authHeaders(),
      body: JSON.stringify(data),
    }),
  delete: (id: number) =>
    request<{ success: boolean }>(`/portfolio/${id}`, {
      method: 'DELETE',
      headers: authHeaders(),
    }),
}

// Upload
export async function uploadFile(file: File): Promise<string> {
  const formData = new FormData()
  formData.append('file', file)

  const res = await fetch(`${API_URL}/upload`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${getToken()}` },
    body: formData,
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Upload failed' }))
    throw new Error(err.error)
  }

  const data = await res.json()
  return data.url
}
