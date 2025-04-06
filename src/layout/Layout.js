import { BrowserRouter } from "react-router-dom";
import '../styles/layout/Layout.css';
import Header from "./Header";
import Content from './Content';
import Footer from "./Footer";

// Layout 컴포넌트
const Layout = () => {
	return (
		<div className="layout">
			<BrowserRouter>
				<Header />
				<Content />
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default Layout;