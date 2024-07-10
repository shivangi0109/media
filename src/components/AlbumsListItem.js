import ExpandablePanel from './ExpandablePanel';
import { GoTrash } from 'react-icons/go';
import Button from './Button';
import { useRemoveAlbumMutation } from '../store';
import PhotosList from './PhotosList';

const AlbumsListItem = ({ album }) => {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleDeleteAlbum = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <Button className="mr-2" loading={results.isLoading} onClick={handleDeleteAlbum}>
        <GoTrash />
      </Button>
      {album.title}
    </>
  );

  return (
    <ExpandablePanel key={album.id} header={header}>
      <PhotosList album={album} />
    </ExpandablePanel>
  );
};

export default AlbumsListItem;