import axios from 'axios';
import { 
  useEffect,
  useState 
} from 'react';

const UsersList = () => {

  const [usersList, setUsersList] = useState([]);
  const usersData = usersList.map((user) => (
    <tr>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.password}</td>
    </tr>
  ));

  useEffect(() => {
    axios.post('/api/user/get-users')
    .then(res => {
      console.log(res);
      setUsersList(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  }, []);
  
  return (
    <div>
      <h1>Userslist</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Password</th>
          </tr>
        </thead>
        {usersData}
      </table>
    </div>
  );
}

export default UsersList;
