import { extname } from 'node:path'
import type { BlockWithChildren } from 'types/notion.types.ts'

function filterMediaSubBlock(block: BlockWithChildren) {
  switch (block.type) {
    case 'image':
      return block['image']
    case 'video':
      return block['video']
    case 'file':
      return block['file']
    case 'pdf':
      return block['pdf']
    default:
      return null
  }
}

export async function processMediaBlock(block: BlockWithChildren) {
  const subBlock = filterMediaSubBlock(block)
  if (!subBlock) return
  if (subBlock.type === 'external') return
  const ext = extname(new URL(subBlock.file.url).pathname)
  const path = ext ? `${block.id}${ext}` : block.id

  const response = await fetch(subBlock.file.url)
  if (!response.ok) return

  await Bun.write(`./public/data/media/${path}`, response)
  subBlock.file.url = `/media/${path}`
}
