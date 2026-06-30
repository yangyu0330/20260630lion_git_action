# AI Assisted PR Check Practice

이 저장소는 GitHub Actions 과제를 위해 준비한 간단한 실습용 프로젝트입니다.

목표는 Pull Request가 생성되었을 때 GitHub Actions가 자동으로 실행되고, 변경된 파일 목록을 확인한 뒤 AI 리뷰용 prompt를 만들 수 있는 구조를 이해하는 것입니다.

## 프로젝트 구조

```text
.
├─ package.json
├─ src/
│  └─ index.js
└─ test/
   └─ index.test.js
```

## 실행 명령어

```bash
npm test
npm run build
```

## 다음 단계

다음 단계에서는 `.github/workflows/ai-pr-summary.yml` 파일을 추가해서 GitHub Actions가 PR 이벤트에서 실행되도록 설정합니다.

## PR 이벤트 테스트

이 변경은 Pull Request를 실제로 생성했을 때 GitHub Actions가 자동 실행되는지 확인하기 위한 테스트입니다.
