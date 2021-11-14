import React from 'react';
import * as Style from './styled';
import { ChattingRoomProps } from '../../api/chat';

export interface ChattingRoomValues {
  userName?: string;
  postId?: number;
  onClick: (event: any) => void;
  chatroom: ChattingRoomProps;
  id: number;
}

export default function ChattingRoom({ id, chatroom, onClick }: ChattingRoomValues) {
  return (
    <Style.Container onClick={onClick}>
      <Style.LeftContainer>
        <Style.Profile alt="User profile" />
        <Style.CenterContainer>
          <Style.Title>{chatroom.chatRoomId}</Style.Title>
        </Style.CenterContainer>
      </Style.LeftContainer>
    </Style.Container>
  );
}
