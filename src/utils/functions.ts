import {IJournalExperienceItem, IJournalItem} from "../services/types/journal";

export function matchesMediaQuery(mediaQuery: string) {
  return window.matchMedia(mediaQuery).matches;
}

export function isExperience(obj: IJournalItem): obj is IJournalExperienceItem {
  return "name" in obj;
}
