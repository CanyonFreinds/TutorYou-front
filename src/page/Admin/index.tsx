import React, { useState } from 'react';
import * as Style from './styled';
import BlackListCard, { InfoType } from '../../component/BlackListCard';

function Admin() {
  const [whiteList] = useState<InfoType[]>([]);
  const [blackList] = useState<InfoType[]>([]);

  const addToBlackList = () => {};

  const removeFromBlackList = () => {};

  return (
    <Style.Container>
      <Style.Left>
        <Style.TitleWrapper>
          <Style.Title>선생님 리스트</Style.Title>
          <Style.Dropdown defaultValue="random">
            <option value="desc">내림차순</option>
            <option value="asc">오름차순</option>
            <option value="random">랜덤</option>
          </Style.Dropdown>
        </Style.TitleWrapper>
        <Style.CardList>
          {whiteList.map((info) => (
            <Style.CardItem>
              <BlackListCard info={info} clickButton={addToBlackList} />
            </Style.CardItem>
          ))}
        </Style.CardList>
      </Style.Left>
      <Style.Right>
        <Style.TitleWrapper>
          <Style.Title>블랙 리스트</Style.Title>
          <Style.Dropdown defaultValue="random">
            <option value="desc">내림차순</option>
            <option value="asc">오름차순</option>
            <option value="random">랜덤</option>
          </Style.Dropdown>
        </Style.TitleWrapper>
        <Style.CardList>
          {blackList.map((info) => (
            <Style.CardItem>
              <BlackListCard info={info} clickButton={removeFromBlackList} />
            </Style.CardItem>
          ))}
        </Style.CardList>
      </Style.Right>
    </Style.Container>
  );
}

export default Admin;
