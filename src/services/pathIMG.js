import noPhoto from 'assets/images/noPhoto.jpg';

export function pathIMG(path, size = 'w342') {
  if (!path) return noPhoto;
  return `https://image.tmdb.org/t/p/${size}/${path}`;
}
