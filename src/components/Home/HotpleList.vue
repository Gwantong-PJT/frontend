<script setup>

</script>

<template>
    <div class="container">
        <div class="hotple-img">
            <p class="text-top">고즈넉한 경주에서<br>느끼는 가을향기</p>
            <p class="text-bottom">불국사</p>
        </div>
        <div class="v-line"></div>
        <div class="list-area">
            <h2>오늘의 핫플</h2>
            <ul>
                <li>
                    <span>경주 동궁과 월지 | </span>
                    <span>경주 동궁과 월지는 신라 왕궁의 별궁 터..</span>
                    
                </li>
                <hr>
                <li>
                    <span>거창의 감악산 | </span>
                    <span>감악산(952m)은 남상면 무촌리 신원면 과..</span>
                    
                </li>
                <hr>
                <li>
                    <span>쇼핑의 중심지인 서울 대표 관광명소 명동 | </span>
                    <span>명동은 거대 쇼핑도시를..</span>
                    
                </li>
                <hr>
                <li>
                    <span>천혜의 비경을 간직한 정동심곡 바다부채길 | </span>
                    <span>정동심곡 바다부채길의..</span>
                    
                </li>
                <hr>
                <li>
                    <span>제주 금오름 | </span>
                    <span>서부 중산간 지역의 대표적인 오름 중의 하나이다. 산정..</span>
                    
                </li>
            </ul>
            <hr class="thick-line">
        </div>
    </div>
</template>


<style scoped>

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.hotple-img {
    position: relative; /* 자식 요소 배치를 위해 기준 설정 */
    width: 600px;
    height: 350px;
    background-color: gray;
    border-radius: 20px;
    background-image: url('@/assets/img/danpoong.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.text-top {
    position: absolute; /* 부모 요소인 hotple-img를 기준으로 위치 지정 */
    top: 10px; /* 위에서 10px */
    right: 10px; /* 오른쪽에서 10px */
    color: white;
    font-size: 19px;
    font-weight: bold;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
    padding: 5px 10px;
    border-radius: 5px;
    margin: 0;
}

.text-bottom {
    position: absolute;
    bottom: 10px; /* 아래에서 10px */
    right: 10px; /* 오른쪽에서 10px */
    color: white;
    font-size: 50px;
    font-weight: bold;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
    padding: 5px 10px;
    border-radius: 5px;
    margin: 0;
}


.v-line {
  border-left : solid #000203;
  height : 350px;
}

.list-area {
    width: 600px;
    height: 320px;
    padding: 20px; /* 안쪽 여백 추가 */
}

.list-area h2 {
    font-size: 24px; /* 제목 글자 크기 */
    margin-bottom: 20px; /* 제목과 리스트 사이 간격 */
}

.list-area ul {
    list-style: none; /* 리스트 점 제거 */
    padding: 0; /* 기본 패딩 제거 */
    margin: 0; /* 기본 마진 제거 */
}

.list-area li {
    font-size: 18px; /* 글자 크기 */
    margin-bottom: 15px; /* 리스트 간격 조정 */
    line-height: 1.5; /* 줄 간격 조정 */
    display: flex; /* 내용 정렬을 쉽게 하기 위해 flexbox 적용 */
    flex-wrap: wrap; /* 텍스트가 길 경우 줄바꿈 허용 */
}

.list-area span {
    display: inline-block; /* 각각의 텍스트가 블록처럼 동작 */
}

.list-area hr {
    border: none; /* 기본 선 제거 */
    border-top: 1px solid #ccc; /* 가로선 스타일 지정 */
    margin-top: 10px; /* 선과 텍스트 사이 간격 */
    margin-bottom: 10px;
}

.text-overlay {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: white;
  font-size: 19px;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  padding: 5px 10px;
  border-radius: 5px;
  margin: 0;
}

.thick-line {
    border: none; /* 기본 선 제거 */
    border-top: 5px solid #000; /* 두께와 색상 지정 */
    margin: 20px 0; /* 위아래 간격 추가 */
}


</style>