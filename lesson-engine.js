import { LESSON_CONTRACTS } from "../data/lesson-contracts.js";

/* ===============================
   READ URL PARAMS
================================ */
const params = new URLSearchParams(window.location.search);

const subjectId = params.get("subject");
const pillarId = params.get("pillar");
const lessonId = params.get("lesson");

if (!subjectId || !pillarId || !lessonId) {
  throw new Error("Missing subject, pillar, or lesson in URL");
}

/* ===============================
   LOOK UP LESSON CONTRACT
================================ */
const lesson =
  LESSON_CONTRACTS?.[subjectId]?.[pillarId]?.[lessonId];

if (!lesson) {
  throw new Error("Lesson contract not found");
}

/* ===============================
   RENDER CORE METADATA
================================ */
document.getElementById("lesson-title").textContent = lesson.title;

document.getElementById("lesson-goal").textContent =
  lesson.learningGoal.coreConcept;

document.getElementById("lesson-why").textContent =
  lesson.learningGoal.whyItMatters;

/* ===============================
   SECTION PLACEHOLDERS
================================ */
document.getElementById("learn-content").textContent =
  "Learning content will be generated here.";

document.getElementById("practice-content").textContent =
  "Practice activities will appear here.";

document.getElementById("quiz-content").textContent =
  "Quiz will unlock after practice.";

