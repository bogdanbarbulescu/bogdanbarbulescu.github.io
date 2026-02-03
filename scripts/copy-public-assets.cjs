const fs = require('fs')
const path = require('path')

const root = path.join(__dirname, '..')

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return 0
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true })
  let count = 0
  for (const name of fs.readdirSync(src)) {
    const srcPath = path.join(src, name)
    const destPath = path.join(dest, name)
    if (fs.statSync(srcPath).isDirectory()) {
      count += copyDir(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
      count++
    }
  }
  return count
}

const articlesSrc = path.join(root, 'articles')
const articlesDest = path.join(root, 'public', 'articles')
let n = 0
if (fs.existsSync(articlesSrc)) {
  if (!fs.existsSync(articlesDest)) fs.mkdirSync(articlesDest, { recursive: true })
  for (const f of fs.readdirSync(articlesSrc).filter((f) => f.endsWith('.md'))) {
    fs.copyFileSync(path.join(articlesSrc, f), path.join(articlesDest, f))
    n++
  }
  console.log('Copied', n, 'articles to public/articles')
}

const imagesSrc = path.join(root, 'images')
const imagesDest = path.join(root, 'public', 'images')
const imagesCount = copyDir(imagesSrc, imagesDest)
if (imagesCount > 0) console.log('Copied', imagesCount, 'files to public/images')
