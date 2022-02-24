import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (opts, axiosInstance = axios) => {
  if (!opts.url) {
    return;
  }
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  const refetch = () => {
    setState({
      ...state,
      loading: true,
      data: null,
    });
    setTrigger(new Date()); // 배치로 처리
  };
  const [trigger, setTrigger] = useState(0);
  // 렌더링(화면그리기) 완료된 후에, 값의 변화가 있으면 실행
  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({
          ...state,
          loading: false,
          error,
        });
      });
  }, [trigger]); // 상태변경없이 api 재호출하고 싶으면 trigger만 넣으면댐
  return { ...state, refetch };
};

export { useAxios };
// useEffect는 화면이 다 그려진 뒤 실행된다.
// useLayoutEffect는 화면이 그려지기 이전시점에 실행된다.
