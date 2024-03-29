import React, { useEffect, useState } from 'react';
import BottomNavBar from "../components/BottomNavBar";
import ExhibitionCard from "../components/ExhibitionCard";
import '../styles/Home.css';
import { getDatas } from '../api/api';

function Home() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchDatas = async () => {
      const datas = await getDatas();
      setDatas(datas);
    };

    fetchDatas();
  }, []);

  return (
    <div>
      <div className='body'>
        {datas.map((data) => (
          <ExhibitionCard
            id={data.id}
            image={data.image}
            title={data.title}
            place={data.place}
            placeName={data.placeName}
            price={data.price}
            period={data.period}
          />
        ))}
        <BottomNavBar />
      </div>
    </div>
  );
}

export default Home;