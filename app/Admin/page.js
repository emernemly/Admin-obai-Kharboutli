'use client';
import React, { useState } from 'react';
import Navigations from '../componets/Navigations';
import SettingComponet from '../componets/SettingComponet';
import Hoc from '../Hoc/Hoc';
export default function Admin() {
  const [searchParent, setsearchParent] = useState('');
  const handesearch = (data) => {
    setsearchParent(data);
  };
  return (
    <Hoc>
      <main>
        <Navigations searchParent={handesearch} />
        <SettingComponet searchParent={searchParent} />
      </main>
    </Hoc>
  );
}
