export interface Type {
  key: string;
}

export interface Link {
  url: string;
  type: Type;
  title: string;
}

export interface Type2 {
  key: string;
}

export interface Bio {
  type: string;
  value: string;
}

export interface RemoteIds {
  viaf: string;
  wikidata: string;
  isni: string;
}

export interface Created {
  type: string;
  value: Date;
}

export interface LastModified {
  type: string;
  value: Date;
}

export interface authorData {
  death_date: string;
  links: Link[];
  birth_date: string;
  personal_name: string;
  type: Type2;
  alternate_names: string[];
  name: string;
  bio: Bio;
  remote_ids: RemoteIds;
  source_records: string[];
  photos: number[];
  key: string;
  latest_revision: number;
  revision: number;
  created: Created;
  last_modified: LastModified;
}
