import { useEffect } from 'react';
import { 
  Heading,
  Box,
} from 'react-bulma-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './store/usersSlice';
import { nanoid } from 'nanoid';



const UsersPage = () => {
  const dispatch = useDispatch();
  const { users } = useSelector(({ users }) => users);

  
  useEffect(() => { 
    dispatch(fetchUsers());
  }, [])

  return (
    <div className="mon-notification">
      <Heading size={5}>
        Пользователи
      </Heading>
      <Box>
        {users.map(({ name }) => (
            <div key={nanoid(3)} className="mon-users-item">{ name }</div>
          ))
          }
      </Box>
    </div>
  )
}

export default UsersPage;
