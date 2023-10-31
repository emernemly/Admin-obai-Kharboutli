'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loadings from '../Loadings';
import { userAcess } from '../Redux/userActions';
const Hoc = ({ children }) => {
  const [isUserLoaded, setIsUserLoaded] = useState(false);
  const router = useRouter();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userAcess())
      .then(() => setIsUserLoaded(true))
      .catch((error) => {
        console.error('Error fetching user data:', error);
        setIsUserLoaded(true); // Mark user data as loaded even in case of an error
      });
  }, []);
  const user = useSelector((state) => state.user.item);
  const loading = useSelector((state) => state.user.loading);

  if (!isUserLoaded) {
    return null; // Render nothing until the user data is loaded
  }
  if (!user) {
    router.push('/');
    return null;
  }
  return <>{loading ? <Loadings /> : children}</>;
};

export default Hoc;
