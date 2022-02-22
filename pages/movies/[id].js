import { useRouter } from "next/router";

const Detail = () => {
  const router = useRouter();
  return (
    <>
      <h4>{router.query.title || "Loading..."}</h4>
    </>
  );
};

export default Detail;
