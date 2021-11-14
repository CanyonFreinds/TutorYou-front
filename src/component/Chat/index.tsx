import React from 'react';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import * as Style from './styled';
import { ChatProps } from '../../api/chat';

interface ChatBalloonProps {
  chat: ChatProps;
  name: string;
  image: string;
}

export default function ChatBalloon({ chat, name, image }: ChatBalloonProps) {
  return (
    <Style.BalloonDiv>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="User" src={image} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <>
              <br />
              {chat.message}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </Style.BalloonDiv>
  );
}
