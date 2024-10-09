import React from 'react';
import { IoBagHandleOutline } from 'react-icons/io5';
import platefruit from '../../assets/fruits/platefruit.jpg';
import leaf from '../../assets/fruits/leaf.jpg';
import { Faderight } from '../../utility/animation';
import { motion } from 'framer-motion';

const Home = () => {
	return (
		<>
			<section>
				<div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] ">
					{/* brandinfo */}
					<div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
						<div className="text-center md:text-left space-y-6 lg:max-w-[400px]">
							<motion.h1
								variants={Faderight(0.6)}
								initial="hidden"
								animate="visible"
								className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose font-averia"
							>
								Healthy <br />
								Fresh <span className="text-secondary">Fruits</span>
							</motion.h1>
							<motion.p
								variants={Faderight(0.9)}
								initial="hidden"
								animate="visible"
								className="text-2xl tracking-wide
							"
							>
								Order Now For Fresh Healthy Life
							</motion.p>
							<motion.p
								variants={Faderight(1.2)}
								initial="hidden"
								animate="visible"
								className="text-gray-400"
							>
								{' '}
								Healthy and yummy food for fresh morning breakfast. Eat daily for good health and
								sound mind. Order Now and get 20% off on your order
							</motion.p>
							<motion.div
								variants={Faderight(1.5)}
								initial="hidden"
								animate="visible"
								className="flex justify-center md:justify-start "
							>
								<button className="primary-btn flex items-center gap-2 ">
									<span>
										<IoBagHandleOutline />
									</span>{' '}
									Order Now
								</button>
							</motion.div>
						</div>
					</div>
					{/* Home image */}
					<div className="flex justify-center items-center">
						<motion.img
							initial={{ opacity: 0, x: 200, rotate: 75 }}
							animate={{ opacity: 1, x: 0, rotate: 0 }}
							transition={{ duration: 1, delay: 0.2 }}
							className="w-[350px] md:w-[550px] drop-shadow-"
							src={platefruit}
							alt=""
						/>
					</div>

					<div className="absolute top-14 md:top-20 right-1/2 blur-sm opacity-80 rotate-[-110deg]">
						<motion.img
							initial={{ opacity: 0, x: 200, rotate: 75 }}
							animate={{ opacity: 1, x: 0, rotate: 0 }}
							transition={{ duration: 1, delay: 1.5 }}
							src={leaf}
							alt=""
							className="w-full md:max-w-[300px] "
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
