import { ApolloError } from 'apollo-server'
import axios from "axios";
import { EpisodeAPI, CharacterAPI, Last_Location, Location_json } from "../types";
export const Query = {
  character: async (parent: any, args: { id: number }) => {
    let character: CharacterAPI = await (await axios.get(`https://rickandmortyapi.com/api/character/${args.id}`)).data;
    return (character);
  },
  charactersByIds: async (parent: any, args: { ids: number[] }) => {
    let character: CharacterAPI[] = await (await axios.get(`https://rickandmortyapi.com/api/character/${args.ids.toString()}`)).data;
    return character;
  }

}

export const Character = {
  episode: async (parent: { episode: string[] }) => {
    let episode = parent.episode.map(async (f) => {
      let episdode = (await (await axios.get(f)).data) as EpisodeAPI;
      return episdode;
    });
    return episode;
  },
  location: async (parent: { location: Location_json }) => {
    let last_location: Last_Location = (await (await axios.get(parent.location.url)).data);
    return last_location;
  },
  origin: async (parent: { origin: Location_json }) => {
    if (parent.origin.name === "unknown") {
      return parent.origin;
    }
    else {
      let origin: Last_Location = (await (await axios.get(parent.origin.url)).data);
      return origin;
    }
  }

}
export const Episode = {
  characters: async (parent: { characters: string[] }) => {
    let characters = parent.characters.map(async (f) => {
      let character = (await (await axios.get(f)).data) as CharacterAPI;
      return character;
    });
    return characters;
  }
}

export const Location = {
  residents: async (parent: { residents: string[]}) => {
  let residents = parent.residents.map(async (f) => {
    let resident = (await (await axios.get(f)).data) as CharacterAPI;
    return resident;
  });
  return residents;
  }
}
