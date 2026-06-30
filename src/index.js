export function normalizeChangedFiles(files) {
  return files.map((file) => String(file).trim()).filter(Boolean);
}

export function createReviewPrompt(files) {
  const changedFiles = normalizeChangedFiles(files);
  const fileList = changedFiles.length
    ? changedFiles.map((file, index) => `${index + 1}. ${file}`).join("\n")
    : "No changed files detected.";

  return [
    "다음 Pull Request 변경 내용을 바탕으로 코드 리뷰 요약을 작성해줘.",
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
