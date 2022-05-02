import SideBar from '../../components/sidebar/sidebar';
import RecycleContents from '../../components/dashboard/recycleContents';

export default function DashboardRecyclebin () {

  return (
    <div className='dashboard_main_body'>
      <div className="adjustment sidebar">
        <SideBar />
      </div>
      <div className="dashboard_contents">
        <div className="dashboard_contents_header">
        <div className="left">
              <p>Recycle Bin</p>
          </div>
        </div>
        <RecycleContents/>
      </div>
    </div>
  );
}
