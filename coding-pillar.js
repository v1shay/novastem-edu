const params = new URLSearchParams(window.location.search);
const pillarId = params.get("pillar");

const container = document.getElementById("pillar-content");

if (!pillarId || !COURSE_MAP.coding.pillars[pillarId]) {
  container.innerHTML = "<p>Invalid pillar.</p>";
  throw new Error("Invalid pillar");
}

const pillar = COURSE_MAP.coding.pillars[pillarId];

// Title
document.getElementById("pillar-title").textContent = pillar.title;
document.getElementById("pillar-description").textContent = pillar.description;

// Lessons
const lessons = pillar.lessons || [];
const lessonGrid = document.getElementById("lesson-grid");

if (lessons.length === 0) {
  lessonGrid.innerHTML = "<p>Lessons coming soon.</p>";
} else {
  lessons.forEach(lesson => {
    const card = document.createElement("div");
    card.className = "lesson-card";
    card.textContent = lesson.title;

    card.onclick = () => {
      window.location.href =
        `lesson.html?pillar=${pillarId}&lesson=${lesson.id}`;
    };

    lessonGrid.appendChild(card);
  });
}
