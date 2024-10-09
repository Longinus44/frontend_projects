import React from 'react';
import { FaLeaf } from 'react-icons/fa';
import { MdMenu, MdOutlineShoppingCart } from 'react-icons/md';
import ResponsiveMenu from './responsiveMenu';
import { motion } from 'framer-motion';

const NavbarMenu = [
	{
		id: 1,
		title: 'Home',
		link: '/',
	},
	{
		id: 2,
		title: 'Products',
		link: '#',
	},
	{
		id: 3,
		title: 'About',
		link: '#',
	},
	{
		id: 4,
		title: 'Shop',
		link: '#',
	},
	{
		id: 2,
		title: 'Contacts',
		link: '#',
	},
];

const Navbar = () => {
	const [open, setOpen] = React.useState(false);
	return (
		<>
			<nav>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.5 }}
					className="container flex justify-between items-center py-4 md:pt-4 "
				>
					{/* logo section */}
					<div className=" text-2xl flex items-center gap-2 font-bold uppercase">
						<p className="text-primary">Fruit</p>
						<p className="text-secondary">store</p>
						<FaLeaf className="text-green-500" />
					</div>

					{/* Menu section */}

					<div className="hidden md:block">
						<ul className="flex items-center gap-6">
							{NavbarMenu.map((menu) => (
								<li key={menu.id}>
									<a
										href={menu.link}
										className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px] font-semibold"
									>
										{menu.title}
									</a>
								</li>
							))}
							<button>
								<MdOutlineShoppingCart className="text-4xl hover:bg-primary hover: rounded-full p-2 duration-200" />
							</button>
						</ul>
					</div>
					<div className="md:hidden" onClick={() => setOpen(!open)}>
						<MdMenu className="text-4xl" />
					</div>
				</motion.div>
			</nav>

			<ResponsiveMenu open={open} />
		</>
	);
};

export default Navbar;
