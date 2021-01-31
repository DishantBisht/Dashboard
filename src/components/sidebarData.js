import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as BsIcons from 'react-icons/bs';
import * as Io5Icons from 'react-icons/io5';
import * as AiIcons from 'react-icons/ai';
import * as CgIcons from 'react-icons/cg';
import * as TiIcons from 'react-icons/ti';
export const SidebarData = [
  {
    title: ' Dashboard',
    path: '/',
    icon: <BsIcons.BsFillGrid1X2Fill />,
    cName: 'nav-text'
  },
  {
    title: ' Courses',
    path: '/Courses',
    icon: <AiIcons.AiOutlineBook />,
    cName: 'nav-text'
  },
  {
    title: ' Profile',
    path: '/Profile',
    icon: <CgIcons.CgProfile />,
    cName: 'nav-text'
  },
  {
    title: ' Projects',
    path: '/Projects',
    icon: <FaIcons.FaRocketchat/>,
    cName: 'nav-text'
  },
  {
    title: ' Support',
    path: '/Support',
    icon: <TiIcons.TiMessages />,
    cName: 'nav-text'
  },
  {
    title: ' Invite',
    path: '/Invite',
    icon: <Io5Icons.IoGiftOutline/>,
    cName: 'nav-text'
  },
  {
    title: ' Settings',
    path: '/Settings',
    icon: <Io5Icons.IoSettingsOutline />,
    cName: 'nav-text'
  }
];
