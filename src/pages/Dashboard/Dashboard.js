import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/People';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, Badge, Tab, Tabs } from '@mui/material';
import { PhonelinkLockOutlined } from '@mui/icons-material';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

const drawerWidth = 240;
const smallDrawerWidth = 90;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${smallDrawerWidth}px - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'center',
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const Dashboard = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [value, setValue] = React.useState(0);
    const [value2, setValue2] = React.useState(0);

    const handleDrawerOpen = () => {
        setOpen(!open);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChange2 = (event, newValue) => {
        setValue2(newValue);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} sx={open ? { paddingLeft: '0px' } : { paddingLeft: `${smallDrawerWidth}px` }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }} noWrap component="div">
                        Dashboard
                    </Typography>
                    <IconButton aria-label="search" color="inherit">
                        <SearchIcon />
                    </IconButton>
                    <IconButton aria-label="group" color="inherit">
                        <PeopleIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                    >
                        <Badge badgeContent={17} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: smallDrawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: smallDrawerWidth,
                        boxSizing: 'border-box',
                        justifyContent: 'space-between',
                    },
                    zIndex: 9999,
                    height: '100vh',
                }}
                variant="persistent"
                anchor="left"
                open={true}
            >
                <DrawerHeader>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ ml: 'auto', mr: 'auto' }}
                    >
                        <MenuIcon />
                    </IconButton>
                </DrawerHeader>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 0, borderColor: 'divider' }}
                >
                    <Tab icon={<AccessTimeOutlinedIcon />} aria-label="time" {...a11yProps(0)} />
                    <Tab icon={<FolderCopyOutlinedIcon />} aria-label="folder" {...a11yProps(1)} />
                    <Tab icon={<StarOutlineOutlinedIcon />} aria-label="star" {...a11yProps(2)} />
                </Tabs>
                <DrawerHeader>
                    <IconButton>
                        <Avatar alt="UserName" src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=" />
                    </IconButton>
                </DrawerHeader>
            </Drawer>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        marginLeft: `${smallDrawerWidth}px`,
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <Typography>Your portfolios</Typography>
                </DrawerHeader>
                <Divider />
                <TabPanel value={value} index={0}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value2}
                        onChange={handleChange2}
                        aria-label="Vertical tabs example 2"
                        selectionFollowsFocus
                    >
                        <Tab
                            icon={<FolderCopyOutlinedIcon />}
                            label={
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                    Finance inst. <br />
                                    <span style={{ fontSize: "smaller", opacity: 0.7 }}>15 elements</span>
                                </Box>
                            }
                            iconPosition="start"
                            aria-label="finance"
                            {...a11yProps(0)}
                            sx={{ justifyContent: 'start', fontWeight: 'bold', textTransform: 'capitalize' }}
                        />
                        <Tab
                            icon={<FolderCopyOutlinedIcon />}
                            label={
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                    Strong <br />
                                    <span style={{ fontSize: "smaller", opacity: 0.7 }}>12 elements</span>
                                </Box>
                            }
                            iconPosition="start"
                            aria-label="finance"
                            {...a11yProps(1)}
                            sx={{ justifyContent: 'start', fontWeight: 'bold', textTransform: 'capitalize' }}
                        />
                        <Tab
                            icon={<FolderCopyOutlinedIcon />}
                            label={
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                    Rising stars <br />
                                    <span style={{ fontSize: "smaller", opacity: 0.7 }}>8 elements</span>
                                </Box>
                            }
                            iconPosition="start"
                            aria-label="finance"
                            {...a11yProps(2)}
                            sx={{ justifyContent: 'start', fontWeight: 'bold', textTransform: 'capitalize' }}
                        />
                        <Tab
                            icon={<FolderCopyOutlinedIcon />}
                            label={
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                    High risks <br />
                                    <span style={{ fontSize: "smaller", opacity: 0.7 }}>10 elements</span>
                                </Box>
                            }
                            iconPosition="start"
                            aria-label="finance"
                            {...a11yProps(3)}
                            sx={{ justifyContent: 'start', fontWeight: 'bold', textTransform: 'capitalize' }}
                        />
                    </Tabs>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value2}
                        onChange={handleChange2}
                        aria-label="Vertical tabs example 2"
                        selectionFollowsFocus
                    >
                        <Tab
                            icon={<FolderCopyOutlinedIcon />}
                            label={
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                    Finance inst. <br />
                                    <span style={{ fontSize: "smaller", opacity: 0.7 }}>15 elements</span>
                                </Box>
                            }
                            iconPosition="start"
                            aria-label="finance"
                            {...a11yProps(4)}
                            sx={{ justifyContent: 'start', fontWeight: 'bold', textTransform: 'capitalize' }}
                        />
                        <Tab
                            icon={<FolderCopyOutlinedIcon />}
                            label={
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                    Strong <br />
                                    <span style={{ fontSize: "smaller", opacity: 0.7 }}>12 elements</span>
                                </Box>
                            }
                            iconPosition="start"
                            aria-label="finance"
                            {...a11yProps(5)}
                            sx={{ justifyContent: 'start', fontWeight: 'bold', textTransform: 'capitalize' }}
                        />
                        <Tab
                            icon={<FolderCopyOutlinedIcon />}
                            label={
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                    Rising stars <br />
                                    <span style={{ fontSize: "smaller", opacity: 0.7 }}>8 elements</span>
                                </Box>
                            }
                            iconPosition="start"
                            aria-label="finance"
                            {...a11yProps(6)}
                            sx={{ justifyContent: 'start', fontWeight: 'bold', textTransform: 'capitalize' }}
                        />
                        <Tab
                            icon={<FolderCopyOutlinedIcon />}
                            label={
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                    High risks <br />
                                    <span style={{ fontSize: "smaller", opacity: 0.7 }}>10 elements</span>
                                </Box>
                            }
                            iconPosition="start"
                            aria-label="finance"
                            {...a11yProps(7)}
                            sx={{ justifyContent: 'start', fontWeight: 'bold', textTransform: 'capitalize' }}
                        />
                        <Tab
                            icon={<FolderCopyOutlinedIcon />}
                            label={
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                    Tech stars <br />
                                    <span style={{ fontSize: "smaller", opacity: 0.7 }}>12 elements</span>
                                </Box>
                            }
                            iconPosition="start"
                            aria-label="finance"
                            {...a11yProps(8)}
                            sx={{ justifyContent: 'start', fontWeight: 'bold', textTransform: 'capitalize' }}
                        />
                        <Tab
                            icon={<FolderCopyOutlinedIcon />}
                            label={
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                    MISC <br />
                                    <span style={{ fontSize: "smaller", opacity: 0.7 }}>7 elements</span>
                                </Box>
                            }
                            iconPosition="start"
                            aria-label="finance"
                            {...a11yProps(9)}
                            sx={{ justifyContent: 'start', fontWeight: 'bold', textTransform: 'capitalize' }}
                        />
                    </Tabs>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value2}
                        onChange={handleChange2}
                        aria-label="Vertical tabs example 2"
                        selectionFollowsFocus
                    >
                        <Tab
                            icon={<FolderCopyOutlinedIcon />}
                            label={
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                    Finance inst. <br />
                                    <span style={{ fontSize: "smaller", opacity: 0.7 }}>15 elements</span>
                                </Box>
                            }
                            iconPosition="start"
                            aria-label="finance"
                            {...a11yProps(10)}
                            sx={{ justifyContent: 'start', fontWeight: 'bold', textTransform: 'capitalize' }}
                        />
                        <Tab
                            icon={<FolderCopyOutlinedIcon />}
                            label={
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                    Strong <br />
                                    <span style={{ fontSize: "smaller", opacity: 0.7 }}>12 elements</span>
                                </Box>
                            }
                            iconPosition="start"
                            aria-label="finance"
                            {...a11yProps(11)}
                            sx={{ justifyContent: 'start', fontWeight: 'bold', textTransform: 'capitalize' }}
                        />
                    </Tabs>
                </TabPanel>
            </Drawer>
            <Main open={open}>
                <TabPanel value={value2} index={0}>
                    <DrawerHeader />
                    <Typography>{value2}</Typography>
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                        enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                        imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                        Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                        Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                        nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                        leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                        feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                        consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                        sapien faucibus et molestie ac.
                    </Typography>
                </TabPanel>
                <TabPanel value={value2} index={1}>
                    <DrawerHeader />
                    <Typography>{value2}</Typography>
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                        enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                        imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                        Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                        Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                        nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                        leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                        feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                        consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                        sapien faucibus et molestie ac.
                    </Typography>
                </TabPanel>
                <TabPanel value={value2} index={2}>
                    <DrawerHeader />
                    <Typography>{value2}</Typography>
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                        enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                        imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                        Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                        Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                        nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                        leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                        feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                        consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                        sapien faucibus et molestie ac.
                    </Typography>
                </TabPanel>
                <TabPanel value={value2} index={3}>
                    <DrawerHeader />
                    <Typography>{value2}</Typography>
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                        enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                        imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                        Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                        Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                        nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                        leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                        feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                        consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                        sapien faucibus et molestie ac.
                    </Typography>
                </TabPanel>
            </Main>
        </Box>
    );
}

export default Dashboard;