import React from 'react';
import '../styles/ReserveModal.css';

const ReserveCompleteModal = ({ closeCompleteModal }) => {
    return (
        <div className='modal-container'>
            <div className='modal-text-container'>
                <div className='modal-text'>
                    예매가 완료되었습니다
                </div>
            </div>
            <div className='modal-btn-container'>
                <div onClick={closeCompleteModal} className='confirm-btn'>
                    확인
                </div>
            </div>
        </div>
    );
};

export default  ReserveCompleteModal;