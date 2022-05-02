import * as React from 'react';
import SideBar from '../../components/sidebar/sidebar';
import NotificationUpdate from '../../components/dashboard/notification/notification';

export default function NotificationPage () {

  return (
    <div className='dashboard_main_body'>
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="dashboard_contents">
        <div className="dashboard_contents_header">
          <div className="left">
                <p>Notification</p>
            </div>
          </div>
          <div className="recycle_bin">
            <NotificationUpdate />
          </div>
      </div>
    </div>
  );
}
