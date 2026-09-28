# Arbeitslog

## 개요
- AI의 생성 결과물을 사용하지 않은 블로그 프로젝트
- `Bun`, `TypeScript`, `React`, `Notion SDK`

## 주요 구현
- `_scripts/prebuild`: 빌드 전 Notion에서 발행 처리한 페이지들을 정적 데이터로 변환, 서버 프레임워크 없이 react만으로 정적 페이지 제공
- `_scripts/postbuild`: 빌드 후 결과물에 SEO 등 후처리, 사이트맵 및 피드 등 정적 파일 생성

## 배포
- Github Pages: 무료로 간단하게 사용할 수 있다는 것이 가장 큰 이점

## 주안점
- AI의 생성 결과물을 전혀 사용하지 않음. Claude Code 등 에이전트 미사용.
