<template>
    <div class="chart-container">
      <svg :viewBox="'0 0 200 200'" xmlns="http://www.w3.org/2000/svg" width="250" height="250">
        <path
          v-for="(segment, index) in segments"
          :key="index"
          :d="describeArc(100, 100, radius, segment.startAngle, segment.endAngle)"
          fill="none"
          :stroke="segment.color"
          :stroke-width="strokeWidth"
          :style="getAnimationStyle(radius)"
          class="arc"
        />
        <text
          v-for="(segment, index) in segments"
          :key="'label-' + index"
          :x="calculateLabelPosition(100, 100, radius + 10, segment.startAngle, segment.endAngle).x"
          :y="calculateLabelPosition(100, 100, radius + 10, segment.startAngle, segment.endAngle).y"
          text-anchor="middle"
          alignment-baseline="middle"
          class="label"
        >
          {{ segment.value }}
        </text>
      </svg>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        radius: 80, // 반지름
        strokeWidth: 20, // 선 두께
        segments: [
          { startAngle: 0, endAngle: 90, color: "#3498db", value: 25 },
          { startAngle: 90, endAngle: 180, color: "#e74c3c", value: 35 },
          { startAngle: 180, endAngle: 360, color: "#2ecc71", value: 40 },
        ],
      };
    },
    methods: {
      polarToCartesian(cx, cy, radius, angleInDegrees) {
        const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
        return {
          x: cx + radius * Math.cos(angleInRadians),
          y: cy + radius * Math.sin(angleInRadians),
        };
      },
      describeArc(cx, cy, radius, startAngle, endAngle) {
        const start = this.polarToCartesian(cx, cy, radius, endAngle);
        const end = this.polarToCartesian(cx, cy, radius, startAngle);
        const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  
        return [
          "M", start.x, start.y,
          "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
        ].join(" ");
      },
      calculateLabelPosition(cx, cy, radius, startAngle, endAngle) {
        const midAngle = (startAngle + endAngle) / 2;
        return this.polarToCartesian(cx, cy, radius, midAngle);
      },
      getAnimationStyle(radius) {
        const circumference = 2 * Math.PI * radius; // 원둘레 계산
        return {
          strokeDasharray: circumference,
          strokeDashoffset: circumference, // 초기값
          animation: "draw 1s ease-out forwards",
        };
      },
    },
  };
  </script>
  
  <style>
  .chart-container {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: inline-block;
  }
  
  .arc {
    stroke-linecap: butt; /* 선 끝을 둥글게 처리 */
    transition: stroke-dashoffset 0.5s ease, transform 0.2s ease-in-out;
  }
  
  .arc:hover {
    stroke-dashoffset: 0; /* 호버 시 offset을 0으로 */
    transform: scale(1.1);
    transform-origin: center;
  }
  
  .label {
    font-size: 12px;
    fill: #333; /* 텍스트 색상 */
  }
  
  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }
  </style>
  