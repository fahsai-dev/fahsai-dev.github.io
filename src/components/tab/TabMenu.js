import React from 'react';
import {
  Tabs,
  Tab,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { COLOR } from '../../constant';

const TabMenu = (props) => {
  const { items, onChange } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onChange && onChange(newValue);
  };

  const a11yProps = (index) => {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }

  return (
    <div className={classes.container}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        TabIndicatorProps={{ style: { height: "3px", backgroundColor: COLOR.primary, borderRadius: 8 } }}
        className={classes.tabs}
      >
        {
          items && items.map((menu, index) => (
            <Tab
              key={`${menu}_${index}`}
              classes={{ root: classes.item, selected: classes.selected }}
              label={menu}
              {...a11yProps(index)}
            />
          ))
        }
      </Tabs>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    width: '100%',
    overflow: 'hidden',
    minHeight: "auto",
  },
  tabs: {
    width: '100%',
    height: 0
  },
  item: {
    width: 'auto',
    padding: 0,
    marginRight: 24,
    color: COLOR.white,
    opacity: 1,
  },
  selected: {
    color: COLOR.primary,
  }
}));

export default TabMenu; 