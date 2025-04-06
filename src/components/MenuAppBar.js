import React, { useState } from 'react';
import { Box, AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import BubbleChartOutlinedIcon from '@mui/icons-material/BubbleChartOutlined';
import { Link } from "react-router-dom";

const MenuAppBar = () => {
	const [drawer, openDrawer] = useState(false); // Drawer 상태 변수

	// Drawer 상태 변경 함수
	const toggleDrawer = (newOpen) => () => {
		openDrawer(newOpen);
	};

	// Drawer 닫기 함수
	const handleDrawerClose = () => {
		openDrawer(false);
	}

	// Drawer 메뉴 리스트
	const menu = [
		{
			icon: <ManageSearchOutlinedIcon />,
			name: '회차별 당첨번호 조회',
			link: "/GameResult",
		},
		{
			icon: <BubbleChartOutlinedIcon />,
			name: '로또 번호 생성',
			link: "/GenerateNum",
		}
	]

	// Drawer 리스트 컴포넌트
	const DrawerList = (
		<Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
			<IconButton onClick={handleDrawerClose}>
				<ChevronLeftIcon />
			</IconButton>
			<List>
				{ menu.map((text, index) => (
					<Link className='menu-link' to={text.link}>
						<ListItem key={text.name} disablePadding>
							<ListItemButton>
								<ListItemIcon>
									{text.icon}
								</ListItemIcon>
								<ListItemText primary={text.name} />
							</ListItemButton>
						</ListItem>
					</Link>
				))}
			</List>
		</Box>
	);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="fixed">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
						onClick={toggleDrawer(true)}
					>
						<MenuIcon />
					</IconButton>
					<Drawer open={drawer} onClose={toggleDrawer(false)}>
						{DrawerList}
					</Drawer>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						<b>로또맞자</b>
					</Typography>
					<div>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							color="inherit"
						>
							<AccountCircle />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default MenuAppBar;