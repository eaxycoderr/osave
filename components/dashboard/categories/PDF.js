import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import pdfFileLogo from '../../../public/assets/upload_folder/PDF/pdf.png';
import TablePagination from '@mui/material/TablePagination';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import MuiAlert from '@mui/material/Alert';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import CloseIcon from '@mui/icons-material/Close';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { ImFacebook } from 'react-icons/im';
import { ImTwitter } from 'react-icons/im';
import { ImLinkedin2 } from 'react-icons/im';

const pdfUpload = [
  {
    id: 1,
    fileLogo: pdfFileLogo,
    fileTitle: 'Resume',
    fileDescr: 'My CV fr jobs',
    archiveTitle: 'My Credentials',
    fileDate: 'May 26, 2019',
    fileTime: '6:30 PM',
  },
  {
    id: 2,
    fileLogo: pdfFileLogo,
    fileTitle: 'Resume',
    fileDescr: 'My CV fr jobs',
    archiveTitle: 'My Credentials',
    fileDate: 'May 26, 2019',
    fileTime: '6:30 PM',
  },
  {
    id: 3,
    fileLogo: pdfFileLogo,
    fileTitle: 'Resume',
    fileDescr: 'My CV fr jobs',
    archiveTitle: 'My Credentials',
    fileDate: 'May 26, 2019',
    fileTime: '6:30 PM',
  },
  {
    id: 4,
    fileLogo: pdfFileLogo,
    fileTitle: 'Resume',
    fileDescr: 'My CV fr jobs',
    archiveTitle: 'My Credentials',
    fileDate: 'May 26, 2019',
    fileTime: '6:30 PM',
  },
  {
    id: 5,
    fileLogo: pdfFileLogo,
    fileTitle: 'Choir List',
    fileDescr: 'Choir List of names',
    archiveTitle: 'My Credentials',
    fileDate: 'May 26, 2019',
    fileTime: '6:30 PM',
  },
  {
    id: 6,
    fileLogo: pdfFileLogo,
    fileTitle: 'Arabic Note',
    fileDescr: 'My note book',
    archiveTitle: 'My Credentials',
    fileDate: 'May 26, 2019',
    fileTime: '6:30 PM',
  },
  {
    id: 7,
    fileLogo: pdfFileLogo,
    fileTitle: 'Arabic Note',
    fileDescr: 'My note book',
    archiveTitle: 'My Credentials',
    fileDate: 'May 26, 2019',
    fileTime: '6:30 PM',
  },
  {
    id: 8,
    fileLogo: pdfFileLogo,
    fileTitle: 'Arabic Note',
    fileDescr: 'My note book',
    archiveTitle: 'My Credentials',
    fileDate: 'May 26, 2019',
    fileTime: '6:30 PM',
  },
  {
    id: 9,
    fileLogo: pdfFileLogo,
    fileTitle: 'Arabic Note',
    fileDescr: 'My note book',
    archiveTitle: 'My Credentials',
    fileDate: 'May 26, 2019',
    fileTime: '6:30 PM',
  },
  {
    id: 10,
    fileLogo: pdfFileLogo,
    fileTitle: 'Arabic Note',
    fileDescr: 'My note book',
    archiveTitle: 'My Credentials',
    fileDate: 'May 26, 2019',
    fileTime: '6:30 PM',
  },
];

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Documents () {
  const [page, setPage] = React.useState (0);
  const [rowsPerPage, setRowsPerPage] = React.useState (5);
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);

  const handleVisible = () => {
    setShow(true)
    setTimeout(() => {
      setShow(false)
    }, 2000);
} 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage (newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage (parseInt (event.target.value, 10));
    setPage (0);
  };

  const emptyRows =
    rowsPerPage -
    Math.min (rowsPerPage, pdfUpload.length - page * rowsPerPage);

  return (
    <div className='table'>
      <div className="main_dashboard_contents">
        <div className="main_dashboard_contents_header">
          <div className="main_dashboard_contents_title table_contents_padding">
            <span>File Description</span>
            <span>Archives</span>
            <span>Date / Time</span>
            <span>Share</span>
            <span>Download</span>
          </div>
        </div>

        <div className="main_dashboard_contents_file">
          {pdfUpload
            .slice (page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map ((pdfUploads, index) => (
              <div
                className="inn_main_dashboard_contents_file table_contents_padding"
                key={pdfUploads.key}
              >
                <div className="file_description">
                  <div className="file">
                    <div className="fileLogo">
                      <Image
                        width="45"
                        height="55"
                        src={pdfUploads.fileLogo}
                        alt="pdfFileLogo"
                      />
                    </div>
                    <div className="file_desc">
                      <span>{pdfUploads.fileTitle}</span><br/>
                      <span>{pdfUploads.fileDescr}</span>
                    </div>
                  </div>
                  <div className="file_archives file_descr_margin_">
                    <span>{pdfUploads.archiveTitle}</span>
                  </div>
                  <div className="date_time file_descr_margin_">
                    <span>{pdfUploads.fileDate}</span><br/>
                    <span>{pdfUploads.fileTime}</span>
                  </div>
                  <div className="share_btn file_descr_margin_">
                    <Tooltip arrow interactive={true} disableFocusListener title={
                      // 0D8AF0
                          <>
                          <div className="social_icon_box">
                            <Link href="https://www.facebook.com/">
                                  <a><ImFacebook className="share_icon" /></a>
                            </Link>
                            <Link href="https://twitter.com/">
                                  <a><ImTwitter className="share_icon" /></a>
                            </Link>
                            <Link href="https://www.linkedin.com/">
                                  <a><ImLinkedin2 className="share_icon" /></a>
                            </Link>
                          </div>
                          </>
                      }>
                      <button>Share</button>
                    </Tooltip>
                  </div>
                  <div className="download_btn file_descr_margin_">
                    <Tooltip title="Download">
                      <button>DOWNLOAD</button>
                    </Tooltip>
                  </div>
                  <div className="delete_btn file_descr_margin_">
                    <Tooltip title="Delete">
                      <DeleteIcon style={{color: '#4378DB'}} onClick={handleClickOpen}/>
                    </Tooltip>
                  </div>
                  <div className="three_dots file_descr_margin_">
                    <MoreVertIcon style={{color: '#263238'}}/>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="pagination_container">
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={pdfUpload.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
          <DialogContent className='modalContent'>
            <div className='modalQuestion'>
              <QuestionMarkIcon />
            </div>
            <p>Are you sure you want to delete this record?</p>
            <div className='modalContentBtn'>
              <Button onClick={handleClose}>No</Button>
              <Button onClick={() => {handleClose(); handleVisible() }}>Delete</Button>
            </div>
          </DialogContent>
      </Dialog>
      {show ?
        <div className="modal-90w">
          <div className="modal_body">
            <div className='modal_body_msg'>
              <TaskAltIcon/>
              <p>Message deleted successfully!</p>
            </div>
            <CloseIcon className="closeIcon" onClick={() => setShow(false)} />
          </div>
        </div>
        : null
      }
      </div>
  );
}
