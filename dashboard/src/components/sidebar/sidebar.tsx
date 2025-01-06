import React from 'react';
import {
	BiHome,
	BiBookAlt,
	BiMessage,
	BiSolidReport,
	BiStats,
	BiTask,
	BiHelpCircle,
} from 'react-icons/bi';

const Sidebar = () => {
	return (
		<div className="menu  flex flex-col gap-[2.3rem] h-[94vh]">
			<div className="logo items-center p-5 gray[400] text-center font-bold flex gap-[20px]">
				<BiBookAlt className="icon" />
				<h2>Minesef</h2>
			</div>

			<div className="flex flex-col gap-[20px]  no-underline font-medium p-[10px]">
				<a href="#" className="item ">
					<BiHome className="icon" />
					Dashboard
				</a>
				<a href="#" className="item">
					<BiTask className="icon" />
					Assignment
				</a>
				<a href="#" className="item">
					<BiStats className="icon" />
					stats
				</a>
				<a href="#" className="item">
					<BiSolidReport className="icon" />
					report
				</a>
				<a href="#" className="item">
					<BiMessage className="icon" />
					BiMessage
				</a>
				<a href="#" className="item">
					<BiHelpCircle className="icon" />
					help
				</a>
			</div>
		</div>
	);
};

export default Sidebar;
