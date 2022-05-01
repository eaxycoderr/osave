import { useState, useEffect, useRef } from "react";
import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'
import Logo from '../../public/assets/logo.png'
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuItem from '@mui/material/MenuItem';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import profileImg from '../../public/assets/profile_images/1.jpg';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';


export default function DashboardHeader() {
  const [showProfile, setShowProfile] = useState(false);
  const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleCloseShowProfile = () => {
      setShowProfile(false);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const handleVisible = () => {
    setShowProfile(!showProfile)
    } 
    
  return (
      <header className='dashboard_header'>
          <div className="inner_dashboard_header container">
            <div className='logo'>
              <Image width="45" height="45" className='logo' src={Logo} alt="Logo" />
              <p>sAVe</p>
            </div>
            <div className="search_box">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10.1562" cy="10.1562" r="9.40625" stroke="#4378DB" strokeWidth="1.5"/>
              <path d="M17.1875 17.1875L23.4375 23.4375" stroke="#4378DB" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="notify_profile">
              <Link href="/dashboard/notification" passHref>
                <div className="notification">
                  <Badge className="notification_box" badgeContent={0} showZero color='primary'>
                    <NotificationsIcon className='notify_icon' style={{color: '#4378DB', fontSize: 30}} color="action" />
                  </Badge>
                </div>
              </Link>
              <div className="profile">
                <div className="name">
                  <p>Olawale Morenikeji</p>
                </div>
                <div className="avatar" onClick={handleVisible}>
                    <Image className='avatar_img' width='38' height='38' src={profileImg} alt="profileImg" />
                </div>
                {showProfile ?
                  <div className="box_triangle arrow-top">
                  <Link href="#" passHref><a><MenuItem className='box_triangle_list'><AccountCircleIcon/>&nbsp;Profile</MenuItem></a></Link>
                  <Link href="#" passHref><a><MenuItem className='box_triangle_list'><ManageAccountsIcon/>&nbsp;My account</MenuItem></a></Link>
                  <Link href="#" passHref><MenuItem onClick={() => {handleClickOpen(); handleCloseShowProfile();}} className='box_triangle_list'><LogoutIcon/>&nbsp;Logout</MenuItem></Link>
                </div>
                  : null
                }
              </div>
            </div>
          </div>
          <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContent className='modalContent'>
              <div className='modalQuestion'>
                <QuestionMarkIcon />
              </div>
              <p>Are you sure you wish to logout?</p>
              <div className='modalContentBtn'>
                <Button onClick={handleClose}>No</Button>
                <Button onClick={handleClose}>Logout</Button>
              </div>
            </DialogContent>
        </DialogContent>
      </Dialog>
      </header>
  )
}
