import React from 'react';
import Sidebar from './components/sidebar/sidebar';
import Content from './components/dashboard/content';
import Profile from './components/dashboard/profile';
import './App.css';

const App = () => {
	return (
		<div className="dashboard">
			<Sidebar />
			<div className="dashboard-content">
				<Content />
				<Profile />
			</div>
		</div>
	);
};

export default App;
