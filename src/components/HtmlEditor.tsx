import { useRef, useCallback } from 'react'

interface HtmlEditorProps {
  value: string
  onChange: (html: string) => void
}

export default function HtmlEditor({ value, onChange }: HtmlEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null)

  const exec = useCallback((command: string, val?: string) => {
    document.execCommand(command, false, val)
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML)
    }
  }, [onChange])

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML)
    }
  }

  const insertImage = () => {
    const url = prompt('Image URL:')
    if (url) exec('insertImage', url)
  }

  const insertLink = () => {
    const url = prompt('Link URL:')
    if (url) exec('createLink', url)
  }

  return (
    <div className="overflow-hidden rounded-xl border border-black/10 bg-white">
      <div className="flex flex-wrap items-center gap-0.5 border-b border-black/5 bg-[#fafafa] px-2 py-1.5">
        <button type="button" onClick={() => exec('formatBlock', '<p>')} className="rounded-lg px-2.5 py-1.5 text-xs font-semibold text-black/60 hover:bg-black/5 hover:text-black" title="Paragraph">P</button>
        <button type="button" onClick={() => exec('formatBlock', '<h3>')} className="rounded-lg px-2.5 py-1.5 text-xs font-bold text-black/60 hover:bg-black/5 hover:text-black" title="Heading">H</button>
        <span className="mx-1 h-5 w-px bg-black/10" />
        <button type="button" onClick={() => exec('bold')} className="rounded-lg px-2.5 py-1.5 text-sm font-bold text-black/60 hover:bg-black/5 hover:text-black" title="Bold">B</button>
        <button type="button" onClick={() => exec('italic')} className="rounded-lg px-2.5 py-1.5 text-sm italic text-black/60 hover:bg-black/5 hover:text-black" title="Italic">I</button>
        <button type="button" onClick={() => exec('underline')} className="rounded-lg px-2.5 py-1.5 text-sm underline text-black/60 hover:bg-black/5 hover:text-black" title="Underline">U</button>
        <span className="mx-1 h-5 w-px bg-black/10" />
        <button type="button" onClick={() => exec('insertUnorderedList')} className="rounded-lg px-2.5 py-1.5 text-sm text-black/60 hover:bg-black/5 hover:text-black" title="Bullet list">•</button>
        <button type="button" onClick={() => exec('insertOrderedList')} className="rounded-lg px-2.5 py-1.5 text-sm text-black/60 hover:bg-black/5 hover:text-black" title="Numbered list">1.</button>
        <span className="mx-1 h-5 w-px bg-black/10" />
        <button type="button" onClick={insertLink} className="rounded-lg px-2.5 py-1.5 text-sm text-black/60 hover:bg-black/5 hover:text-black" title="Insert link">🔗</button>
        <button type="button" onClick={insertImage} className="rounded-lg px-2.5 py-1.5 text-sm text-black/60 hover:bg-black/5 hover:text-black" title="Insert image">🖼</button>
      </div>
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        onInput={handleInput}
        dangerouslySetInnerHTML={{ __html: value }}
        className="min-h-[300px] w-full resize-y px-4 py-3 font-sans text-sm text-black outline-none focus:outline-none [&_h3]:my-3 [&_h3]:text-lg [&_h3]:font-bold [&_p]:my-2 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:my-1"
      />
    </div>
  )
}
