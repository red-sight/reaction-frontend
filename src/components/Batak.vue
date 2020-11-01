<template>
  <svg
    id="Layer_2"
    data-name="Layer 2"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 1920 1080"
  >
    <defs>
      <filter id="shine" x="-50%" y="-50%" width="300%" height="300%">
        <feMorphology
          operator="dilate"
          radius="4"
          in="SourceAlpha"
          result="thicken"
        />
        <feGaussianBlur in="thicken" result="blurred" stdDeviation="14" />
        <feFlood flood-color="rgb(253,255,222)" result="glowColor" />
        <feComposite
          in="glowColor"
          in2="blurred"
          operator="in"
          result="softGlow_colored"
        />
        <feMerge>
          <feMergeNode in="softGlow_colored" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <filter id="score-glow" width="120%" height="120%">
        <feMorphology
          operator="dilate"
          radius="2"
          in="SourceGraphic"
          result="thicken"
        />
        <feGaussianBlur in="thicken" result="blurOut" stdDeviation="5" />
        <feMerge>
          <feMergeNode in="blurOut" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <linearGradient
        id="linear-gradient"
        x1="203.21"
        y1="70.38"
        x2="1649.36"
        y2="1058.07"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#0e80c7" />
        <stop offset="0.96" stop-color="#0c5ea6" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-2"
        x1="234.49"
        y1="732.63"
        x2="357.17"
        y2="816.42"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#0b6ba6" />
        <stop offset="0.96" stop-color="#0c5ea6" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-3"
        x1="1553.49"
        y1="732.63"
        x2="1676.17"
        y2="816.42"
        gradientTransform="matrix(-1, 0, 0, 1, 3238.81, 0)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#084c75" />
        <stop offset="0.96" stop-color="#0c5ea6" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-4"
        x1="200.5"
        y1="669.75"
        x2="1719.5"
        y2="669.75"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#969696" />
        <stop offset="0.41" stop-color="#8d8d8d" />
        <stop offset="1" stop-color="#787878" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-5"
        x1="960"
        y1="291.08"
        x2="960"
        y2="1037.46"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#cfcfcf" />
        <stop offset="0.4" stop-color="#c6c6c6" />
        <stop offset="1" stop-color="#b0b0b0" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-6"
        x1="960"
        y1="426.83"
        x2="960"
        y2="1016.33"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.54" stop-color="#ababab" />
        <stop offset="1" stop-color="#b0b0b0" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-7"
        x1="113.64"
        y1="569.69"
        x2="1576.36"
        y2="590.08"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#e01082" />
        <stop offset="0.09" stop-color="#d71485" />
        <stop offset="0.25" stop-color="#be1d8c" />
        <stop offset="0.44" stop-color="#952d98" />
        <stop offset="0.68" stop-color="#5c43a9" />
        <stop offset="0.93" stop-color="#145fbe" />
        <stop offset="1" stop-color="#0067c4" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-29"
        x1="385"
        y1="604.71"
        x2="1535"
        y2="604.71"
        gradientTransform="matrix(1, 0, 0, -1, 0, 1225.2)"
        xlink:href="#linear-gradient-7"
      />
      <!-- BTN Gradients -->
      <linearGradient
        id="btn-linear-gradient"
        x1="145.5"
        y1="61.2"
        x2="145.5"
        y2="155.68"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.41" stop-color="#9c9c9c" />
        <stop offset="0.99" stop-color="#cfcfcf" />
      </linearGradient>
      <linearGradient
        id="btn-linear-gradient-2"
        x1="134.85"
        y1="-9.87"
        x2="156.45"
        y2="114.57"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#5bc22f" />
        <stop offset="1" stop-color="#397a1d" />
      </linearGradient>
      <linearGradient
        id="btn-linear-gradient-3"
        x1="134.85"
        y1="-17.87"
        x2="156.45"
        y2="106.57"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#71c22f" />
        <stop offset="1" stop-color="#4e9c1f" />
      </linearGradient>
    </defs>
    <g id="frame">
      <polygon
        id="frame-side"
        points="1649.19 1080 1590.19 1080 1590.19 171.5 329.81 171.5 329.81 1080 270.81 1080 270.81 112.5 1649.19 112.5 1649.19 1080"
        style="fill:#14456e"
      />
      <polygon
        id="frame-front"
        points="1675 1080 1616 1080 1616 153.5 304 153.5 304 1080 245 1080 245 94.5 1675 94.5 1675 1080"
        style="fill:url(#linear-gradient)"
      />
      <g id="shadow-2">
        <path
          d="M245,724.48v49.35s33,39.92,59,47.69V735.59Z"
          style="fill:url(#linear-gradient-2)"
        />
        <polygon
          class="cls-4"
          points="329 740.29 304 735.59 304 821.52 329.81 861.52 329 740.29"
        />
      </g>
      <g id="shadow-1">
        <path
          d="M1674.81,724.48v49.35s-33,39.92-59,47.69V735.59Z"
          style="fill:url(#linear-gradient-3)"
        />
        <polygon
          class="cls-4"
          points="1590.81 740.29 1615.81 735.59 1615.81 821.52 1590 861.52 1590.81 740.29"
        />
      </g>
      <g id="plane">
        <ellipse
          cx="960"
          cy="669.75"
          rx="759.5"
          ry="359.25"
          style="fill:url(#linear-gradient-4)"
        />
        <ellipse
          cx="960"
          cy="660.75"
          rx="759.5"
          ry="359.25"
          style="fill:url(#linear-gradient-5)"
        />
      </g>
    </g>

    <g
      id="sensors"
      v-for="(s, $index) in sensors"
      v-bind:key="$index"
      @click="click($index === activeSensor)"
      class="sensor"
      :class="{ 'active-sensor': $index === activeSensor }"
    >
      <circle class="cls-9" :cx="s.shadow.x" :cy="s.shadow.y" r="65" />
      <circle
        class="cls-10 sensor_center"
        :cx="s.center.x"
        :cy="s.center.y"
        r="49"
      />
      <path class="cls-11 sensor_bound" :d="s.bound.d" />
    </g>

    <g id="score_box">
      <rect x="903" y="153" width="163" height="107" style="fill:#4a4a4a" />
      <polygon
        points="1056.89 273 914.21 272.64 903 260 1066 260 1056.89 273"
        style="fill:#383838"
      />
      <rect x="911" y="161" width="147" height="91" />
      <text class="score score-bg">88</text>
      <text class="score">{{ score }}</text>
      <text class="your-result" v-show="score > 0">Ваш результат:</text>
    </g>

    <g id="logo">
      <path
        class="cls-14"
        d="M421.72,602.84l-1.66-7.14H403.74l-3.41,7.14H385.49l.11-.9,29.1-57.31h7.05l14.76,57.31-.11.9Zm-4.24-18.78a90.72,90.72,0,0,1-2.18-16.31,161.93,161.93,0,0,1-6.11,16.31Z"
      />
      <path
        class="cls-14"
        d="M459.64,567.91c1.48,0,4.65.16,6.42-.9,2.22-1.31,3.3-4.76,5.54-11.64s7.95-12.63,19.41-9.84l-1.24,10.08c-2.51-.24-4.58.58-5.75,4.1-2.41,6.89-4.73,11.73-7.7,15.25,3.38,8.53,6.58,17.14,10.12,25.66l-.27,2.22H470.1l-7-22.14A32.54,32.54,0,0,1,458,581l-2.7,21.89H441.16l7.06-57.39h14.19Z"
      />
      <path
        class="cls-14"
        d="M523.15,602.84l-1.67-7.14H505.17l-3.42,7.14H486.91l.11-.9,29.11-57.31h7l14.75,57.31-.11.9Zm-4.25-18.78a89.61,89.61,0,0,1-2.17-16.31,164.43,164.43,0,0,1-6.11,16.31Z"
      />
      <path
        class="cls-14"
        d="M592,545.45l-5.5,44.68h4.68l-2.47,20H575.55l.89-7.29H552.75l-.9,7.29h-13l2.46-20c5,0,6.35-1.64,7.54-7.3l8.21-37.38Zm-29.42,37.87c-.36,2.3-1.35,5.66-3.34,7.14h13l3.95-32.14h-8.52Z"
      />
      <path
        class="cls-14"
        d="M616.48,566.68h15.25l-1.62,13.12H614.87l-1.16,9.34H631.1l-1.69,13.7H597.93L605,545.45h30.83l-1.61,13H617.49Z"
      />
      <path
        class="cls-14"
        d="M686.07,602.84H671.88l3.2-26L664.3,589.14h-1.56l-7.66-12.29-3.2,26H637.69l7.11-57.72h5L665.93,570l22.24-24.84h5Z"
      />
      <path
        class="cls-14"
        d="M703.14,545.45h14.18L714,572.67,741.57,545H746l-7.12,57.89H724.69l3.52-28.62-28,29H696Z"
      />
      <path
        class="cls-14"
        d="M757.77,581.19c-4.62-3.77-6-9.51-5.24-16.07,1.46-11.8,10.3-19.67,22.1-19.67h20.25l-7,57.3H773.65l2.21-18h-5.42l-9.58,18h-15.5l.09-.73Zm21.58-22.79h-6.23c-3.44,0-6.08,2.79-6.6,7-.53,4.34,1.41,7.21,4.85,7.21h6.23Z"
      />
      <path
        class="cls-14"
        d="M839.09,566c11.15,0,17.64,7.21,16.32,18-1.4,11.31-9.7,18.86-20.85,18.86H813.65l7.06-57.39h35.58L854.7,558.4H833L832,566Zm-3,23.69c2.87,0,5.12-2.3,5.53-5.66s-1.28-5.57-4.15-5.57h-7l-1.38,11.23Z"
      />
      <path
        class="cls-14"
        d="M879.09,562.75h6.15c11.48,0,18.25,7.62,16.78,19.51-1.52,12.38-9.83,20.58-21.71,20.58H860L867,545.53h14.18Zm-3.58,27.13h6.39c3.36,0,6-2.87,6.55-7.21.55-4.51-1.38-7.46-4.74-7.46h-6.4Zm37.36-44.43H927l-7.06,57.39H905.8Z"
      />
      <path
        class="cls-14"
        d="M959.54,544.63c10.17,0,20.75,6.64,20.5,22H966.43c-.75-5.9-3.71-8.45-8.55-8.45-6.48,0-11.61,6.4-12.79,16-1.16,9.43,2.41,15.74,9,15.74,4.84,0,8.88-2.87,10.72-9.1h13.69c-3.81,16.32-15.6,22.79-26.17,22.79-14.92,0-23.48-11.72-21.31-29.35C933.17,556.43,944.62,544.63,959.54,544.63Z"
      />
      <path
        class="cls-14"
        d="M1022.41,545.45l-1.61,13.11h-11.23l-5.45,44.28H990.34l5.45-44.28H984.48l1.61-13.11Z"
      />
      <path
        class="cls-14"
        d="M1049,545.45c11.89,0,18.53,8.61,16.54,21.48-1.55,12.62-10.25,20.66-21.73,20.66h-6.15l-1.86,15.16h-14.19l7.06-57.3Zm-3.62,29.43c3.36,0,6.07-3.36,6.68-8.36.6-4.84-1.29-8.12-4.66-8.12H1041l-2,16.48Z"
      />
      <path
        class="cls-14"
        d="M1090.27,603.66c-15.08,0-23.72-11.81-21.54-29.52s13.72-29.51,28.81-29.51,23.55,11.8,21.37,29.51S1105.27,603.66,1090.27,603.66Zm1.73-14c6.47,0,11.51-6.32,12.64-15.5s-2.36-15.41-8.84-15.41c-6.64,0-11.83,6.23-13,15.41S1085.36,589.64,1092,589.64Z"
      />
      <path
        class="cls-14"
        d="M1130,545.45h14.18l-3.35,27.22,27.6-27.72h4.43l-7.13,57.89h-14.18l3.52-28.62-28,29h-4.19Zm20.7-17.63c-.33,2.62,1.56,3.94,4.27,3.94s5.16-1.32,5.81-3.94l7.19.9c-1.18,8.2-7,12.95-14.06,12.95s-11.55-4.75-10.62-12.95Z"
      />
      <path
        class="cls-14"
        d="M1219,545.45c11.89,0,18.53,8.61,16.54,21.48-1.55,12.62-10.25,20.66-21.73,20.66h-6.15l-1.86,15.16h-14.19l7.06-57.3Zm-3.62,29.43c3.36,0,6.07-3.36,6.68-8.36.6-4.84-1.29-8.12-4.65-8.12H1211l-2,16.48Z"
      />
      <path
        class="cls-14"
        d="M1256.19,566.68h15.24l-1.61,13.12h-15.25l-1.15,9.34h17.38l-1.68,13.7h-31.49l7.07-57.39h30.82l-1.6,13h-16.73Z"
      />
      <path
        class="cls-14"
        d="M1308.31,602.84l-1.67-7.14h-16.31l-3.42,7.14h-14.84l.11-.9,29.11-57.31h7l14.75,57.31-.11.9Zm-4.25-18.78a89.61,89.61,0,0,1-2.17-16.31,167,167,0,0,1-6.11,16.31Z"
      />
      <path
        class="cls-14"
        d="M1346.22,567.91c1.48,0,4.66.16,6.43-.9,2.21-1.31,3.29-4.76,5.53-11.64s8-12.63,19.41-9.84l-1.24,10.08c-2.51-.24-4.58.58-5.75,4.1-2.41,6.89-4.72,11.73-7.7,15.25,3.38,8.53,6.58,17.14,10.13,25.66l-.28,2.22h-16.07l-7-22.14a32.48,32.48,0,0,1-5.11.25l-2.69,21.89h-14.19l7.06-57.39H1349Z"
      />
      <path
        class="cls-14"
        d="M1399.91,545.45l-5.4,43.86h11.89l5.39-43.86h14.27l-5.5,44.68H1425l-2.36,19.18h-10.91l.8-6.47h-33.86l7.06-57.39Z"
      />
      <path
        class="cls-14"
        d="M1438.85,545.45H1453l-3.35,27.22L1477.28,545h4.43l-7.12,57.89H1460.4l3.53-28.62-28,29h-4.18Z"
      />
      <path
        class="cls-14"
        d="M1491.66,545.45h14.18l-3.35,27.22,27.6-27.72h4.42l-7.12,57.89h-14.18l3.52-28.62-28,29h-4.19Z"
      />
      <polygon
        points="385 618.19 420.94 619.03 456.88 619.67 528.75 620.93 672.5 622.49 708.44 622.87 744.38 623.08 816.25 623.48 960 623.77 1103.75 623.46 1175.63 623.07 1211.56 622.85 1247.5 622.47 1391.25 620.91 1463.13 619.66 1499.06 619.03 1535 618.19 1535 617.53 960 617.2 385 617.53 385 618.19"
        style="fill:url(#linear-gradient-29)"
      />
    </g>

    <g
      id="btn"
      class="btn-start"
      :class="{ playing: !!status }"
      @click="start"
      v-show="!status"
    >
      <rect
        id="btn-shadow"
        class="btn-shadow"
        y="16"
        width="291"
        height="87"
        rx="43.5"
      />
      <rect
        id="btn-side"
        class="btn-side"
        y="8"
        width="291"
        height="87"
        rx="43.5"
      />
      <rect
        id="btn-front"
        class="btn-front"
        width="291"
        height="87"
        rx="43.5"
      />
      <text class="btn-start-text" transform="translate(55.01 64.1)">
        СТАРТ
      </text>
    </g>

    <g id="timer" v-show="status" transform="translate(962,814)">
      <circle
        class="donut-segment"
        :r="radius"
        fill="transparent"
        transform="scale(35)"
        stroke="#ce4b99"
        stroke-width="0.5"
        :stroke-dasharray="donut"
        stroke-dashoffset="0"
      ></circle>
      <g class="timer-text">
        <text>{{ counter }}</text>
        <text class="timer-text-2">сек</text>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  data() {
    return {
      sensors: [
        {
          shadow: {
            x: 271,
            y: 264
          },
          center: {
            x: 266,
            y: 260
          },
          bound: {
            d:
              'M266,227a33,33,0,1,1-33,33,33,33,0,0,1,33-33m0-32a65,65,0,1,0,65,65,65,65,0,0,0-65-65Z'
          }
        },
        {
          shadow: {
            x: 715.5,
            y: 371
          },
          center: {
            x: 710.5,
            y: 367
          },
          bound: {
            d:
              'M710.5,334a33,33,0,1,1-33,33,33,33,0,0,1,33-33m0-32a65,65,0,1,0,65,65,65,65,0,0,0-65-65Z'
          }
        },
        {
          shadow: {
            x: 1204.5,
            y: 371
          },
          center: {
            x: 1209.5,
            y: 367
          },
          bound: {
            d:
              'M1209.5,334a33,33,0,1,1-33,33,33,33,0,0,1,33-33m0-32a65,65,0,1,0,65,65,65,65,0,0,0-65-65Z'
          }
        },
        {
          shadow: {
            x: 621.5,
            y: 965.5
          },
          center: {
            x: 616.5,
            y: 961.5
          },
          bound: {
            d:
              'M616.5,928.5a33,33,0,1,1-33,33,33,33,0,0,1,33-33m0-32a65,65,0,1,0,65,65,65,65,0,0,0-65-65Z'
          }
        },
        {
          shadow: {
            x: 1298.5,
            y: 965.5
          },
          center: {
            x: 1303.5,
            y: 961.5
          },
          bound: {
            d:
              'M1303.5,928.5a33,33,0,1,1-33,33,33,33,0,0,1,33-33m0-32a65,65,0,1,0,65,65,65,65,0,0,0-65-65Z'
          }
        },
        {
          shadow: {
            x: 271,
            y: 957
          },
          center: {
            x: 266,
            y: 953
          },
          bound: {
            d:
              'M266,920a33,33,0,1,1-33,33,33,33,0,0,1,33-33m0-32a65,65,0,1,0,65,65,65,65,0,0,0-65-65Z'
          }
        },
        {
          shadow: {
            x: 1646,
            y: 264
          },
          center: {
            x: 1651,
            y: 260
          },
          bound: {
            d:
              'M1651,227a33,33,0,1,1-33,33,33,33,0,0,1,33-33m0-32a65,65,0,1,0,65,65,65,65,0,0,0-65-65Z'
          }
        },
        {
          shadow: {
            x: 258.5,
            y: 570
          },
          center: {
            x: 253.5,
            y: 566
          },
          bound: {
            d:
              'M253.5,533a33,33,0,1,1-33,33,33,33,0,0,1,33-33m0-32a65,65,0,1,0,65,65,65,65,0,0,0-65-65Z'
          }
        },
        {
          shadow: {
            x: 1661.5,
            y: 572
          },
          center: {
            x: 1666.5,
            y: 568
          },
          bound: {
            d:
              'M1666.5,535a33,33,0,1,1-33,33,33,33,0,0,1,33-33m0-32a65,65,0,1,0,65,65,65,65,0,0,0-65-65Z'
          }
        },
        {
          shadow: {
            x: 1646,
            y: 957
          },
          center: {
            x: 1651,
            y: 953
          },
          bound: {
            d:
              'M1651,920a33,33,0,1,1-33,33,33,33,0,0,1,33-33m0-32a65,65,0,1,0,65,65,65,65,0,0,0-65-65Z'
          }
        }
      ]
    }
  },

  computed: {
    radius: () => 21 / (2 * Math.PI),
    donut() {
      return `${this.counter} ${21 - this.counter}`
    }
  },

  props: {
    activeSensor: {
      type: Number,
      default: null
    },

    status: {
      type: Boolean,
      default: false
    },

    counter: {
      type: Number,
      default: 21
    },

    score: {
      type: Number,
      default: null
    }
  },

  methods: {
    start() {
      this.$emit('start')
    },

    click(check) {
      if (check) {
        this.$emit('success')
      }
    }
  }
}
</script>

<style lang="sass" scoped>

#Layer_2
  display: block
  object-fit: contain
  max-height: 100vh

.sensor
  cursor: not-allowed
  &.active-sensor
    cursor: pointer
    .sensor_bound
      filter: url(#shine)
      fill: white
    .sensor_center
      fill: #dddddd

.cls-4
  fill: #152a3b

.cls-9
  fill: #a1a1a1

.cls-10
  fill: #bdbdbd

.cls-11
  fill: #e5e5e5

.cls-14
  fill: url(#linear-gradient-7)

// BTN styles

.btn-start
  cursor: pointer
  transform: translate(742px,716px) scale(1.5)
  &.playing
    cursor: not-allowed
  &:active
    transform: translate(742px,722px) scale(1.5)
    .btn-side, .btn-shadow
      display: none

.btn-shadow
  fill: url(#btn-linear-gradient)


.btn-side
  fill: url(#btn-linear-gradient-2)


.btn-front
  fill: url(#btn-linear-gradient-3)


.btn-start-text
  font-size: 56px
  fill: #fff
  font-family: Arial-BoldMT, Arial
  font-weight: 700

  // score
.score
  font-family: Segment7
  fill: red
  font-size: 87px
  transform: translate(1034px, 241px)
  text-anchor: end
  filter:url(#score-glow)
  &.score-bg
    fill: #3e1d1d
    filter: none

#score_box
  transform: translate(-19px, 0)

.your-result
  fill: #a6d8ff
  font-family: PT Astra Sans
  font-size: 41px
  font-style: italic
  font-weight: bold
  text-anchor: middle
  transform: translate(983px, 135px)

.timer-text
  font-family: PT Astra Sans
  font-weight: bold
  fill: #ce4b99
  text-anchor: middle
  font-size: 92px
  .timer-text-2
    font-weight: normal
    font-size: 64px
    transform: translate(0, 50px)
</style>
