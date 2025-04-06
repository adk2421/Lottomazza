import "../styles/layout/Content.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import GameResult from "../pages/GameResult";
import GenerateNum from "../pages/GenerateNum";

// Content 컴포넌트
const Content = () => {
	return (
		<article className="content" style={{ height: '900px' }}> 
			<Box style={{ height: '64px' }}></Box> {/* 헤더 공간 */}
			<div className="page">
				<div>
					<Routes>
						<Route path="/" element={<GameResult />} /> 
						<Route path="/GameResult" element={<GameResult />} /> 
						<Route path="/GenerateNum" element={<GenerateNum />} /> 
					</Routes>
				</div>
			</div>
		</article>
	)
}

export default Content;