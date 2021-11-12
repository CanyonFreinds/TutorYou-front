import React, { useState, ChangeEvent } from 'react';
import * as Style from './styled';
import RecuritmentAddForm from '../../component/RecruitmentAddForm';

type InitialValues = {[key: string]: string | number};

const initialValues = {
  categoryName: '',
  content: '',
  endDate: '',
  postType: '',
  startDate: '',
  title: '',
  totalStudentCount: 0,
}

function RecruitmentWrite() {
  const [values, setValues] = useState<InitialValues>(initialValues);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <Style.Container>
      <RecuritmentAddForm>
        <></>
      </RecuritmentAddForm>
    </Style.Container>
  );
}

export default RecruitmentWrite;
