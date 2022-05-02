import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import docxFileLogo from '../../../public/assets/upload_folder/Documents/docx.png';
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

const documentsUpload = [
  {
    id: 1,
    archiveTitle: 'Name',
    archiveDescr: 'My note book',
    archiveDate: 'May 26, 2019',
    archiveTime: '6:30 PM',
  },
  {
    id: 2,
    archiveTitle: 'Name',
    archiveDescr: 'My note book',
    archiveDate: 'May 26, 2019',
    archiveTime: '6:30 PM',
  },
  {
    id: 3,
    archiveTitle: 'Name',
    archiveDescr: 'My note book',
    archiveDate: 'May 26, 2019',
    archiveTime: '6:30 PM',
  },
  {
    id: 4,
    archiveTitle: 'Name',
    archiveDescr: 'My note book',
    archiveDate: 'May 26, 2019',
    archiveTime: '6:30 PM',
  },
  {
    id: 5,
    archiveTitle: 'Name',
    archiveDescr: 'My note book',
    archiveDate: 'May 26, 2019',
    archiveTime: '6:30 PM',
  },
  {
    id: 6,
    archiveTitle: 'Name',
    archiveDescr: 'My note book',
    archiveDate: 'May 26, 2019',
    archiveTime: '6:30 PM',
  },
  {
    id: 7,
     
    archiveTitle: 'Name',
    archiveDescr: 'My note book',
    archiveDate: 'May 26, 2019',
    archiveTime: '6:30 PM',
  },
  {
    id: 8,
    archiveTitle: 'Name',
    archiveDescr: 'My note book',
    archiveDate: 'May 26, 2019',
    archiveTime: '6:30 PM',
  },
  {
    id: 9,
    archiveTitle: 'Name',
    archiveDescr: 'My note book',
    archiveDate: 'May 26, 2019',
    archiveTime: '6:30 PM',
  },
  {
    id: 10,
    archiveTitle: 'Name',
    archiveDescr: 'My note book',
    archiveDate: 'May 26, 2019',
    archiveTime: '6:30 PM',
  },
];

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ArchiveContents () {
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
    Math.min (rowsPerPage, documentsUpload.length - page * rowsPerPage);

  return (
    <div className='table'>
      <div className="main_dashboard_contents">
        <div className="main_dashboard_contents_header">
          <div className="archive_contents_title table_contents_padding">
            <div className='archive_contents_title_1'>
              <span>Archive Description</span>
              <span>Date / Time</span>
            </div>
            <p>Download</p>
          </div>
        </div>

        <div className="main_dashboard_contents_file">
          {documentsUpload
            .slice (page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map ((documentsUploads, index) => (
              <div
                className="inn_main_dashboard_contents_file table_contents_padding"
                key={documentsUploads.key}
              >
                <div className="file_description">
                  <div className='file_description_a'>
                    <div className="file">
                      <div className="fileLogo">
                        <svg width="47" height="37" viewBox="0 0 47 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H18.4586L23.0732 6.92196H46.1464V36.9171H0V0Z" fill="#4378DB"/>
                        </svg>
                      </div>
                      <div className="file_desc">
                        <span>{documentsUploads.archiveTitle}</span><br/>
                        <span>{documentsUploads.archiveDescr}</span>
                      </div>
                    </div>
                    <div className="date_time file_descr_margin_">
                      <span>{documentsUploads.archiveDate}</span><br/>
                      <span>{documentsUploads.archiveTime}</span>
                    </div>
                  </div>
                  <div className='file_description_a'>
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
              </div>
            ))}
        </div>
      </div>
      <div className="pagination_container">
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={documentsUpload.length}
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
