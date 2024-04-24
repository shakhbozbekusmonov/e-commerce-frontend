import { Route, Routes } from 'react-router-dom'

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<h1>Home</h1>} />
				<Route path='*' element={<h1>Not Found</h1>} />
			</Routes>
		</>
	)
}

export default App
