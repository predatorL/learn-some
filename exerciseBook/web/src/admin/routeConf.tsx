import React from 'react';
import type { RouteObject } from "react-router-dom";
import Layout from '@components/layout';
// pages
import Home from '@pages/home';
import Chinese from '@pages/chinese';

import NoMatch from './default/NoMatch';

const RouteConf: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/chinese",
          element: <Chinese />,
          // children: [
          //   { index: true, element: <CoursesIndex /> },
          //   { path: "/courses/:id", element: <Course /> },
          // ],
        },
        { path: "*", element: <NoMatch /> },
      ],
    },
  ];

export default RouteConf;