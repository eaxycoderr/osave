import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import pdfLogo from '../../public/assets/upload_folder/PDF/pdf.png';
import docxLogo from '../../public/assets/upload_folder/Documents/docx.png';
import xlsxLogo from '../../public/assets/upload_folder/Spreadsheet/xlsx.png';
import archiveFolder from '../../public/assets/archive_folder.png';
import imageOne from '../../public/assets/upload_folder/Images/nft_img.png';
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

const recycleBin = [
  {
    id: 1,
    recycleLogo: pdfLogo,
    recycleTitle: 'Name',
    recycleDescr: 'Description',
    archiveTitle: 'My Credentials',
    recycleDate: 'May 26, 2019',
    recycleTime: '6:30 PM',
  },
  {
    id: 2,
    recycleLogo: docxLogo,
    recycleTitle: 'Arabic Note',
    recycleDescr: 'My note book',
    archiveTitle: 'My Credentials',
    recycleDate: 'May 26, 2019',
    recycleTime: '6:30 PM',
  },
  {
    id: 3,
    recycleLogo: xlsxLogo,
    recycleTitle: 'Arabic Note',
    recycleDescr: 'My note book',
    archiveTitle: 'My Credentials',
    recycleDate: 'May 26, 2019',
    recycleTime: '6:30 PM',
  },
  {
    id: 4,
    recycleLogo: imageOne,
    recycleTitle: 'Arabic Note',
    recycleDescr: 'My note book',
    archiveTitle: 'My Credentials',
    recycleDate: 'May 26, 2019',
    recycleTime: '6:30 PM',
  },
  {
    id: 5,
    recycleLogo: archiveFolder,
    recycleTitle: 'Arabic Note',
    recycleDescr: 'My note book',
    recycleDate: 'May 26, 2019',
    recycleTime: '6:30 PM',
  },
  {
    id: 6,
    recycleLogo: docxLogo,
    recycleTitle: 'Arabic Note',
    recycleDescr: 'My note book',
    archiveTitle: 'My Credentials',
    recycleDate: 'May 26, 2019',
    recycleTime: '6:30 PM',
  },
];

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function RecycleContents () {
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
    Math.min (rowsPerPage, recycleBin.length - page * rowsPerPage);

  return (
    <div className='table'>
      <div className="main_dashboard_contents">
        <div className="main_dashboard_contents_header">
          <div className="archive_contents_title recycle_contents_title table_contents_padding">
            <div className='archive_contents_title_1'>
              <span>File Description</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Archives</span>
              <span>Date / Time</span>
            </div>
            <p>Restore</p>
          </div>
        </div>

        <div className="main_dashboard_contents_file">
          {recycleBin
            .slice (page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map ((recyclesBin, index) => (
              <div
                className="inn_main_dashboard_contents_file table_contents_padding"
                key={recyclesBin.key}
              >
                <div className="file_description">
                  <div className='recycleBin_a'>
                    <div className="file">
                      <div className="recycleLogo">
                        <Image
                          // width="45"
                          // height="55"
                          src={recyclesBin.recycleLogo}
                          alt="pdfFileLogo"
                        />
                      </div>
                      <div className="file_desc">
                        <span>{recyclesBin.recycleTitle}</span><br/>
                        <span>{recyclesBin.recycleDescr}</span>
                      </div>
                    </div>
                    <div className="file_archives file_descr_margin_">
                      <span>{recyclesBin.archiveTitle}</span>
                    </div>
                    <div className="date_time file_descr_margin_">
                      <span>{recyclesBin.recycleDate}</span><br/>
                      <span>{recyclesBin.recycleTime}</span>
                    </div>
                  </div>
                  <div className='recycleBin_b'>
                    <div className="download_btn file_descr_margin_">
                    <Tooltip title="Restore">
                      <button>Restore</button>
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
            count={recycleBin.length}
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
            <p>Are you sure you want to permanently delete this record? <br/>This cannot be undo</p>
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
              <p>Message deleted permanently successfully!</p>
            </div>
            <CloseIcon className="closeIcon" onClick={() => setShow(false)} />
          </div>
        </div>
        : null
      }
      </div>
  );
}
