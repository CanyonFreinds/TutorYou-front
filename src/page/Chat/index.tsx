import React, { useState, useEffect, useContext, useRef } from 'react';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import ChatBalloon from '../../component/Chat';
import { getChattingRoom, getChat, ChattingRoomProps, ChatProps } from '../../api/chat';
import { userStateContext } from '../../context/UserContext';

import ChattingRoom from '../../component/Chat/chattingroom';

import * as Style from './styled';

export default function chat() {
  const sockerRef = useRef<WebSocket>();
  const [list, setList] = useState<ChatProps[]>([]);
  const [chat, setChat] = useState('');
  const [show, setShow] = useState(false);
  const [currentRoomId, setCurrentRoomId] = useState(0);
  const { state } = useContext(userStateContext);
  const [receiverId, setRecieverId] = useState(0);
  const [chatRoomList, setchatRoomList] = useState<ChattingRoomProps[]>([]);

  const inputChat = (event: any) => {
    setChat(event.target.value);
  };

  const putChat = () => {
    const newChat: ChatProps = {
      chatRoomId: currentRoomId,
      message: chat,
      receiverId: state.userId,
      receiverImageSrc: '',
      receiverName: state.name,
      senderId: state.userId,
      senderImageSrc: '',
      senderName: state.name,
    };
    const chatJSON = JSON.stringify({
      type: 'sendChat',
      chatRoomId: currentRoomId,
      senderId: state.userId,
      receiverId,
      message: chat,
    });
    setList([...list, newChat]);
    if (!sockerRef.current) return;

    sockerRef.current.send(chatJSON);
    setChat('');
  };

  const onClickChattingRoom = async (roomId: number, receiId: number) => {
    const result = await getChat(roomId);
    if (result) {
      setRecieverId(receiId);
      setCurrentRoomId(roomId);
      setList(result);
      setShow(true);
    }
  };

  const getChatList = async () => {
    const result = await getChattingRoom(state.userId);
    if (result) {
      setchatRoomList(result);
    }
  };

  const sendUserId = () => {
    if (!sockerRef.current) return;
    const msgJSON = JSON.stringify({
      type: 'receiveUserId',
      userId: state.userId,
    });
    sockerRef.current.send(msgJSON);
  };

  const receiveChat = ({ message, senderId, receiverId }: any) => {
    const newChat: ChatProps = {
      message,
      senderId,
      receiverId,
      chatRoomId: currentRoomId,
      receiverImageSrc: '',
      receiverName: state.name,
      senderImageSrc: '',
      senderName: state.name,
    };
    setList([...list, newChat]);
  };

  useEffect(() => {
    getChatList();
    sockerRef.current = new WebSocket('ws://3.36.81.52:8080/chat');

    sockerRef.current.onmessage = function a(event) {
      const data = JSON.parse(event.data);
      const type = data.type as string;
      const senderId = data.senderId as number;
      const receiverId = data.receiverId as number;
      const message = data.message as string;

      switch (type) {
        case 'sendUserId':
          sendUserId();
          break;
        case 'receiveChat':
          receiveChat({ message, senderId, receiverId });
          break;
        default:
          break;
      }
    };
  }, []);

  return (
    <div>
      <div style={{ float: 'left', width: '50%', height: '90vh', overflow: 'auto' }}>
        <h2 style={{ fontSize: '2rem', margin: '10px' }}>채팅목록</h2>
        {chatRoomList.map((chatroom) => (
          <ChattingRoom
            userId={state.userId}
            chatroom={chatroom}
            id={chatroom.chatRoomId}
            onClick={onClickChattingRoom}
          />
        ))}
      </div>
      {show && (
        <div style={{ float: 'left', width: '50%', height: '90vh', position: 'relative' }}>
          <Style.UpperChatDiv>
            <div style={{ height: '80vh', overflow: 'auto' }}>
              {list.map((item) => (
                <ChatBalloon
                  chat={item}
                  name={item.senderName}
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
