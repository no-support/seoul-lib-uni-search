export const fetchGangseo = async (keyword) => {
  try {
    const response = await fetch('/gangseo', {
      headers: {
        accept: 'application/json, text/plain, */*',
        'accept-language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
        'cache-control': 'no-cache',
        'content-type': 'application/json;charset=UTF-8',
        pragma: 'no-cache',
        'sec-ch-ua':
          '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
      referrer: 'https://lib.gangseo.seoul.kr/',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: `{"searchKeyword":"${keyword}","pubFormCode":"MO","display":"10","article":"SCORE","order":"DESC","manageCode":["AG","BG","AA","AB","AC","AD","AF","AE","BK","AQ","AL","AR","AJ","AI","AX","AO","BJ","AK","BB","BL","AS","AN","BC","BI","AZ","AW","BD","AP","BH","BF","AM","AY","AU","AV","BA","AT"]}`,
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
    });
    const data = await response.json();
    const gangseoData = {
      gangseo: data.contents.bookList,
    };
    return gangseoData;
  } catch (error) {
    console.error('error', error);
  }
};

export const fetchGangbuk = async (keyword) => {
  try {
    const response = await fetch('/gangbuk', {
      headers: {
        accept: 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
        'cache-control': 'no-cache',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        pragma: 'no-cache',
        priority: 'u=1, i',
        'sec-ch-ua':
          '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'x-requested-with': 'XMLHttpRequest',
      },
      referrer: 'https://www.gblib.or.kr/search/gate.do?a_lib=',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: `uri=lists&a_key=&a_v=f&a_cp=1&a_lib=&tmp_a_lib=&a_qf=T&a_q=${keyword}&a_rf=T&a_rq=`,
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
    });
    const data = await response.json();
    const gangbukData = {
      gangbuk: data.item,
    };

    return gangbukData;
  } catch (error) {
    console.error(error);
  }
};

export const fetchGuro = async (keyword) => {
  try {
    const response = await fetch(`/guro/k%7Ca%7C${keyword}&material_type=1`, {
      headers: {
        accept: 'application/json, text/plain, */*',
        'accept-language': 'ko',
        'cache-control': 'no-cache',
        pragma: 'no-cache',
        'sec-ch-ua':
          '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        cookie:
          'hwatime=1721039203773; NG_TRANSLATE_LANG_KEY=%22ko%22; GUROPYXIS2_POPUP=true',
        Referer: 'https://lib.guro.go.kr/',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
      },
      body: null,
      method: 'GET',
    });
    const data = await response.json();
    const guroData = {
      guro: data.data.list,
    };

    return guroData;
  } catch (error) {
    console.error(error);
  }
};
export const fetchGeumcheon = async (keyword) => {
  try {
    const response = await fetch('/geumcheon', {
      headers: {
        accept: 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
        'cache-control': 'no-cache',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        pragma: 'no-cache',
        'sec-ch-ua':
          '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'x-requested-with': 'XMLHttpRequest',
      },
      referrer: 'https://geumcheonlib.seoul.kr/',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: `searchKeyword=${keyword}&page=1&article=SCORE&display=10&manageCode=ALL&pubFormCode=MO&advContentsType=&advTextLang=&advTitle=&advAuthor=&advPublisher=&advIsbn=&advClassNo=&advFromPubYear=&advToPubYear=`,
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
    });
    const data = await response.json();
    const geumcheonData = {
      geumcheon: data.bookList,
    };

    return geumcheonData;
  } catch (error) {
    console.error(error);
  }
};
export const fetchNowon = async (keyword) => {
  try {
    const response = await fetch('/nowon', {
      headers: {
        accept: 'application/json, text/plain, */*',
        'accept-language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
        'cache-control': 'no-cache',
        'content-type': 'application/json',
        library: 'nowonlib',
        pragma: 'no-cache',
        'sec-ch-ua':
          '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
      referrer: 'https://www.nowonlib.kr/KeywordSearchResult/',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: `{"searchKeyword":"${keyword}","pubFormCode":"MO","display":"10","article":"SCORE","order":"DESC","manageCode":"ALL"}`,
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
    });
    const data = await response.json();
    const nowonData = {
      nowon: data.contents.bookList,
    };

    return nowonData;
  } catch (error) {
    console.error(error);
  }
};
export const fetchSeocho = async (keyword) => {
  try {
    const response = await fetch('/seocho', {
      headers: {
        accept: 'application/json, text/plain, */*',
        'accept-language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
        'cache-control': 'no-cache',
        'content-type': 'application/json',
        pragma: 'no-cache',
        'sec-ch-ua':
          '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
      referrer: 'https://public.seocholib.or.kr/',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: `{"searchKeyword":"${keyword}","pubFormCode":"MO","page":"1","display":"10","article":"SCORE","order":"DESC","manageCode":["AA","AC","AE","AF","AH","BB","BE","BN","AD","DL","BA","BC","BD","BF","BG","BH","BI","BJ","BK","BL","BM","BO","BP","BQ","ZA","ZB","ZC","ZD","ZE"]}`,
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
    });
    const data = await response.json();
    const seochoData = {
      seocho: data.contents.bookList,
    };

    return seochoData;
  } catch (error) {
    console.error(error);
  }
};
export const fetchEunpyeong = async (keyword) => {
  try {
    const response = await fetch('/eunpyeong', {
      headers: {
        accept: 'application/json, text/plain, */*',
        'accept-language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
        'cache-control': 'no-cache',
        'content-type': 'application/json;charset=UTF-8',
        pragma: 'no-cache',
        'sec-ch-ua':
          '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
      referrer: 'https://www.eplib.or.kr/unified/search.asp',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: `{"searchKeyword":"${keyword}","manageCode":["MA","MB","MC","MH","MI","MR","MU","MD","ME","MF","MG","MJ","MK","MM","MN","ML","MO","MT","MQ","MS"],"pubFormCode":"MO","order":"DESC","article":"SCORE","page":1,"display":20}`,
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
    });
    const data = await response.json();
    const eunpyeongData = {
      eunpyeong: data.contents.bookList,
    };

    return eunpyeongData;
  } catch (error) {
    console.error(error);
  }
};
