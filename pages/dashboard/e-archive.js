import SideBar from '../../components/sidebar/sidebar';
import EmptyArchiveContent from '../../components/dashboard/archives/EmptyArchive';

export default function EmptyArchives () {
  return (
    <div className='dashboard_main_body'>
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="dashboard_contents">
        <div className="empty_archives">
          <EmptyArchiveContent/>
        </div>
      </div>
    </div>
  );
}
