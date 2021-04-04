import { useState, useEffect } from 'react';
import { get } from '../requests/play-better';
import { PlayBetterAPIResponse } from '../types/types';

export const useGetPlayBetterStock = () => {
  const [data, setData] = useState<PlayBetterAPIResponse>();

  const getData = async () => {
    const { variants } = await get<PlayBetterAPIResponse>(
      'https://www.playbetter.com/collections/golf-launch-monitor/products/skytrak-golf-simulator-launch-monitor.js'
    );
    const { product } = await get<PlayBetterAPIResponse>(
      'https://www.playbetter.com/collections/golf-launch-monitor/products/skytrak-golf-simulator-launch-monitor.json'
    );

    const response: PlayBetterAPIResponse = {
      product,
      variants,
    };

    setData(response);
  };

  useEffect(() => {
    getData();
  }, []);

  return data;
};
