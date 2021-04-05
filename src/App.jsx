import React, { useState } from 'react';
import List from './components/List';
import  listData  from './data/list';

export default function App() {
    const [list] = useState(listData);

    return (
        <List list={listData} />
    );
}
