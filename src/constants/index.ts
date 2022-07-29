import {TJournalFilterDictionary} from "../services/types/journal";

export const BASE_API_URL = 'http://localhost:3001/api';
export const NEWS_PAGE_LIMIT = 2
export const NEWS_MAIN_LIMIT = 6
export const JOURNAL_PAGE_LIMIT = 3
export const JOURNAL_MAIN_LIMIT = 6
export const PROJECTS_LIMIT = 2
export const X_TOTAL_COUNT = 'X-Total-Count'

export const JOURNAL_ITEM_TYPE: TJournalFilterDictionary = {
  "all"        : "ВСЕ",
  "topic"      : "ТЕМАТИЧЕСКАЯ ПОДБОРКА",
  "project"    : "СПЕЦПРОЕКТЫ",
  "experience" : "ОПЫТ ЧИТАТЕЛЯ",
};