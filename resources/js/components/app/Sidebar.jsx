import { React, useCallback } from 'react'
import { Link } from 'react-router-dom'

function Sidebar(data={}) {
	const handleClick = useCallback(e => {e.preventDefault()})
   const images = data.assets.images || ''

	return (
		<div className="sidebar-wrapper" data-simplebar="true">
			<div className="sidebar-header">
				<div>
					<img src={`${images}logo-icon.png`} className="logo-icon" alt="logo icon"/>
				</div>
				<div>
					<h4 className="logo-text">Rukada</h4>
				</div>
				<div className="toggle-icon ms-auto"><i className='bx bx-arrow-to-left'></i>
				</div>
			</div>
			<ul className="metismenu" id="menu">
				<li>
					<Link to="/">
						<div className="parent-icon"><i className='bx bx-home-circle'></i></div>
						<div className="menu-title">Dashboard</div>
					</Link>
					{/* <a href="#" onClick={handleClick} className="has-arrow">
						<div className="parent-icon"><i className='bx bx-home-circle'></i>
						</div>
						<div className="menu-title">Dashboard</div>
					</a>
					<ul>
						<li><Link to="/"><i className="bx bx-right-arrow-alt"></i>Default</Link></li>
					</ul> */}
				</li>
				<li>
					<Link to="admin/list">
						<div className="parent-icon"><i className="bx bx-category"></i></div>
						<div className="menu-title">Admin</div>
					</Link>
				</li>
				{/* <li className="menu-label">UI Elements</li> */}
			</ul>
		</div>
	)
}

export default Sidebar