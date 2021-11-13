import React from 'react';
import * as Style from './styled';
import { ProfileType } from '../../api/user';

interface TeacherCardProps {
  profile: ProfileType;
  startChatting: () => void;
}

function TeacherCard({ profile, startChatting }: TeacherCardProps) {
  return (
    <Style.Container>
      <Style.Left>
        <Style.Image src={profile.imageSrc} />
      </Style.Left>
      <Style.Right>
        <Style.Name>
          {profile.name} ({profile.studentCount})
        </Style.Name>
        <Style.StarWrapper>
          <Style.StarIcon />
          {profile.point}
        </Style.StarWrapper>
        <Style.ChatButton variant="contained" onClick={startChatting}>
          채팅
        </Style.ChatButton>
        <Style.InfoList>
          <Style.InfoItem>
            <Style.CategoryName>학력</Style.CategoryName>
            {profile.careers
              .filter((career) => career.careerType === 'EDUCATION_LEVEL')
              .map((career) => (
                <Style.Carrier key={career.careerId}>{career}</Style.Carrier>
              ))}
          </Style.InfoItem>
          <Style.InfoItem>
            <Style.CategoryName>수상 이력</Style.CategoryName>
            {profile.careers
              .filter((career) => career.careerType === 'PRIZE_EXP')
              .map((career) => (
                <Style.Carrier key={career.careerId}>{career}</Style.Carrier>
              ))}
          </Style.InfoItem>
          <Style.InfoItem>
            <Style.CategoryName>과외 경력</Style.CategoryName>
            {profile.careers
              .filter((career) => career.careerType === 'TUTOR_EXP')
              .map((career) => (
                <Style.Carrier key={career.careerId}>{career}</Style.Carrier>
              ))}
          </Style.InfoItem>
        </Style.InfoList>
      </Style.Right>
    </Style.Container>
  );
}

export default TeacherCard;
