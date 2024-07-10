import ExpandablePanel from './ExpandablePanel';
import { GoTrash } from 'react-icons/go';
import Button from './Button';

const AlbumsListItem = ({ album }) => {
  const header = (
    <>
      <Button className="mr-3">
        <GoTrash />
      </Button>
      {album.title}
    </>
  );<div>{album.title}</div>;

  return (
    <ExpandablePanel key={album.id} header={header}>
      List of photos in the album
    </ExpandablePanel>
  );
};

export default AlbumsListItem;