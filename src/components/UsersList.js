import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { fetchUsers } from "../store";

function UsersList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return 'Users List';
}

export default UsersList;
