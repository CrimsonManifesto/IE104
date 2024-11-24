import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../data/data.json';
import '../../styles/Donate.css'

function OnlineDonate() {
  const charities = data.charities;

  const removeVietnameseTones = (str) => {
    return str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D")
        .replace(/\s+/g, "-")
        .toLowerCase();
    };

  // Bảng màu cho từng tag
  const tagColors = {
    "giao-duc": "#6f00ff",
    "moi-truong": "#2196f3",
    "y-te": "#ff9800",
    "thien-tai": "#f7282f",
    "tre-em": "#0aa886",
    "nguoi-gia-neo-don": "#5c4917",
    "hoan-canh-kho-khan": "#e64207",
  };

  // Hàm lấy màu cho tag
  const getTagColor = (tag) => {
      const normalizedTag = removeVietnameseTones(tag); // Loại bỏ dấu
      return tagColors[normalizedTag] || "#e91e63"; // Màu mặc định
  };

  return (
    <div className="donate-container">
      <h2 className="donate-title">Danh sách các dự án đang gây quỹ</h2>
      <ul className="donate-list">
        {charities
          .filter((charity) => charity.status === 0) // Chỉ hiển thị các dự án đang hoạt động
          .map((charity) => {
            const raised = parseInt(charity.raisedAmount.replace(/[^0-9]/g, ''), 10);
            const target = parseInt(charity.targetAmount.replace(/[^0-9]/g, ''), 10);
            const progress = Math.min((raised / target) * 100, 100);

            return (
              <li key={charity.id} className="donate-item">
                <div className="donate-item-container">
                  <div className="donate-tag" style={{ backgroundColor: getTagColor(charity.tag) }}>
                    <p className="donate-project-tag">{charity.tag}</p>                  
                  </div>
                  <div className="donate-content">
                    <h4 className="donate-title">
                      <Link to={`/detail/${charity.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                        {charity.title}
                      </Link>
                    </h4>
                    <p className="donate-org">{charity.organization}</p>
                    <div className="progress-container">
                      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                    </div>
                    <div className="progress-text">
                      <p>{`${raised.toLocaleString()}đ`}</p>
                      <p className="donate-target">Mục tiêu: {charity.targetAmount}</p>
                    </div>
                  </div>
                  <img src={charity.image} alt={charity.title} className="donate-image" />
                  <div className='donate-button-container'>
                    <button className='donate-button'>Ủng hộ trực tuyến</button>
                    <button className='donate-button'>Ủng hộ trực tiếp</button>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default OnlineDonate;
