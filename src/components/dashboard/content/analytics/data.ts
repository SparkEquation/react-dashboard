import { TGooglePieChartData } from './charts/GooglePieChart';
import { TGoogleSankeyDiagramData } from './charts/GoogleSankeyDiagram';
import { TRechartsPieChartData } from './charts/RechartsPieChart';
import { TRechartsAreaChartData } from './charts/RechartsAreaChart';

export const googlePieChartData: TGooglePieChartData[] = [
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7],
];

export const googleSankeyDiagramData: TGoogleSankeyDiagramData[] = [
    ['From', 'To', 'Weight'],
    ['Brazil', 'Portugal', 5],
    ['Brazil', 'France', 1],
    ['Brazil', 'Spain', 1],
    ['Brazil', 'England', 1],
    ['Canada', 'Portugal', 1],
    ['Canada', 'France', 5],
    ['Canada', 'England', 1],
    ['Mexico', 'Portugal', 1],
    ['Mexico', 'France', 1],
    ['Mexico', 'Spain', 5],
    ['Mexico', 'England', 1],
    ['USA', 'Portugal', 1],
    ['USA', 'France', 1],
    ['USA', 'Spain', 1],
    ['USA', 'England', 5],
    ['Portugal', 'Angola', 2],
    ['Portugal', 'Senegal', 1],
    ['Portugal', 'Morocco', 1],
    ['Portugal', 'South Africa', 3],
    ['France', 'Angola', 1],
    ['France', 'Senegal', 3],
    ['France', 'Mali', 3],
    ['France', 'Morocco', 3],
    ['France', 'South Africa', 1],
    ['Spain', 'Senegal', 1],
    ['Spain', 'Morocco', 3],
    ['Spain', 'South Africa', 1],
    ['England', 'Angola', 1],
    ['England', 'Senegal', 1],
    ['England', 'Morocco', 2],
    ['England', 'South Africa', 7],
    ['South Africa', 'China', 5],
    ['South Africa', 'India', 1],
    ['South Africa', 'Japan', 3],
    ['Angola', 'China', 5],
    ['Angola', 'India', 1],
    ['Angola', 'Japan', 3],
    ['Senegal', 'China', 5],
    ['Senegal', 'India', 1],
    ['Senegal', 'Japan', 3],
    ['Mali', 'China', 5],
    ['Mali', 'India', 1],
    ['Mali', 'Japan', 3],
    ['Morocco', 'China', 5],
    ['Morocco', 'India', 1],
    ['Morocco', 'Japan', 3],
];

export const rechartsPieChartData: TRechartsPieChartData[] = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

export const rechartsAreaChartData: TRechartsAreaChartData[] = [
    {
        "name": "Page A",
        "uv": 4000,
        "pv": 2400,
        "amt": 2400
    },
    {
        "name": "Page B",
        "uv": 3000,
        "pv": 1398,
        "amt": 2210
    },
    {
        "name": "Page C",
        "uv": 2000,
        "pv": 9800,
        "amt": 2290
    },
    {
        "name": "Page D",
        "uv": 2780,
        "pv": 3908,
        "amt": 2000
    },
    {
        "name": "Page E",
        "uv": 1890,
        "pv": 4800,
        "amt": 2181
    },
    {
        "name": "Page F",
        "uv": 2390,
        "pv": 3800,
        "amt": 2500
    },
    {
        "name": "Page G",
        "uv": 3490,
        "pv": 4300,
        "amt": 2100
    }
];