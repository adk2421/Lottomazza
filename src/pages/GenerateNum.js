import React, { useState } from 'react';
import { TextField, Button, Box } from "@mui/material";
import httpUtils from "../utils/httpUtils";

/**
 * 로또 번호 생성
 * @returns 
 */
const GenerateNum = () => {
	const [lottoInfo, setLottoInfo] = useState([]); // 로또 당첨정보 변수

	// 로또 번호 생성
	const Generator = () => {
		httpUtils.httpMethod('/getGenLottoNum', 'GET').then(res => {
			setLottoInfo(res.data);
		});
	}

	return (
		<div>
			<h2>로또 번호 생성</h2>
			<div>
				<Button variant="contained" onClick={Generator}>번호 생성</Button>
			</div>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				gap="15px"
				padding="30px"
			>
				<div id="drwtNo1" class="ball">{lottoInfo[0]}</div>
				<div id="drwtNo2" class="ball">{lottoInfo[1]}</div>
				<div id="drwtNo3" class="ball">{lottoInfo[2]}</div>
				<div id="drwtNo4" class="ball">{lottoInfo[3]}</div>
				<div id="drwtNo5" class="ball">{lottoInfo[4]}</div>
				<div id="drwtNo6" class="ball">{lottoInfo[5]}</div>
			</Box>
		</div>
	)
}

export default GenerateNum;