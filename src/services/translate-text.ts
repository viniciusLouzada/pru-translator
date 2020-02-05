import hasKey from "../helpers/objHasKey.helper";
import { PIDGEON_ALPHABET, HUMAN_ALPHABET } from "../constants/alphabet";

export const translateToPigeon = (text: string): string => {
  const charList = text.split("");
  const translatedChars = charList.map(char => {
    if (
      char === "," ||
      char === "?" ||
      char === "!" ||
      char === "." ||
      char === " "
    )
      return char;
    if (hasKey(PIDGEON_ALPHABET, char)) {
      return PIDGEON_ALPHABET[char];
    }
    return "";
  });
  return translatedChars.join("");
};

export const translateToHuman = (text: string): string => {
  const stringList = text.split(" ");
  const r = new RegExp("(P|p)(.+?)(U|Ú|Û|Ù|u|ú|ù|û){2}", "gm");
  const mappedToAlphabet = stringList.map(s => {
    return s.match(r);
  });
  const translatedStrings = mappedToAlphabet.map(pigeonCharList => {
    if (pigeonCharList) {
      return pigeonCharList
        .map(char => {
          if (hasKey(HUMAN_ALPHABET, char)) {
            return HUMAN_ALPHABET[char];
          }
          return "";
        })
        .join("");
    }
    return "";
  });
  return stringList
    .map((s, index) => {
      const r = new RegExp("^.*[^(!|?|,|.)$]", "g");
      return s.replace(r, translatedStrings[index]);
    })
    .join(" ");
};
