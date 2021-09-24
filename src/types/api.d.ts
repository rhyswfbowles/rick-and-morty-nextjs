// Namespaces are not compilable.
// Do not import this file. Or import external dependencies.
// Use like so - const intro: LickApi.IIntro = {...};

/* eslint-disable */
declare namespace LickApi {
  interface ICharacterCore {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    avatar: string;
    image: string;
  }

  interface ICharacter extends ICharacterCore {
    origin: ILocation;
    location: ILocation;
    firstEpisode: IEpisode;
    lastEpisode: IEpisode;
    episodes: IEpisode[];
    noOfEpisodes: number;
  }

  interface IEpisode {
    id: number;
    name: string;
    air_date: string;
    characters: number;
    episode: string;
  }

    interface IRawApiLocation {
    id: number;
    name: string;
    type: string;
    residents: Array;
    dimension: string;
  }

  interface ILocation extends IRawApiLocation {
    noOfResidents: number;
  }
}
