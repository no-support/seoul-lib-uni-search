import PropTypes from 'prop-types';
import { TfiNewWindow } from 'react-icons/tfi';

const Header = ({ setSrc }) => {
  const onClickHandler = (src) => {
    setSrc(src);
  };
  return (
    <div className="bg-blue-600 h-12 flex justify-center items-center">
      <ul className="inline-flex gap-x-2">
        <li>
          <button
            type="button"
            className="text-white p-2"
            onClick={() => {
              onClickHandler('https://library.gangnam.go.kr/intro/index.do');
            }}
          >
            강남구
          </button>
        </li>
        <li>
          <button
            type="button"
            className="text-white p-2"
            onClick={() => {
              onClickHandler('https://gdlibrary.or.kr/web/index.do');
            }}
          >
            강동구
          </button>
        </li>
        <li>
          <button
            type="button"
            className="text-white p-2"
            onClick={() => {
              onClickHandler('https://lib.gangseo.seoul.kr/');
            }}
          >
            강서구
          </button>
        </li>
        <li>
          <button
            type="button"
            className="text-white p-2"
            onClick={() => {
              onClickHandler('https://www.gblib.or.kr/');
            }}
          >
            강북구
          </button>
        </li>
        <li>
          <button
            type="button"
            className="text-white p-2"
            onClick={() => {
              onClickHandler('https://lib.gwanak.go.kr/galib/index.do');
            }}
          >
            관악구
          </button>
        </li>
        <li>
          <button
            type="button"
            className="text-white p-2"
            onClick={() => {
              onClickHandler('https://www.gwangjinlib.seoul.kr/intro.do');
            }}
          >
            광진구
          </button>
        </li>
        <li>
          <button
            type="button"
            className="text-white p-2"
            onClick={() => {
              // onClick={async () => {
              // onClickHandler('https://lib.guro.go.kr/');
              // setSrc('/foo');
              // const res = await fetch('/foo');
              // const text = await res.text();
              // console.log(text);
              window.open('https://lib.guro.go.kr/');
            }}
          >
            구로구
            <TfiNewWindow className="inline-block" />
          </button>
        </li>
        <li>
          <button
            type="button"
            className="text-white p-2"
            onClick={() => {
              onClickHandler('https://geumcheonlib.seoul.kr/');
            }}
          >
            금천구
          </button>
        </li>
        <li>
          <button
            type="button"
            className="text-white p-2"
            onClick={() => {
              onClickHandler('https://www.nowonlib.kr');
            }}
          >
            노원구
          </button>
        </li>
        <li>
          <button
            type="button"
            className="text-white p-2"
            onClick={() => {
              onClickHandler('https://www.l4d.or.kr/intro/index.do');
            }}
          >
            동대문구
          </button>
        </li>
        <li>
          <button
            type="button"
            className="text-white p-2"
            onClick={() => {
              onClickHandler('https://www.unilib.dobong.kr/main.do');
            }}
          >
            도봉구
          </button>
        </li>
        <li>
          <button
            type="button"
            className="text-white p-2"
            onClick={() => {
              // onClickHandler('https://lib.dongjak.go.kr/dj/index.do');
              // setSrc('/bar');
              // fetch('/bar')
              //   .then((res) => res.text())
              //   .then((text) => console.log(text));

              window.open('https://lib.dongjak.go.kr/dj/index.do');
            }}
          >
            동작구
            <TfiNewWindow className="inline-block" />
          </button>
        </li>
        <li>
          <button
            type="button"
            className="text-white p-2"
            onClick={() => {
              onClickHandler('https://mplib.mapo.go.kr/intro/index.do');
            }}
          >
            마포구
          </button>
        </li>
        <li>
          <button
            type="button"
            className="text-white p-2"
            onClick={() => {
              onClickHandler(
                'https://lib.sdm.or.kr/sdmlib/contents/40016/contents.do'
              );
            }}
          >
            서대문구
          </button>
        </li>
        <li>
          <button
            type="button"
            className="text-white p-2"
            onClick={() => {
              onClickHandler('https://www.sdlib.or.kr/SD/main.do');
            }}
          >
            성동구
          </button>
        </li>
        <li>
          <button
            type="button"
            className="text-white p-2"
            onClick={() => {
              onClickHandler('https://www.sblib.seoul.kr/library/index.do');
            }}
          >
            성북구
          </button>
        </li>
        <li>
          <button
            type="button"
            className="text-white p-2"
            onClick={() => {
              onClickHandler('https://public.seocholib.or.kr/');
            }}
          >
            서초구
          </button>
        </li>
        <li>
          <button
            type="button"
            className="text-white p-2"
            onClick={() => {
              onClickHandler('https://www.songpafac.or.kr/library.do');
            }}
          >
            송파구
          </button>
        </li>
        <li>
          <button
            type="button"
            className="text-white p-2"
            onClick={() => {
              onClickHandler('https://www.ydplib.or.kr/intro/index.do');
            }}
          >
            영등포구
          </button>
        </li>
        <li>
          <button
            type="button"
            className="text-white p-2"
            onClick={() => {
              onClickHandler('https://www.yslibrary.or.kr/intro/index.do');
            }}
          >
            용산구
          </button>
        </li>
        <li>
          <button
            type="button"
            className="text-white p-2"
            onClick={() => {
              onClickHandler('https://lib.yangcheon.or.kr/main/main.do');
            }}
          >
            양천구
          </button>
        </li>
        <li>
          <button
            type="button"
            className="text-white p-2"
            onClick={() => {
              onClickHandler('https://www.eplib.or.kr/main.asp');
            }}
          >
            은평구
          </button>
        </li>
        <li>
          <button
            type="button"
            className="text-white p-2"
            onClick={() => {
              onClickHandler('https://lib.jongno.go.kr/');
            }}
          >
            종로구
          </button>
        </li>
        <li>
          <button
            type="button"
            className="text-white p-2"
            onClick={() => {
              onClickHandler('https://www.junggulib.or.kr/SJGL/index.do');
            }}
          >
            중구
          </button>
        </li>
        <li>
          <button
            type="button"
            className="text-white p-2"
            onClick={() => {
              onClickHandler('https://www.jungnanglib.seoul.kr/library/');
            }}
          >
            중랑구
          </button>
        </li>
      </ul>
    </div>
  );
};
Header.propTypes = {
  setSrc: PropTypes.func,
};

export default Header;
