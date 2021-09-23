import { NextApiRequest, NextApiResponse } from 'next';

const characterHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  let locationMeta = {};

  const characterRes = await fetch(`https://rickandmortyapi.com/api/character/${req.query.id}`);
  const characterMeta = await characterRes.json();

  const locationUrl = characterMeta?.location?.url;

  if(locationUrl) {
    const locationRes = await fetch(locationUrl);
    locationMeta = await locationRes.json();
  }

  const character: LickApi.ICharacter = {
    ...characterMeta,
    location: {
      ...locationMeta,
    }
  }

  res.status(200).json(character)
}

export default characterHandler;
