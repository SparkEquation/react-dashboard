import React from 'react';
import { Chart } from 'react-google-charts';
import { Typography } from '@material-ui/core';

export type TGooglePieChartData = [string, string | number]

interface IGooglePieChartProps {
    title: string
    data: TGooglePieChartData[]
}

const GooglePieChart: React.FC<IGooglePieChartProps> = ({ title, data }) => {

    return (
        <>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                {title}
            </Typography>
            <Chart
                width={'400px'}
                height={'250px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={data}
                options={{
                    title: 'My Daily Activities',
                    is3D: true
                }}
                rootProps={{ 'data-testid': 'google-pie-chart' }}
            />
        </>
    );
};

export default GooglePieChart;