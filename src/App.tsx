import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'

const App = () => {
	return (
		<>
			<Login />
			{/* <Routes>
				<Route path='/' element={<h1>Home</h1>} />
				<Route path='*' element={<h1>Not Found</h1>} />
			</Routes> */}
		</>
	)
}

export default App
