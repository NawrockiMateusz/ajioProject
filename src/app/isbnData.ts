export interface Author {
  key: string;
}

export interface Language {
  key: string;
}

export interface Classifications {}

export interface Identifiers {
  goodreads: string[];
  librarything: string[];
}

export interface Work {
  key: string;
}

export interface Type {
  key: string;
}

export interface FirstSentence {
  type: string;
  value: string;
}

export interface Created {
  type: string;
  value: Date;
}

export interface LastModified {
  type: string;
  value: Date;
}

export interface isbnData {
  publishers: string[];
  number_of_pages: number;
  isbn_10: string[];
  covers: number[];
  key: string;
  authors: Author[];
  ocaid: string;
  contributions: string[];
  languages: Language[];
  classifications: Classifications;
  source_records: string[];
  title: string;
  identifiers: Identifiers;
  isbn_13: string[];
  local_id: string[];
  publish_date: string;
  works: Work[];
  type: Type;
  first_sentence: FirstSentence;
  latest_revision: number;
  revision: number;
  created: Created;
  last_modified: LastModified;
}
