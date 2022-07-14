import React from 'react';
import { Link } from 'react-router-dom';
import { createPath, ROUTE } from '../routing';

const Users = () => (
  <div>
    <h1>Users</h1>
    <ul>
      <li>
        <Link
          to={createPath({
            path: ROUTE.USER_PROFILE,
            params: { userId: 'janedoe' },
          })}
        >
          Jane Doe
        </Link>
      </li>
      <li>
        <Link
          to={createPath({
            path: ROUTE.USER_PROFILE,
            params: { userId: 'johndoe' },
          })}
        >
          John Doe
        </Link>
      </li>
    </ul>
  </div>
);

export default Users;
