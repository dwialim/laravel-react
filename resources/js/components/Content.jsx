import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Dashboard from './page/Dashboard'
import Admin from './page/Admin'

function Content() {
	const height = {height: "4px"}
	const width = {width: "55%"}

	return (
		<Routes>
			<Route exact path='/' element={<Dashboard/>}/>
			<Route path='/admin/list' element={<Admin/>}/>
		</Routes>
	)
}

export default Content