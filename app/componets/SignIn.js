'use client';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { signInAction } from '../Redux/userActions';
import { useRouter } from 'next/navigation';
import { Alert, Spinner } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';
import HocS from '../Hoc/HocS';
const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const router = useRouter();
  const onSubmit = async (data) => {
    dispatch(signInAction(data, router));
  };
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);
  return (
    <HocS>
      <div className=" flex w-[100%] h-[700px] items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-[500px] mx-[12px] items-center text-center p-7 bg-[#edeff2] rounded-lg	"
        >
          <Image src="/new.png" alt="obai" width={200} height={200} />
          {error && (
            <Alert
              className=" w-[100%] mb-4"
              color="failure"
              icon={HiInformationCircle}
            >
              <span>{error}</span>
            </Alert>
          )}
          <div className="flex w-[100%] flex-col my-3">
            {' '}
            <input
              className=" w-[100%] border-none"
              type="text"
              placeholder="User Name"
              {...register('userName', { required: true })}
            />
            <span className=" text-red-600">
              {errors.userName && '! this field is required'}
            </span>
          </div>
          <div className="flex w-[100%] flex-col my-3">
            <input
              className=" w-[100%]  border-none"
              type="password"
              placeholder="Password"
              {...register('password', { required: true })}
            />
            <span className=" text-red-600">
              {errors.password && '! this field is required'}
            </span>
          </div>
          <button
            type="sumbit"
            disabled={loading && true}
            className=" disabled:opacity-25 font-[700] bg-black text-white md:w-[50%]  px-5 py-3"
          >
            {!loading ? 'SUBMIT' : <Spinner />}
          </button>
        </form>
      </div>
    </HocS>
  );
};

export default SignIn;
