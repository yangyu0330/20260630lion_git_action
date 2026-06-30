import test from "node:test";
import assert from "node:assert/strict";

import { createReviewPrompt, normalizeChangedFiles } from "../src/index.js";

test("normalizeChangedFiles removes empty file names", () => {
  assert.deepEqual(normalizeChangedFiles(["src/index.js", " ", "", "test/index.test.js"]), [
    "src/index.js",
    "test/index.test.js"
  ]);
});

test("createReviewPrompt includes changed files and review requests", () => {
  const prompt = createReviewPrompt(["src/index.js", "README.md"]);

  assert.match(prompt, /1\. src\/index\.js/);
  assert.match(prompt, /2\. README\.md/);
  assert.match(prompt, /주요 변경 사항/);
  assert.match(prompt, /테스트가 필요한 부분/);
});
