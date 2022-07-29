import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import NewsList from '../../components/NewsList';
import UserProfile from '../../components/UserProfile';
import { getUser, getUserNews } from '../../store/action/userActions';

function User() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const {
    user,
    userNews,
    newsLoading,
    userLoading,
    newsError,
    userError,
  } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser(userId));
    dispatch(getUserNews(userId));
  }, []);

  return (
    <div>
      <UserProfile user={user} error={userError} isLoading={userLoading} />
      <NewsList news={userNews} error={newsError} isLoading={newsLoading} />
    </div>
  );
}

export default User;
