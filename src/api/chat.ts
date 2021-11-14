import axios from 'axios';

export interface ChattingRoomProps {
  chatRoomId: number;
  studentId: number;
  studentName: string;
  teacherId: number;
  teacherName: string;
}

export interface ChatProps {
  chatRoomId: number;
  message: string;
  receiverId: number;
  receiverImageSrc: string;
  receiverName: string;
  senderId: number;
  senderImageSrc: string;
  senderName: string;
}

export const getChattingRoom = async (userId: number) => {
  try {
    const response = await axios({
      method: 'GET',
      url: `api/v1/chats/rooms?userId=${userId}`,
    });

    return response.data as ChattingRoomProps[];
  } catch (error) {
    return false;
  }
};

export const getChat = async (chatRoomId: number) => {
  try {
    const response = await axios({
      method: 'GET',
      url: `api/v1/chats/rooms/${chatRoomId}`,
    });

    return response.data as ChatProps[];
  } catch (error) {
    return false;
  }
};