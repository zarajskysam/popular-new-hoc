import React from 'react';
import { nanoid } from 'nanoid';
import { updateItem } from '../hoc/updateItem';
import Video from './Video';
import Article from './Article';

function List(props) {
    const UpdVideo = updateItem(Video);
    const UpdArticle = updateItem(Article);
      return props.list.map(item => {
          switch (item.type) {
              case 'video':
                  return (
                      <UpdVideo {...item} key={nanoid()}/>
                  );
  
              case 'article':
                  return (
                      <UpdArticle {...item} key={nanoid()}/>
                  );
          }
      });
  };

export default List
