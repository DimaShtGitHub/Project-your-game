// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GamePage from './components/GamePage/GamePage.jsx';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import SignupPage from './components/SignupPage/SignupPage';
import SigninPage from './components/SigninPage/SigninPage';


function App() {



	return (
		<>
			<Header />
			<Routes>
				{/* <Route path="/" element={<MainPage />}/> */}
				<Route path="/auth/signup" element={<SignupPage />} />
				<Route path="/auth/signin" element={<SigninPage />} />
				<Route path="/game" element={<GamePage />} />
			</Routes>
		</>

	);
}

export default App;
