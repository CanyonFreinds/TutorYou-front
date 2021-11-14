import React, { useState } from 'react';
import * as Style from './styled';

function RecruitmentDeleteButton() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Style.TextTooltip title="삭제">
        <Style.Container onClick={handleOpen} color="primary">
          <Style.Icon />
        </Style.Container>
      </Style.TextTooltip>
      <Style.MUIModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Style.MUIBox>
          <Style.Text id="modal-modal-title" variant="h4">
            정말로 삭제하시겠습니까?
          </Style.Text>
          <Style.ButtonContainer>
            <Style.DeleteButton variant="contained" color="primary">삭제</Style.DeleteButton>
            <Style.MUIButton onClick={handleClose} variant="contained" color="inherit">취소</Style.MUIButton>
          </Style.ButtonContainer>
        </Style.MUIBox>
      </Style.MUIModal>
    </>
  );
}

export default RecruitmentDeleteButton;
