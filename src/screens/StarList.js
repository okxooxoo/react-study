import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import BottomNavBar from "../components/BottomNavBar";
import StarExhibitionCard from '../components/StarExhibitionCard';
import '../styles/StarList.css';
import { getDatas } from '../api/api';

function StarList() {
  const [datas, setDatas] = useState([]);
  const starDatas = useSelector((state) => state.starDatas);

  useEffect(() => {
    const fetchDatas = async () => {
      const datas = await getDatas();
      setDatas(datas);
    };

    fetchDatas();
  }, []);

  return (
    <div className='body'>
      {starDatas.length === 0 ? (
        <div className='msg-container'>
          <div className='msg-top'>찜해놓은 전시회가 없습니다</div>
          <div className='msg-bottom'>맘에 드는 전시회가 있다면 찜해보세요</div>
        </div>
      ) : (
        <div className='star-list-container'>
          {datas
            .filter((data) => starDatas.includes(data.id))
            .map((data) => (
              <StarExhibitionCard
                id={data.id}
                image={data.image}
                title={data.title}
                place={data.place}
                price={data.price}
                period={data.period}
              />
            ))}
        </div>
      )}
      <BottomNavBar />
    </div>
  );
}

export default StarList;