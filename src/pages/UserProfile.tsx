import React from 'react';
import { Outlet, useParams, Link } from 'react-router-dom';
import { createPath, ROUTE, USER_PROFILE_ROUTE } from '../routing';

const UserProfile = () => {
  const params = useParams();

  return (
    <div>
      <h1>User Profie - {params.userId}</h1>
      <ul>
        <li>
          {/* <Link
            to={createPath({
              path: ROUTE.USER_ACTIVITY,
              params: { userId: params.userId, activityId: 'acivity1' },
            })}
          >
            Activity Number 1
          </Link> */}
        </li>
        <li>
          {/* <Link
            to={createPath({
              path: USER_PROFILE_ROUTE.USER_ACTIVITY,
              params: {},
            })}
          >
            Activity Number 2
          </Link> */}
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default UserProfile;
