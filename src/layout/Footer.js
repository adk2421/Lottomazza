import '../styles/layout/Footer.css';
import logo from '../assets/img/Lottomazza_Logo_Name_W_2.png';

// Footer 컴포넌트
const Footer = () => {
	return (
		<footer className="footer">
			<box></box>
			<div className="footer-content">
				<div className="footer-logo">
					<img className="logo" src={logo} alt="로고" />
				</div>
				<div className="footer-text">
					<p>Copyright © 2025 Lottomazza. All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer;