import { useState, useRef } from 'react'
import { Upload, X } from 'lucide-react'
import { uploadFile, UPLOADS_URL } from '../api'

export default function ImageUploader({ value, onChange }: { value: string; onChange: (url: string) => void }) {
  const [uploading, setUploading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const imageUrl = value ? (value.startsWith('/uploads/') ? `${UPLOADS_URL}${value}` : value) : ''

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    try {
      const url = await uploadFile(file)
      onChange(url)
    } catch (err: any) {
      alert(err.message || 'Upload failed')
    } finally {
      setUploading(false)
      if (inputRef.current) inputRef.current.value = ''
    }
  }

  return (
    <div>
      {imageUrl ? (
        <div className="relative inline-block overflow-hidden rounded-xl border border-black/10">
          <img src={imageUrl} alt="" className="h-32 w-48 object-cover" />
          <button
            type="button"
            onClick={() => onChange('')}
            className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
          >
            <X size={14} />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="flex h-32 w-48 items-center justify-center rounded-xl border-2 border-dashed border-black/10 bg-white/50 text-black/30 transition-colors hover:border-[#0000FF]/30 hover:text-[#0000FF]"
        >
          {uploading ? (
            <span className="font-sans text-sm">Uploading...</span>
          ) : (
            <div className="flex flex-col items-center gap-1.5">
              <Upload size={20} />
              <span className="font-sans text-xs">Upload image</span>
            </div>
          )}
        </button>
      )}
      <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />
    </div>
  )
}
