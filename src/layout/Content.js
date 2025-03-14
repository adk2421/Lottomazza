import "../styles/layout/Content.css";
import { Box } from "@mui/material";
import GameResult from "../pages/GameResult";

const Content = () => {
	return (
		<article className="content" style={{ height: '900px' }}>
			<Box style={{ height: '64px' }}>{/* 헤더 공간 */}</Box>
			<div className="page">
				<GameResult />
			</div>
		</article>
	)
}

export default Content;