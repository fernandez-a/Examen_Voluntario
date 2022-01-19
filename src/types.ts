export type EpisodeAPI = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: [string];
  created: string;
};
export type CharacterAPI = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: string;
  location: string;
  image: string;
  episode: [string];
  created: string;
};
export type Last_Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: [string];
  created: string;
}

export type Location_json = {
  name: string;
  url: string;
}