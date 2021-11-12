import React, { ChangeEvent, FormEvent, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import FormControl from '@mui/material/FormControl';

import * as Style from './styled';

interface FormDataProps {
  values: string[];
  addItem: (value: string) => void;
  deleteItem: (value: string) => void;
}

function Career({ values, addItem, deleteItem }: FormDataProps) {
  const [value, setValue] = useState('');

  const changeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addItem(value);
    setValue('');
  };

  const clickButton = () => {
    addItem(value);
    setValue('');
  };
  return (
    <Style.Div>
      <Style.Label>경력을 입력해주세요</Style.Label>
      <br />
      <br />
      <FormControl component="fieldset">
        <RadioGroup row defaultValue="school">
          <FormControlLabel value="school" control={<Radio />} label="학력" />
          <FormControlLabel value="award" control={<Radio />} label="수상경력" />
          <FormControlLabel value="career" control={<Radio />} label="과외경력" />
        </RadioGroup>
      </FormControl>
      <br />
      <form onSubmit={submitForm}>
        <Style.TextFieldCareer
          id="career"
          label="career"
          value={value}
          variant="standard"
          placeholder="경력을 입력해주세요"
          onChange={changeInput}
        />
        <Style.Button onClick={clickButton} startIcon={<AddIcon />}>
          Add
        </Style.Button>
      </form>
      <Style.ValueList>
        {values.map((value) => (
          <Style.ValueItem
            key={value}
            secondaryAction={
              <Style.Button onClick={() => deleteItem(value)} variant="outlined" startIcon={<DeleteIcon />}>
                Delete
              </Style.Button>
            }
          >
            {value}
          </Style.ValueItem>
        ))}
      </Style.ValueList>
    </Style.Div>
  );
}

export default Career;
