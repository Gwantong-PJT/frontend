<template>
    <div class="search-bar">
      <input type="text" placeholder="검색어를 입력하세요" />
      <button>검색</button>
    </div>
  </template>
  
  <style scoped>
  .search-bar {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: rgba(255, 255, 255, 0.9); /* 반투명 배경 */
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); /* 그림자 */
    width: 230px; /* 검색 바의 가로 크기 */
    height: 750px;
  }
  input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button {
    padding: 8px;
    background-color: #bc8cca;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #4b2852;
  }
  </style>
  