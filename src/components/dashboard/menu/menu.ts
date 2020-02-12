import PeopleIcon from '@material-ui/icons/People';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';
import TimerIcon from '@material-ui/icons/Timer';
import SettingsIcon from '@material-ui/icons/Settings';

type TCategoryChild = {
    id: string,
    Icon: React.ComponentType<any>,
    to: string,
    isExact?: boolean
}

type TCategory = {
    id: string,
    children: TCategoryChild[]
};

const menu: TCategory[] = [
    {
        id: 'Develop',
        children: [
            { id: 'Authentication', Icon: PeopleIcon, to: '/dashboard/authentication' },
            { id: 'Database', Icon: DnsRoundedIcon, to: '/dashboard/database' },
            { id: 'UI Kit', Icon: SettingsInputComponentIcon, to: '/dashboard/uikit' },
        ],
    },
    {
        id: 'Quality',
        children: [
            { id: 'Analytics', Icon: SettingsIcon, to: '/dashboard/analytics' },
            { id: 'Performance', Icon: TimerIcon, to: '/dashboard/performance' },
        ],
    },
];

export default menu;