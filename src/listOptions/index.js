// imported components
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

// imported services
import { useNavigate } from 'react-router-dom';

// imported assets
import HomeIcon from '@mui/icons-material/Home';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AddchartIcon from '@mui/icons-material/Addchart';

export default function ListOptions() {
    const drawerWidth = 240;
    const navigate = useNavigate()

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    justifyContent: 'center'
                },
            }}
            variant="permanent"
            anchor="left"
        >

            <List>
                <ListItem key={'Gerar opções'} disablePadding>
                    <ListItemButton onClick={() => navigate('/')}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Página inicial'} />
                    </ListItemButton>
                </ListItem>

                <ListItem key={'Gerar opções'} disablePadding>
                    <ListItemButton selected={window.location.href.includes('generateoptions')} onClick={() => navigate('/generateoptions')}>
                        <ListItemIcon>
                            <AddchartIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Gerar opções'} />
                    </ListItemButton>
                </ListItem>

                <ListItem key={'Avaliar opções'} disablePadding>
                    <ListItemButton selected={window.location.href.includes('evaluateoptions')} onClick={() => navigate('/evaluateoptions')}>
                        <ListItemIcon>
                            <TaskAltIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Avaliar opções'} />
                    </ListItemButton>
                </ListItem>
            </List>

        </Drawer>
    )
}
