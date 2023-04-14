import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios from 'axios';

import Fantium from './fantium';

interface Collection {
  collection_id: number;
  number_collection_remaining: number;
  price: number;
  status: boolean;
  perks: string[];
  percentage_ownership: string;
}

const baseURL = import.meta.env.VITE_API_BASE_URL

export function App() {
const [data, setData] = useState<Collection[]>([])
  const getFetchUrl = useCallback(
    () =>
      `${baseURL}/collections`,
    []
  );

  useEffect(
    () => {
      async function fetchData() {
        const result = await axios(getFetchUrl());
        setData(
          result.data
        );
      }

      fetchData();
    },

    [getFetchUrl]
  );

  const collectionsData: Collection[] = data;
  return (
    <Fantium collections={collectionsData} />
  );
}

export default App;
