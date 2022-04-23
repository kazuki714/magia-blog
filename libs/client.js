import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'ayuret',
  apiKey: process.env.API_KEY,
});
