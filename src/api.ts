const API_URL = import.meta.env.VITE_API_URL || '/api'
const baseUrl = import.meta.env.VITE_API_URL || ''
export const UPLOADS_URL = baseUrl ? baseUrl.replace(/\/api$/, '') : ''

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

// Emails
export interface EmailSubmission {
  id: number
  name: string
  email: string
  phone: string
  service: string
  message: string
  is_read: number
  created_at: string
}

export interface EmailListResponse {
  data: EmailSubmission[]
  total: number
  page: number
  limit: number
  totalPages: number
}

export const emails = {
  submit: (data: { name: string; email: string; phone: string; service: string; message: string }) =>
    request<{ id: number; success: boolean }>('/emails', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  list: (page = 1, limit = 20, search?: string) => {
    const params = new URLSearchParams({ page: String(page), limit: String(limit) })
    if (search) params.set('search', search)
    return request<EmailListResponse>(`/emails?${params}`, { headers: authHeaders() })
  },
  get: (id: number) =>
    request<EmailSubmission>(`/emails/${id}`, { headers: authHeaders() }),
  updateStatus: (id: number, is_read: boolean) =>
    request<{ success: boolean }>(`/emails/${id}/status`, {
      method: 'PUT',
      headers: { ...authHeaders(), 'Content-Type': 'application/json' },
      body: JSON.stringify({ is_read }),
    }),
  delete: (id: number) =>
    request<{ success: boolean }>(`/emails/${id}`, {
      method: 'DELETE',
      headers: authHeaders(),
    }),
  exportXlsx: async () => {
    const baseUrl = import.meta.env.VITE_API_URL || '/api'
    const res = await fetch(`${baseUrl}/emails/export/xlsx`, {
      headers: authHeaders(),
    })
    if (!res.ok) throw new Error('Export failed')
    const blob = await res.blob()
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `emails-${Date.now()}.xlsx`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  },
  stats: () =>
    request<{ total: number; unread: number }>('/emails/stats/summary', { headers: authHeaders() }),
}

// Settings
export interface EmailConfig {
  smtp_host: string
  smtp_port: number
  smtp_user: string
  smtp_pass: string
  from_email: string
  from_name: string
  admin_emails: string[]
  forwarding_enabled: boolean
}

export const settings = {
  getEmailConfig: () =>
    request<EmailConfig>('/settings/email-config', { headers: authHeaders() }),
  updateEmailConfig: (data: Partial<EmailConfig>) =>
    request<{ success: boolean }>('/settings/email-config', {
      method: 'PUT',
      headers: { ...authHeaders(), 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }),
  testEmail: (to: string) =>
    request<{ success: boolean; message: string }>('/settings/test-email', {
      method: 'POST',
      headers: { ...authHeaders(), 'Content-Type': 'application/json' },
      body: JSON.stringify({ to }),
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
