import React, { useState, useEffect, useContext } from 'react';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import ChatBalloon from '../../component/Chat';
import { getChattingRoom, ChattingRoomProps } from '../../api/chat';
import { userStateContext } from '../../context/UserContext';

import ChattingRoom from '../../component/Chat/chattingroom';

import * as Style from './styled';

export default function chat() {
  const [list, setList] = useState<string[]>([]);
  const [chat, setChat] = useState('');
  const [show, setShow] = useState(false);
  const { state } = useContext(userStateContext);
  const [chatRoomList, setchatRoomList] = useState<ChattingRoomProps[]>([]);

  const inputChat = (event: any) => {
    setChat(event.target.value);
  };

  const putChat = () => {
    setList([...list, chat]);
    setChat('');
  };

  const onClickChattingRoom = (event: any) => {
    setShow(true);
  };

  const getChatList = async () => {
    const result = await getChattingRoom(state.userId);
    if (result) {
      setchatRoomList(result);
    }
  };
  useEffect(() => {
    getChatList();
  }, []);

  return (
    <div>
      <div style={{ float: 'left', width: '50%', height: '90vh', overflow: 'auto' }}>
        <h2 style={{ fontSize: '2rem', margin: '10px' }}>채팅목록</h2>
        {chatRoomList.map((chatroom) => (
          <ChattingRoom chatroom={chatroom} id={chatroom.chatRoomId} onClick={onClickChattingRoom} />
        ))}
      </div>
      {show && (
        <div style={{ float: 'left', width: '50%', height: '90vh', position: 'relative' }}>
          <Style.UpperChatDiv>
            <div style={{ height: '80vh', overflow: 'auto' }}>
              {list.map((item) => (
                <ChatBalloon
                  chat={item}
                  name="유창헌"
                  image="https://user-images.githubusercontent.com/55012742/141612238-4293f504-82fc-4689-8bc4-15bdb6dbe834.png"
                />
              ))}
            </div>
          </Style.UpperChatDiv>
          <Style.LowerChatDiv>
            <TextField
              id="outlined-multiline-flexible"
              label="Input Chat"
              multiline
              maxRows={4}
              style={{ width: '400px' }}
              size="medium"
              variant="standard"
              value={chat}
              onChange={inputChat}
            />
            <Style.SendButton
              disabled={chat.length === 0}
              type="submit"
              onClick={putChat}
              variant="contained"
              endIcon={<SendIcon />}
            >
              Send
            </Style.SendButton>
          </Style.LowerChatDiv>
        </div>
      )}
    </div>
  );
}
