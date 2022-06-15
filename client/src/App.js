// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GamePage from './components/GamePage/GamePage.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SignupPage from './components/SignupPage/SignupPage';
import SigninPage from './components/SigninPage/SigninPage';
import MainPage from './components/MainPage/MainPage';
import { useSelector } from 'react-redux';
import Result from './components/Result/Result';


function App() {
	const user = useSelector((state) => state.user);

	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/auth/signup" element={<SignupPage />} />
				<Route path="/auth/signin" element={<SigninPage />} />
				{user.name ? <Route path="/game" element={<GamePage />} />
					: <Route path="/game" element={<Navigate to="/" replace />} />}
				{user.name ? <Route path="/result" element={<Result />} />
					: <Route path="/result" element={<Navigate to="/" replace />} />}
			</Routes>
			<Footer />
		</>

	);
}

export default App;
