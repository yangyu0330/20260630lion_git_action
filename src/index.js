export const DEFAULT_PROJECT_CONTEXT = [
  "이 저장소는 GitHub Actions 과제 실습용 Node.js 프로젝트이다.",
  "Pull Request가 생성되었을 때 자동 검사 흐름을 이해하는 것이 목표이다.",
  "변경 파일 확인, 테스트, 빌드, AI 리뷰용 prompt 생성을 단계적으로 수행한다."
];

export function normalizeChangedFiles(files) {
  return files.map((file) => String(file).trim()).filter(Boolean);
}

export function createReviewPrompt(files, projectContext = DEFAULT_PROJECT_CONTEXT) {
  const changedFiles = normalizeChangedFiles(files);
  const fileList = changedFiles.length
    ? changedFiles.map((file, index) => `${index + 1}. ${file}`).join("\n")
    : "No changed files detected.";
  const contextList = projectContext.map((item) => `- ${item}`).join("\n");

  return [
    "다음 Pull Request 변경 내용을 바탕으로 코드 리뷰 요약을 작성해줘.",
    "",
    "[프로젝트 방향성과 목적]",
    contextList,
    "",
    "[변경된 파일 목록]",
    fileList,
    "",
    "[요청 사항]",
    "1. 주요 변경 사항을 요약해줘.",
    "2. 코드 리뷰 시 확인해야 할 부분을 알려줘.",
    "3. 테스트가 필요한 부분을 제안해줘.",
    "4. 잠재적인 오류 가능성을 알려줘."
  ].join("\n");
}
