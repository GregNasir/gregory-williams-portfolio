import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Sidebar from '../Sidebar';
import './index.scss';

const Layout = () => {
        return (
        <div className='App'>
            <Sidebar />
            <div className='page'>
                <span className='tags top-tags'>{"<body>"}</span>

                <Outlet />

               

                <span className='tags bottom-tags>'>
                &lt;body&gt;
                <br />
            
                
            
                <span className='bottom-tag-html'>{"</html>"}</span>
                </span>
            </div>
            {/* <Footer /> */}
        </div>
        
        
        
        
    )
}

export default Layout;