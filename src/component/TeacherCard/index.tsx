import React from 'react';
import * as Style from './styled';

export interface ProfileType {
  nickname: string;
  imageSrc: string;
  star: number;
  studentCount: number;
  schoolCareer: string[];
  awardCareer: string[];
  tutorCareer: string[];
}

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
          {profile.nickname} ({profile.studentCount})
        </Style.Name>
        <Style.StarWrapper>
          <Style.StarIcon />
          {profile.star}
        </Style.StarWrapper>
        <Style.ChatButton variant="contained" onClick={startChatting}>
          채팅
        </Style.ChatButton>
        <Style.InfoList>
          <Style.InfoItem>
            <Style.CategoryName>학력</Style.CategoryName>
            {profile.schoolCareer.map((career) => (
              <Style.Carrier key={career}>{career}</Style.Carrier>
            ))}
          </Style.InfoItem>
          <Style.InfoItem>
            <Style.CategoryName>수상 이력</Style.CategoryName>
            {profile.awardCareer.map((career) => (
              <Style.Carrier key={career}>{career}</Style.Carrier>
            ))}
          </Style.InfoItem>
          <Style.InfoItem>
            <Style.CategoryName>과외 경력</Style.CategoryName>
            {profile.tutorCareer.map((career) => (
              <Style.Carrier key={career}>{career}</Style.Carrier>
            ))}
          </Style.InfoItem>
        </Style.InfoList>
      </Style.Right>
    </Style.Container>
  );
}

export default TeacherCard;
