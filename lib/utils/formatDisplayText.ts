const SMALL_WORDS = new Set([
  "a",
  "as",
  "com",
  "da",
  "das",
  "de",
  "do",
  "dos",
  "e",
  "em",
  "na",
  "nas",
  "no",
  "nos",
  "o",
  "os",
  "ou",
  "para",
  "por",
]);

function toTitleCaseSegment(segment: string) {
  return segment
    .toLocaleLowerCase("pt-BR")
    .replace(/\p{L}[\p{L}'’]*/gu, (word, offset) => {
      if (offset > 0 && SMALL_WORDS.has(word)) {
        return word;
      }

      return word.charAt(0).toLocaleUpperCase("pt-BR") + word.slice(1);
    });
}

function toSentenceCaseSegment(segment: string) {
  const normalized = segment.toLocaleLowerCase("pt-BR");

  return normalized.charAt(0).toLocaleUpperCase("pt-BR") + normalized.slice(1);
}

export function formatDisplayText(text: string) {
  const [title, ...rest] = text.split("–");

  if (rest.length === 0) {
    return text.length <= 42
      ? toTitleCaseSegment(text)
      : toSentenceCaseSegment(text);
  }

  return `${toTitleCaseSegment(title.trim())} – ${toSentenceCaseSegment(rest.join("–").trim())}`;
}
