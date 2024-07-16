import { useFetchPhotosQuery } from "../store";

const PhotosList = ({ album }) => {
  useFetchPhotosQuery(album);

  return <div>List of photos in the album</div>
};

export default PhotosList;