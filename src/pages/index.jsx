import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from '../../components/header/header';
import { routeConfig } from '../../router/router.config';

const App = () => {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Header />}>
					{routeConfig.map(item => {
						return (
							<Route
								key={item.path}
								index={item.index}
								path={item.path}
								element={item.element}
							/>
						);
					})}
				</Route>
			</Routes>
		</div>
	);
};

export default App;
