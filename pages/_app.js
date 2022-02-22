// 이 페이지를 기반으로 모든 페이지에 적용됨

import { Layout } from "../components/Layout";
import "../styles/globals.css"; // global css는 커스텀 app 컴포넌트에서만 가능하고, 커스텀 컴포넌트나 페이지에서 css를 불러와서 사용하기 위해서는 module화가 되어야함

// Component에 페이지가 들어감
const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
