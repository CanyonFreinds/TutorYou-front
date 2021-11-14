import React, { useState } from 'react';
import * as Style from './styled';

interface RecruitmentEditButtonProps {
  onClick: () => Promise<void>;
}

function RecruitmentEditButton({ onClick }: RecruitmentEditButtonProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Style.TextTooltip title="수정">
        <Style.Container onClick={handleOpen} color="inherit">
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
            수정하시겠습니까?
          </Style.Text>
          <Style.ButtonContainer>
            <Style.MUIButton onClick={onClick} variant="contained" color="info">수정</Style.MUIButton>
            <Style.MUIButton onClick={handleClose} variant="contained" color="inherit">취소</Style.MUIButton>
          </Style.ButtonContainer>
        </Style.MUIBox>
      </Style.MUIModal>
    </>
  );
}

export default RecruitmentEditButton;
