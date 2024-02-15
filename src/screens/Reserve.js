import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getDatas } from '../api/api';
import BigExhibitionCard from '../components/BigExhibitionCard';
import ReserveModal from '../components/ReserveModal';
import ReserveCompleteModal from '../components/ReserveCompleteModal';
import '../styles/Reserve.css';

function Reserve() {
  const [data, setData] = useState();
  const [reserveModalOpen, setReserveModalOpen] = useState(false);
  const [completeModalOpen, setCompleteModalOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDatas = async () => {
      const datas = await getDatas();
      const selectedData = datas.find((data) => data.id === Number(id));
      setData(selectedData);
    };

    fetchDatas();
  }, [id]);

  // 모달을 열고 닫는 함수들
  const openReserveModal = () => {
    setReserveModalOpen(true);
  };

  const openCompleteModal = () => {
    setReserveModalOpen(false);
    setCompleteModalOpen(true);
  };

  const closeReserveModal = () => {
    setReserveModalOpen(false);
  };

  const closeCompleteModal = () => {
    setCompleteModalOpen(false);
    navigate('/');
  };

  return (
    <div className='reserve-container'>
      <div className='header'>
        <svg onClick={() => navigate(-1)} className='back-icon' width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 15.7759C29.9982 18.4858 28.9162 21.0844 26.9914 23.0012C25.0667 24.918 22.4565 25.9965 19.7336 26H1.25047C0.918824 26 0.600762 25.8689 0.366254 25.6355C0.131746 25.4021 0 25.0855 0 24.7554C0 24.4254 0.131746 24.1088 0.366254 23.8754C0.600762 23.642 0.918824 23.5109 1.25047 23.5109H19.7336C21.7818 23.4926 23.7399 22.6699 25.1817 21.222C26.6236 19.774 27.4325 17.8179 27.4325 15.7793C27.4325 13.7407 26.6236 11.7846 25.1817 10.3366C23.7399 8.88862 21.7818 8.06599 19.7336 8.0477H4.74053L8.83269 11.3962C8.96035 11.4997 9.06621 11.6273 9.14419 11.7717C9.22217 11.916 9.27073 12.0743 9.2871 12.2374C9.30347 12.4005 9.28731 12.5652 9.23955 12.722C9.1918 12.8789 9.11339 13.0248 9.00882 13.1514C8.90425 13.278 8.77559 13.3828 8.63022 13.4598C8.48485 13.5368 8.32563 13.5844 8.16171 13.6C7.99778 13.6156 7.83238 13.5988 7.675 13.5506C7.51761 13.5024 7.37135 13.4237 7.24459 13.3191L0.456421 7.76394C0.441416 7.75149 0.430161 7.73656 0.415781 7.72349C0.38323 7.6941 0.352338 7.66294 0.323246 7.63015L0.313243 7.62081C0.304489 7.61086 0.293235 7.60339 0.284482 7.59343V7.5897C0.271352 7.57414 0.261974 7.5561 0.250094 7.53992C0.2255 7.50739 0.202748 7.47353 0.181943 7.43848C0.176942 7.43039 0.170064 7.42293 0.165687 7.41421C0.161311 7.4055 0.150056 7.39368 0.144429 7.38248C0.138802 7.37128 0.131299 7.34887 0.123796 7.33269C0.107129 7.29646 0.0921088 7.2595 0.0787798 7.22193L0.0744032 7.21073C0.048592 7.1396 0.0303602 7.06598 0.0200078 6.99106C0.0162564 6.96804 0.00875368 6.94626 0.00687797 6.92323C0.00500227 6.90021 0.00687797 6.87905 0.00687797 6.85727C0.00687797 6.83549 0.00125038 6.8218 0.00125038 6.80313C0.00125038 6.78446 0.00625274 6.76704 0.00687797 6.74837V6.68303C0.00687797 6.66125 0.0162564 6.6376 0.0200078 6.61458C0.0303238 6.53966 0.0485565 6.46602 0.0744032 6.39491L0.0787798 6.38371C0.0925349 6.34575 0.106915 6.30904 0.123796 6.27294C0.131299 6.25676 0.135676 6.23934 0.144429 6.22316C0.153182 6.20698 0.159435 6.20263 0.165687 6.19142C0.17194 6.18022 0.176942 6.17524 0.181943 6.16716C0.202342 6.13214 0.224676 6.09828 0.248843 6.06572C0.260723 6.04954 0.270101 6.0315 0.283231 6.01594V6.01283C0.295736 5.99727 0.311367 5.98669 0.324497 5.97176C0.353257 5.94064 0.382644 5.90953 0.41453 5.88215C0.428911 5.86908 0.440165 5.85415 0.455171 5.8417L0.461423 5.8361L7.24709 0.286562C7.37385 0.181942 7.52011 0.103269 7.6775 0.0550602C7.83488 0.00685132 8.00029 -0.00994415 8.16421 0.00563764C8.32813 0.0212194 8.48735 0.0688712 8.63272 0.145859C8.77809 0.222846 8.90675 0.327652 9.01132 0.45426C9.11589 0.580869 9.1943 0.726786 9.24205 0.883635C9.28981 1.04048 9.30597 1.20518 9.2896 1.36826C9.27324 1.53134 9.22467 1.6896 9.14669 1.83395C9.06871 1.9783 8.96285 2.1059 8.83519 2.20942L4.74303 5.55856H19.7362C22.4575 5.56218 25.0663 6.63987 26.9904 8.55525C28.9145 10.4706 29.9969 13.0673 30 15.7759Z" fill="#FFBF66" />
        </svg>
        <div className='header-text'>
          예매하기
        </div>
      </div>

      {data && (
        <BigExhibitionCard
          id={data.id}
          image={data.image}
          title={data.title}
          price={data.price}
          place={data.place}
          period={data.period}
        />
      )}
      
      {/* 예매하기 버튼 */}
      <div onClick={openReserveModal} className='big-reserve-btn'>
        예매하기
      </div>
      {reserveModalOpen && <div className='overlay'>
        <ReserveModal openCompleteModal={openCompleteModal} closeReserveModal={closeReserveModal} />
      </div>}
      {completeModalOpen && <div className='overlay'>
        <ReserveCompleteModal closeCompleteModal={closeCompleteModal} />
      </div>}
    </div>
  );
}

export default Reserve;