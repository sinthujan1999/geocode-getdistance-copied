// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import { Button } from '@material-ui/core';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`vertical-tabpanel-${index}`}
//       aria-labelledby={`vertical-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `vertical-tab-${index}`,
//     'aria-controls': `vertical-tabpanel-${index}`,
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//     display: 'flex',
//     height: 424,
//   },
//   tabs: {
//     borderRight: `1px solid ${theme.palette.divider}`,
//   },
// }));

// export default function Mymap() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div className={classes.root}>
//       <Tabs
//         orientation="vertical"
//         variant="scrollable"
//         value={value}
//         onChange={handleChange}
//         aria-label="Vertical tabs example"
//         className={classes.tabs}
//       >
//         <Tab label="JAFFNA" {...a11yProps(0)} />
//         <Tab label="COLOMBO" {...a11yProps(1)} />
//         <Tab label="KILLINOCHCHI" {...a11yProps(2)} />
//         <Tab label="KANDY" {...a11yProps(3)} />
//         <Tab label="NUWARA ELIYA" {...a11yProps(4)} />
  
//       </Tabs>
//       <TabPanel value={value} index={0}>
//       <iframe src="https://www.google.com/maps/d/embed?mid=1zOaBCwlY4cnN0OmAWzbp6CRRM-8EJM1-" width="1000" height="700"></iframe>
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//       <Button  variant="contained" color="secondary" href="https://www.google.lk/maps/dir/9.67587,+80.02327//@9.6785929,79.9532459,12z/data=!4m7!4m6!1m3!2m2!1d80.02327!2d9.67587!1m0!3e0">FIND YOUR WAY</Button>
//       <iframe src="https://www.google.com/maps/d/u/0/embed?mid=133Tg3Opw7JpTxIj_cNfgPXrBw3RpgVm0" width="1000" height="700"></iframe>
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//       <iframe src="https://www.google.com/maps/d/embed?mid=1KvJ5FUUFJu9hfQ7de3yCRQUeTuM" width="640" height="480"></iframe>
//       </TabPanel>
//       <TabPanel value={value} index={3}>
//         KANDY
//       </TabPanel>
//       <TabPanel value={value} index={4}>
//       NUWARA ELIYA
//       </TabPanel>
     
//     </div>
//   );
// }




import React from 'react';

class Mymap extends React.Component {

  constructor(props) {
    super(props);

    this.state = { copySuccess: '' }
  }

  copyToClipboard = (e) => {
    this.textArea.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    this.setState({ copySuccess: 'Copied!' });
  };

  render() {
    return (
      <div>
        {
         /* Logical shortcut for only displaying the 
            button if the copy command exists */
         document.queryCommandSupported('copy') &&
          <div>
            <button onClick={this.copyToClipboard}>Copy</button> 
            {this.state.copySuccess}
          </div>
        }
        <form>
          <textarea
            ref={(textarea) => this.textArea = textarea}
            
          />
        </form>
      </div>
    );
  }

}
    
export default Mymap;