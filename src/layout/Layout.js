import '../styles/layout/Layout.css';
import Header from "./Header";
import Content from './Content';
import Footer from "./Footer";

const Layout = () => {
	return (
		<div className="layout">
			<Header />
			<Content />
			<Footer />
		</div>
	)
}

export default Layout;