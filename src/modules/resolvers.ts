import albumsResolver from "./albums/resolvers/albums.resolver";
import artistsResolver from "./artists/resolvers/artists.resolver";
import bandsResolver from "./bands/resolvers/bands.resolver";
import favouritesResolver from "./favourites/resolvers/favourites.resolver";
import genresResolver from "./genres/resolvers/genres.resolver";
import tracksResolver from "./tracks/resolvers/tracks.resolver";
import usersResolver from "./users/resolvers/users.resolver";

export default [
  albumsResolver,
  artistsResolver,
  bandsResolver,
  favouritesResolver,
  genresResolver,
  tracksResolver,
  usersResolver,
];
