import React from 'react';
import fruit from '../../assets/fruits/fruit.png';
import { motion, spring } from 'framer-motion';
import { Fadeleft } from '../../utility/animation';

const Banner = () => {
	return (
		<section className="container mb-12">
			<div className="bg-slate-300 rounded-3xl container grid grid-cols-1 md:grid-cols-2 space-y-4 md:space-y-0 py-14">
				<div>
					<motion.img
						initial={{ opacity: 0, scale: 0.5 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
						viewport={{ once: true }}
						src={fruit}
						alt=""
						className="justify-start w-[300px]/Users/vc/Downloads/—Pngtree—fresh fruit juice splash with_15869725.png md:max-x[400px] h-full object-cover drop-shadow"
					/>
				</div>
				<div className="flex flex-col justify-center">
					<div className="text-center md:text-left space-y-6 lg:max-w-[500px]">
						<motion.h1
							variants={Fadeleft(0.5)}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							className="text-3xl lg:text-4xl font-bold uppercase"
						>
							Get Fresh Fruits Today
						</motion.h1>
						<motion.p
							variants={Fadeleft(0.7)}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam perspiciatis et
							ratione pariatur natus, consectetur adipisci! Tempora quae nesciunt ipsam nobis
							officia ut dicta, nihil quod sunt sapiente! Ipsam, vero!
						</motion.p>

						<motion.div
							variants={Fadeleft(0.9)}
							initial="hidden"
							animate="visible"
							className="flex justify-center md:justify-start "
						>
							<button className="primary-btn">Download App</button>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
