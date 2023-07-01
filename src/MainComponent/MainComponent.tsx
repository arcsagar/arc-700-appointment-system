import {  Outlet } from 'react-router-dom';
import Header from '../common/Header';

const MainComponent = () => {
    return (
        <div>
              {/* <Header/> */}
            <Outlet/>
        </div>
    )
};

export default MainComponent