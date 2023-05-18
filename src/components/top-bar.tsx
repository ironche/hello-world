import { Link } from 'react-router-dom';
import { IconButton, Button, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useAppContext } from 'state';
import { AppTheme } from 'theme';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import HomeIcon from '@mui/icons-material/Home';

export default function TopBar() {
  const { state, dispatch, Actions } = useAppContext();
  const wideScreen = useMediaQuery('screen and (min-width: 1366px)');

  return (
    <ComponentWrapper widescreen={String(wideScreen)}>
      <NavLink to="/" widescreen={String(wideScreen)}>
        <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="Logo" />
        Business directory
      </NavLink>
      <ActionsWrapper>
        <NavLink to="/">
          <IconButton size="small">
            <HomeIcon />
          </IconButton>
        </NavLink>
        {(state.theme === AppTheme.DARK) && (
          <Button
            size="small"
            variant="contained"
            startIcon={<Brightness7Icon />}
            onClick={() => dispatch(Actions.setTheme(AppTheme.LIGHT))}
          >
            Toggle theme
          </Button>
        )}
        {(state.theme === AppTheme.LIGHT) && (
          <Button
            size="small"
            variant="contained"
            startIcon={<Brightness4Icon />}
            onClick={() => dispatch(Actions.setTheme(AppTheme.DARK))}
          >
            Toggle theme
          </Button>
        )}
      </ActionsWrapper>
    </ComponentWrapper>
  );
}

const ComponentWrapper = styled('header')<{ widescreen?: string }>((props) => ({
  backgroundColor: props.theme.palette.background.paper,
  padding: '0 4rem',
  marginBottom: '2.4rem',
  fontSize: '1rem',
  fontFamily: props.theme.typography.fontFamily,
  boxShadow: '0 5px 40px ' + props.theme.palette.divider,
  display: 'grid',
  grid: props.widescreen === 'true' ? '". navlink actions" 4.4rem / 1fr 1fr 1fr' : '"navlink actions" 3.4rem / auto auto',
}));

const NavLink = styled(Link)<{ widescreen?: string }>((props) => ({
  gridArea: 'navlink',
  display: 'flex',
  alignItems: 'center',
  justifyContent: props.widescreen === 'true' ? 'center' : 'start',
  textDecoration: 'none',
  color: 'inherit',
  '> img': {
    height: '1.375rem',
  }
}));

const ActionsWrapper = styled('section')({
  gridArea: 'actions',
  display: 'flex',
  alignSelf: 'center',
  justifyContent: 'end',
  gap: '1.5rem',
});
