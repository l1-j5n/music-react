import React from 'react'
import Loadable from 'react-loadable';
const MyLoadingComponent = ({ isLoading, error }) => {
  if (isLoading) {
    return <div>Loading...</div>; // 全局loading组件，页面加载时
  } else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;   // 全局
  } else {
    return null;
  }
};

export { Loadable, MyLoadingComponent }