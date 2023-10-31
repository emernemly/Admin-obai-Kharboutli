'use client';
import React, { useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { useForm } from 'react-hook-form';
import { Alert } from 'flowbite-react';
import { Spinner } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoto, getPhoto } from '../Redux/photoActions';

const AddPhoto = () => {
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };
  const [img, setimg] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    dispatch(addPhoto({ ...data, file: img }));
  };
  const loading = useSelector((state) => state.photo.loading);

  const error = useSelector((state) => state.photo.error);
  const secc = useSelector((state) => state.photo.secc);

  return (
    <>
      <button
        onClick={() => props.setOpenModal('default')}
        className=" bg-white border-2  flex items-center justify-center flex-col"
      >
        {' '}
        <div className=" text-[70px] text-[#c0c1c1]">
          <IoIosAddCircleOutline />
        </div>
        <p className="text-[#c0c1c1]">Add New Photo</p>
      </button>
      <Modal
        show={props.openModal === 'default'}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header className="bg-[#edeff2]">New Photo Form </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body className="bg-[#edeff2]">
            {error && (
              <Alert
                className=" w-[100%] mb-4"
                color="failure"
                icon={HiInformationCircle}
              >
                <span>{error}</span>
              </Alert>
            )}
            {secc && (
              <Alert
                className=" w-[100%] mb-4"
                color="success"
                icon={HiInformationCircle}
              >
                <span>{secc}</span>
              </Alert>
            )}
            <div className="space-y-6 flex flex-col ">
              <input
                type="file"
                placeholder="Image"
                className=" bg-white border-none"
                onChange={(e) => setimg(e.target.files[0])}
              />
              <input
                type="text"
                placeholder="Photo Tag Name"
                className=" bg-white border-none"
                {...register('tagName', { required: true })}
              />
            </div>
          </Modal.Body>
          <Modal.Footer className="bg-[#edeff2]">
            <button
              type="sumbit"
              disabled={loading && true}
              className=" disabled:opacity-25 font-[700] bg-[#e6202d] text-white px-5 py-3 "
            >
              {!loading ? 'SUBMIT NOW' : <Spinner />}
            </button>
            <button
              className=" font-[700] bg-white  px-5 py-3 "
              onClick={() => props.setOpenModal(undefined)}
            >
              Decline
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default AddPhoto;
