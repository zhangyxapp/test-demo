import React, { useState, useLayoutEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu } from 'antd';

import './index.less';

const items = [
	{
		label: (<Link to="/">首页</Link>),
		key: '/'
	},
	{
		label: (<Link to="/page">page</Link>),
		key: '/page'
	}
];

export const Header = () => {
	const [activeKey, setActiveKey] = useState('/');
	const { pathname } = useLocation();

	useLayoutEffect(() => {
		setActiveKey(pathname);
	}, []);

	return (
		<>
			<Menu
				onClick={({ key }) => setActiveKey(key)}
				mode="horizontal"
				items={items}
				selectedKeys={[activeKey]}
			/>
			<Outlet />
		</>
	);
};
