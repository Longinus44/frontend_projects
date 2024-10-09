import React from 'react';
import Navbar from './componesnt/navbar/navbar';
import Home from './componesnt/pages/home';
import Menu from './componesnt/pages/menu';
import Banner from './componesnt/pages/banner';
import Banner2 from './componesnt/pages/banner2';
import Banner3 from './componesnt/pages/banner3';
import Footer from './componesnt/pages/footer';

const App = () => {
	return (
		<>
			<main className="overflow-x-hidden">
				<Navbar />
				<Home />
				<Menu />
				<Banner />
				<Banner2 />
				<Banner3 />
				<Footer />
			</main>
		</>
	);
};

export default App;
