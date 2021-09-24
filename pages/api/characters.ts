import { NextApiRequest, NextApiResponse } from 'next';
import Redis from '../../lib/redis';

const getCharacters = async (queryParams) => {
  const queryString = Object.keys(queryParams).map(key => key + '=' + queryParams[key]).join('&');
  const res = await fetch(`https://rickandmortyapi.com/api/character?${queryString}`);
  const data = await res.json();
  await Redis.set(`charactersList:${encodeURIComponent(queryString)}`, JSON.stringify(data));
  return data;
}

const charactersHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  let characters: LickApi.ICharacter[];
  const cachedValue = await Redis.get(`charactersList:${req.query.id}`);
  
  if(cachedValue) {
    characters = JSON.parse(cachedValue);
  } else {
    characters = await getCharacters(req.query)
  }

  res.status(200).json(characters)
}

export default charactersHandler;
