import { React, useCallback } from 'react'

function Sidebar() {
	const handleClick = useCallback(e => {e.preventDefault()})

	return (
		<div className="sidebar-wrapper" data-simplebar="true">
			<div className="sidebar-header">
				<div>
					<img src="assets/images/logo-icon.png" className="logo-icon" alt="logo icon"/>
				</div>
				<div>
					<h4 className="logo-text">Rukada</h4>
				</div>
				<div className="toggle-icon ms-auto"><i className='bx bx-arrow-to-left'></i>
				</div>
			</div>
			<ul className="metismenu" id="menu">
				<li>
					<a href="#" onClick={handleClick} className="has-arrow">
						<div className="parent-icon"><i className='bx bx-home-circle'></i>
						</div>
						<div className="menu-title">Dashboard</div>
					</a>
					<ul>
						<li><a href="index.html"><i className="bx bx-right-arrow-alt"></i>Default</a></li>
					</ul>
				</li>
				<li>
					<a href="#" onClick={handleClick} className="has-arrow">
						<div className="parent-icon"><i className="bx bx-category"></i></div>
						<div className="menu-title">Application</div>
					</a>
					<ul>
						<li><a href="app-emailbox.html"><i className="bx bx-right-arrow-alt"></i>Email</a></li>
					</ul>
				</li>
				<li className="menu-label">UI Elements</li>
			</ul>
		</div>
	)
}

export default Sidebar