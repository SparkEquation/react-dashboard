import React from 'react';
import { Chart } from 'react-google-charts';
import { Typography } from '@material-ui/core';

export type TGoogleSankeyDiagramData = [string, string, string | number]

interface IGoogleSankeyDiagramProps {
    title: string
    data: TGoogleSankeyDiagramData[]
}

const GoogleSankeyDiagram: React.FC<IGoogleSankeyDiagramProps> = ({ title, data }) => {

    return (
        <>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                {title}
            </Typography>
            <Chart
                width={500}
                height={'250px'}
                chartType="Sankey"
                loader={<div>Loading Chart</div>}
                data={data}
                rootProps={{ 'data-testid': '2' }}
            />
        </>
    );
};

export default GoogleSankeyDiagram;