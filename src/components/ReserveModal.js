import React from 'react';
import '../styles/ReserveModal.css';

const ReserveModal = ({ openCompleteModal, closeReserveModal }) => {
    return (
        <div className='modal-container'>
            <div className='modal-text-container'>
                <div className='modal-text'>
                    티켓을 예매하시겠습니까?
                </div>
                <div className='modal-text'>
                    예매 내역은 이메일로 전송됩니다
                </div>
            </div>
            <div className='modal-btn-container'>
                <div onClick={openCompleteModal} className='confirm-btn'>
                    확인
                </div>
                <div onClick={closeReserveModal} className='cancel-btn'>
                    취소
                </div>
            </div>
        </div>
    );
};

export default ReserveModal;