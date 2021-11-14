import React, { ChangeEvent, useState } from 'react';
import * as Style from './styled';

interface ProfileImageProps {
  imageSrc?: string;
  changeImage: (file: FormData) => void;
}

function ProfileImage({ imageSrc, changeImage }: ProfileImageProps) {
  const [src, setSrc] = useState(imageSrc);

  const onChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;

    if (!fileList) return;
    const formData = new FormData();
    formData.append('image', fileList[0]);

    const reader = new FileReader();
    reader.onloadend = () => {
      setSrc(reader.result as string);
    };
    reader.readAsDataURL(fileList[0]);
    changeImage(formData);
  };

  return (
    <Style.Container>
      {imageSrc ? <Style.Image src={src} /> : <Style.DummyImage />}
      <Style.InputFile id="profile-image" type="file" onChange={onChangeImage} />
      <Style.Label htmlFor="profile-image">
        <Style.PencilIcon />
        Edit
      </Style.Label>
    </Style.Container>
  );
}

export default ProfileImage;
