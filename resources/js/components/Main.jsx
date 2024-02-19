import React from 'react'
import ReactDOM from 'react-dom/client'
import {
	BrowserRouter,
	Routes,
	Route,
	Link
} from 'react-router-dom'

import Header from './app/Header'
import Sidebar from './app/Sidebar'
import Content from './Content'
import Footer from './app/Footer'

// export const globalAssets = `/assets/`
// export const globalImages = `${globalAssets}images/`
// export const globalAvatars = `${globalImages}avatars/`
const gAssets = 'assets'
const gImages = 'images'
const gAvatars = 'avatars'
const globalAssets = {
	assets: `/${gAssets}/`,
	images: `/${gAssets}/${gImages}/`,
	avatars: `/${gAssets}/${gImages}/${gAvatars}/`
}

function MyApp() {
	return (
		<BrowserRouter>
			<Header assets={globalAssets} />
			<Sidebar assets={globalAssets} />
			<Content/>
			<Footer/>
		</BrowserRouter>
	)
}

ReactDOM.createRoot(document.getElementById('app')).render(<MyApp/>)