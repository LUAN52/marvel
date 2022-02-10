import React from 'react';
import {ContainerList,Button, InnerContainer} from './ContainerStyled';
import Card from './Card';

function ComicList(){
  return <ContainerList>
    <InnerContainer>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </InnerContainer>
    <Button>dfsdf</Button>
  </ContainerList>;
}

export default ComicList;
