import * as React from 'react';
import Image from 'next/image';
import emptyArchiveImg from '../../../public/assets/empty_Archive.png';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const documentsUpload = [
  {
    id: 1,
    archiveTitle: 'Name',
    archiveDescr: 'My note book',
    archiveDate: 'May 26, 2019',
    archiveTime: '6:30 PM',
  }
];

export default function CreateArchive () {

  return (
    <div className='table'>
      <div className="main_dashboard_contents">
        <div className="create_archive_contents">
            <p>Create Archive and Upload your files inside it</p>
            <form action="">
              <div className="form_field">
                <label className='input_label' htmlFor="Archive name">Archive name</label>
                <input type="text"/>
              </div>
              <div className="form_field">
                <label htmlFor="Archive Description">Archive Description</label>
                <textarea />
              </div>
              <div className="empty_archive_content_btns">
                <button>Cancel</button>
                <button>
                  <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.2028 4.92002C18.0428 4.72002 17.8228 4.6 17.5828 4.6H16.5828V2.42002C16.5828 2.04002 16.3028 1.8 15.9228 1.8H8.94282L8.04282 0.32002C7.92282 0.12002 7.68282 0 7.44282 0H2.28282C1.90282 0 1.60282 0.22 1.60282 0.6V4.6H0.802822C0.562822 4.6 0.322824 4.72 0.182824 4.9C0.0228239 5.08 -0.0371767 5.33998 0.0228233 5.57998L1.50282 12.36C1.58282 12.72 1.90282 13 2.28282 13H15.9428C16.3028 13 16.6228 12.74 16.7228 12.4L18.3828 5.62002C18.4028 5.36002 18.3428 5.12002 18.2028 4.92002ZM2.96282 1.4H7.00283L7.90283 2.87998C8.02283 3.07998 8.26283 3.2 8.50283 3.2H15.1628V4.6H2.96282V1.4ZM15.2628 11.4H2.88282L1.74282 6.2H16.5228L15.2628 11.4Z" fill="#4378DB"/>
                  </svg>&nbsp;&nbsp;&nbsp;
                  Create New Archive 
                </button>
              </div>
            </form>
        </div>
      </div>
    </div>
  );
}