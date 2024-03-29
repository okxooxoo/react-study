import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { push, pop } from '../store';
import '../styles/ExhibitionCard.css';

const ExhibitionCard = ({id, image, title, place, placeName, price, period}) => {
    const starDatas = useSelector((state) => state.starDatas);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const star = () => {
        dispatch(push(id));
    };
    const unstar = () => {
        dispatch(pop(id));
    };

    return (
        <div className='card-container'>
            <div className='card-info'>
                <div className='image-wrapper'>
                    <img className='image' src={image} alt='전시회'/>
                </div>
                <div className='card-details'>
                    <div className='details-top'>
                        <div className='title'>{title}</div>
                        <div className='place'>{place}( {placeName} )</div>
                        <div className='price'>{price.toLocaleString('ko-KR')} 원</div>
                    </div>
                    <div className='details-bottom'>
                        <div className='period'>{period}</div>
                    </div>
                </div>
            </div>
            <div className='card-btn-container'>
                {starDatas.includes(id) ? (
                    <svg onClick={unstar} className='star-btn' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.318 6.27426L12.318 6.27428L12.3235 6.27511L17.2359 7.02425L17.2359 7.02428L17.2379 7.02457C17.2386 7.02526 17.2396 7.02634 17.2407 7.02796L17.8491 6.58934L17.2407 7.02797C17.2464 7.03583 17.2517 7.05065 17.2495 7.06824C17.2476 7.07999 17.2426 7.08632 17.2409 7.08801L17.2409 7.08794L17.2328 7.09623L13.6777 10.7321C13.3237 11.0877 13.1714 11.5948 13.2578 12.0827L14.1125 17.1953C14.1142 17.2121 14.1096 17.2249 14.1039 17.2331C14.1039 17.2332 14.1038 17.2333 14.1037 17.2334C14.1026 17.2331 14.1014 17.2326 14.1001 17.232L9.73403 14.8233C9.28737 14.5703 8.74407 14.5703 8.29744 14.8235L3.91019 17.2475C3.90912 17.2463 3.90773 17.2446 3.90616 17.2421C3.90135 17.2303 3.89911 17.2157 3.90111 17.2006L4.75744 12.0785L4.75793 12.0756C4.83667 11.5926 4.68661 11.0937 4.34253 10.7379L4.34255 10.7379L4.33773 10.733L0.762334 7.1026C0.756302 7.09534 0.75 7.0826 0.75 7.06318C0.75 7.05019 0.752815 7.0402 0.756484 7.03283C0.765299 7.02707 0.773983 7.02334 0.782038 7.02112L5.67394 6.27511L5.6884 6.27276C6.183 6.18742 6.59397 5.86212 6.80448 5.4178L6.80509 5.41651L8.99851 0.763924C8.99928 0.765177 9.00004 0.766516 9.00079 0.767947L11.1911 5.41384C11.3998 5.86458 11.8165 6.19398 12.318 6.27426Z" fill="#FFBF66" stroke="#FFBF66" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                ) : (
                    <svg onClick={star} className='star-btn' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.318 6.27426L12.318 6.27428L12.3235 6.27511L17.2359 7.02425L17.2359 7.02428L17.2379 7.02457C17.2386 7.02526 17.2396 7.02634 17.2407 7.02796L17.8491 6.58934L17.2407 7.02797C17.2464 7.03583 17.2517 7.05065 17.2495 7.06824C17.2476 7.07999 17.2426 7.08632 17.2409 7.08801L17.2409 7.08794L17.2328 7.09623L13.6777 10.7321C13.3237 11.0877 13.1714 11.5948 13.2578 12.0827L14.1125 17.1953C14.1142 17.2121 14.1096 17.2249 14.1039 17.2331C14.1039 17.2332 14.1038 17.2333 14.1037 17.2334C14.1026 17.2331 14.1014 17.2326 14.1001 17.232L9.73403 14.8233C9.28737 14.5703 8.74407 14.5703 8.29744 14.8235L3.91019 17.2475C3.90912 17.2463 3.90773 17.2446 3.90616 17.2421C3.90135 17.2303 3.89911 17.2157 3.90111 17.2006L4.75744 12.0785L4.75793 12.0756C4.83667 11.5926 4.68661 11.0937 4.34253 10.7379L4.34255 10.7379L4.33773 10.733L0.762334 7.1026C0.756302 7.09534 0.75 7.0826 0.75 7.06318C0.75 7.05019 0.752815 7.0402 0.756484 7.03283C0.765299 7.02707 0.773983 7.02334 0.782038 7.02112L5.67394 6.27511L5.6884 6.27276C6.183 6.18742 6.59397 5.86212 6.80448 5.4178L6.80509 5.41651L8.99851 0.763924C8.99928 0.765177 9.00004 0.766516 9.00079 0.767947L11.1911 5.41384C11.3998 5.86458 11.8165 6.19398 12.318 6.27426Z" stroke="#FFBF66" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                )}
                <div onClick={() => navigate(`/reserve/${id}`)} className='reserve-btn'>
                    예매하기
                </div>
            </div>
        </div>
    );
};

export default ExhibitionCard;