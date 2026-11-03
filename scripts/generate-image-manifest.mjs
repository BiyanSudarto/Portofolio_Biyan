import { readdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

const root = path.join(process.cwd(), 'public', 'images')
const output = path.join(process.cwd(), 'lib', 'image-manifest.ts')
const supported = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif', '.avif', '.svg'])
const manifest = {}

async function scan(directory, folder = '') {
  let entries
  try {
    entries = await readdir(directory, { withFileTypes: true })
  } catch {
    return
  }

  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue
    const absolute = path.join(directory, entry.name)
    const relative = folder ? path.posix.join(folder, entry.name) : entry.name

    if (entry.isDirectory()) {
      await scan(absolute, relative)
      continue
    }

    if (!supported.has(path.extname(entry.name).toLowerCase())) continue
    const parts = relative.split('/')
    if (parts.length < 3) continue
    const folderName = `${parts[0]}/${parts[1]}`
    const url = '/images/' + relative.split(path.sep).join('/')
    ;(manifest[folderName] ??= []).push(url)
  }
}

await scan(root)
for (const images of Object.values(manifest)) images.sort((a, b) => a.localeCompare(b))
const source = `const imageManifest: Record<string, string[]> = ${JSON.stringify(manifest, null, 2)}\n\nexport default imageManifest\n`
await writeFile(output, source, 'utf8')
console.log(`Generated image manifest for ${Object.keys(manifest).length} image folders.`)
