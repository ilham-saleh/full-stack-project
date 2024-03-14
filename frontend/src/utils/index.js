import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(promp) {
  const randomIndex = Math.random(Math.floor() * surpriseMePrompts.length);

  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === promp) return getRandomPrompt();

  return randomPrompt;
}
