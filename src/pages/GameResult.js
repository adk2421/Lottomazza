import httpUtils from "../utils/httpUtils";

const GameResult = () => {

	const getGameResult = () => {
		console.log(httpUtils.httpMethod('/common.do?method=getLottoNumber&drwNo=1162', 'GET', ''));
	}

	return (
		<div>
			<h2>회차별 당첨번호 조회</h2>
			<button type="button" onClick={getGameResult}>조회</button>
		</div>
	)
}

export default GameResult;