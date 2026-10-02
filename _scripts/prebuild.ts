import type { PageObjectResponse } from '@notionhq/client'
import { getArticleList } from './features/getNotionContents/getArticleList.ts'
import { getFullArticle } from './features/getNotionContents/getFullArticle.ts'
import { processBlock } from './features/processBlocks/processBlock.ts'
import { slugify } from '../utils/slugify.ts'
import { richToPlain } from '../utils/richToPlain.ts'

export type ExtendedPageObjectResponse = PageObjectResponse & { path?: string }

;(async function prebuild() {
  const posts = await getArticleList()

  for (const post of posts) {
    const article = await getFullArticle(post)
    const slug = slugify(
      article.properties['제목'].type === 'title' ? richToPlain(article.properties['제목'].title) : '',
    )
    const createdAt =
      article.properties['작성일']?.type === 'date' ? article.properties['작성일'].date?.start : undefined
    if (!slug || !createdAt) {
      console.error('공개된 포스트 중 슬러그, 작성일이 없는 포스트가 있습니다.')
      process.exit(1)
    }

    await processBlock(article.blocks)

    const d = createdAt?.split('T')[0].split('-')
    const path = `${d?.[0]}/${d?.[1]}/${d?.[2]}/${slug}`
    post.path = path
    await Bun.write(`./public/data/${path}.json`, JSON.stringify(article))
  }

  await Bun.write('./public/data/index.json', JSON.stringify(posts))
})()
