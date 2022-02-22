import { Seo } from "../components/Seo";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

const Home = ({ datas }) => {
  const router = useRouter();

  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  };

  // 변수뒤에 물음표를 넣으면 존재하지(undefined) 않을 때 map 실행되지 않도록 함
  return (
    <div className="container">
      <Seo title="home" />
      {datas?.map((movie) => (
        <div
          onClick={() => onClick(movie.id, movie.original_title)}
          className="movie"
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>
            <Link
              href={`/movies/${movie.original_title}/${movie.id}`} // 유저에게 보일 url
            >
              <a>{movie.original_title}</a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

// 서버에서만 동작되어야 하는 코드
const getServerSideProps = async () => {
  // 프론트엔드에는, 이미 브라우저에 url이 있음
  // 그러므로 /api/movies 이런식으로 쓸 수 있지만 벡엔드에는 없어서 풀로 써줘야함
  const res = await axios.get("http://localhost:3000/api/movies");
  const datas = res.data.results;
  return {
    props: {
      datas,
    },
  };
};
export default Home;
export { getServerSideProps };
