import React from 'react';
import './App.css';
import { useRoutes } from "react-router-dom";
import RouteConf from '@pages/routeConf';

export default function App() {
  return useRoutes(RouteConf); 
} 
