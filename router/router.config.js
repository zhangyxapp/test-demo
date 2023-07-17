import React from 'react';
export const Home = () => {
	return <div>这是home</div>;
};

export const Group = () => {
	return <div>这是Group12</div>;
};

export const About = () => {
	return <div>这是about</div>;
};
export const routeConfig = [
  {
    path: '/',
    element: <Home />,
		index: true
    //  children:[
    //    { path:'/children/child1' , element: <Child1/> },
    //    { path:'/children/child2' , element: <Child2/>  }
    //  ]
  },
	{
		path: '/page',
		element: <Group />
	}
];
