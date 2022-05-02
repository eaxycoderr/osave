import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import MuiAlert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import useFade from '../../useFade';

const notificationsUpdate = [
  {
    id: 1,
    archiveTitle: 'Notifications Title',
    archiveDescr: 'Description',
    archiveDate: 'May 26, 2019',
    archiveTime: '6:30 PM',
  },
  {
    id: 2,
    archiveTitle: 'Notifications Title',
    archiveDescr: 'Description',
    archiveDate: 'May 26, 2019',
    archiveTime: '6:30 PM',
  },
  {
    id: 3,
    archiveTitle: 'Notifications Title',
    archiveDescr: 'Description',
    archiveDate: 'May 26, 2019',
    archiveTime: '6:30 PM',
  },
  {
    id: 4,
    archiveTitle: 'Notifications Title',
    archiveDescr: 'Description',
    archiveDate: 'May 26, 2019',
    archiveTime: '6:30 PM',
  },
  {
    id: 5,
    archiveTitle: 'Notifications Title',
    archiveDescr: 'Description',
    archiveDate: 'May 26, 2019',
    archiveTime: '6:30 PM',
  },
  {
    id: 6,
    archiveTitle: 'Notifications Title',
    archiveDescr: 'Description',
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

export default function NotificationUpdate () {
  const [page, setPage] = React.useState (0);
  const [rowsPerPage, setRowsPerPage] = React.useState (5);
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);

  const style = { animation: `${show ? "fadeIn" : "fadeOut"} .3s` };

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
    Math.min (rowsPerPage, notificationsUpdate.length - page * rowsPerPage);

  return (
    <div className='table'>
      <div className="main_dashboard_contents">
        <div className="main_dashboard_contents_header">
          <div className="archive_contents_title table_contents_padding">
            <div className='archive_contents_title_1'>
              <span>Archive Description</span>
              <span>Date / Time</span>
            </div>
          </div>
        </div>

        <div className="main_dashboard_contents_file">
          {notificationsUpdate
            .slice (page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map ((notificationsUpdates, index) => (
              <div
                className="inn_main_dashboard_contents_file table_contents_padding"
                key={notificationsUpdates.key}
              >
                <div className="file_description">
                  <div className='file_description_a'>
                    <div className="file">
                      <div className="file_desc">
                        <span>{notificationsUpdates.archiveTitle}</span><br/>
                        <span>{notificationsUpdates.archiveDescr}</span>
                      </div>
                    </div>
                    <div className="date_time file_descr_margin_">
                      <span>{notificationsUpdates.archiveDate}</span><br/>
                      <span>{notificationsUpdates.archiveTime}</span>
                    </div>
                  </div>
                  <div className='file_description_a'>
                    <div className="delete_btn file_descr_margin_">
                      <Tooltip title="Delete">
                        <DeleteIcon style={{color: '#4378DB'}} onClick={handleVisible}/>
                      </Tooltip>
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
            count={notificationsUpdate.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
      </div>
      {show ?
        <div {...style} className="modal-90w">
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
