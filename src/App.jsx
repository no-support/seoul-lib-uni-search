import '@/App.css';
import Main from '@/component/Main';
import Header from '@/component/Header';
import { useState } from 'react';

function App() {
  const [src, setSrc] = useState(
    'https://library.gangnam.go.kr/intro/index.do'
  );
  const mode = 1;

  return mode ? (
    <>
      <Header setSrc={setSrc} />
      <Main src={src} />
    </>
  ) : (
    <div className="bg-blue-300">
      <iframe src="/foo" className="w-full aspect-video"></iframe>
    </div>
  );
}

export default App;
