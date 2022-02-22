// import { useRouter } from "next/router";
import { Seo } from "../../components/Seo";
// nextjs는 기본적으로 모든 페이지를 프리렌더 하기 때문에 router.query.parmas에 값이 존재하지 않음
// const Detail = ({ datas }) => {
//   const router = useRouter();
//   console.log(router);
//   const [title, id] = router.query.params || [];
//   return (
//     <>
//       <h4>{title || "Loading..."}</h4>
//     </>
//   );
// };

const Detail = ({ params }) => {
  const [title, id] = params || [];
  return (
    <>
      <Seo title={title} />
      <h4>{title || "Loading..."}</h4>
    </>
  );
};

// 서버에서만 동작되어야 하는 코드
const getServerSideProps = async (ctx) => {
  // 프론트엔드에는, 이미 브라우저에 url이 있음
  // 그러므로 /api/movies 이런식으로 쓸 수 있지만 벡엔드에는 없어서 풀로 써줘야함
  const { params } = ctx;
  return {
    props: { params: params.params },
  };
};
export default Detail;
export { getServerSideProps };
