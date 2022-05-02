import React, { useState } from "react";
import TabNavItem from "../tabs/TabNavItem";
import TabContent from "../tabs/TabContent";
import Documents from "../documents";
import Pdf from "../PDF";
import SpreadSheetTab from "../spreadSheetTab";
import PresentationSlidesTab from "../presentationSlidesTab";
import ImagesTab from "../imagesTab";
 
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
 
  return (
    <div className="Tabs">
      <ul className="nav">
        <TabNavItem title="Documents" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Slide Presentation" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="PDF" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="SpreadSheet" id="tab4" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Image" id="tab5" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
 
      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
          <Documents/>
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <PresentationSlidesTab/>
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <Pdf/>
        </TabContent>
        <TabContent id="tab4" activeTab={activeTab}>
          <SpreadSheetTab/>
        </TabContent>
        <TabContent id="tab5" activeTab={activeTab}>
          <ImagesTab/>
        </TabContent>
      </div>
    </div>
  );
};
 
export default Tabs