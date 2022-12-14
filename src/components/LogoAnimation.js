import React, { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import logo from "../assets/Logo/pcela2.png";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";
import "../sass/components/_logo-animation.scss";
import useWindowSize from "./hooks/useWindowSize";

const LogoAnimation = () => {
  const animationPathBee = useAnimationControls();
  const animationPathWord = useAnimationControls();
  const animationImg = useAnimationControls();
  const animationMove = useAnimationControls();
  const dispatch = useDispatch();
  const introAnimationIsFinish = useSelector((state) => state.ui.introAnimationIsFinish);

  const { windowWidth } = useWindowSize();

  const sequance = async () => {
    animationPathBee.start((custom) => {
      return {
        pathLength: 1,
        transition: {
          ease: "linear",
          duration: introAnimationIsFinish ? 0 : custom * 3,
          delay: 0,
        },
      };
    });
    animationPathBee.start((custom) => {
      return {
        fill: "#000",
        transition: {
          ease: "linear",
          duration: introAnimationIsFinish ? 0 : 0.4,
          delay: introAnimationIsFinish ? 0 : 3.1,
        },
      };
    });
    animationPathWord.start((custom) => {
      return {
        pathLength: 1,
        transition: {
          ease: "linear",
          duration: introAnimationIsFinish ? 0 : 0.5,
          delay: introAnimationIsFinish ? 0 : custom * 0.2,
        },
      };
    });
    animationPathWord.start((custom) => {
      return {
        fill: "#000",
        transition: {
          ease: "linear",
          duration: introAnimationIsFinish ? 0 : 0.4,
          delay: introAnimationIsFinish ? 0 : custom * 0.04 + 3,
        },
      };
    });
    animationImg.start({ opacity: 1, transition: { duration: 0.6, delay: 3.3 } });
    animationMove.start({
      top: "1rem",
      left: "2rem",
      x: 0,
      y: 0,
      width: windowWidth < 700 ? 70 : 100,
      height: windowWidth < 700 ? 70 : 100,
      transition: { duration: introAnimationIsFinish ? 0 : 1, delay: introAnimationIsFinish ? 0 : 4 },
    });
  };

  const introAnimationFinish = () => {
    dispatch(uiActions.setIntroAnimationIsFinish());
  };

  useEffect(() => {
    sequance();
  }, []);

  return (
    <motion.div className="intro-animation" initial={{ x: "-50%", y: "-50%" }} animate={animationMove}>
      <motion.img
        src={logo}
        alt=""
        style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}
        initial={{ opacity: 0 }}
        animate={animationImg}
        onAnimationComplete={introAnimationFinish}
      />
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 745.000000 775.000000"
        style={{ position: "absolute", top: "0", left: "0" }}
      >
        <g
          transform="translate(0.000000,775.000000) scale(0.100000,-0.100000)"
          fill="none"
          stroke="#000"
          strokeWidth="25px"
        >
          <motion.path
            custom={1}
            initial={{ pathLength: 0, fill: "#efecd9" }}
            animate={animationPathBee}
            d="M5375 7133 c-435 -38 -825 -202 -1099 -463 -132 -126 -306 -375 -346
  -495 -7 -22 -21 -55 -32 -73 -10 -18 -18 -37 -18 -42 0 -6 -9 -29 -19 -53 -30
  -65 -71 -217 -71 -262 0 -42 -17 -80 -26 -58 -3 6 -44 67 -92 134 -146 206
  -433 489 -707 695 -123 93 -503 344 -521 344 -3 0 -21 11 -42 23 -92 58 -292
  155 -342 165 -180 37 -314 45 -545 31 -223 -12 -357 -36 -490 -85 -38 -14
  -105 -36 -147 -50 -43 -13 -103 -35 -133 -49 -31 -14 -60 -25 -65 -25 -6 0
  -10 -4 -10 -10 0 -5 -6 -10 -13 -10 -23 0 -47 -35 -47 -66 0 -60 61 -291 100
  -379 15 -33 31 -71 35 -85 24 -80 178 -348 274 -476 62 -83 206 -238 263 -283
  39 -31 88 -51 295 -118 136 -45 289 -91 338 -103 85 -20 136 -33 328 -81 90
  -22 151 -35 242 -50 33 -5 116 -23 185 -39 232 -53 318 -66 570 -89 88 -8 150
  -23 150 -36 0 -3 -10 -25 -21 -50 -15 -31 -29 -47 -47 -52 -37 -9 -261 4 -355
  22 -45 8 -107 19 -137 24 -141 25 -292 54 -365 71 -44 11 -132 31 -195 46
  -140 32 -217 52 -380 97 -178 50 -200 54 -200 31 0 -30 72 -166 124 -234 55
  -73 187 -202 226 -222 14 -7 27 -15 30 -18 10 -11 136 -86 170 -102 72 -33
  160 -66 192 -73 47 -9 286 -64 329 -75 20 -6 112 -10 204 -10 l168 0 -7 -97
  c-3 -54 -11 -125 -17 -158 -16 -85 -23 -594 -10 -675 6 -36 15 -103 21 -150 6
  -47 15 -105 20 -130 5 -25 16 -85 26 -135 9 -49 20 -95 24 -100 5 -6 14 -33
  21 -60 6 -28 15 -54 19 -60 4 -5 13 -28 20 -50 7 -22 16 -44 20 -50 4 -5 17
  -39 28 -75 17 -55 107 -243 132 -275 4 -5 20 -32 35 -60 125 -227 384 -508
  614 -664 159 -107 361 -221 394 -221 20 0 23 32 8 89 -62 236 -81 376 -87 668
  -5 180 -2 240 11 315 9 51 20 118 25 148 12 73 33 151 71 257 17 49 38 110 46
  136 37 120 181 352 290 468 27 29 43 55 41 66 -2 11 -25 27 -58 40 -49 20 -72
  22 -220 22 -91 0 -187 -4 -214 -7 -51 -7 -72 -27 -39 -38 10 -3 27 -10 38 -14
  11 -5 31 -12 45 -15 41 -11 70 -34 70 -55 0 -11 -20 -50 -44 -87 -56 -87 -149
  -266 -166 -318 -7 -22 -16 -44 -20 -50 -34 -46 -78 -263 -95 -470 -3 -38 -8
  -80 -11 -92 -5 -28 -52 -53 -168 -88 -84 -26 -92 -26 -150 -14 -64 14 -98 40
  -126 95 -8 16 -22 40 -31 54 -68 104 -219 451 -233 535 -4 22 -11 51 -15 65
  -9 27 -24 98 -40 195 -8 48 -16 227 -12 270 1 6 53 9 144 7 144 -3 197 5 197
  32 0 8 -14 16 -33 20 -56 10 -188 55 -244 82 -172 85 -240 255 -128 324 41 25
  82 15 155 -40 48 -35 60 -40 109 -40 64 0 181 23 255 49 92 33 156 65 156 77
  0 12 -14 15 -140 29 -94 11 -226 51 -287 88 -126 77 -203 188 -203 294 0 86
  15 103 94 103 76 0 110 -20 172 -100 102 -132 118 -139 295 -140 137 0 180 3
  198 15 21 12 10 23 -36 35 -103 27 -195 80 -263 149 -63 64 -73 81 -108 192
  -25 74 -4 171 53 245 51 67 127 84 164 38 12 -15 21 -31 21 -36 0 -22 71 -109
  163 -201 98 -96 197 -177 310 -250 177 -115 297 -308 297 -476 0 -38 4 -51 14
  -51 16 0 21 14 31 83 4 27 13 67 21 89 8 22 14 51 14 64 0 30 16 30 82 0 108
  -50 172 -64 225 -50 30 8 128 161 194 304 17 36 41 88 55 116 13 28 24 54 24
  58 0 5 6 22 14 39 24 53 43 117 66 227 19 87 23 138 23 290 0 114 -4 206 -12
  240 -56 244 -187 496 -330 635 -23 21 -41 45 -41 52 0 10 50 13 240 13 259 0
  293 -5 462 -66 26 -9 30 -35 9 -58 -23 -25 -96 -169 -106 -208 -10 -40 11 -36
  64 13 90 82 126 107 246 169 38 19 71 43 73 52 8 42 -336 185 -573 239 -62 14
  -252 46 -340 58 -44 6 -116 15 -161 21 -44 6 -164 13 -265 16 -101 3 -190 7
  -197 10 -23 7 13 57 103 142 48 45 91 82 97 82 5 0 30 14 55 30 24 17 46 30
  48 30 3 0 33 14 67 30 35 17 90 37 123 45 115 27 220 53 258 65 51 15 113 10
  109 -10 -14 -62 -44 -240 -45 -275 -3 -56 25 -32 77 67 28 54 87 146 131 204
  44 59 88 120 98 135 l19 29 -144 -2 c-78 -1 -161 -3 -183 -5z m-3255 -302 c47
  -24 101 -52 120 -61 45 -22 108 -58 140 -79 14 -9 39 -23 55 -31 17 -8 49 -27
  72 -42 23 -15 45 -28 48 -28 4 0 37 -21 74 -47 36 -25 115 -80 175 -121 349
  -239 765 -658 931 -937 37 -63 41 -88 13 -93 -10 -2 -28 14 -49 45 -171 249
  -516 547 -844 728 -27 16 -67 39 -87 52 -49 30 -310 155 -418 200 -47 19 -98
  41 -115 48 -16 7 -43 18 -60 23 -16 6 -95 33 -175 62 -80 28 -210 69 -290 91
  -136 36 -146 38 -158 21 -7 -9 -15 -28 -19 -42 -3 -14 -12 -45 -21 -70 -21
  -62 -29 -278 -11 -284 8 -2 53 -13 101 -24 48 -12 108 -31 133 -42 24 -11 73
  -27 107 -36 67 -17 160 -53 168 -65 3 -4 26 -15 51 -23 74 -25 139 -56 139
  -66 0 -12 -3 -12 -36 0 -33 13 -181 46 -289 65 -44 8 -140 15 -213 15 -130 0
  -132 0 -122 -20 6 -11 17 -20 24 -20 8 0 31 -9 53 -19 44 -23 363 -124 443
  -141 64 -14 206 -46 268 -60 23 -6 70 -10 103 -10 34 0 78 -4 98 -10 20 -5 84
  -21 143 -35 58 -14 139 -37 179 -50 40 -14 78 -25 84 -25 15 0 89 -34 130 -60
  17 -10 39 -19 50 -19 28 0 -31 52 -176 156 -303 216 -729 431 -1109 559 -115
  39 -140 55 -140 90 0 38 18 74 37 74 22 0 233 -68 248 -79 5 -5 28 -14 50 -21
  22 -7 54 -21 70 -30 17 -9 47 -23 68 -30 22 -6 51 -18 65 -26 15 -8 31 -14 36
  -14 17 0 362 -175 449 -227 48 -29 90 -53 93 -53 10 0 232 -139 262 -164 15
  -12 50 -38 77 -56 28 -18 66 -47 86 -64 20 -17 67 -56 105 -86 115 -91 304
  -281 304 -305 0 -20 -27 -52 -57 -69 -6 -3 -58 18 -115 48 -293 153 -773 304
  -1138 358 -36 5 -99 12 -140 16 -41 4 -79 10 -85 13 -5 4 -91 8 -189 10 -137
  3 -180 1 -183 -8 -6 -17 40 -34 102 -39 28 -2 66 -8 85 -14 19 -6 58 -15 85
  -20 62 -12 192 -43 265 -64 163 -47 197 -55 223 -56 15 0 58 -9 95 -20 37 -12
  141 -44 232 -71 91 -28 181 -55 200 -61 58 -17 211 -77 275 -107 33 -16 86
  -41 118 -56 63 -29 78 -48 55 -71 -14 -14 -31 -13 -158 16 -50 11 -287 61
  -335 70 -22 4 -67 13 -100 19 -59 11 -196 43 -265 61 -19 5 -87 21 -150 35
  -63 15 -131 30 -150 35 -19 5 -87 21 -150 35 -63 15 -142 35 -175 45 -33 10
  -87 25 -120 34 -211 58 -380 113 -455 147 -70 32 -102 69 -254 288 -179 259
  -381 734 -338 797 11 18 69 44 95 44 13 0 56 11 97 25 73 25 147 44 250 64 30
  6 73 15 95 20 22 5 184 9 360 8 l320 -2 85 -44z m2531 -507 c8 -6 34 -18 58
  -28 109 -42 274 -176 361 -292 52 -70 108 -176 122 -233 6 -25 14 -50 19 -56
  4 -5 19 -58 33 -117 21 -85 26 -133 26 -228 0 -67 -4 -140 -9 -163 -5 -23 -15
  -73 -22 -112 -11 -65 -79 -280 -110 -350 -22 -51 -79 -133 -96 -139 -38 -15
  -291 112 -503 252 -190 125 -359 290 -409 396 -54 116 -80 227 -88 371 -5 97
  -2 118 34 275 26 111 77 201 171 301 74 79 119 113 170 130 37 11 226 6 243
  -7z m-2697 -1229 c15 -8 35 -15 43 -15 8 0 61 -14 116 -31 238 -71 295 -87
  352 -99 33 -7 73 -16 89 -21 16 -5 55 -9 86 -9 31 0 70 -4 86 -9 28 -8 81 -18
  224 -40 36 -6 118 -14 183 -20 65 -5 121 -12 124 -15 9 -9 -37 -144 -54 -162
  -8 -8 -26 -17 -41 -21 -46 -13 -452 -9 -499 5 -24 6 -60 16 -80 22 -283 74
  -458 164 -595 302 -104 104 -120 158 -34 113z"
          />
          <motion.path
            custom={0.5}
            initial={{ pathLength: 0, fill: "#efecd9" }}
            animate={animationPathBee}
            d="M4287 5903 c-4 -3 7 -23 23 -43 36 -46 37 -55 5 -148 -32 -95 -34
  -194 -4 -259 11 -25 18 -47 16 -49 -5 -6 -70 28 -79 41 -12 16 -20 -2 -9 -22
  27 -48 170 -165 251 -205 88 -44 160 -45 213 -5 21 16 45 39 53 53 19 28 31
  114 17 114 -5 0 -24 -17 -41 -38 -17 -22 -44 -45 -62 -52 -53 -22 -72 13 -106
  190 -3 19 -10 40 -14 45 -4 6 -13 28 -20 50 -14 44 -55 121 -76 146 -8 8 -14
  20 -14 25 0 15 -107 141 -129 153 -10 6 -21 8 -24 4z"
          />
          <motion.path
            custom={0.2}
            initial={{ pathLength: 0, fill: "#efecd9" }}
            animate={animationPathBee}
            d="M4790 5165 c-19 -13 -59 -29 -87 -35 -57 -12 -66 -19 -53 -39 14 -24
  97 -8 132 25 29 29 53 63 46 69 -2 1 -19 -8 -38 -20z"
          />

          {/*-------------------------------------- words -------------------------------------------*/}

          <motion.path
            custom={1}
            initial={{ pathLength: 0, fill: "#efecd9" }}
            animate={animationPathWord}
            d="M1230 3281 c-104 -53 -552 -310 -708 -408 -18 -11 -20 -17 -12 -33 5
    -10 10 -41 10 -68 l0 -50 37 19 c61 31 71 23 28 -21 -21 -22 -47 -40 -57 -40
    -27 0 -22 -17 8 -27 l25 -8 -20 -27 c-18 -23 -47 -125 -38 -134 2 -2 85 51
    185 118 101 66 184 119 187 116 9 -8 24 -585 18 -676 l-6 -92 -51 6 c-43 6
    -213 46 -295 70 -23 7 -23 6 -17 -42 7 -46 5 -51 -23 -78 -17 -17 -31 -33 -31
    -38 0 -4 15 -14 32 -21 18 -8 39 -21 47 -30 12 -15 10 -17 -17 -17 -17 0 -42
    4 -56 10 -22 8 -26 7 -26 -9 0 -11 -12 -34 -26 -51 -15 -17 -25 -33 -23 -35 9
    -8 159 -55 229 -70 80 -18 403 -32 464 -21 33 6 35 10 45 59 22 108 95 840
    106 1052 9 189 5 177 82 205 55 21 68 30 76 54 7 21 6 35 -3 49 -10 17 -9 22
    4 29 16 9 23 48 8 48 -4 0 -18 -7 -30 -16 -12 -8 -37 -20 -54 -25 l-32 -9 44
    45 c28 29 53 45 68 45 23 0 24 3 18 38 -3 20 -6 52 -6 70 0 32 -1 33 -31 27
    -31 -7 -32 -7 -26 24 4 17 5 31 4 31 -1 0 -63 -31 -137 -69z m-10 -186 c0 -9
    -75 -55 -89 -55 -10 0 -5 10 14 30 16 17 39 30 52 30 13 0 23 -2 23 -5z m20
    -70 c-33 -19 -46 -19 -30 0 7 8 22 15 34 15 20 -1 20 -2 -4 -15z m-600 -1155
    l35 -29 -27 -1 c-27 0 -68 30 -68 50 0 18 26 10 60 -20z m37 -91 c22 -8 24
    -12 13 -19 -23 -15 -38 -12 -50 10 -12 23 -4 25 37 9z"
          />
          <motion.path
            custom={2}
            initial={{ pathLength: 0, fill: "#efecd9" }}
            animate={animationPathWord}
            d="M2492 3440 c-151 -41 -316 -148 -446 -292 -322 -356 -459 -790 -344
    -1095 16 -43 26 -56 54 -68 19 -8 35 -22 36 -32 1 -10 2 -26 3 -35 2 -45 100
    -103 198 -119 120 -20 301 28 446 118 47 29 117 88 186 157 342 343 502 816
    384 1133 -20 51 -32 63 -43 44 -4 -5 -22 -5 -43 0 -55 12 -62 11 -56 -10 3
    -12 -2 -20 -16 -24 -13 -3 -21 -13 -21 -26 0 -16 -10 -23 -45 -32 -38 -10 -45
    -15 -45 -35 0 -27 -3 -28 -31 -14 -14 8 -25 6 -46 -7 l-27 -18 16 23 c15 22
    15 26 -5 60 -19 32 -19 35 -3 29 50 -19 65 -18 105 9 55 36 56 69 1 123 -22
    22 -40 44 -40 50 0 17 93 -22 98 -41 5 -20 47 -25 58 -7 3 6 -2 28 -11 49 -24
    53 -73 72 -195 77 -71 2 -113 -2 -168 -17z m310 -393 c11 -18 10 -27 -5 -27
    -16 0 -57 37 -57 50 0 12 52 -7 62 -23z m-225 -48 c42 -16 83 -58 109 -114 29
    -61 33 -178 9 -270 -49 -190 -204 -394 -353 -467 -60 -29 -76 -33 -154 -33
    -81 0 -88 2 -125 31 -21 16 -49 52 -63 80 -22 43 -25 62 -25 149 0 71 6 116
    19 155 76 225 242 412 411 466 50 16 135 17 172 3z m-683 -949 c14 -5 26 -16
    26 -25 0 -21 -12 -19 -38 5 -33 31 -30 36 12 20z m70 -138 c2 -4 6 -19 10 -34
    9 -40 -12 -36 -62 10 -55 51 -54 65 3 45 25 -8 47 -18 49 -21z"
          />

          <motion.path
            custom={3}
            initial={{ pathLength: 0, fill: "#efecd9" }}
            animate={animationPathWord}
            d="M5410 3744 c-25 -13 -56 -40 -69 -59 -28 -42 -38 -44 -47 -10 -7 27
    -11 29 -34 15 -10 -6 -15 -27 -16 -60 -1 -71 -18 -83 -34 -26 -7 26 -15 46
    -19 46 -3 0 -24 -11 -46 -23 l-40 -23 1 -389 c1 -351 9 -527 40 -958 7 -83 8
    -87 25 -71 10 9 26 13 36 10 25 -8 58 52 50 91 -3 16 1 39 8 53 13 23 20 16
    16 -17 -1 -7 15 -27 35 -46 37 -33 38 -34 66 -18 l28 16 -7 83 c-3 46 -1 127
    5 180 6 53 16 189 22 302 12 219 41 542 65 730 8 63 15 118 15 122 0 4 -12 3
    -26 -2 -14 -6 -27 -10 -28 -10 -2 0 -1 20 2 45 2 25 3 45 1 45 -2 0 -24 -12
    -49 -26z m-110 -268 c0 -25 -4 -47 -9 -50 -12 -8 -24 48 -16 74 11 35 25 22
    25 -24z m-50 -113 c-1 -24 -2 -26 -11 -10 -5 9 -7 22 -4 27 10 17 15 11 15
    -17z"
          />

          <motion.path
            custom={4}
            initial={{ pathLength: 0, fill: "#efecd9" }}
            animate={animationPathWord}
            d="M6653 3935 c-170 -57 -270 -115 -381 -219 -121 -115 -237 -309 -287
    -483 -27 -93 -51 -273 -37 -282 4 -3 20 -39 35 -79 25 -70 26 -76 11 -104 -15
    -29 -15 -33 20 -102 69 -140 222 -257 356 -272 94 -10 284 31 494 107 88 32
    89 32 68 50 -15 11 -22 28 -22 51 0 23 -6 37 -21 46 -18 11 -23 10 -40 -12
    -14 -17 -30 -26 -49 -26 -36 0 -32 16 15 50 29 22 32 27 19 41 -8 8 -14 34
    -14 57 0 23 -2 42 -4 42 -2 0 -37 -16 -78 -35 -100 -48 -180 -62 -252 -46
    -108 24 -176 102 -176 201 0 76 17 134 72 250 44 92 61 115 137 190 59 58 113
    100 171 132 47 27 89 49 94 51 5 2 -1 22 -13 45 l-22 43 21 34 c15 24 18 39
    12 50 -8 15 -10 15 -21 1 -8 -9 -25 -16 -40 -16 l-26 1 33 29 c24 23 31 36 27
    53 -4 13 3 44 15 71 21 51 19 116 -4 116 -6 0 -57 -16 -113 -35z m30 -185
    c-26 -36 -75 -61 -90 -46 -15 15 75 84 110 86 5 0 -4 -18 -20 -40z m-95 -150
    c-7 -11 -21 -20 -32 -20 -18 0 -19 1 -1 20 10 11 24 20 32 20 11 0 11 -4 1
    -20z m-501 -917 c-10 -22 -26 -31 -28 -15 0 4 -2 25 -4 47 -3 22 -2 49 2 60 5
    16 9 11 23 -25 13 -34 15 -50 7 -67z m617 -38 c-15 -23 -54 -35 -54 -17 0 8
    50 41 63 42 4 0 0 -11 -9 -25z"
          />
          <motion.path
            custom={4}
            initial={{ pathLength: 0, fill: "#efecd9" }}
            animate={animationPathWord}
            d="M6359 4180 c-61 -151 -74 -190 -62 -194 23 -9 33 -7 33 8 0 7 7 19
    15 26 13 11 15 8 15 -18 0 -36 29 -59 48 -40 9 9 12 5 12 -16 0 -56 33 -20
    125 136 l93 157 -25 16 c-18 12 -28 14 -36 6 -17 -17 -29 -13 -22 9 5 17 2 20
    -24 20 -17 0 -31 4 -31 9 0 12 -49 71 -58 71 -4 0 -41 -86 -83 -190z m167 74
    c-4 -9 -9 -15 -11 -12 -3 3 -3 13 1 22 4 9 9 15 11 12 3 -3 3 -13 -1 -22z"
          />
          <motion.path
            custom={5}
            initial={{ pathLength: 0, fill: "#efecd9" }}
            animate={animationPathWord}
            d="M1376 999 c-111 -27 -363 -189 -296 -189 6 0 10 -9 10 -19 0 -14 6
    -18 23 -15 12 2 16 2 10 -2 -7 -3 -13 -12 -13 -20 0 -8 -4 -14 -9 -14 -16 0
    -19 -25 -6 -43 11 -15 14 -16 25 -2 11 13 10 14 -6 8 -17 -6 -17 -5 -6 9 7 9
    22 16 33 15 16 -1 19 -9 20 -57 0 -30 2 -82 4 -115 9 -128 14 -222 15 -262 0
    -24 5 -43 10 -43 18 0 70 56 71 76 0 14 4 11 14 -11 17 -37 21 -25 30 76 l6
    76 84 66 c142 111 214 223 218 334 1 62 -12 91 -53 120 -27 19 -131 26 -184
    12z m-196 -163 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10
    -2 10 -4z m250 -24 c21 -17 22 -22 11 -54 -12 -35 -107 -136 -118 -125 -6 6
    15 176 23 189 9 15 61 8 84 -10z"
          />
          <motion.path
            custom={6}
            initial={{ pathLength: 0, fill: "#efecd9" }}
            animate={animationPathWord}
            d="M2009 1047 c-69 -29 -91 -44 -155 -107 -88 -87 -134 -196 -133 -315
    0 -84 26 -154 64 -175 17 -9 31 -26 33 -38 8 -55 126 -72 243 -34 120 39 121
    39 107 61 -6 10 -17 17 -23 14 -9 -3 -11 6 -9 29 6 57 -4 62 -77 38 -54 -18
    -69 -20 -101 -10 -74 22 -88 87 -42 190 28 63 95 135 153 165 31 15 32 18 17
    34 -15 16 -15 20 -1 31 21 17 10 28 -22 22 l-28 -5 23 22 c12 12 20 26 17 31
    -3 5 -1 11 5 15 14 9 12 55 -2 55 -7 0 -38 -11 -69 -23z m16 -47 c-3 -5 -11
    -10 -16 -10 -6 0 -7 5 -4 10 3 6 11 10 16 10 6 0 7 -4 4 -10z m-230 -510 c3
    -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m295 -20
    c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z"
          />
          <motion.path
            custom={6}
            initial={{ pathLength: 0, fill: "#efecd9" }}
            animate={animationPathWord}
            d="M1918 1181 c-18 -28 -36 -51 -40 -51 -4 0 -23 14 -41 30 -38 33 -57
    38 -57 15 0 -8 -4 -15 -10 -15 -5 0 -10 -7 -10 -15 0 -8 -6 -15 -14 -15 -37 0
    -20 -22 50 -64 42 -25 80 -46 85 -46 14 0 11 18 -3 23 -7 3 -3 6 9 6 12 1 23
    -4 25 -10 2 -7 30 17 61 52 52 57 66 83 43 79 -4 -1 -21 13 -36 30 l-29 32
    -33 -51z"
          />
          <motion.path
            custom={7}
            initial={{ pathLength: 0, fill: "#efecd9" }}
            animate={animationPathWord}
            d="M2656 1164 c-55 -18 -109 -42 -120 -52 -12 -10 -57 -38 -101 -62 -91
    -49 -97 -55 -91 -92 3 -15 0 -31 -8 -37 -8 -7 -12 -20 -9 -30 3 -11 0 -29 -7
    -41 -16 -29 -6 -36 24 -16 33 21 36 20 36 -8 0 -13 -9 -30 -21 -38 -16 -10
    -22 -26 -24 -58 -3 -57 3 -72 25 -65 17 5 19 -2 22 -79 2 -46 -1 -92 -7 -100
    -7 -11 -6 -22 3 -36 7 -11 10 -31 6 -45 -8 -34 0 -32 55 14 68 57 128 101 198
    146 l62 40 -1 47 c-1 27 -4 48 -6 48 -3 0 -27 -13 -54 -30 -26 -16 -53 -30
    -59 -30 -6 0 -24 -9 -40 -21 l-29 -20 0 73 c0 40 5 80 10 88 5 8 46 33 91 55
    77 37 83 43 100 87 l18 47 -42 -3 c-23 -1 -64 -12 -91 -24 -59 -27 -66 -27
    -66 -3 0 25 11 33 115 77 50 21 96 42 103 47 14 11 17 61 2 52 -5 -3 -10 -1
    -10 4 0 6 4 11 9 11 5 0 11 7 14 14 4 11 1 13 -11 9 -16 -5 -16 -5 -1 8 23 19
    35 59 17 58 -7 0 -58 -16 -112 -35z"
          />
          <motion.path
            custom={8}
            initial={{ pathLength: 0, fill: "#efecd9" }}
            animate={animationPathWord}
            d="M3115 1198 c-11 -6 -26 -18 -33 -27 -11 -13 -14 -14 -21 -2 -12 19
    -33 3 -26 -19 3 -10 1 -21 -5 -25 -6 -3 -10 3 -10 14 0 25 -1 25 -36 9 l-27
    -13 8 -245 c4 -135 8 -263 9 -285 1 -22 6 -43 11 -47 6 -5 6 -8 -2 -8 -8 0
    -10 -12 -6 -38 3 -20 7 -38 8 -40 1 -2 42 24 91 57 49 33 116 75 149 93 41 23
    61 41 63 56 2 12 8 22 13 22 5 0 9 10 9 22 0 17 -3 19 -12 10 -17 -17 -33 -15
    -18 3 7 8 19 15 26 15 8 0 14 7 14 15 0 13 -4 14 -22 4 -14 -8 -23 -8 -25 -2
    -2 6 -37 -8 -78 -29 l-75 -39 0 33 c0 72 23 284 45 422 4 21 2 27 -9 23 -9 -4
    -16 1 -18 13 -2 16 -7 17 -23 8z m-58 -110 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13
    3 -3 4 -12 1 -19z"
          />

          <motion.path
            custom={9}
            initial={{ pathLength: 0, fill: "#efecd9" }}
            animate={animationPathWord}
            d="M3787 1309 c-11 -6 -17 -20 -15 -32 1 -12 -2 -22 -7 -22 -6 0 -10 8
    -9 18 1 15 -1 15 -16 2 -22 -20 -30 -19 -30 4 0 18 -2 18 -43 3 -23 -10 -57
    -27 -74 -39 -17 -13 -35 -23 -40 -23 -27 0 -44 -31 -58 -105 -41 -225 -68
    -561 -44 -575 18 -12 29 -3 29 25 0 13 5 27 11 31 9 5 10 -1 5 -22 -7 -28 -7
    -28 13 -10 12 11 21 26 21 34 0 8 6 12 14 9 15 -6 20 7 31 84 6 44 10 48 71
    84 36 20 67 35 69 33 3 -2 11 -35 19 -72 7 -37 16 -69 19 -72 12 -12 91 23
    109 49 18 25 19 33 9 93 -7 36 -9 69 -5 75 3 6 8 27 9 47 2 20 6 47 10 60 7
    21 5 22 -17 17 l-25 -6 -6 98 c-4 54 -7 126 -7 161 0 65 -6 72 -43 51z m-30
    -131 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m-71 -190 c6 -56 6
    -57 -27 -77 -19 -12 -37 -21 -40 -21 -4 0 5 48 20 106 28 114 33 114 47 -8z
    m-156 -328 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4
    10 -10z"
          />
          <motion.path
            custom={10}
            initial={{ pathLength: 0, fill: "#efecd9" }}
            animate={animationPathWord}
            d="M4259 1387 c-36 -12 -91 -38 -122 -56 -74 -45 -146 -110 -129 -117 6
    -3 12 -12 12 -20 0 -8 6 -11 15 -8 8 4 15 1 15 -5 0 -6 -3 -11 -7 -11 -5 0
    -13 -11 -20 -25 -12 -28 1 -45 20 -26 6 6 18 11 27 11 15 0 18 -20 24 -147 14
    -308 16 -331 38 -325 11 2 25 15 30 28 6 13 15 24 20 24 4 0 8 8 9 18 0 11 5
    8 13 -11 15 -35 26 -25 26 24 l0 38 43 -15 c23 -7 88 -27 145 -43 95 -26 102
    -27 97 -10 -4 11 -2 19 4 19 22 0 10 30 -14 36 -14 3 -25 10 -25 16 0 5 5 6
    11 3 5 -4 21 -4 35 -1 39 10 31 44 -13 62 -21 8 -70 32 -110 52 l-72 36 73 76
    c88 90 127 161 134 245 5 72 -13 117 -58 140 -43 22 -143 19 -221 -8z m-154
    -157 c-3 -5 -11 -10 -16 -10 -6 0 -7 5 -4 10 3 6 11 10 16 10 6 0 7 -4 4 -10z
    m253 -12 c32 -32 1 -101 -69 -158 l-42 -33 7 69 c13 133 13 134 55 134 20 0
    42 -5 49 -12z m-191 -450 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z"
          />

          <motion.path
            custom={11}
            initial={{ pathLength: 0, fill: "#efecd9" }}
            animate={animationPathWord}
            d="M4950 1491 c-86 -64 -208 -193 -243 -258 -15 -28 -31 -71 -36 -96
    -15 -83 22 -130 134 -167 124 -41 132 -72 45 -162 -28 -29 -50 -53 -50 -55 0
    -10 28 0 49 19 14 13 20 16 14 8 -18 -20 -16 -30 7 -30 12 0 20 -7 20 -17 1
    -30 117 103 151 173 25 51 31 72 26 104 -7 54 -20 68 -95 101 -34 16 -65 35
    -68 44 -12 30 20 77 107 158 62 58 86 86 80 96 -6 9 -11 10 -15 2 -4 -6 -12
    -11 -19 -11 -7 0 -5 7 5 16 16 16 15 23 -10 63 -1 3 -9 -4 -16 -15 -8 -10 -18
    -15 -23 -11 -4 5 4 19 19 30 23 19 25 24 14 40 -7 9 -17 17 -22 17 -5 -1 -38
    -22 -74 -49z m60 -75 c0 -2 -8 -10 -17 -17 -16 -13 -17 -12 -4 4 13 16 21 21
    21 13z"
          />
          <motion.path
            custom={12}
            initial={{ pathLength: 0, fill: "#efecd9" }}
            animate={animationPathWord}
            d="M5475 1536 c-66 -34 -149 -80 -184 -102 -60 -37 -63 -41 -67 -83 -2
    -24 1 -49 6 -56 8 -9 8 -15 0 -20 -10 -6 -15 -55 -6 -55 3 0 26 14 51 31 25
    17 48 30 49 28 2 -2 6 -76 10 -164 10 -254 15 -293 36 -288 11 3 16 11 13 23
    -3 10 0 21 6 24 6 4 11 2 11 -5 0 -7 3 -9 7 -6 3 4 12 2 19 -4 33 -28 42 -4
    48 138 7 141 22 317 32 364 4 22 16 31 63 48 53 19 59 25 64 54 6 39 2 44 -18
    27 -9 -7 -18 -10 -21 -8 -3 3 6 15 20 26 30 23 36 72 10 72 -8 0 -12 5 -9 10
    13 22 -25 7 -140 -54z m65 -50 c0 -2 -7 -7 -16 -10 -8 -3 -12 -2 -9 4 6 10 25
    14 25 6z m-123 -528 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z"
          />
          <motion.path
            custom={13}
            initial={{ pathLength: 0, fill: "#efecd9" }}
            animate={animationPathWord}
            d="M6229 1664 c-7 -8 -21 -13 -31 -10 -14 3 -22 -3 -28 -20 -12 -31 -24
    -31 -18 0 5 24 4 24 -18 9 -14 -9 -34 -13 -48 -9 -22 5 -24 1 -49 -92 -14 -53
    -38 -154 -53 -224 -16 -70 -29 -126 -30 -125 -6 7 -13 139 -14 240 0 94 -3
    117 -14 117 -8 0 -16 8 -18 18 -3 14 -9 12 -35 -16 -18 -19 -33 -27 -35 -20
    -8 22 -28 -3 -29 -35 0 -30 -1 -31 -10 -8 -8 20 -11 22 -27 10 -9 -7 -18 -14
    -20 -15 -12 -7 107 -604 120 -604 11 0 45 35 50 51 4 12 8 12 20 1 13 -11 19
    -8 37 15 11 15 21 22 21 16 0 -9 6 -10 23 -2 18 8 27 29 46 102 13 51 61 207
    107 348 46 141 84 259 84 263 0 11 -17 6 -31 -10z m-359 -237 c0 -5 -4 -5 -10
    -2 -5 3 -10 14 -10 23 0 15 2 15 10 2 5 -8 10 -19 10 -23z"
          />
          <motion.path
            custom={14}
            initial={{ pathLength: 0, fill: "#efecd9" }}
            animate={animationPathWord}
            d="M6729 1720 c-180 -30 -383 -275 -406 -490 -7 -70 12 -156 37 -170 10
    -6 20 -20 22 -31 9 -62 154 -77 253 -26 180 91 327 326 324 516 -1 94 -48 137
    -96 89 -45 -47 -53 -51 -68 -38 -18 15 -19 32 -2 29 23 -4 47 13 47 33 0 12
    -8 27 -17 34 -23 17 0 19 27 2 10 -7 22 -9 25 -6 13 12 -16 48 -43 54 -51 11
    -57 11 -103 4z m20 -214 c86 -45 61 -208 -49 -318 -91 -91 -168 -100 -218 -27
    -31 44 -25 109 18 196 59 119 173 188 249 149z m-289 -497 c0 -6 -7 -6 -20 1
    -11 6 -20 15 -20 21 0 6 7 6 20 -1 11 -6 20 -15 20 -21z"
          />
        </g>
      </svg>
    </motion.div>
  );
};

export default LogoAnimation;
