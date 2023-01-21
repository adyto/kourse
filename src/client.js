import SanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = SanityClient({
  projectId: 'a05ce05b',
  dataset: 'production',
  apiVersion: '2023-01-19',
  token: process.env.REACT_APP_SANITY_TOKEN,
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
