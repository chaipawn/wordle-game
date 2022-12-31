import { getwordlist } from "./WordleList";

export let answer = "";

export const retrieveAnswer = (): string => {
  if (answer.length > 0) return answer;

  const wordlelist = getwordlist();
  answer = wordlelist[Math.floor(Math.random() * wordlelist.length)];
  console.log("🤫 Answer CHEAT: ", answer);

  return answer;
};
