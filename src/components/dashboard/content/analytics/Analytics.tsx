import React, { useState, useContext } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import TabPanel from '../../../tabs/TabPanel';
import { MenuContext } from '../../../../context/menuContext';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GooglePieChart from './charts/GooglePieChart';
import GoogleSankeyDiagram from './charts/GoogleSankeyDiagram';
import RechartsPieChart from './charts/RechartsPieChart';
import RechartsAreaChart from './charts/RechartsAreaChart';
import { googlePieChartData, googleSankeyDiagramData, rechartsPieChartData, rechartsAreaChartData } from './data';
import createRowData from "./grids/createRowData";
import AdazzleReactGrid from './grids/AdazzleReactGrid';
import KendoGrid from './grids/KendoGrid';


const useStyles = makeStyles((theme: Theme) => ({
    paper: {
        // maxWidth: 936,
        // margin: 'auto',
        marginBottom: 30,
        padding: 50,
        overflow: 'auto',
        '@media (min-width: 1024px)': {
            // maxWidth: 936,
        }
    },
    searchBar: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    searchInput: {
        fontSize: theme.typography.fontSize,
    },
    block: {
        display: 'block',
    },
    addUser: {
        marginRight: theme.spacing(1),
    },
    contentWrapper: {
        margin: '40px 16px',
    },
}));

const Analytics: React.FC<{}> = () => {

    const { menuState: { tabs: { analyticsPage: { value } } } } = useContext(MenuContext);
    const classes = useStyles();

    const ROW_COUNT = 200;

    return (
        <>
            <TabPanel value={value} index={1}>
                <Paper className={classes.paper} >
                    <Grid container spacing={2} alignItems="center">
                        <Grid item sm={5}>
                            <GooglePieChart title="Google Pie Chart" data={googlePieChartData} />
                        </Grid>
                        <Grid item sm={6}>
                            <GoogleSankeyDiagram title="Google Sankey Diagram" data={googleSankeyDiagramData} />
                        </Grid>
                    </Grid>
                </Paper >
                <Paper className={classes.paper} >
                    <Grid container spacing={2} alignItems="center">
                        <Grid item sm={5}>
                            <RechartsPieChart title="Recharts Pie Chart" data={rechartsPieChartData} />
                        </Grid>
                        <Grid item sm={6}>
                            <RechartsAreaChart title="Recharts Area Chart" data={rechartsAreaChartData} />
                        </Grid>
                    </Grid>
                </Paper >
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Paper className={classes.paper} >
                    <Grid container spacing={2}>
                        <Grid item sm={12}>
                            <AdazzleReactGrid
                                title="Adazzle Data Grid with Draggable Column Grouping"
                                rows={createRowData(ROW_COUNT)}
                            />
                        </Grid>
                    </Grid>
                </Paper >
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Paper className={classes.paper} >
                    <Grid container spacing={2}>
                        <Grid item sm={12}>
                            <KendoGrid
                                title="Kendo UI Grid"
                            />
                        </Grid>
                    </Grid>
                </Paper >
            </TabPanel>
        </>
    );
};

export default Analytics;