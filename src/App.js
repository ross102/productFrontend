import React from 'react';

import FormData from './components/FormData';
import ShowPage from './components/ShowPage';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<Route path="/" exact component={FormData} />
			<Route path="/show" component={ShowPage} />
		</Router>
	);
};

export default App;
