import React, { ChangeEvent, FormEvent, useState } from 'react';
import * as Style from './styled';

interface CareerItemProps {
  title: string;
  values: string[];
  addItem: (value: string) => void;
  deleteItem: (value: string) => void;
}

function CareerItem({ title, values, addItem, deleteItem }: CareerItemProps) {
  const [value, setValue] = useState('');

  const changeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addItem(value);
  };

  return (
    <Style.Container>
      <Style.Title>{title}</Style.Title>
      <Style.Form onSubmit={submitForm}>
        <Style.CareerInput value={value} onChange={changeInput} placeholder={`${title}을 입력해주세요`} />
        <Style.SubmitButton color="primary">추가</Style.SubmitButton>
      </Style.Form>
      <Style.ValueList>
        {values.map((value) => (
          <Style.ValueItem
            key={value}
            secondaryAction={
              <Style.IconWrapper onClick={() => deleteItem(value)}>
                <Style.DeleteIcon />
              </Style.IconWrapper>
            }
          >
            {value}
          </Style.ValueItem>
        ))}
      </Style.ValueList>
    </Style.Container>
  );
}

export default CareerItem;
