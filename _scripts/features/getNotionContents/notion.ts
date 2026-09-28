import { Client } from '@notionhq/client'

console.log(
  process.cwd(),
  Object.keys(process.env).filter(k => k.includes('NOTION')),
)

if (!(process.env.NOTION_API_KEY && process.env.NOTION_DATASOURCE_ID)) {
  console.error('NOTION API 관련 환경변수가 제대로 설정되지 않았습니다.')
  process.exit(1)
}

export const basepath: string = '/'
export const notion = new Client({
  auth: process.env.NOTION_API_KEY!,
})
