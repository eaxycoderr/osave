
import * as React from 'react';
import SideBar from '../../components/sidebar/sidebar';
import Tabs from '../../components/dashboard/categories/TabComponent/Tabs';


export default function DashboardCategories () {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='dashboard_main_body'>
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="dashboard_contents">
        <div className="dashboard_contents_header">
              <div className="left">
                  <p>Categories</p>
              </div>
              <div className="right">
                <button className='dashboard_filter_btn'>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.4985 0.419995C17.3585 0.159995 17.0785 0 16.7985 0H0.778475C0.478475 0 0.218475 0.159995 0.0784748 0.419995C-0.0615252 0.679995 -0.00152031 0.99999 0.15848 1.23999L6.39847 10.4V16.46C6.39847 17.08 6.81848 17.6 7.45848 17.6H10.1385C10.7585 17.6 11.1985 17.1 11.1985 16.46V10.4L17.4385 1.23999C17.5785 0.99999 17.6385 0.679995 17.4985 0.419995ZM9.75848 9.71999C9.67848 9.85999 9.57847 10 9.57847 10.16V16H7.97847V10.16C7.97847 10 7.89847 9.83999 7.79847 9.71999L5.89847 6.93999C6.29847 6.81999 6.77847 6.69999 7.29847 6.71999C7.91847 6.71999 8.33847 6.84001 8.79847 6.96001C9.27847 7.08001 9.75848 7.19999 10.4385 7.21999C10.8385 7.21999 11.1985 7.20001 11.5185 7.16001L9.75848 9.71999ZM12.6785 5.43999C12.6585 5.43999 11.8185 5.82 10.4385 5.8C9.93848 5.8 9.55848 5.7 9.13848 5.58C8.65848 5.46 8.09847 5.32 7.29847 5.3C6.39847 5.3 5.59848 5.51999 5.05848 5.71999L2.25848 1.58H15.2785L12.6785 5.43999ZM11.0385 4.11999C10.8985 3.97999 10.7985 3.76001 10.7985 3.56001C10.7985 3.34001 10.8785 3.14 11.0385 3C11.1785 2.86 11.3985 2.76001 11.5985 2.76001C11.8185 2.76001 12.0185 2.84 12.1585 3C12.2985 3.16 12.3985 3.36001 12.3985 3.56001C12.3985 3.78001 12.3185 3.97999 12.1585 4.11999C11.9985 4.25999 11.7985 4.36001 11.5985 4.36001C11.3985 4.36001 11.1785 4.25999 11.0385 4.11999Z" fill="#4378DB"/>
                    </svg>
                    Filter
                </button>
              </div>
          </div>
          <div className="main_dashboard_contents categories">
            <Tabs/>
          </div>
      </div>
    </div>
  );
}
