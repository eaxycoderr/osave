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

export default function EmptyArchiveContent () {

  return (
    <div className='table'>
      <div className="main_dashboard_contents">
        <div className="main_dashboard_contents_file">
          {documentsUpload.map ((documentsUploads, index) => (
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
                    <div className="three_dots file_descr_margin_">
                      <MoreVertIcon style={{color: '#263238'}}/>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="empty_archive_content">
            <Image width={283.64} height={149.99} src={emptyArchiveImg} alt="emptyArchiveImg" />
            <p>No File found Please Upload Your Files</p>
            <div className="empty_archive_content_btns">
              <button>Cancel</button>
              <button>
                <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.3225 9.11266C18.2025 10.8527 16.8425 12.7526 14.1825 12.7526C12.9625 12.7526 12.3225 12.7526 12.3225 12.7526C11.8825 12.7526 11.5225 12.4127 11.5225 11.9727C11.5225 11.5327 11.8825 11.2127 12.3225 11.2127C12.3225 11.2127 12.9625 11.1727 14.1825 11.1727C15.8425 11.1727 16.6625 10.0526 16.7425 8.99264C16.8225 7.89264 16.1225 6.67268 14.4225 6.43268C14.2025 6.39268 14.0025 6.27264 13.8825 6.09264C13.7625 5.91264 13.7225 5.67265 13.7625 5.45265C13.9825 4.51265 13.7425 3.77268 13.1225 3.43268C12.6025 3.13268 11.7625 3.15266 11.0825 3.81266C10.9025 3.99266 10.6425 4.07268 10.4025 4.03268C10.1625 3.99268 9.94247 3.83266 9.82247 3.61266C8.66247 1.43266 6.88247 1.33264 5.70247 1.89264C4.56247 2.43264 3.66247 3.77267 4.36247 5.47267C4.44247 5.67267 4.44247 5.91266 4.34247 6.11266C4.24247 6.31266 4.06247 6.47268 3.86247 6.53268C1.48247 7.27268 1.52246 8.87268 1.60246 9.33268C1.74246 10.2127 2.44247 11.1127 3.52246 11.1127L6.02247 11.1327C6.46247 11.1327 6.82247 11.5126 6.82247 11.9527C6.82247 12.3926 6.46247 12.7926 6.02247 12.7926L3.54247 12.7327C1.78246 12.7327 0.322465 11.3727 0.0424648 9.55265C-0.177535 8.15265 0.422465 6.27267 2.66246 5.27267C2.14246 3.07267 3.38247 1.21268 5.06247 0.43268C6.78247 -0.38732 9.20247 -0.14733 10.8025 2.07267C11.8025 1.51267 12.9825 1.47268 13.9625 2.03268C14.8025 2.51268 15.5625 3.51266 15.4825 5.01266C17.5425 5.67266 18.4225 7.51266 18.3225 9.11266ZM11.9425 9.77267C12.1025 9.93267 12.3025 10.0127 12.5025 10.0127C12.7025 10.0127 12.9025 9.93267 13.0625 9.77267C13.3825 9.45267 13.3825 8.95268 13.0625 8.63268L9.68247 5.23268C9.52247 5.07268 9.32247 4.99264 9.12247 4.99264C8.90247 4.99264 8.70247 5.07268 8.56247 5.23268L5.18247 8.63268C4.86246 8.95268 4.86246 9.45267 5.18247 9.77267C5.50247 10.0927 6.00247 10.0927 6.32247 9.77267L8.34247 7.73268L8.36247 15.2127C8.36247 15.6527 8.72247 16.0127 9.16247 16.0127C9.60247 16.0127 9.96247 15.6527 9.96247 15.2127L9.94247 7.75265L11.9425 9.77267Z" fill="#4378DB"/>
                </svg> &nbsp;
                Upload New File 
              </button>
            </div>
        </div>
      </div>
    </div>
  );
}
