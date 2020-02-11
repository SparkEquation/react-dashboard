import baseTheme from '../../baseTheme';
import { Theme } from '@material-ui/core/styles';

export default ((baseTheme: Theme) => {
    return {
        ...baseTheme,
        overrides: {
            MuiDrawer: {
                paper: {
                    backgroundColor: '#18202c',
                },
            },
            MuiButton: {
                label: {
                    textTransform: 'none',
                },
                contained: {
                    boxShadow: 'none',
                    '&:active': {
                        boxShadow: 'none',
                    },
                },
            },
            MuiTabs: {
                root: {
                    marginLeft: baseTheme.spacing(1),
                },
                indicator: {
                    height: 3,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                    backgroundColor: baseTheme.palette.common.white,
                },
            },
            MuiTab: {
                root: {
                    textTransform: 'none',
                    margin: '0 16px',
                    minWidth: 0,
                    padding: 0,
                    [baseTheme.breakpoints.up('md')]: {
                        padding: 0,
                        minWidth: 0,
                    },
                },
            },
            MuiIconButton: {
                root: {
                    padding: baseTheme.spacing(1),
                },
            },
            MuiTooltip: {
                tooltip: {
                    borderRadius: 4,
                },
            },
            MuiDivider: {
                root: {
                    backgroundColor: '#404854',
                },
            },
            MuiListItemText: {
                primary: {
                    fontWeight: baseTheme.typography.fontWeightMedium,
                },
            },
            MuiListItemIcon: {
                root: {
                    color: 'inherit',
                    marginRight: 0,
                    '& svg': {
                        fontSize: 20,
                    },
                },
            },
            MuiAvatar: {
                root: {
                    width: 32,
                    height: 32,
                },
            },
        },
    }
})(baseTheme);