import React, { useState } from 'react';
import List from './components/List';
import  listData  from './data/list';

export default function App() {
    return (
        <List list={listData} />
    );
}
