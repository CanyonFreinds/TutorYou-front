import React, { ChangeEvent, FormEvent, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

import * as Style from './styled';

interface FormDataProps {
  careers: string[];
  addItem: (value: string) => void;
  deleteItem: (value: string) => void;
}

function Career({ careers, addItem, deleteItem }: FormDataProps) {
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

      <br />
      <form onSubmit={submitForm}>
        <Style.TextFieldCareer
          inputProps={{ style: { fontSize: '2rem' } }}
          InputLabelProps={{ style: { fontSize: '1rem' } }}
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
        {careers.map((value) => (
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
