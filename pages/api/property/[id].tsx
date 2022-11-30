import { property } from '../../../src/data';
import type { NextApiResponse } from 'next';
export default function handler(
  {
    query: { id },
  }: {
    query: {
      [key: string]: string | string[] | number;
    };
  },
  res: NextApiResponse,
) {
  const filtered = property.filter((value) => value.id === Number(id));
  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res
      .status(404)
      .json({ message: `Property with the id of ${id} is not found` });
  }
}
