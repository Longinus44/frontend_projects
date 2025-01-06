import React from 'react';
import { BiNotification, BiSearch } from 'react-icons/bi';
import './styles/content.css';

const ContentHeader = () => {
	return (
		<div className="content-header flex items-center justify-between ">
			<h1 className="header-title text-gray-600 font-bold">Dashboard</h1>
			<div className="header-activity flex items-center  gap-[20px]">
				<div className="search-box flex items-center p-1 rounded-[8px] bg-slate-200">
					<input
						type="text"
						placeholder="search anything here"
						className="bg-transparent p-1 border-none outline-none "
					/>
					<BiSearch className="icon" />
				</div>
				<div className="notify bg-slate-300 p-2 rounded-[12px] text-customGreen flex items-center justify-center">
					<BiNotification className="icon" />
				</div>
			</div>
		</div>
	);
};
export default ContentHeader;
