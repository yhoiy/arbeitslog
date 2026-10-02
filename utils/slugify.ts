export function slugify(t: string) {
  return t
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{M}\p{N}\s-]/gu, '') //글자, 숫자, 공백, 하이픈 외 특수문자 삭제
    .replace(/[\s-]+/g, '-') //공백 및 연속된 하이픈은 하이픈 하나로
    .replace(/^-+|-+$/g, '') //문자 앞뒤에 하이픈이 있다면 제거
}
