'use client';
import React, { useState } from 'react';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { userLogout } from '../Redux/userActions';
import { useRouter } from 'next/navigation';

const Navigations = ({ searchParent }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handelLogout = () => {
    dispatch(userLogout(router));
  };
  return (
    <div className="  p-3 bg-black">
      <Navbar fluid rounded className="bg-black container mx-auto ">
        <Navbar.Brand href="/Admin">
          <Image
            src="/new.png"
            className="mr-3 h-6 sm:h-9"
            alt="obai"
            width={100}
            height={100}
          />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="User settings" img="/photome.jpg" rounded />}
          >
            <Dropdown.Header>
              <span className="block text-sm">obai kharboutli</span>
            </Dropdown.Header>

            <Dropdown.Divider />
            <Dropdown.Item onClick={handelLogout}>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className=" md:w-[50%]">
          <input
            type="text"
            placeholder="Search By Tag Name"
            className="w-[100%]"
            onChange={(e) => searchParent(e.target.value)}
          />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigations;
