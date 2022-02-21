import React, { useState } from 'react';
import PageContent from '../PageContent/PageContent';
import Ellipse10 from '../Images/Ellipse10.png';

const Navbar = () => {
  const [activePage, setActivePage] = useState("");
  return (
    <div className="h-screen grid grid-cols-custom-sidenav-layout bg-[#F7F7F7]">
      <Sidenav activePage={activePage} setActivePage={setActivePage} />
      <Content activePage={activePage} />
    </div>
  );
}

const Sidenav = ({ activePage, setActivePage }) => ( 
  <div className="flex flex-col bg-gray-800 text-white-50 w-72 h-full rounded-l-none rounded-tr-xl rounded-br-2xl" >
    <SidenavHeader />
    <SidenavMenu activePage={activePage} setActivePage={setActivePage} />
    <SidenavFooter />
  </div>
);

const SidenavHeader = () => (
  <div className="flex items-stetch h-8 mx-0 my-5 py-0 px-4">
    <DashboardIconSvg /> 
    <a href="#home" className="text-xl font-bold pl-1 no-underline text-gray-50 hover:text-white-100 " >workflow</a>
  </div>
);

const SidenavMenu = ({ activePage, setActivePage }) => (
  <nav className="space-y-2 h-10 my-1 mx-0 py-2 pl-2 pr-3" style={{width:"235px"}}>
    <NavItem activePage={activePage} link="#dashboard" svgIcon={<HomeIconSvg />} title="Dashboard" setActivePage={setActivePage} />
    <NavItem activePage={activePage} link="#users" svgIcon={<UserIconSvg />} title="Details" setActivePage={setActivePage} />
    <NavItem activePage={activePage} link="#users" svgIcon={<ResultIconSvg />} title="Result" setActivePage={setActivePage} />
    <img className="absolute -z-[1] grey" src={Ellipse10} alt="ellipse" />
  </nav>
);

const NavItem = ({ activePage, link, svgIcon, title, setActivePage }) => (
  <a onClick={() => setActivePage(title)} href={link} className={`flex items-center no-underline text-green-50 hover:text-white-100 p-3 rounded-md w-[17rem] ${activePage === title ? 'bg-gray-900 font-normal' : ''}`}>
    {svgIcon}
    <div className="pl-3">{title}</div>
  </a>
);

const SidenavFooter = () => (
  <a href="#settings" className="flex items-center mt-auto px-3 no-underline text-green-50 opacity-70 hover:opacity-100">
    <CogSvg />
    <div className="pl-2">Footer</div>
  </a>
);

const Content = ({ activePage }) => (
  <div className="flex flex-col bg-[#F7F7F7]">
    <div className="text-xl font-bold text-gray-600 ">{activePage}</div>
    <PageContent />
  </div>
);

const DashboardIconSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-10" viewBox="0 0 20 20" fill="#6366f1">
  <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
</svg>
);

const HomeIconSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
);

const UserIconSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
</svg>
);

const ResultIconSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
);

const CogSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
  </svg>
);

export default Navbar;