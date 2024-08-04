import '@/App.css';
import { useState } from 'react';

import MemoizedForm from './MemoizedForm';
import Tab from './Tab';

export default function App() {
  const [data, setData] = useState();

  return (
    <div>
      <MemoizedForm setData={setData} />
      <Tab data={data} />
    </div>
  );
}
