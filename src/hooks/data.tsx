import { Album } from '@/types/Album';
import { Post } from '@/types/Post';
import { User } from '@/types/User';

export async function getUsers({
  limit,
}: {
  limit: number;
}): Promise<Array<User>> {
  const params = new URLSearchParams({ _limit: limit.toString() });

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users?${params.toString()}`
  );
  return res.json();
}

export async function getPosts({
  limit,
}: {
  limit: number;
}): Promise<Array<Post>> {
  const params = new URLSearchParams({ _limit: limit.toString() });

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?${params.toString()}`
  );
  return res.json();
}

export async function getAlbums({
  limit,
}: {
  limit: number;
}): Promise<Array<Album>> {
  const params = new URLSearchParams({ _limit: limit.toString() });

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/albums?${params.toString()}`
  );
  return res.json();
}
