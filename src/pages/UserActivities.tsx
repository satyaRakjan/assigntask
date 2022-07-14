import React from 'react';
import { useParams } from 'react-router-dom';

const UserActivities = () => {
  const params = useParams();

  return (
    <div>
      <h2>Activity - {params.activityId}</h2>
    </div>
  );
};

export default UserActivities;
