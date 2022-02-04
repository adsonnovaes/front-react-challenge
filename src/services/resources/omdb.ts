import api from '../api';

export type Omdb = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Plot: string;
  Awards: string;
  Poster: string;
}

export const classCurrent = async () => {
  const { data } = await api.get('/?i=tt3896198&apikey=c9155d28');

  return data as Omdb;
}