import { NextApiRequest, NextApiResponse } from 'next';
import Redis from '../../../lib/redis';

const getLocation = async (id) => {
  const res = await fetch(`https://rickandmortyapi.com/api/location/${id}`);
  const data = await res.json();
  await Redis.set(`location:${id}`, JSON.stringify(data));
  return data;
}

const locationHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  let location: LickApi.ILocation;
  const cachedValue = await Redis.get(`location:${req.query.id}`);
  
  if(cachedValue) {
    location = JSON.parse(cachedValue);
  } else {
    location = await getLocation(req.query.id)
  }

  res.status(200).json(location)
}

export default locationHandler;