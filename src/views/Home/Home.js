import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';

/**
 * Renders demo section for Alerts
 */
const Home = () => {
    const { collapseSidebar } = useProSidebar();



    return (
        <div>
            <div style={{ display: 'flex', height: '100%' }}>
                <Sidebar>
                    <Menu>
                        <MenuItem> Documentation</MenuItem>
                        <MenuItem> Calendar</MenuItem>
                        <MenuItem> E-commerce</MenuItem>
                    </Menu>
                </Sidebar>
                <main>
                    <button onClick={() => collapseSidebar()}>Collapse</button>
                </main>
            </div>

        </div>

    );
};

export default Home;
