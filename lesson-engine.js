// lesson-engine.js

import { LESSON_CONTRACTS } from "./data/lesson-contracts.js";

export async function generateLearnSection({
  subject,
  pillar,
  lesson
}) {
  const contract =
    LESSON_CONTRACTS?.[subject]?.[pillar]?.[lesson];

  if (!contract) {
    throw new Error("Lesson contract not found.");
  }

  const prompt = `
You are an expert educator.

Your task is to generate the LEARN section of a lesson
STRICTLY following this contract.

RULES (NON-NEGOTIABLE):
- Teach only the core concept
- Do NOT include practice questions
- Do NOT include quiz questions
- Do NOT give answers to anything
- Use clear, structured explanations
- Respect the depth specification exactly

LEARNING GOAL:
Core Concept: ${contract.learningGoal.coreConcept}
Why It Matters: ${contract.learningGoal.whyItMatters}

MISCONCEPTIONS TO AVOID:
${contract.learningGoal.misconceptionsToAvoid.join(", ")}

DEPTH:
Abstraction Level: ${contract.depthSpec.abstractionLevel}
Explanation Depth: ${contract.depthSpec.explanationDepth}

MUST INCLUDE:
${contract.learn.mustInclude.join(", ")}

FORMAT:
- Paragraphs and bullet lists
- No code
- Text-only diagrams if needed

Now generate the LEARN section.
`;

  // TEMP MOCK (until API key is wired)
  return `
<h2>Learn</h2>
<p><strong>What is an Algorithm?</strong></p>
<p>An algorithm is a clear, step-by-step set of instructions designed to solve a specific problem.</p>

<ul>
  <li>Algorithms must be precise</li>
  <li>The order of steps matters</li>
  <li>They must eventually stop</li>
</ul>

<p><strong>Example:</strong> Following a recipe to bake a cake is an algorithm.</p>

<p><strong>Counterexample:</strong> “Bake until it looks right” is not an algorithm because it is vague.</p>
`;
}
