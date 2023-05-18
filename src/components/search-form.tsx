import { useRef } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useAppContext } from 'state';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchForm() {
  const { state, dispatch, Actions } = useAppContext();
  const searchField = useRef<HTMLInputElement>(null);

  return (
    <ComponentWrapper>
      <FormWrapper>
        {/* <TextField
          label="Search companies by name"
          variant="outlined"
          size="small"
          value={state.search}
          onChange={(ev) => dispatch(Actions.setSearch(ev.target.value))}
        /> */}
        <TextField
          label="Search companies by name"
          variant="outlined"
          size="small"
          defaultValue={state.search}
          inputRef={searchField}
        />
        <Button
          // size="small"
          variant="contained"
          startIcon={<SearchIcon />}
          onClick={() => dispatch(Actions.setSearch(searchField?.current?.value || ''))}
        >
          Apply search
        </Button>
      </FormWrapper>
      <Typography>Applied search criteria: {state.search || "NONE"}</Typography>
    </ComponentWrapper>
  );
}

const ComponentWrapper = styled('section')((props) => ({
  fontSize: '1rem',
  fontFamily: props.theme.typography.fontFamily,
  marginBottom: '1rem',
}));

const FormWrapper = styled('div')({
  display: 'flex',
  alignSelf: 'center',
  gap: '1.5rem',
  marginBottom: '1rem',
});
