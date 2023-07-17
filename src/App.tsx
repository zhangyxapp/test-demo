import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import App from './pages/index';

const root = ReactDOM.createRoot(document.getElementById('app')!);
// v18 的新方法
root.render(
	<HashRouter>
		<App />
	</HashRouter>
);
