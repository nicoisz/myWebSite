import { Outlet } from 'react-router-dom';
import SidebarComponent from '../sidebar/sidebar.component'
import './layout.styles.scss'

const LayoutPage = () => {
    return (
        <div className="App">
          <SidebarComponent />
          <div className="page">
            <span className="tags top-tags">&lt;body&gt;</span>
    
            <Outlet />
            <span className="tags bottom-tags">
              &lt;/body&gt;
              <br />
              <span className="bottom-tag-html">&lt;/html&gt;</span>
            </span>
          </div>
        </div>
      )
    
};

export default LayoutPage;