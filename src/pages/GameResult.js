import React, { useState } from 'react';
import { TextField, Button, Box } from "@mui/material";
import httpUtils from "../utils/httpUtils";

/**
 * 회차별 당첨번호 조회
 * @returns 
 */
const GameResult = () => {
	const [lottoInfo, setLottoInfo] = useState({}); // 로또 당첨정보 변수

	// 입력한 회차에 맞는 로또 당첨정보 가져오기
	const getGameResult = () => {
		const searchNum = document.getElementById('searchNum').value;
		const data = {
			drwNo: searchNum,
		};

		httpUtils.httpMethod('/getLottoGameResult', 'GET', data).then(res => {
			setLottoInfo(res.data);
		});
	}

	return (
		<div>
			<h2>회차별 당첨번호 조회</h2>
			<div>
				<TextField type='number' id="searchNum" size="small" label="회차번호" defaultValue="1166" />
				<Button variant="contained" onClick={getGameResult}>조회</Button>
			</div>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				gap="15px"
				padding="30px"
			>
				<div id="drwtNo1" class="ball">{lottoInfo.drwtNo1}</div>
				<div id="drwtNo2" class="ball">{lottoInfo.drwtNo2}</div>
				<div id="drwtNo3" class="ball">{lottoInfo.drwtNo3}</div>
				<div id="drwtNo4" class="ball">{lottoInfo.drwtNo4}</div>
				<div id="drwtNo5" class="ball">{lottoInfo.drwtNo5}</div>
				<div id="drwtNo6" class="ball">{lottoInfo.drwtNo6}</div>
			</Box>
		</div>
	)
}

export default GameResult;