import SideBar from '../../components/sidebar/sidebar';
import CreateArchive from '../../components/dashboard/archives/createarchive';

export default function EmptyArchives () {
  return (
    <div className='dashboard_main_body'>
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="dashboard_contents">
        <div className="dashboard_contents_header archive_header">
            <div className="left">
              <p>Create Archive</p>
            </div>
          </div>
          <div className="empty_archives">
            <CreateArchive />
          </div>
      </div>
    </div>
  );
}
