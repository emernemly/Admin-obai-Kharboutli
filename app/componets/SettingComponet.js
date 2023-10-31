'use client';
import React, { useEffect, useState } from 'react';
import AddPhoto from './AddPhoto';
import { useDispatch, useSelector } from 'react-redux';
import { deletePhoto, getPhoto } from '../Redux/photoActions';
import { Alert, Spinner } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';
import Loadings from '../Loadings';

const SettingComponet = ({ searchParent }) => {
  const [search, setsearch] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPhoto());
  }, []);
  const handelDelete = (_id) => {
    const result = confirm('want to delete');
    result && dispatch(deletePhoto(_id));
  };
  const loading = useSelector((state) => state.photo.loading);

  const images = useSelector((state) => state.photo.items);
  const secc = useSelector((state) => state.photo.secc);

  return (
    <>
      {secc && (
        <Alert
          className=" w-[100%] mb-4"
          color="success"
          icon={HiInformationCircle}
        >
          <span>{secc}</span>
        </Alert>
      )}
      {loading && (
        <div className=" absolute top-0 left-0 bottom-0 right-0 z-10 bg-[#ffffff66] flex justify-center items-center opacity-1 min-h-screen">
          <Loadings />
        </div>
      )}
      <section className=" container mx-auto gap-7 grid grid-rows-3 md:grid-rows-1 grid-cols-1 md:grid-cols-4">
        <AddPhoto />
        {images
          .filter((image) =>
            image.tagName.toUpperCase().includes(searchParent.toUpperCase())
          )
          .reverse()
          .map((photo, i) => (
            <div
              className=" border-2 ease-in duration-300  hover:shadow-xl hover:translate-y-1  "
              key={i}
            >
              <div className=" h-[230px] relative">
                <img
                  src={photo.file}
                  alt={photo.tagName}
                  fill={true}
                  className=" h-[100%] w-[100%]"
                />{' '}
              </div>
              <div className=" p-5 flex justify-between items-center">
                <b>{photo.tagName}</b>
                <button
                  className="  text-[#e6202d] "
                  onClick={() => handelDelete(photo._id)}
                >
                  <b>DELETE</b>
                </button>
              </div>
            </div>
          ))}
      </section>
    </>
  );
};

export default SettingComponet;
