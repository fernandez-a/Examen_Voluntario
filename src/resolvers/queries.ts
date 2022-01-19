import { ApolloError } from 'apollo-server'
import axios from "axios";
import { EpisodeAPI, CharacterAPI, Last_Location, Location_json } from "../types";
export const Query = {
  character: async (parent: any, args: { id: number }) => {
    let character: CharacterAPI = await (await axios.get(`https://rickandmortyapi.com/api/character/${args.id}`)).data;
    character.episode.map((episode) => {

    })
    return (character);
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
  }

}
export const Episode = {
  characters: async (parent: { characters: string[] }) => {
    let characters = parent.characters.map(async (f) => {
      let character = (await (await axios.get(f)).data) as EpisodeAPI;
      return character;
    });
    return characters;
  }
}

export const Location = {
  residents: async (parent: { characters: string[] }) => {
    console.log(parent.characters);
    let characters = parent.characters.map(async (f) => {
      let character = (await (await axios.get(f)).data) as EpisodeAPI;
      return character;
    });
    return characters;
  }
}