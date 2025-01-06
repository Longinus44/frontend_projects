import React from 'react';
import { course } from '../../mockdata/mockcoursedata';

const Card = () => {
	return (
		<div className="card-container container flex gap-4 items-center mt-9">
			{course.map((item) => (
				<div className="card flex-1 bg-slate-300 flex gap-2 rounded-[5px] items-center p-4 flex-col transition-[0.5s] ease-in-out hover:scale-105 cursor-pointer">
					<div className="card-cover bg-slate-100 text-[2rem] flex items-center justify-center p-3 rounded-[8px] text-gray-400">
						{item.icon}
					</div>
					<div className="card-title bg-slate-400 w-[100%] text-center p-2.5 text-[14px] text-gray-200 rounded-[10px]">
						<h2>{item.title}</h2>
					</div>
				</div>
			))}
		</div>
	);
};

export default Card;
