import React, { ChangeEvent } from 'react';
import * as Style from './styled';

interface ProfileImageProps {
  imageSrc?: string;
  changeImage: (file: File) => void;
}

function ProfileImage({ imageSrc, changeImage }: ProfileImageProps) {
  const onChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;

    if (!fileList) return;
    changeImage(fileList[0]);
  };

  return (
    <Style.Container>
      {imageSrc ? <Style.Image src={imageSrc} /> : <Style.DummyImage />}
      <Style.InputFile id="profile-image" type="file" onChange={onChangeImage} />
      <Style.Label htmlFor="profile-image">
        <Style.PencilIcon />
        Edit
      </Style.Label>
    </Style.Container>
  );
}

export default ProfileImage;
