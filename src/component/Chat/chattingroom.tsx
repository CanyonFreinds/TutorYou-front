import React from 'react';
import * as Style from './styled';
import { ChattingRoomProps } from '../../api/chat';

export interface ChattingRoomValues {
  userId: number;
  userName?: string;
  postId?: number;
  onClick: (id: number, df: number) => void;
  chatroom: ChattingRoomProps;
  id: number;
}

export default function ChattingRoom({ chatroom, onClick, userId }: ChattingRoomValues) {
  return (
    <Style.Container
      onClick={() =>
        onClick(chatroom.chatRoomId, userId === chatroom.teacherId ? chatroom.studentId : chatroom.teacherId)
      }
    >
      <Style.LeftContainer>
        <Style.Profile alt="User profile" />
        <Style.CenterContainer>
          <Style.Title>{chatroom.teacherName}</Style.Title>
        </Style.CenterContainer>
      </Style.LeftContainer>
    </Style.Container>
  );
}
