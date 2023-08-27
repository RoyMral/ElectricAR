import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function Header() {
  return (
    <header className="border text-white mx-auto bg-gradient-to-b from-[#002F67FC] to-[#00465DC4] sm:w-[640px] md:w-[768px] lg:w-[1024px] lg:h-[640px]">
      <NavBar />
      <div className="section text-center sm:text-start mt-[30px] sm:flex sm:mt-[30px] md:mt-[-20px] lg:mt-[10px] mb-[20px] lg:mb-[-50px] ">
        <div className="md:mt-[70px] lg:mt-[115px] sm:ml-[32px] lg:w-[456px]">
          <h1 className="font-bold text-xl sm:text-2xl md:text-4xl mb-[34px]">
            Aprendizaje entretenido y educativo
          </h1>
          <p className="w-[85%] mx-auto text-base sm:w-[100%] sm:text-base md:text-[20px]">
            Adéntrate en el emocionante mundo de la producción de energía
            eléctrica en Costa Rica de la mano con la Realidad Aumentada.
          </p>
        </div>
        <div className="sm:mt-[-20px] md:mt-0">
          <svg
            className="mx-auto w-[288px] sm:w-[308px] md:w-[408px] lg:w-[488px]"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0.00 0.00 559.00 447.00"
          >
            <g strokeWidth="2.00" fill="none" strokeLinecap="butt">
              <path
                stroke="#e5cf7b"
                vectorEffect="non-scaling-stroke"
                d="
            M 345.76 112.03
            Q 375.63 139.34 375.75 180.25
            Q 375.76 182.29 374.85 186.96"
              />
              <path
                stroke="#e4bc57"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 374.85 186.96
            C 372.71 198.37 367.89 206.20 362.60 216.15"
              />
              <path
                stroke="#fdbe5b"
                vectorEffect="non-scaling-stroke"
                d="
            M 362.60 216.15
            Q 362.73 215.86 361.72 216.03"
              />
              <path
                stroke="#e0cd7e"
                vectorEffect="non-scaling-stroke"
                d="
            M 361.72 216.03
            L 361.54 204.78"
              />
              <path
                stroke="#a6ab60"
                vectorEffect="non-scaling-stroke"
                d="
            M 361.54 204.78
            L 359.29 196.87
            Q 359.14 196.32 358.57 196.30
            L 354.04 196.16"
              />
              <path
                stroke="#b2b56d"
                vectorEffect="non-scaling-stroke"
                d="
            M 354.04 196.16
            C 354.00 194.98 354.62 191.50 352.52 192.03"
              />
              <path
                stroke="#ffc203"
                vectorEffect="non-scaling-stroke"
                d="
            M 352.52 192.03
            C 362.72 156.32 342.63 118.90 307.40 107.94
            C 249.32 89.88 198.62 150.59 226.48 204.55
            Q 236.51 223.99 256.93 233.86"
              />
              <path
                stroke="#a3823a"
                vectorEffect="non-scaling-stroke"
                d="
            M 256.93 233.86
            L 268.38 281.25"
              />
              <path
                stroke="#e0cd7e"
                vectorEffect="non-scaling-stroke"
                d="
            M 268.38 281.25
            L 235.80 280.89"
              />
              <path
                stroke="#ad7b01"
                strokeOpacity="0.737"
                vectorEffect="non-scaling-stroke"
                d="
            M 235.80 280.89
            L 235.07 271.91"
              />
              <path
                stroke="#cc9102"
                strokeOpacity="0.627"
                vectorEffect="non-scaling-stroke"
                d="
            M 235.07 271.91
            Q 234.27 259.80 231.68 248.46"
              />
              <path
                stroke="#e8a502"
                strokeOpacity="0.549"
                vectorEffect="non-scaling-stroke"
                d="
            M 231.68 248.46
            L 229.66 242.93"
              />
              <path
                stroke="#b9d4de"
                strokeOpacity="0.549"
                vectorEffect="non-scaling-stroke"
                d="
            M 422.80 237.51
            L 418.83 237.60"
              />
              <path
                stroke="#c7d9df"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 418.83 237.60
            L 413.20 234.89"
              />
              <path
                stroke="#e5cf7b"
                vectorEffect="non-scaling-stroke"
                d="
            M 413.20 234.89
            Q 411.93 229.92 412.18 223.45"
              />
              <path
                stroke="#c7d9df"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 412.18 223.45
            Q 412.77 223.37 412.73 224.39
            A 0.69 0.68 -32.9 0 0 414.05 224.67
            Q 414.84 222.74 416.11 220.86
            Q 416.40 220.43 416.86 220.16
            C 457.77 196.33 446.84 136.63 400.25 128.80
            C 389.99 127.08 380.14 129.30 370.77 133.47
            C 368.98 134.27 367.12 133.95 365.21 134.02
            Q 364.68 134.04 364.83 134.55
            Q 365.13 135.57 365.66 136.42
            C 368.38 140.74 370.33 145.79 371.91 150.55
            A 0.65 0.65 0.0 0 0 373.18 150.39
            C 374.00 139.37 395.93 139.35 403.03 141.60
            C 434.28 151.53 440.81 189.69 414.21 209.23
            Q 406.71 214.74 401.58 207.41"
              />
              <path
                stroke="#74889d"
                vectorEffect="non-scaling-stroke"
                d="
            M 401.58 207.41
            L 402.59 205.38"
              />
              <path
                stroke="#e5cf7b"
                vectorEffect="non-scaling-stroke"
                d="
            M 402.59 205.38
            C 407.18 196.13 401.36 186.39 390.61 192.69
            Q 389.12 193.56 386.96 193.65
            C 381.52 193.86 385.26 199.10 387.73 200.32"
              />
              <path
                stroke="#e3d8d4"
                vectorEffect="non-scaling-stroke"
                d="
            M 387.73 200.32
            C 386.80 203.21 384.48 211.06 387.50 213.78
            A 1.01 1.00 -34.2 0 0 388.52 213.97
            L 389.22 213.71
            A 0.56 0.56 0.0 0 1 389.97 214.21
            Q 390.00 214.74 389.22 215.22"
              />
              <path
                stroke="#e5cf7b"
                vectorEffect="non-scaling-stroke"
                d="
            M 389.22 215.22
            Q 388.55 215.26 388.16 215.53"
              />
              <path
                stroke="#74889d"
                vectorEffect="non-scaling-stroke"
                d="
            M 388.16 215.53
            L 386.63 215.52"
              />
              <path
                stroke="#e5e8ee"
                vectorEffect="non-scaling-stroke"
                d="
            M 386.63 215.52
            L 373.65 210.07"
              />
              <path
                stroke="#e3d8d4"
                vectorEffect="non-scaling-stroke"
                d="
            M 373.65 210.07
            Q 373.84 205.66 371.93 205.03"
              />
              <path
                stroke="#c7d9df"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 371.93 205.03
            Q 373.09 200.34 376.58 197.03
            A 1.85 1.82 76.9 0 0 377.08 196.21
            C 377.89 193.34 376.69 191.01 376.23 188.17
            Q 376.16 187.76 375.75 187.75
            Q 375.59 187.75 375.42 187.74
            Q 375.09 187.74 375.03 187.42
            Q 374.99 187.17 374.85 186.96"
              />
              <path
                stroke="#aac5cd"
                strokeOpacity="0.792"
                vectorEffect="non-scaling-stroke"
                d="
            M 346.80 111.48
            L 347.22 111.54
            A 0.45 0.44 -4.2 0 0 347.71 110.98
            L 346.63 107.30"
              />
              <path
                stroke="#b2c26d"
                vectorEffect="non-scaling-stroke"
                d="
            M 352.52 192.03
            L 311.74 192.25"
              />
              <path
                stroke="#a6b861"
                vectorEffect="non-scaling-stroke"
                d="
            M 311.74 192.25
            L 301.82 192.35
            Q 301.34 192.35 301.10 192.77
            L 300.49 193.82"
              />
              <path
                stroke="#a38f3b"
                vectorEffect="non-scaling-stroke"
                d="
            M 300.49 193.82
            L 248.27 193.79
            Q 247.73 193.79 247.81 194.32
            C 249.82 207.22 254.02 220.19 256.93 233.86"
              />
              <path
                stroke="#e4bc57"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 412.18 223.45
            C 411.14 218.86 410.41 214.90 404.86 214.27"
              />
              <path
                stroke="#646c7d"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 404.86 214.27
            Q 403.10 213.49 401.00 213.76"
              />
              <path
                stroke="#e2c5bb"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 401.00 213.76
            Q 398.65 212.90 397.78 210.14"
              />
              <path
                stroke="#646c7d"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 397.78 210.14
            L 401.58 207.41"
              />
              <path
                stroke="#5a628a"
                vectorEffect="non-scaling-stroke"
                d="
            M 185.28 190.00
            Q 184.05 189.36 182.95 189.75
            Q 182.44 189.92 182.45 190.46
            L 182.96 223.57
            Q 182.97 224.16 183.55 224.18
            L 186.05 224.26"
              />
              <path
                stroke="#7c8296"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 186.05 224.26
            L 191.74 224.39
            Q 192.45 224.41 191.96 223.89
            L 186.24 217.88"
              />
              <path
                stroke="#5a628a"
                vectorEffect="non-scaling-stroke"
                d="
            M 186.24 217.88
            L 186.00 216.60
            Q 185.89 216.02 186.46 216.17
            L 187.71 216.51"
              />
              <path
                stroke="#899cb3"
                vectorEffect="non-scaling-stroke"
                d="
            M 187.71 216.51
            C 191.09 220.15 194.98 225.79 198.89 223.90"
              />
              <path
                stroke="#5a628a"
                vectorEffect="non-scaling-stroke"
                d="
            M 210.72 224.20
            L 210.80 230.90"
              />
              <path
                stroke="#5a628a"
                vectorEffect="non-scaling-stroke"
                d="
            M 207.28 230.66
            C 199.38 230.25 191.21 229.69 183.60 230.77
            A 0.66 0.65 86.0 0 0 183.04 231.42
            L 183.33 253.36
            A 0.61 0.60 90.0 0 0 183.92 253.96
            L 187.10 253.97"
              />
              <path
                stroke="#3c4362"
                strokeOpacity="0.580"
                vectorEffect="non-scaling-stroke"
                d="
            M 187.10 253.97
            L 191.36 253.97
            A 0.48 0.48 0.0 0 0 191.60 253.08
            Q 189.50 251.82 187.56 249.07"
              />
              <path
                stroke="#5a628a"
                vectorEffect="non-scaling-stroke"
                d="
            M 187.56 249.07
            Q 187.73 248.60 186.81 247.64
            Q 186.45 247.27 186.48 246.75
            Q 186.52 246.05 187.18 245.92"
              />
              <path
                stroke="#56637b"
                strokeOpacity="0.792"
                vectorEffect="non-scaling-stroke"
                d="
            M 187.18 245.92
            Q 190.87 248.94 193.94 252.84"
              />
              <path
                stroke="#404768"
                strokeOpacity="0.549"
                vectorEffect="non-scaling-stroke"
                d="
            M 204.27 253.89
            L 219.46 253.99"
              />
              <path
                stroke="#5a628a"
                vectorEffect="non-scaling-stroke"
                d="
            M 219.46 253.99
            L 219.30 260.26"
              />
              <path
                stroke="#404768"
                strokeOpacity="0.549"
                vectorEffect="non-scaling-stroke"
                d="
            M 219.30 260.26
            L 206.22 260.28"
              />
              <path
                stroke="#56637b"
                strokeOpacity="0.792"
                vectorEffect="non-scaling-stroke"
                d="
            M 197.54 260.25
            L 187.27 260.20"
              />
              <path
                stroke="#5a628a"
                vectorEffect="non-scaling-stroke"
                d="
            M 187.27 260.20
            L 183.96 260.24
            A 0.55 0.55 0.0 0 0 183.42 260.79
            L 183.78 285.89
            A 0.65 0.64 -89.1 0 0 184.39 286.53
            L 191.21 286.85
            A 0.76 0.76 0.0 0 0 191.80 285.57
            L 189.72 283.35
            Q 189.41 283.03 189.27 283.45
            Q 189.21 283.63 189.19 283.78"
              />
              <path
                stroke="#3c4362"
                strokeOpacity="0.580"
                vectorEffect="non-scaling-stroke"
                d="
            M 189.19 283.78
            Q 188.48 283.31 188.90 283.07"
              />
              <path
                stroke="#5a628a"
                vectorEffect="non-scaling-stroke"
                d="
            M 188.90 283.07
            Q 186.86 280.94 187.91 278.78"
              />
              <path
                stroke="#56637b"
                strokeOpacity="0.792"
                vectorEffect="non-scaling-stroke"
                d="
            M 187.91 278.78
            Q 187.95 278.88 187.98 278.98"
              />
              <path
                stroke="#7c8296"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 187.98 278.98
            Q 189.12 281.01 191.35 282.38"
              />
              <path
                stroke="#899cb3"
                vectorEffect="non-scaling-stroke"
                d="
            M 191.35 282.38
            L 195.34 286.26
            Q 195.71 286.62 196.24 286.62
            L 209.71 286.54"
              />
              <path
                stroke="#5a628a"
                vectorEffect="non-scaling-stroke"
                d="
            M 209.71 286.54
            Q 213.44 285.89 211.63 292.57"
              />
              <path
                stroke="#899cb3"
                vectorEffect="non-scaling-stroke"
                d="
            M 211.63 292.57
            L 187.42 292.53"
              />
              <path
                stroke="#5a628a"
                vectorEffect="non-scaling-stroke"
                d="
            M 187.42 292.53
            Q 185.65 292.36 184.28 292.84
            Q 183.84 292.99 183.84 293.46
            L 184.66 352.64
            A 0.61 0.60 -0.5 0 1 184.05 353.25
            L 175.78 353.25
            A 0.71 0.71 0.0 0 1 175.07 352.53
            L 175.85 293.27
            Q 175.85 292.76 175.36 292.63
            Q 173.43 292.11 171.92 292.89"
              />
              <path
                stroke="#5a628a"
                vectorEffect="non-scaling-stroke"
                d="
            M 150.48 292.75
            L 150.01 286.68"
              />
              <path
                stroke="#899cb3"
                vectorEffect="non-scaling-stroke"
                d="
            M 164.94 281.85
            L 166.47 281.68"
              />
              <path
                stroke="#7c8296"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 166.47 281.68
            Q 166.99 281.73 167.35 282.34
            Q 167.60 282.77 167.94 282.40
            L 170.99 279.06"
              />
              <path
                stroke="#5a628a"
                vectorEffect="non-scaling-stroke"
                d="
            M 170.99 279.06
            Q 171.64 278.73 172.03 278.75
            Q 172.69 278.79 172.42 279.40
            L 171.32 281.89"
              />
              <path
                stroke="#3c4362"
                strokeOpacity="0.580"
                vectorEffect="non-scaling-stroke"
                d="
            M 171.32 281.89
            Q 169.82 284.21 167.21 285.45
            A 0.54 0.54 0.0 0 0 167.44 286.48
            L 171.74 286.48"
              />
              <path
                stroke="#5a628a"
                vectorEffect="non-scaling-stroke"
                d="
            M 171.74 286.48
            L 175.24 286.44
            A 0.70 0.70 0.0 0 0 175.93 285.75
            L 176.35 261.10
            Q 176.36 260.58 175.87 260.41
            Q 174.08 259.81 172.77 260.29"
              />
              <path
                stroke="#353b56"
                strokeOpacity="0.663"
                vectorEffect="non-scaling-stroke"
                d="
            M 152.07 260.31
            L 138.94 260.37"
              />
              <path
                stroke="#5a628a"
                vectorEffect="non-scaling-stroke"
                d="
            M 138.94 260.37
            Q 139.35 256.85 138.58 254.04"
              />
              <path
                stroke="#323852"
                strokeOpacity="0.698"
                vectorEffect="non-scaling-stroke"
                d="
            M 138.58 254.04
            L 149.58 253.69
            Q 150.22 253.67 149.63 253.41
            L 148.70 252.99"
              />
              <path
                stroke="#899cb3"
                vectorEffect="non-scaling-stroke"
                d="
            M 148.70 252.99
            C 152.13 253.45 155.87 254.94 159.16 252.86"
              />
              <path
                stroke="#56637b"
                strokeOpacity="0.792"
                vectorEffect="non-scaling-stroke"
                d="
            M 159.16 252.86
            Q 159.87 254.02 161.96 253.72"
              />
              <path
                stroke="#5a628a"
                vectorEffect="non-scaling-stroke"
                d="
            M 172.31 244.59
            Q 172.89 246.39 172.73 247.71"
              />
              <path
                stroke="#5a628a"
                vectorEffect="non-scaling-stroke"
                d="
            M 172.96 253.76
            Q 174.69 254.35 175.96 253.86
            A 0.83 0.83 0.0 0 0 176.49 253.10
            L 176.53 231.44
            Q 176.53 230.79 175.88 230.78
            C 174.39 230.76 173.26 230.31 171.84 230.31
            Q 161.34 230.24 150.74 230.22
            A 0.63 0.63 0.0 0 1 150.12 229.58
            L 150.27 224.42"
              />
              <path
                stroke="#899cb3"
                vectorEffect="non-scaling-stroke"
                d="
            M 150.27 224.42
            L 160.27 224.40"
              />
              <path
                stroke="#5a628a"
                vectorEffect="non-scaling-stroke"
                d="
            M 160.27 224.40
            Q 162.41 224.82 163.70 224.06"
              />
              <path
                stroke="#7c8296"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 165.25 222.55
            Q 169.46 220.27 171.83 215.99"
              />
              <path
                stroke="#5a628a"
                vectorEffect="non-scaling-stroke"
                d="
            M 172.72 214.96
            C 174.01 214.87 173.89 216.06 173.66 216.87"
              />
              <path
                stroke="#7c8296"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 173.66 216.87
            L 166.80 223.73
            Q 166.31 224.22 166.98 224.42
            Q 170.31 225.43 173.83 224.22"
              />
              <path
                stroke="#5a628a"
                vectorEffect="non-scaling-stroke"
                d="
            M 173.83 224.22
            Q 175.21 224.63 176.19 224.38
            Q 176.72 224.24 176.73 223.70
            L 177.32 190.78
            A 0.87 0.87 0.0 0 0 176.95 190.07
            Q 175.33 188.94 174.33 189.90"
              />
              <path
                stroke="#e2c5bb"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 371.93 205.03
            Q 370.57 210.39 371.99 216.13
            A 0.54 0.53 -15.4 0 1 371.62 216.77
            Q 370.41 217.14 370.26 218.01"
              />
              <path
                stroke="#e4bc57"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 370.26 218.01
            L 369.88 218.70"
              />
              <path
                stroke="#e2c5bb"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 369.88 218.70
            Q 365.23 219.35 362.60 216.15"
              />
              <path
                stroke="#9298b0"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 173.83 224.22
            Q 174.37 220.47 173.66 216.87"
              />
              <path
                stroke="#9cb0cb"
                vectorEffect="non-scaling-stroke"
                d="
            M 187.84 216.09
            Q 187.68 216.17 187.71 216.51"
              />
              <path
                stroke="#9298b0"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 186.24 217.88
            L 186.05 224.26"
              />
              <path
                stroke="#8e6e24"
                vectorEffect="non-scaling-stroke"
                d="
            M 402.59 205.38
            L 397.77 204.20"
              />
              <path
                stroke="#fdbe5b"
                vectorEffect="non-scaling-stroke"
                d="
            M 397.77 204.20
            L 387.73 200.32"
              />
              <path
                stroke="#58abcb"
                vectorEffect="non-scaling-stroke"
                d="
            M 354.04 196.16
            L 312.27 196.14
            Q 311.68 196.14 311.69 195.55
            L 311.74 192.25"
              />
              <path
                stroke="#87c3dc"
                vectorEffect="non-scaling-stroke"
                d="
            M 361.54 204.78
            L 315.25 204.80"
              />
              <path
                stroke="#58abcb"
                vectorEffect="non-scaling-stroke"
                d="
            M 315.25 204.80
            L 292.49 204.89"
              />
              <path
                stroke="#a6b861"
                vectorEffect="non-scaling-stroke"
                d="
            M 292.49 204.89
            L 294.12 198.25"
              />
              <path
                stroke="#497898"
                vectorEffect="non-scaling-stroke"
                d="
            M 294.12 198.25
            Q 294.31 195.47 299.44 196.28
            Q 300.78 196.49 301.03 195.16
            Q 301.17 194.42 300.49 193.82"
              />
              <path
                stroke="#a38f3b"
                vectorEffect="non-scaling-stroke"
                d="
            M 294.12 198.25
            L 253.36 197.91
            A 0.42 0.41 -6.5 0 0 252.95 198.42
            L 262.20 236.85"
              />
              <path
                stroke="#a3823a"
                vectorEffect="non-scaling-stroke"
                d="
            M 262.20 236.85
            L 272.76 281.18"
              />
              <path
                stroke="#8499b6"
                vectorEffect="non-scaling-stroke"
                d="
            M 272.76 281.18
            L 268.38 281.25"
              />
              <path
                stroke="#9cb0cb"
                vectorEffect="non-scaling-stroke"
                d="
            M 160.86 222.49
            L 160.27 224.40"
              />
              <path
                stroke="#9cb0cb"
                vectorEffect="non-scaling-stroke"
                d="
            M 150.27 224.42
            L 148.35 224.53
            Q 147.77 224.57 147.77 225.15
            L 147.76 228.48"
              />
              <path
                stroke="#c7d9df"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 147.76 228.48
            C 145.45 229.74 146.07 232.55 142.40 231.90"
              />
              <path
                stroke="#c7d9df"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 121.38 233.78
            Q 119.70 231.34 117.27 230.48
            Q 116.86 230.33 116.54 230.63
            Q 115.72 231.40 115.00 231.30"
              />
              <path
                stroke="#e5cf7b"
                vectorEffect="non-scaling-stroke"
                d="
            M 115.00 231.30
            Q 113.91 231.05 113.16 229.97"
              />
              <path
                stroke="#e3d8d4"
                vectorEffect="non-scaling-stroke"
                d="
            M 113.16 229.97
            Q 113.88 227.58 111.81 226.42
            Q 111.30 226.13 111.32 225.54
            L 111.44 222.32"
              />
              <path
                stroke="#b2c26d"
                vectorEffect="non-scaling-stroke"
                d="
            M 292.49 204.89
            L 292.49 241.00"
              />
              <path
                stroke="#ffc203"
                vectorEffect="non-scaling-stroke"
                d="
            M 292.49 241.00
            Q 277.16 241.65 262.20 236.85"
              />
              <path
                stroke="#8c777d"
                vectorEffect="non-scaling-stroke"
                d="
            M 397.77 204.20
            Q 398.53 206.88 396.88 208.89
            A 0.72 0.71 -34.1 0 0 396.75 209.53
            Q 397.06 210.63 397.78 210.14"
              />
              <path
                stroke="#fdbe5b"
                vectorEffect="non-scaling-stroke"
                d="
            M 401.00 213.76
            L 400.64 213.75
            Q 400.13 213.72 399.77 214.08
            Q 395.52 218.35 389.63 219.28
            A 0.94 0.93 1.7 0 1 388.57 218.16
            L 389.22 215.22"
              />
              <path
                stroke="#fdbe5b"
                vectorEffect="non-scaling-stroke"
                d="
            M 108.72 215.23
            Q 103.52 215.28 98.74 217.89"
              />
              <path
                stroke="#8e6e24"
                vectorEffect="non-scaling-stroke"
                d="
            M 98.74 217.89
            L 93.65 219.63"
              />
              <path
                stroke="#e5cf7b"
                vectorEffect="non-scaling-stroke"
                d="
            M 93.65 219.63
            Q 91.56 216.29 91.21 211.58"
              />
              <path
                stroke="#93cce9"
                vectorEffect="non-scaling-stroke"
                d="
            M 315.25 204.80
            L 315.25 265.16"
              />
              <path
                stroke="#b2b56d"
                vectorEffect="non-scaling-stroke"
                d="
            M 315.25 265.16
            L 308.48 265.33"
              />
              <path
                stroke="#5581a5"
                vectorEffect="non-scaling-stroke"
                d="
            M 308.48 265.33
            L 303.93 265.21"
              />
              <path
                stroke="#b2b56d"
                vectorEffect="non-scaling-stroke"
                d="
            M 303.93 265.21
            L 293.63 265.33
            A 1.13 1.13 0.0 0 1 292.49 264.20
            L 292.49 241.00"
              />
              <path
                stroke="#5581a5"
                vectorEffect="non-scaling-stroke"
                d="
            M 297.98 221.21
            L 309.23 221.27"
              />
              <path
                stroke="#6995bc"
                vectorEffect="non-scaling-stroke"
                d="
            M 309.23 221.27
            Q 310.33 222.02 311.31 221.70
            Q 311.71 221.57 311.70 221.15
            L 311.60 212.94
            A 0.65 0.64 -0.4 0 0 310.94 212.30
            L 296.24 212.51
            Q 295.75 212.51 295.75 213.01
            L 295.75 221.08
            A 0.63 0.63 0.0 0 0 296.41 221.71
            Q 297.11 221.69 297.98 221.21"
              />
              <path
                stroke="#5a628a"
                vectorEffect="non-scaling-stroke"
                d="
            M 309.23 221.27
            Q 309.98 221.08 309.97 220.49
            Q 309.95 219.88 309.34 219.89
            L 298.41 220.14
            Q 297.80 220.15 297.78 220.76
            Q 297.78 220.99 297.98 221.21"
              />
              <path
                stroke="#ded5d7"
                vectorEffect="non-scaling-stroke"
                d="
            M 361.72 216.03
            Q 361.05 221.76 361.91 227.32"
              />
              <path
                stroke="#c6e7f7"
                vectorEffect="non-scaling-stroke"
                d="
            M 361.91 227.32
            Q 360.98 230.74 361.71 233.74"
              />
              <path
                stroke="#92adbd"
                strokeOpacity="0.663"
                vectorEffect="non-scaling-stroke"
                d="
            M 361.71 233.74
            L 361.77 241.23"
              />
              <path
                stroke="#7b919f"
                strokeOpacity="0.784"
                vectorEffect="non-scaling-stroke"
                d="
            M 361.77 241.23
            L 361.79 248.98"
              />
              <path
                stroke="#6b7e8a"
                strokeOpacity="0.906"
                vectorEffect="non-scaling-stroke"
                d="
            M 361.79 248.98
            L 361.76 263.93
            A 1.14 1.13 -0.3 0 1 360.63 265.06
            L 340.65 265.14"
              />
              <path
                stroke="#e0cd7e"
                vectorEffect="non-scaling-stroke"
                d="
            M 340.65 265.14
            L 315.25 265.16"
              />
              <path
                stroke="#87c3dc"
                vectorEffect="non-scaling-stroke"
                d="
            M 352.71 222.10
            A 13.73 13.73 0.0 0 0 338.98 208.37
            A 13.73 13.73 0.0 0 0 325.25 222.10
            A 13.73 13.73 0.0 0 0 338.98 235.83
            A 13.73 13.73 0.0 0 0 352.71 222.10"
              />
              <path
                stroke="#87c3dc"
                vectorEffect="non-scaling-stroke"
                d="
            M 354.01 238.60
            A 0.60 0.60 0.0 0 0 353.41 238.00
            L 325.85 238.00
            A 0.60 0.60 0.0 0 0 325.25 238.60
            L 325.25 240.66
            A 0.60 0.60 0.0 0 0 325.85 241.26
            L 353.41 241.26
            A 0.60 0.60 0.0 0 0 354.01 240.66
            L 354.01 238.60"
              />
              <path
                stroke="#97adce"
                vectorEffect="non-scaling-stroke"
                d="
            M 331.08 260.92
            A 0.44 0.44 0.0 0 0 331.48 261.56
            L 347.78 261.44
            A 0.44 0.44 0.0 0 0 348.17 260.80
            L 339.91 244.98
            A 0.44 0.44 0.0 0 0 339.12 244.99
            L 331.08 260.92"
              />
              <path
                stroke="#fdd7ce"
                vectorEffect="non-scaling-stroke"
                d="
            M 373.65 210.07
            Q 374.50 214.02 376.38 216.51"
              />
              <path
                stroke="#fdbe5b"
                vectorEffect="non-scaling-stroke"
                d="
            M 376.38 216.51
            Q 378.28 220.36 382.14 221.62"
              />
              <path
                stroke="#8c777d"
                vectorEffect="non-scaling-stroke"
                d="
            M 382.14 221.62
            Q 384.14 222.76 386.17 222.64"
              />
              <path
                stroke="#fdbe5b"
                vectorEffect="non-scaling-stroke"
                d="
            M 386.17 222.64
            L 388.70 222.49
            Q 389.19 222.46 389.41 222.90
            L 393.23 230.54
            Q 393.45 230.97 392.98 231.09
            Q 389.82 231.89 385.60 231.71"
              />
              <path
                stroke="#8c777d"
                vectorEffect="non-scaling-stroke"
                d="
            M 385.60 231.71
            L 380.84 231.21"
              />
              <path
                stroke="#fdbe5b"
                vectorEffect="non-scaling-stroke"
                d="
            M 380.84 231.21
            Q 373.38 226.91 371.91 217.98
            Q 371.82 217.45 371.28 217.47
            Q 370.84 217.49 370.26 218.01"
              />
              <path
                stroke="#8dbbcf"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 493.2009 209.5372
            A 3.15 3.15 0.0 0 0 488.7638 209.1412
            L 488.1347 209.6672
            A 3.15 3.15 0.0 0 0 487.7387 214.1044
            L 488.2391 214.7028
            A 3.15 3.15 0.0 0 0 492.6762 215.0988
            L 493.3053 214.5728
            A 3.15 3.15 0.0 0 0 493.7013 210.1356
            L 493.2009 209.5372"
              />
              <path
                stroke="#58abcb"
                vectorEffect="non-scaling-stroke"
                d="
            M 350.73 222.08
            A 11.77 11.77 0.0 0 0 338.96 210.31
            A 11.77 11.77 0.0 0 0 327.19 222.08
            A 11.77 11.77 0.0 0 0 338.96 233.85
            A 11.77 11.77 0.0 0 0 350.73 222.08"
              />
              <path
                stroke="#8e8796"
                vectorEffect="non-scaling-stroke"
                d="
            M 386.63 215.52
            Q 385.80 216.29 385.35 216.23"
              />
              <path
                stroke="#ffce75"
                vectorEffect="non-scaling-stroke"
                d="
            M 385.35 216.23
            Q 380.96 215.84 376.38 216.51"
              />
              <path
                stroke="#74889d"
                vectorEffect="non-scaling-stroke"
                d="
            M 93.65 219.63
            Q 95.30 223.14 98.50 224.34"
              />
              <path
                stroke="#e3d8d4"
                vectorEffect="non-scaling-stroke"
                d="
            M 98.50 224.34
            Q 97.82 226.71 96.13 227.68"
              />
              <path
                stroke="#e5cf7b"
                vectorEffect="non-scaling-stroke"
                d="
            M 96.13 227.68
            Q 95.78 228.19 95.46 227.97"
              />
              <path
                stroke="#74889d"
                vectorEffect="non-scaling-stroke"
                d="
            M 95.46 227.97
            L 90.17 228.74"
              />
              <path
                stroke="#e5cf7b"
                vectorEffect="non-scaling-stroke"
                d="
            M 90.17 228.74
            Q 85.99 228.64 82.60 233.37"
              />
              <path
                stroke="#5a628a"
                vectorEffect="non-scaling-stroke"
                d="
            M 309.7576 213.9088
            A 0.27 0.27 0.0 0 0 309.4862 213.6402
            L 298.1064 213.6998
            A 0.27 0.27 0.0 0 0 297.8378 213.9712
            L 297.8624 218.6712
            A 0.27 0.27 0.0 0 0 298.1338 218.9398
            L 309.5136 218.8802
            A 0.27 0.27 0.0 0 0 309.7822 218.6088
            L 309.7576 213.9088"
              />
              <path
                stroke="#8e6e24"
                vectorEffect="non-scaling-stroke"
                d="
            M 401.00 213.76
            L 401.00 214.69
            Q 401.00 215.16 401.48 215.18
            Q 403.43 215.28 404.86 214.27"
              />
              <path
                stroke="#e4bc57"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 413.20 234.89
            Q 413.58 237.30 414.13 237.84"
              />
              <path
                stroke="#e8a502"
                strokeOpacity="0.549"
                vectorEffect="non-scaling-stroke"
                d="
            M 414.13 237.84
            L 415.55 241.51"
              />
              <path
                stroke="#8e6e24"
                vectorEffect="non-scaling-stroke"
                d="
            M 415.55 241.51
            Q 405.56 239.36 402.95 230.25
            Q 402.81 229.74 402.35 230.00
            C 400.77 230.86 396.28 233.94 394.74 232.12
            Q 394.40 231.72 394.03 232.10
            Q 389.46 236.91 385.60 231.71"
              />
              <path
                stroke="#8e6e24"
                vectorEffect="non-scaling-stroke"
                d="
            M 386.17 222.64
            L 388.16 215.53"
              />
              <path
                stroke="#fdbe5b"
                vectorEffect="non-scaling-stroke"
                d="
            M 113.16 229.97
            L 112.23 230.11"
              />
              <path
                stroke="#8c777d"
                vectorEffect="non-scaling-stroke"
                d="
            M 112.23 230.11
            Q 110.57 227.21 107.73 228.20
            Q 107.21 228.39 107.49 228.86
            L 109.10 231.59"
              />
              <path
                stroke="#fdbe5b"
                vectorEffect="non-scaling-stroke"
                d="
            M 109.10 231.59
            Q 108.48 234.37 106.29 233.71
            Q 101.58 232.29 98.08 230.32
            Q 97.64 230.07 97.37 229.64
            L 96.13 227.68"
              />
              <path
                stroke="#8c777d"
                vectorEffect="non-scaling-stroke"
                d="
            M 98.50 224.34
            Q 98.93 224.11 99.15 224.26
            A 0.49 0.49 0.0 0 0 99.79 223.54
            Q 97.46 220.75 98.74 217.89"
              />
              <path
                stroke="#8e6e24"
                vectorEffect="non-scaling-stroke"
                d="
            M 382.14 221.62
            L 385.35 216.23"
              />
              <path
                stroke="#fdbe5b"
                vectorEffect="non-scaling-stroke"
                d="
            M 369.88 218.70
            Q 369.34 223.87 371.15 229.77"
              />
              <path
                stroke="#e3d8d4"
                vectorEffect="non-scaling-stroke"
                d="
            M 371.15 229.77
            Q 366.79 229.37 361.91 227.32"
              />
              <path
                stroke="#8e6e24"
                vectorEffect="non-scaling-stroke"
                d="
            M 380.84 231.21
            L 380.94 241.34"
              />
              <path
                stroke="#e5cf7b"
                vectorEffect="non-scaling-stroke"
                d="
            M 380.94 241.34
            Q 378.99 236.96 379.35 232.21
            A 1.06 1.05 -5.8 0 0 378.01 231.12
            Q 371.56 232.97 371.15 229.77"
              />
              <path
                stroke="#6995bc"
                vectorEffect="non-scaling-stroke"
                d="
            M 213.94 232.18
            Q 212.55 233.09 211.26 232.41"
              />
              <path
                stroke="#9cb0cb"
                vectorEffect="non-scaling-stroke"
                d="
            M 172.30 240.39
            L 172.46 237.68"
              />
              <path
                stroke="#4e5573"
                strokeOpacity="0.698"
                vectorEffect="non-scaling-stroke"
                d="
            M 172.46 237.68
            L 172.98 231.85
            A 1.00 1.00 0.0 0 0 171.94 230.76
            L 160.59 231.31"
              />
              <path
                stroke="#4e5573"
                strokeOpacity="0.698"
                vectorEffect="non-scaling-stroke"
                d="
            M 157.78 231.33
            C 155.62 230.97 152.08 230.08 150.29 231.56
            C 149.80 231.97 149.89 232.45 150.51 232.66"
              />
              <path
                stroke="#6995bc"
                vectorEffect="non-scaling-stroke"
                d="
            M 150.51 232.66
            Q 148.96 233.28 148.04 232.78"
              />
              <path
                stroke="#9298b0"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 148.04 232.78
            L 147.76 228.48"
              />
              <path
                stroke="#74889d"
                vectorEffect="non-scaling-stroke"
                d="
            M 380.94 241.34
            L 382.25 255.95"
              />
              <path
                stroke="#899cb3"
                vectorEffect="non-scaling-stroke"
                d="
            M 382.25 255.95
            L 376.05 255.92"
              />
              <path
                stroke="#81959c"
                strokeOpacity="0.784"
                vectorEffect="non-scaling-stroke"
                d="
            M 376.05 255.92
            C 376.56 249.89 378.39 243.45 372.55 239.33"
              />
              <path
                stroke="#9ab0b9"
                strokeOpacity="0.663"
                vectorEffect="non-scaling-stroke"
                d="
            M 372.55 239.33
            Q 367.60 234.54 361.71 233.74"
              />
              <path
                stroke="#8e6e24"
                vectorEffect="non-scaling-stroke"
                d="
            M 109.10 231.59
            C 111.24 235.36 116.17 246.59 107.98 247.06
            C 101.10 247.46 97.01 234.08 95.46 227.97"
              />
              <path
                stroke="#8e6e24"
                vectorEffect="non-scaling-stroke"
                d="
            M 112.23 230.11
            Q 118.01 240.03 119.07 251.84"
              />
              <path
                stroke="#8c777d"
                vectorEffect="non-scaling-stroke"
                d="
            M 119.07 251.84
            Q 119.24 252.10 119.26 252.41
            Q 119.29 252.87 118.86 253.06
            C 111.30 256.45 102.58 257.62 98.71 249.19"
              />
              <path
                stroke="#8e6e24"
                vectorEffect="non-scaling-stroke"
                d="
            M 98.71 249.19
            Q 98.48 240.62 94.43 232.32
            Q 93.71 230.85 90.17 228.74"
              />
              <path
                stroke="#8dbbcf"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 148.04 232.78
            Q 146.16 233.40 146.47 234.51"
              />
              <path
                stroke="#e2c5bb"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 146.47 234.51
            Q 145.68 233.82 144.89 233.68"
              />
              <path
                stroke="#fdbe5b"
                vectorEffect="non-scaling-stroke"
                d="
            M 98.71 249.19
            L 89.00 251.72
            Q 88.47 251.86 88.74 252.33
            Q 90.92 256.15 94.00 259.17"
              />
              <path
                stroke="#8e6e24"
                vectorEffect="non-scaling-stroke"
                d="
            M 94.00 259.17
            Q 91.81 267.13 85.06 271.26"
              />
              <path
                stroke="#e5cf7b"
                vectorEffect="non-scaling-stroke"
                d="
            M 85.06 271.26
            C 85.94 268.05 88.90 251.27 84.76 251.55"
              />
              <path
                stroke="#1a243f"
                strokeOpacity="0.549"
                vectorEffect="non-scaling-stroke"
                d="
            M 415.55 241.51
            Q 417.57 245.01 419.15 250.06"
              />
              <path
                stroke="#313b5c"
                vectorEffect="non-scaling-stroke"
                d="
            M 425.71 292.72
            Q 424.70 297.57 425.50 302.80"
              />
              <path
                stroke="#8e8796"
                vectorEffect="non-scaling-stroke"
                d="
            M 425.50 302.80
            L 424.47 327.29"
              />
              <path
                stroke="#8a7889"
                vectorEffect="non-scaling-stroke"
                d="
            M 424.47 327.29
            Q 424.95 329.26 422.88 329.29"
              />
              <path
                stroke="#313b5c"
                vectorEffect="non-scaling-stroke"
                d="
            M 422.88 329.29
            Q 421.04 327.70 421.64 325.56"
              />
              <path
                stroke="#8e8796"
                vectorEffect="non-scaling-stroke"
                d="
            M 421.64 325.56
            C 422.88 306.40 420.69 287.97 417.05 268.19"
              />
              <path
                stroke="#161f37"
                strokeOpacity="0.627"
                vectorEffect="non-scaling-stroke"
                d="
            M 417.05 268.19
            Q 416.49 263.87 415.26 259.59
            A 0.22 0.21 35.2 0 0 414.84 259.66
            Q 415.02 262.06 415.71 264.41
            Q 415.84 264.82 415.82 265.26
            Q 415.77 266.87 416.54 268.31"
              />
              <path
                stroke="#8e8796"
                vectorEffect="non-scaling-stroke"
                d="
            M 416.54 268.31
            C 419.49 287.63 421.78 304.00 420.95 322.76"
              />
              <path
                stroke="#313b5c"
                vectorEffect="non-scaling-stroke"
                d="
            M 420.95 322.76
            C 420.27 322.79 419.79 322.55 419.52 321.88
            Q 406.30 289.24 392.99 256.54
            Q 392.79 256.05 392.26 256.04
            L 382.25 255.95"
              />
              <path
                stroke="#131b2f"
                strokeOpacity="0.737"
                vectorEffect="non-scaling-stroke"
                d="
            M 413.02 251.77
            Q 412.88 253.16 413.47 254.02
            Q 413.99 254.79 413.89 253.87
            L 413.68 252.00"
              />
              <path
                stroke="#313b5c"
                vectorEffect="non-scaling-stroke"
                d="
            M 413.68 252.00
            Q 413.87 251.28 413.35 250.75
            A 0.50 0.49 23.0 0 0 412.50 251.09
            L 412.50 251.47
            A 0.28 0.27 -83.4 0 0 412.71 251.74
            Q 412.86 251.78 413.02 251.77"
              />
              <path
                stroke="#30354e"
                strokeOpacity="0.737"
                vectorEffect="non-scaling-stroke"
                d="
            M 413.68 252.00
            Q 413.34 251.68 413.02 251.77"
              />
              <path
                stroke="#161f37"
                strokeOpacity="0.627"
                vectorEffect="non-scaling-stroke"
                d="
            M 413.94 255.69
            Q 413.72 257.35 414.43 258.90
            Q 414.95 260.01 414.94 258.79
            Q 414.92 256.88 414.36 255.09
            A 0.28 0.28 0.0 0 0 413.87 255.01
            Q 413.61 255.37 413.94 255.69"
              />
              <path
                stroke="#e4bc57"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 115.00 231.30
            Q 115.95 232.57 116.72 232.06"
              />
              <path
                stroke="#cba434"
                strokeOpacity="0.792"
                vectorEffect="non-scaling-stroke"
                d="
            M 124.98 242.44
            Q 124.18 242.97 123.95 243.73"
              />
              <path
                stroke="#fbbf67"
                vectorEffect="non-scaling-stroke"
                d="
            M 123.95 243.73
            L 120.42 247.48"
              />
              <path
                stroke="#fdbe5b"
                vectorEffect="non-scaling-stroke"
                d="
            M 120.42 247.48
            C 118.76 249.01 121.08 250.80 119.07 251.84"
              />
              <path
                stroke="#9cb0cb"
                vectorEffect="non-scaling-stroke"
                d="
            M 205.21 232.15
            Q 203.30 232.38 201.30 231.76"
              />
              <path
                stroke="#575e81"
                strokeOpacity="0.627"
                vectorEffect="non-scaling-stroke"
                d="
            M 201.30 231.76
            Q 195.37 230.66 187.79 230.82
            A 1.15 1.14 -1.0 0 0 186.66 231.98
            L 186.77 239.17"
              />
              <path
                stroke="#6e7c99"
                strokeOpacity="0.792"
                vectorEffect="non-scaling-stroke"
                d="
            M 186.77 239.17
            L 187.18 245.92"
              />
              <path
                stroke="#5e668b"
                strokeOpacity="0.580"
                vectorEffect="non-scaling-stroke"
                d="
            M 187.56 249.07
            Q 186.54 250.95 187.10 253.97"
              />
              <path
                stroke="#91a7af"
                strokeOpacity="0.698"
                vectorEffect="non-scaling-stroke"
                d="
            M 172.46 237.68
            Q 171.90 234.28 169.40 233.28"
              />
              <path
                stroke="#91a7af"
                strokeOpacity="0.698"
                vectorEffect="non-scaling-stroke"
                d="
            M 164.95 232.64
            L 157.91 232.40"
              />
              <path
                stroke="#48819a"
                strokeOpacity="0.698"
                vectorEffect="non-scaling-stroke"
                d="
            M 151.92 233.48
            Q 151.46 232.83 150.51 232.66"
              />
              <path
                stroke="#a2bac3"
                strokeOpacity="0.627"
                vectorEffect="non-scaling-stroke"
                d="
            M 201.30 231.76
            Q 200.99 232.13 199.99 232.04"
              />
              <path
                stroke="#aac5cd"
                strokeOpacity="0.792"
                vectorEffect="non-scaling-stroke"
                d="
            M 199.99 232.04
            L 198.81 233.54"
              />
              <path
                stroke="#aac5cd"
                strokeOpacity="0.792"
                vectorEffect="non-scaling-stroke"
                d="
            M 191.63 247.84
            Q 192.95 250.13 194.94 249.69"
              />
              <path
                stroke="#c7d9df"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 207.58 233.24
            L 207.45 236.77"
              />
              <path
                stroke="#c7d9df"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 191.63 247.84
            Q 191.79 246.17 190.87 244.77
            Q 190.59 244.35 190.67 243.84
            C 191.37 239.39 197.62 241.66 197.31 235.48
            A 1.10 1.09 67.2 0 1 197.66 234.61
            L 198.81 233.54"
              />
              <path
                stroke="#c7d9df"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 157.91 232.40
            Q 157.38 232.55 157.87 233.64
            Q 158.09 234.14 157.73 234.55
            Q 157.30 235.03 157.31 235.34"
              />
              <path
                stroke="#c7d9df"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 164.95 232.64
            L 169.40 233.28"
              />
              <path
                stroke="#b0bdc6"
                vectorEffect="non-scaling-stroke"
                d="
            M 146.27 240.82
            Q 147.06 237.45 146.47 234.51"
              />
              <path
                stroke="#e3d8d4"
                vectorEffect="non-scaling-stroke"
                d="
            M 144.40 244.26
            L 137.92 252.22"
              />
              <path
                stroke="#c8aea5"
                strokeOpacity="0.792"
                vectorEffect="non-scaling-stroke"
                d="
            M 137.92 252.22
            L 136.40 252.64"
              />
              <path
                stroke="#b48e81"
                strokeOpacity="0.698"
                vectorEffect="non-scaling-stroke"
                d="
            M 136.40 252.64
            Q 132.70 254.32 128.45 254.03"
              />
              <path
                stroke="#be9688"
                strokeOpacity="0.663"
                vectorEffect="non-scaling-stroke"
                d="
            M 128.45 254.03
            Q 123.83 251.76 119.88 255.68"
              />
              <path
                stroke="#8c777d"
                vectorEffect="non-scaling-stroke"
                d="
            M 119.88 255.68
            C 113.02 261.84 101.52 266.79 94.00 259.17"
              />
              <path
                stroke="#f9c8c0"
                vectorEffect="non-scaling-stroke"
                d="
            M 120.42 247.48
            Q 123.24 247.64 124.51 244.51"
              />
              <path
                stroke="#c8aea5"
                strokeOpacity="0.792"
                vectorEffect="non-scaling-stroke"
                d="
            M 124.51 244.51
            Q 125.27 244.21 125.76 243.13"
              />
              <path
                stroke="#a3823a"
                vectorEffect="non-scaling-stroke"
                d="
            M 303.93 265.21
            L 300.07 281.48"
              />
              <path
                stroke="#e0cd7e"
                vectorEffect="non-scaling-stroke"
                d="
            M 300.07 281.48
            L 272.76 281.18"
              />
              <path
                stroke="#2d3249"
                strokeOpacity="0.784"
                vectorEffect="non-scaling-stroke"
                d="
            M 376.05 255.92
            L 363.29 255.98"
              />
              <path
                stroke="#636b93"
                strokeOpacity="0.549"
                vectorEffect="non-scaling-stroke"
                d="
            M 222.31 257.32
            C 222.12 254.87 222.88 253.61 219.46 253.99"
              />
              <path
                stroke="#c6b0b4"
                strokeOpacity="0.792"
                vectorEffect="non-scaling-stroke"
                d="
            M 124.51 244.51
            Q 123.91 244.66 123.95 243.73"
              />
              <path
                stroke="#aac5cd"
                strokeOpacity="0.792"
                vectorEffect="non-scaling-stroke"
                d="
            M 159.79 251.23
            Q 159.74 252.02 159.16 252.86"
              />
              <path
                stroke="#91a7af"
                strokeOpacity="0.698"
                vectorEffect="non-scaling-stroke"
                d="
            M 148.70 252.99
            L 145.03 252.69"
              />
              <path
                stroke="#aac5cd"
                strokeOpacity="0.792"
                vectorEffect="non-scaling-stroke"
                d="
            M 145.03 252.69
            L 137.92 252.22"
              />
              <path
                stroke="#b6a352"
                vectorEffect="non-scaling-stroke"
                d="
            M 339.34 247.11
            C 337.28 251.11 334.31 255.63 332.98 259.84
            A 0.51 0.50 -81.1 0 0 333.46 260.50
            L 345.89 260.50
            A 0.47 0.46 76.5 0 0 346.30 259.82
            L 339.83 247.11
            Q 339.58 246.63 339.34 247.11"
              />
              <path
                stroke="#a2bac3"
                strokeOpacity="0.627"
                vectorEffect="non-scaling-stroke"
                d="
            M 222.85 273.24
            Q 223.12 273.20 223.39 273.16"
              />
              <path
                stroke="#5090ac"
                strokeOpacity="0.627"
                vectorEffect="non-scaling-stroke"
                d="
            M 223.39 273.16
            L 223.69 263.51
            Q 223.71 263.01 223.26 262.77
            L 222.20 262.22"
              />
              <path
                stroke="#575e81"
                strokeOpacity="0.627"
                vectorEffect="non-scaling-stroke"
                d="
            M 222.20 262.22
            L 222.31 257.32"
              />
              <path
                stroke="#b6a352"
                vectorEffect="non-scaling-stroke"
                d="
            M 338.12 254.11
            Q 337.99 255.93 338.36 257.75
            A 0.21 0.19 42.1 0 0 338.75 257.75
            Q 338.76 256.56 339.77 255.91
            Q 340.28 255.58 339.91 255.10
            L 338.96 253.86
            Q 338.21 252.88 338.12 254.11"
              />
              <path
                stroke="#272b3f"
                strokeOpacity="0.906"
                vectorEffect="non-scaling-stroke"
                d="
            M 363.29 255.98
            Q 362.87 256.30 363.47 257.00"
              />
              <path
                stroke="#0f1626"
                strokeOpacity="0.906"
                vectorEffect="non-scaling-stroke"
                d="
            M 359.86 275.30
            Q 355.99 278.82 358.20 282.51"
              />
              <path
                stroke="#6b7e8a"
                strokeOpacity="0.906"
                vectorEffect="non-scaling-stroke"
                d="
            M 347.09 322.47
            C 352.05 315.87 345.43 313.34 339.73 313.31"
              />
              <path
                stroke="#376377"
                strokeOpacity="0.906"
                vectorEffect="non-scaling-stroke"
                d="
            M 339.73 313.31
            Q 339.10 311.21 339.51 308.38"
              />
              <path
                stroke="#6b7e8a"
                strokeOpacity="0.906"
                vectorEffect="non-scaling-stroke"
                d="
            M 339.51 308.38
            C 351.45 310.07 352.17 296.41 339.70 297.64"
              />
              <path
                stroke="#376377"
                strokeOpacity="0.906"
                vectorEffect="non-scaling-stroke"
                d="
            M 339.70 297.64
            L 339.75 292.77"
              />
              <path
                stroke="#6b7e8a"
                strokeOpacity="0.906"
                vectorEffect="non-scaling-stroke"
                d="
            M 339.75 292.77
            Q 343.80 292.94 345.01 292.54
            C 349.01 291.21 350.27 286.48 347.19 283.46
            C 345.14 281.46 341.61 281.87 339.02 281.66"
              />
              <path
                stroke="#8d6401"
                strokeOpacity="0.906"
                vectorEffect="non-scaling-stroke"
                d="
            M 339.02 281.66
            Q 339.07 273.36 340.65 265.14"
              />
              <path
                stroke="#74889d"
                vectorEffect="non-scaling-stroke"
                d="
            M 85.06 271.26
            L 79.35 303.71"
              />
              <path
                stroke="#4e5573"
                strokeOpacity="0.698"
                vectorEffect="non-scaling-stroke"
                d="
            M 138.58 254.04
            C 137.22 253.49 135.99 253.08 136.01 255.11
            Q 136.04 258.28 135.93 261.07"
              />
              <path
                stroke="#48819a"
                strokeOpacity="0.698"
                vectorEffect="non-scaling-stroke"
                d="
            M 135.93 261.07
            Q 135.67 262.13 135.20 262.67"
              />
              <path
                stroke="#151e34"
                strokeOpacity="0.663"
                vectorEffect="non-scaling-stroke"
                d="
            M 121.34 264.78
            L 119.88 255.68"
              />
              <path
                stroke="#52597a"
                strokeOpacity="0.663"
                vectorEffect="non-scaling-stroke"
                d="
            M 138.94 260.37
            L 139.17 262.41"
              />
              <path
                stroke="#6995bc"
                vectorEffect="non-scaling-stroke"
                d="
            M 139.17 262.41
            Q 137.66 263.49 135.93 261.07"
              />
              <path
                stroke="#6995bc"
                vectorEffect="non-scaling-stroke"
                d="
            M 222.20 262.22
            Q 220.91 262.70 219.27 262.44"
              />
              <path
                stroke="#636b93"
                strokeOpacity="0.549"
                vectorEffect="non-scaling-stroke"
                d="
            M 219.27 262.44
            Q 219.73 261.65 219.30 260.26"
              />
              <path
                stroke="#12192c"
                strokeOpacity="0.784"
                vectorEffect="non-scaling-stroke"
                d="
            M 120.55 343.18
            L 118.81 350.15"
              />
              <path
                stroke="#8a7889"
                vectorEffect="non-scaling-stroke"
                d="
            M 118.81 350.15
            Q 117.16 355.23 108.79 352.88"
              />
              <path
                stroke="#8e8796"
                vectorEffect="non-scaling-stroke"
                d="
            M 108.79 352.88
            L 106.98 352.42
            Q 106.46 352.28 106.34 351.76
            C 102.96 336.84 103.12 322.18 103.29 307.01"
              />
              <path
                stroke="#313b5c"
                vectorEffect="non-scaling-stroke"
                d="
            M 103.29 307.01
            Q 104.13 304.00 103.64 300.97
            Q 103.42 299.61 103.33 300.98
            L 102.97 306.44"
              />
              <path
                stroke="#8e8796"
                vectorEffect="non-scaling-stroke"
                d="
            M 102.97 306.44
            C 99.64 323.57 89.89 338.94 79.17 352.38"
              />
              <path
                stroke="#8c777d"
                vectorEffect="non-scaling-stroke"
                d="
            M 79.17 352.38
            L 72.40 350.71"
              />
              <path
                stroke="#8e8796"
                vectorEffect="non-scaling-stroke"
                d="
            M 72.40 350.71
            L 71.04 350.17
            A 0.63 0.62 16.0 0 1 70.65 349.48
            L 77.58 312.88"
              />
              <path
                stroke="#8e8796"
                vectorEffect="non-scaling-stroke"
                d="
            M 92.73 275.13
            Q 91.09 281.04 85.68 283.45
            A 0.42 0.42 0.0 0 0 85.79 284.25
            C 89.36 284.76 93.32 277.65 94.18 274.69
            A 0.46 0.46 0.0 0 0 93.59 274.13
            Q 92.95 274.35 92.73 275.13"
              />
              <path
                stroke="#a39bad"
                vectorEffect="non-scaling-stroke"
                d="
            M 420.95 322.76
            Q 420.41 325.84 421.64 325.56"
              />
              <path
                stroke="#9f8c9f"
                vectorEffect="non-scaling-stroke"
                d="
            M 422.88 329.29
            L 434.55 359.27
            A 0.59 0.59 0.0 0 1 434.24 360.02
            L 433.20 360.48
            A 0.49 0.48 66.7 0 1 432.55 360.22
            L 425.17 342.78
            Q 424.95 342.25 424.37 342.25
            L 401.75 342.25
            Q 401.10 342.25 401.34 342.85
            L 407.97 359.24
            A 0.59 0.59 0.0 0 1 407.66 360.00
            L 406.51 360.53
            Q 405.87 360.83 405.60 360.17
            L 392.45 327.39
            A 0.54 0.54 0.0 0 0 391.45 327.37
            C 390.92 328.58 388.35 333.34 389.91 333.98
            Q 390.58 334.26 390.18 334.86
            Q 389.99 335.15 390.01 335.51
            A 0.45 0.39 37.5 0 1 389.17 335.56
            Q 389.05 335.22 388.78 335.00
            A 0.47 0.47 0.0 0 0 388.01 335.39
            Q 388.09 336.80 387.27 337.93
            A 0.63 0.63 0.0 0 0 387.48 338.85
            Q 388.30 339.29 387.79 340.10
            Q 387.64 340.36 387.34 340.32
            L 386.99 340.27
            Q 386.41 340.19 386.28 340.76
            L 385.56 344.02
            Q 385.47 344.40 385.70 344.72
            Q 386.28 345.55 385.83 346.40
            Q 385.60 346.82 385.36 346.41
            L 385.10 345.98
            A 0.39 0.39 0.0 0 0 384.40 346.04
            L 378.68 361.84
            Q 378.49 362.36 377.94 362.43
            C 376.24 362.65 376.08 361.56 376.61 360.21
            Q 383.78 341.92 390.36 323.37
            Q 390.53 322.90 390.35 322.43
            L 385.16 309.24"
              />
              <path
                stroke="#2b2f45"
                strokeOpacity="0.824"
                vectorEffect="non-scaling-stroke"
                d="
            M 385.16 309.24
            L 382.59 303.74
            Q 382.38 303.28 381.99 302.95
            L 378.95 300.42"
              />
              <path
                stroke="#313b5c"
                vectorEffect="non-scaling-stroke"
                d="
            M 378.95 300.42
            Q 380.02 300.08 380.97 301.71
            A 0.40 0.40 0.0 0 0 381.69 301.37
            L 377.66 290.82
            A 0.38 0.38 0.0 0 0 376.96 290.81
            L 374.78 296.16
            A 1.32 1.32 0.0 0 0 375.49 297.88
            Q 377.47 298.70 377.02 299.32"
              />
              <path
                stroke="#2b2f45"
                strokeOpacity="0.824"
                vectorEffect="non-scaling-stroke"
                d="
            M 377.02 299.32
            L 374.92 298.17
            Q 374.41 297.89 374.20 298.44
            L 362.90 328.97"
              />
              <path
                stroke="#9f8c9f"
                vectorEffect="non-scaling-stroke"
                d="
            M 362.90 328.97
            C 362.44 328.93 362.08 329.13 361.92 329.59
            Q 356.68 345.00 350.78 360.17
            Q 350.57 360.70 350.04 360.50
            L 348.78 360.03
            A 0.62 0.62 0.0 0 1 348.40 359.28
            L 350.43 352.56"
              />
              <path
                stroke="#272c40"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 350.43 352.56
            L 372.10 296.06"
              />
              <path
                stroke="#313b5c"
                vectorEffect="non-scaling-stroke"
                d="
            M 372.10 296.06
            L 375.58 287.17
            Q 375.76 286.70 375.57 286.23
            L 368.11 267.64"
              />
              <path
                stroke="#282d42"
                strokeOpacity="0.867"
                vectorEffect="non-scaling-stroke"
                d="
            M 368.11 267.64
            L 363.47 257.00"
              />
              <path
                stroke="#2d3249"
                strokeOpacity="0.784"
                vectorEffect="non-scaling-stroke"
                d="
            M 375.06 259.01
            L 368.34 259.10
            Q 367.65 259.11 367.89 259.75
            L 370.23 265.93"
              />
              <path
                stroke="#313b5c"
                vectorEffect="non-scaling-stroke"
                d="
            M 370.23 265.93
            L 384.37 300.92
            A 1.15 1.15 0.0 0 0 385.49 301.63
            Q 391.75 301.35 398.01 301.57
            A 0.91 0.90 -77.7 0 0 398.87 301.01
            L 400.28 297.53
            A 0.34 0.34 0.0 0 0 399.99 297.06
            Q 399.67 297.03 399.53 296.82
            Q 399.49 296.77 399.51 296.71
            Q 399.57 296.48 399.63 296.51"
              />
              <path
                stroke="#353b56"
                strokeOpacity="0.663"
                vectorEffect="non-scaling-stroke"
                d="
            M 399.63 296.51
            C 400.90 297.09 401.71 293.50 402.00 292.64
            C 403.61 287.86 399.92 279.18 397.57 275.00"
              />
              <path
                stroke="#313b5c"
                vectorEffect="non-scaling-stroke"
                d="
            M 397.57 275.00
            L 391.30 258.96
            Q 391.10 258.45 390.54 258.45
            L 381.17 258.57"
              />
              <path
                stroke="#5a628a"
                vectorEffect="non-scaling-stroke"
                d="
            M 381.17 258.57
            Q 377.81 256.87 375.06 259.01"
              />
              <path
                stroke="#454f73"
                vectorEffect="non-scaling-stroke"
                d="
            M 381.17 258.57
            Q 379.45 260.41 377.92 260.69"
              />
              <path
                stroke="#454b67"
                strokeOpacity="0.784"
                vectorEffect="non-scaling-stroke"
                d="
            M 377.92 260.69
            Q 377.85 260.21 378.43 259.81
            Q 378.96 259.46 378.33 259.39
            L 375.06 259.01"
              />
              <path
                stroke="#151e34"
                strokeOpacity="0.663"
                vectorEffect="non-scaling-stroke"
                d="
            M 397.57 275.00
            L 391.61 279.96
            Q 391.19 280.31 391.44 280.79
            L 399.63 296.51"
              />
              <path
                stroke="#12192c"
                strokeOpacity="0.784"
                vectorEffect="non-scaling-stroke"
                d="
            M 370.23 265.93
            L 377.92 260.69"
              />
              <path
                stroke="#3c4362"
                strokeOpacity="0.580"
                vectorEffect="non-scaling-stroke"
                d="
            M 404.39 298.31
            L 403.87 296.38
            A 0.36 0.36 0.0 0 0 403.17 296.39
            L 402.16 300.34
            Q 402.05 300.77 402.43 300.99
            Q 403.98 301.88 405.04 301.08"
              />
              <path
                stroke="#313b5c"
                vectorEffect="non-scaling-stroke"
                d="
            M 405.04 301.08
            L 405.31 300.63
            A 0.21 0.21 0.0 0 1 405.70 300.71
            C 405.86 302.03 407.19 301.89 408.03 301.43
            Q 408.46 301.20 408.27 300.75
            L 405.00 292.88
            A 0.39 0.39 0.0 0 0 404.26 292.94
            Q 403.68 295.35 405.01 297.54
            A 0.46 0.46 0.0 0 1 404.84 298.19
            Q 404.59 298.33 404.39 298.31"
              />
              <path
                stroke="#18223b"
                strokeOpacity="0.580"
                vectorEffect="non-scaling-stroke"
                d="
            M 405.04 301.08
            Q 405.10 299.52 404.39 298.31"
              />
              <path
                stroke="#2d3249"
                strokeOpacity="0.784"
                vectorEffect="non-scaling-stroke"
                d="
            M 389.27 307.20
            C 388.48 306.95 386.58 306.11 387.24 307.92
            Q 388.25 310.68 389.54 313.31
            Q 389.76 313.75 390.22 313.92
            C 393.75 315.22 396.26 311.17 393.68 310.25"
              />
              <path
                stroke="#313b5c"
                vectorEffect="non-scaling-stroke"
                d="
            M 393.68 310.25
            Q 396.49 309.13 397.29 304.65
            Q 397.36 304.28 396.99 304.28
            L 386.43 304.19
            Q 385.78 304.18 386.12 304.74
            Q 386.89 306.00 389.27 307.20"
              />
              <path
                stroke="#12192c"
                strokeOpacity="0.784"
                vectorEffect="non-scaling-stroke"
                d="
            M 393.68 310.25
            L 389.27 307.20"
              />
              <path
                stroke="#a18a93"
                vectorEffect="non-scaling-stroke"
                d="
            M 402.98 313.68
            Q 405.46 314.77 408.95 314.11"
              />
              <path
                stroke="#313b5c"
                vectorEffect="non-scaling-stroke"
                d="
            M 408.95 314.11
            Q 410.87 314.60 413.02 314.12
            Q 413.64 313.98 413.39 313.40
            L 409.72 304.65
            A 1.39 1.38 37.7 0 0 407.07 304.99
            L 406.89 306.31"
              />
              <path
                stroke="#30354e"
                strokeOpacity="0.737"
                vectorEffect="non-scaling-stroke"
                d="
            M 406.89 306.31
            L 406.16 304.88
            Q 405.94 304.42 405.45 304.30
            Q 404.12 303.96 403.92 305.08"
              />
              <path
                stroke="#313b5c"
                vectorEffect="non-scaling-stroke"
                d="
            M 403.92 305.08
            Q 402.57 303.93 401.10 304.07
            A 0.99 0.97 7.9 0 0 400.29 304.67
            L 397.56 311.27
            Q 397.37 311.73 397.63 312.15
            Q 399.54 315.27 402.98 313.68"
              />
              <path
                stroke="#131b2f"
                strokeOpacity="0.737"
                vectorEffect="non-scaling-stroke"
                d="
            M 403.92 305.08
            Q 404.79 308.91 402.51 312.19
            Q 402.23 312.60 402.57 312.96
            Q 402.83 313.23 403.25 313.30"
              />
              <path
                stroke="#8c777d"
                vectorEffect="non-scaling-stroke"
                d="
            M 403.25 313.30
            Q 403.12 313.49 402.98 313.68"
              />
              <path
                stroke="#30354e"
                strokeOpacity="0.737"
                vectorEffect="non-scaling-stroke"
                d="
            M 408.23 311.13
            L 405.10 312.34"
              />
              <path
                stroke="#ab877a"
                strokeOpacity="0.737"
                vectorEffect="non-scaling-stroke"
                d="
            M 405.10 312.34
            L 403.25 313.30"
              />
              <path
                stroke="#a18a93"
                vectorEffect="non-scaling-stroke"
                d="
            M 408.44 312.44
            L 405.10 312.34"
              />
              <path
                stroke="#8c777d"
                vectorEffect="non-scaling-stroke"
                d="
            M 408.95 314.11
            Q 409.10 313.30 408.44 312.44"
              />
              <path
                stroke="#313b5c"
                vectorEffect="non-scaling-stroke"
                d="
            M 408.44 312.44
            Q 408.68 311.39 408.23 311.13"
              />
              <path
                stroke="#131b2f"
                strokeOpacity="0.737"
                vectorEffect="non-scaling-stroke"
                d="
            M 408.23 311.13
            L 406.89 306.31"
              />
              <path
                stroke="#9f8c9f"
                vectorEffect="non-scaling-stroke"
                d="
            M 392.06 319.04
            Q 392.99 317.67 392.81 317.04
            A 1.03 0.83 39.9 0 0 390.94 317.00
            Q 391.07 318.06 391.55 319.00
            Q 391.77 319.46 392.06 319.04"
              />
              <path
                stroke="#313b5c"
                vectorEffect="non-scaling-stroke"
                d="
            M 412.91 326.86
            L 418.19 326.67
            Q 418.74 326.65 418.54 326.14
            L 415.00 316.97
            Q 414.79 316.43 414.23 316.51
            L 409.67 317.12"
              />
              <path
                stroke="#9f8c9f"
                vectorEffect="non-scaling-stroke"
                d="
            M 409.67 317.12
            Q 409.90 316.65 409.38 316.82"
              />
              <path
                stroke="#a3823a"
                vectorEffect="non-scaling-stroke"
                d="
            M 409.38 316.82
            Q 406.65 316.12 404.72 316.83"
              />
              <path
                stroke="#9f8c9f"
                vectorEffect="non-scaling-stroke"
                d="
            M 404.72 316.83
            L 395.99 316.59
            A 0.74 0.73 -80.9 0 0 395.26 317.12
            C 394.15 320.79 392.88 322.53 394.65 326.33
            Q 394.87 326.81 395.40 326.81
            L 412.91 326.86"
              />
              <path
                stroke="#fbbf67"
                vectorEffect="non-scaling-stroke"
                d="
            M 404.72 316.83
            Q 402.07 318.21 401.70 320.35
            Q 401.60 320.96 402.22 320.90
            Q 406.50 320.49 409.38 316.82"
              />
              <path
                stroke="#8a7889"
                vectorEffect="non-scaling-stroke"
                d="
            M 409.67 317.12
            L 412.91 326.86"
              />
              <path
                stroke="#a3823a"
                vectorEffect="non-scaling-stroke"
                d="
            M 412.51 339.68
            L 422.05 339.47"
              />
              <path
                stroke="#a18a93"
                vectorEffect="non-scaling-stroke"
                d="
            M 422.05 339.47
            Q 422.58 340.01 423.65 339.71
            Q 424.16 339.56 423.95 339.08
            L 420.05 329.83
            Q 419.83 329.31 419.27 329.30
            L 416.71 329.25"
              />
              <path
                stroke="#9f8c9f"
                vectorEffect="non-scaling-stroke"
                d="
            M 416.71 329.25
            L 396.38 329.25
            A 0.43 0.43 0.0 0 0 395.99 329.85
            L 399.95 339.23
            Q 400.15 339.70 400.67 339.70
            L 412.51 339.68"
              />
              <path
                stroke="#f9c8c0"
                vectorEffect="non-scaling-stroke"
                d="
            M 416.71 329.25
            Q 418.12 333.32 417.32 337.84"
              />
              <path
                stroke="#fbbf67"
                vectorEffect="non-scaling-stroke"
                d="
            M 417.32 337.84
            Q 409.95 336.79 412.51 339.68"
              />
              <path
                stroke="#fdbe5b"
                vectorEffect="non-scaling-stroke"
                d="
            M 422.05 339.47
            Q 423.40 336.69 417.32 337.84"
              />
              <path
                stroke="#69a3bb"
                strokeOpacity="0.792"
                vectorEffect="non-scaling-stroke"
                d="
            M 135.20 262.67
            L 135.00 264.98"
              />
              <path
                stroke="#101728"
                strokeOpacity="0.867"
                vectorEffect="non-scaling-stroke"
                d="
            M 368.11 267.64
            Q 363.16 270.66 359.86 275.30"
              />
              <path
                stroke="#ccb9b9"
                strokeOpacity="0.627"
                vectorEffect="non-scaling-stroke"
                d="
            M 417.05 268.19
            L 416.54 268.31"
              />
              <path
                stroke="#5e668b"
                strokeOpacity="0.580"
                vectorEffect="non-scaling-stroke"
                d="
            M 171.74 286.48
            Q 172.68 283.18 171.32 281.89"
              />
              <path
                stroke="#9298b0"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 170.99 279.06
            Q 170.74 278.97 170.53 279.00"
              />
              <path
                stroke="#6e7c99"
                strokeOpacity="0.792"
                vectorEffect="non-scaling-stroke"
                d="
            M 170.53 279.00
            Q 171.44 277.03 172.20 277.88"
              />
              <path
                stroke="#9298b0"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 172.20 277.88
            Q 173.10 275.71 172.76 272.95
            Q 172.71 272.51 172.27 272.49
            Q 172.09 272.49 171.88 272.50"
              />
              <path
                stroke="#aac5cd"
                strokeOpacity="0.792"
                vectorEffect="non-scaling-stroke"
                d="
            M 197.22 262.37
            L 190.30 262.73"
              />
              <path
                stroke="#6e7c99"
                strokeOpacity="0.792"
                vectorEffect="non-scaling-stroke"
                d="
            M 190.30 262.73
            L 187.83 262.74
            Q 187.36 262.74 187.20 262.29
            Q 186.85 261.28 187.27 260.20"
              />
              <path
                stroke="#353b56"
                strokeOpacity="0.663"
                vectorEffect="non-scaling-stroke"
                d="
            M 148.88 265.41
            Q 149.13 265.61 148.52 265.45"
              />
              <path
                stroke="#4c88a3"
                strokeOpacity="0.663"
                vectorEffect="non-scaling-stroke"
                d="
            M 141.02 263.77
            Q 140.46 262.75 139.17 262.41"
              />
              <path
                stroke="#9cb0cb"
                vectorEffect="non-scaling-stroke"
                d="
            M 190.30 262.73
            Q 189.19 263.33 187.70 263.29
            Q 187.15 263.27 187.16 263.82
            L 187.36 278.19
            Q 187.37 278.46 187.63 278.42
            Q 187.84 278.38 187.96 278.25"
              />
              <path
                stroke="#6e7c99"
                strokeOpacity="0.792"
                vectorEffect="non-scaling-stroke"
                d="
            M 187.96 278.25
            Q 188.07 278.70 187.91 278.78"
              />
              <path
                stroke="#5e668b"
                strokeOpacity="0.580"
                vectorEffect="non-scaling-stroke"
                d="
            M 188.90 283.07
            C 186.22 284.10 188.14 287.14 190.85 286.11
            Q 191.45 285.88 190.98 285.45
            L 189.19 283.78"
              />
              <path
                stroke="#5ba4c4"
                strokeOpacity="0.549"
                vectorEffect="non-scaling-stroke"
                d="
            M 219.27 262.44
            C 218.17 263.11 218.39 269.13 218.26 270.75"
              />
              <path
                stroke="#b9d4de"
                strokeOpacity="0.549"
                vectorEffect="non-scaling-stroke"
                d="
            M 218.26 270.75
            C 217.58 272.62 211.89 271.73 210.47 271.55"
              />
              <path
                stroke="#8dbbcf"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 141.02 263.77
            L 140.68 266.69"
              />
              <path
                stroke="#98cfe6"
                vectorEffect="non-scaling-stroke"
                d="
            M 218.26 270.75
            C 218.87 270.95 219.27 271.36 218.97 271.89
            Q 218.83 272.12 219.09 272.19
            C 220.91 272.66 221.80 271.56 223.39 273.16"
              />
              <path
                stroke="#8a9ea6"
                strokeOpacity="0.737"
                vectorEffect="non-scaling-stroke"
                d="
            M 222.85 273.24
            L 222.29 285.24"
              />
              <path
                stroke="#7b8d94"
                strokeOpacity="0.824"
                vectorEffect="non-scaling-stroke"
                d="
            M 222.29 285.24
            C 222.27 290.44 222.43 292.43 217.85 295.52"
              />
              <path
                stroke="#98cfe6"
                vectorEffect="non-scaling-stroke"
                d="
            M 217.85 295.52
            Q 216.36 296.24 215.11 294.75"
              />
              <path
                stroke="#9cb0cb"
                vectorEffect="non-scaling-stroke"
                d="
            M 215.11 294.75
            L 214.77 287.30
            Q 214.74 286.77 214.21 286.74
            L 209.71 286.54"
              />
              <path
                stroke="#c7d9df"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 191.35 282.38
            Q 190.90 279.84 188.96 277.49"
              />
              <path
                stroke="#aac5cd"
                strokeOpacity="0.792"
                vectorEffect="non-scaling-stroke"
                d="
            M 188.96 277.49
            Q 188.96 277.03 188.69 276.68
            Q 188.42 276.32 188.32 276.76
            L 187.96 278.25"
              />
              <path
                stroke="#7c8296"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 148.52 265.45
            L 147.79 265.50"
              />
              <path
                stroke="#c7d9df"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 147.79 265.50
            Q 146.65 264.41 145.14 264.47
            Q 144.65 264.49 144.35 264.86
            Q 143.39 266.03 143.13 267.59"
              />
              <path
                stroke="#899cb3"
                vectorEffect="non-scaling-stroke"
                d="
            M 147.79 265.50
            Q 148.96 267.40 149.74 267.25"
              />
              <path
                stroke="#c7d9df"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 150.29 267.74
            Q 150.19 269.56 148.94 269.89"
              />
              <path
                stroke="#e0cd7e"
                vectorEffect="non-scaling-stroke"
                d="
            M 339.02 281.66
            L 304.23 281.50"
              />
              <path
                stroke="#a3823a"
                vectorEffect="non-scaling-stroke"
                d="
            M 304.23 281.50
            L 308.48 265.33"
              />
              <path
                stroke="#8499b6"
                vectorEffect="non-scaling-stroke"
                d="
            M 304.23 281.50
            L 300.07 281.48"
              />
              <path
                stroke="#c7d9df"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 158.09 273.38
            Q 156.80 274.09 156.71 274.98"
              />
              <path
                stroke="#101627"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 372.10 296.06
            Q 370.59 294.31 366.81 291.69
            Q 363.27 289.23 358.20 282.51"
              />
              <path
                stroke="#839baa"
                strokeOpacity="0.737"
                vectorEffect="non-scaling-stroke"
                d="
            M 235.80 280.89
            C 230.87 281.12 225.13 279.39 223.01 285.40"
              />
              <path
                stroke="#aac5cd"
                strokeOpacity="0.792"
                vectorEffect="non-scaling-stroke"
                d="
            M 169.99 278.27
            Q 171.25 276.20 169.84 274.61
            Q 169.52 274.25 169.04 274.27
            Q 167.97 274.30 166.97 273.92"
              />
              <path
                stroke="#c7d9df"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 169.99 278.27
            L 166.47 281.68"
              />
              <path
                stroke="#93cce9"
                vectorEffect="non-scaling-stroke"
                d="
            M 339.75 292.77
            L 234.99 291.89"
              />
              <path
                stroke="#6f8490"
                strokeOpacity="0.867"
                vectorEffect="non-scaling-stroke"
                d="
            M 234.99 291.89
            L 226.01 291.79"
              />
              <path
                stroke="#758a98"
                strokeOpacity="0.824"
                vectorEffect="non-scaling-stroke"
                d="
            M 226.01 291.79
            Q 222.64 288.68 223.01 285.40"
              />
              <path
                stroke="#8b7173"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 350.43 352.56
            L 344.13 352.51"
              />
              <path
                stroke="#386579"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 344.13 352.51
            Q 342.19 352.19 340.36 352.75
            A 1.04 1.04 0.0 0 1 339.02 351.76
            L 339.01 340.03"
              />
              <path
                stroke="#6d808d"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 339.01 340.03
            Q 339.47 339.63 340.27 339.81
            C 350.58 342.10 351.52 328.77 342.25 328.99
            Q 340.70 329.03 339.22 329.01"
              />
              <path
                stroke="#386579"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 339.22 329.01
            L 339.21 324.10"
              />
              <path
                stroke="#6d808d"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 339.21 324.10
            C 342.02 323.88 344.79 324.72 347.09 322.47"
              />
              <path
                stroke="#2b2f45"
                strokeOpacity="0.824"
                vectorEffect="non-scaling-stroke"
                d="
            M 198.76 331.84
            Q 197.24 331.40 196.07 330.44"
              />
              <path
                stroke="#967a7c"
                strokeOpacity="0.824"
                vectorEffect="non-scaling-stroke"
                d="
            M 196.07 330.44
            L 192.90 326.15"
              />
              <path
                stroke="#3d6d83"
                strokeOpacity="0.824"
                vectorEffect="non-scaling-stroke"
                d="
            M 211.00 299.99
            L 211.01 304.49
            Q 211.01 304.94 211.46 304.96
            L 215.34 305.10
            A 0.92 0.92 0.0 0 0 216.26 303.94
            Q 214.90 298.90 217.85 295.52"
              />
              <path
                stroke="#6995bc"
                vectorEffect="non-scaling-stroke"
                d="
            M 150.13 294.76
            Q 148.89 295.09 148.04 294.71"
              />
              <path
                stroke="#6995bc"
                vectorEffect="non-scaling-stroke"
                d="
            M 215.11 294.75
            Q 213.46 295.43 211.69 295.20"
              />
              <path
                stroke="#9cb0cb"
                vectorEffect="non-scaling-stroke"
                d="
            M 211.69 295.20
            Q 212.36 293.68 211.63 292.57"
              />
              <path
                stroke="#11182a"
                strokeOpacity="0.824"
                vectorEffect="non-scaling-stroke"
                d="
            M 378.95 300.42
            L 377.02 299.32"
              />
              <path
                stroke="#3a687c"
                strokeOpacity="0.867"
                vectorEffect="non-scaling-stroke"
                d="
            M 234.99 291.89
            L 235.01 296.68"
              />
              <path
                stroke="#6f8490"
                strokeOpacity="0.867"
                vectorEffect="non-scaling-stroke"
                d="
            M 235.01 296.68
            Q 231.89 296.59 228.74 296.60
            C 223.50 296.62 221.19 302.05 224.57 306.04"
              />
              <path
                stroke="#93cce9"
                vectorEffect="non-scaling-stroke"
                d="
            M 339.70 297.64
            L 235.01 296.68"
              />
              <path
                stroke="#9cb0cb"
                vectorEffect="non-scaling-stroke"
                d="
            M 187.42 292.53
            Q 186.81 296.07 188.70 296.45"
              />
              <path
                stroke="#4a506d"
                strokeOpacity="0.737"
                vectorEffect="non-scaling-stroke"
                d="
            M 188.70 296.45
            C 186.89 296.64 188.67 322.32 188.76 323.38"
              />
              <path
                stroke="#454b67"
                strokeOpacity="0.784"
                vectorEffect="non-scaling-stroke"
                d="
            M 188.76 323.38
            L 189.02 324.23"
              />
              <path
                stroke="#b2a0b7"
                vectorEffect="non-scaling-stroke"
                d="
            M 189.02 324.23
            L 188.78 324.38
            Q 188.36 324.64 188.37 325.14
            L 189.07 352.54
            A 0.73 0.72 89.2 0 0 189.79 353.25
            L 196.57 353.25
            Q 197.21 353.25 197.49 353.83
            L 201.40 362.17
            Q 201.66 362.72 201.05 362.72
            L 160.49 362.81
            A 0.41 0.40 12.5 0 1 160.12 362.24
            L 164.12 353.71
            Q 164.33 353.25 164.84 353.25
            L 169.97 353.25
            Q 170.52 353.25 170.57 352.70
            Q 171.30 344.47 170.48 336.84"
              />
              <path
                stroke="#4a506d"
                strokeOpacity="0.737"
                vectorEffect="non-scaling-stroke"
                d="
            M 170.48 336.84
            L 170.71 318.53"
              />
              <path
                stroke="#636b93"
                strokeOpacity="0.549"
                vectorEffect="non-scaling-stroke"
                d="
            M 170.71 318.53
            Q 172.33 307.58 171.89 296.60"
              />
              <path
                stroke="#98cfe6"
                vectorEffect="non-scaling-stroke"
                d="
            M 211.69 295.20
            Q 210.90 295.88 210.85 295.52"
              />
              <path
                stroke="#9cb0cb"
                vectorEffect="non-scaling-stroke"
                d="
            M 210.85 295.52
            Q 208.45 296.41 206.15 298.98"
              />
              <path
                stroke="#aac5cd"
                strokeOpacity="0.792"
                vectorEffect="non-scaling-stroke"
                d="
            M 206.15 298.98
            L 199.82 300.00"
              />
              <path
                stroke="#81959c"
                strokeOpacity="0.784"
                vectorEffect="non-scaling-stroke"
                d="
            M 199.82 300.00
            Q 199.59 299.52 199.27 299.54"
              />
              <path
                stroke="#8a9ea6"
                strokeOpacity="0.737"
                vectorEffect="non-scaling-stroke"
                d="
            M 199.27 299.54
            Q 194.20 297.45 188.70 296.45"
              />
              <path
                stroke="#a39bad"
                vectorEffect="non-scaling-stroke"
                d="
            M 426.25 302.21
            Q 425.31 302.14 425.50 302.80"
              />
              <path
                stroke="#407389"
                strokeOpacity="0.784"
                vectorEffect="non-scaling-stroke"
                d="
            M 211.00 299.99
            L 210.71 298.69"
              />
              <path
                stroke="#6995bc"
                vectorEffect="non-scaling-stroke"
                d="
            M 210.71 298.69
            L 210.85 295.52"
              />
              <path
                stroke="#454b67"
                strokeOpacity="0.784"
                vectorEffect="non-scaling-stroke"
                d="
            M 210.71 298.69
            L 205.90 299.04"
              />
              <path
                stroke="#6e7c99"
                strokeOpacity="0.792"
                vectorEffect="non-scaling-stroke"
                d="
            M 205.90 299.04
            Q 206.02 299.01 206.15 298.98"
              />
              <path
                stroke="#e1b7ba"
                strokeOpacity="0.549"
                vectorEffect="non-scaling-stroke"
                d="
            M 170.29 318.44
            C 168.00 311.53 153.48 322.32 150.71 325.19
            C 148.34 327.64 146.08 331.29 143.83 334.28"
              />
              <path
                stroke="#93cce9"
                vectorEffect="non-scaling-stroke"
                d="
            M 339.51 308.38
            Q 287.74 308.02 236.00 307.50
            Q 235.48 307.49 234.59 307.79"
              />
              <path
                stroke="#647783"
                strokeOpacity="0.961"
                vectorEffect="non-scaling-stroke"
                d="
            M 234.59 307.79
            Q 233.59 307.32 232.52 307.57
            Q 227.98 308.60 224.57 306.04"
              />
              <path
                stroke="#967a7c"
                strokeOpacity="0.824"
                vectorEffect="non-scaling-stroke"
                d="
            M 385.16 309.24
            L 384.78 310.61
            Q 384.64 311.10 384.13 311.14
            Q 381.76 311.36 380.14 313.12
            A 0.82 0.82 0.0 0 1 379.33 313.37
            Q 378.32 313.10 377.83 313.99
            Q 377.62 314.37 377.23 314.56
            C 371.35 317.27 366.97 325.18 365.23 331.04"
              />
              <path
                stroke="#2b2f45"
                strokeOpacity="0.824"
                vectorEffect="non-scaling-stroke"
                d="
            M 365.23 331.04
            L 362.15 330.98"
              />
              <path
                stroke="#967a7c"
                strokeOpacity="0.824"
                vectorEffect="non-scaling-stroke"
                d="
            M 362.15 330.98
            Q 362.86 329.83 362.90 328.97"
              />
              <path
                stroke="#9d8082"
                strokeOpacity="0.784"
                vectorEffect="non-scaling-stroke"
                d="
            M 192.90 326.15
            L 189.02 324.23"
              />
              <path
                stroke="#a39bad"
                vectorEffect="non-scaling-stroke"
                d="
            M 103.29 307.01
            Q 103.32 306.56 102.97 306.44"
              />
              <path
                stroke="#fbd8da"
                vectorEffect="non-scaling-stroke"
                d="
            M 514.98 363.04
            L 514.68 363.15
            Q 514.43 363.24 514.18 363.19
            C 493.70 359.47 474.43 358.67 454.53 356.89
            A 0.52 0.51 -83.5 0 1 454.07 356.31
            C 455.91 341.94 447.38 326.81 431.89 326.45
            C 429.67 326.40 426.98 327.18 424.47 327.29"
              />
              <path
                stroke="#345e70"
                strokeOpacity="0.961"
                vectorEffect="non-scaling-stroke"
                d="
            M 234.59 307.79
            L 234.52 312.39"
              />
              <path
                stroke="#647783"
                strokeOpacity="0.961"
                vectorEffect="non-scaling-stroke"
                d="
            M 234.52 312.39
            C 231.60 312.22 227.82 311.68 225.38 313.18
            C 220.79 316.02 222.82 323.14 228.79 323.24
            Q 231.71 323.29 234.55 323.30"
              />
              <path
                stroke="#345e70"
                strokeOpacity="0.961"
                vectorEffect="non-scaling-stroke"
                d="
            M 234.55 323.30
            L 234.22 328.16"
              />
              <path
                stroke="#647783"
                strokeOpacity="0.961"
                vectorEffect="non-scaling-stroke"
                d="
            M 234.22 328.16
            C 228.02 327.89 221.25 327.20 222.85 336.39"
              />
              <path
                stroke="#857979"
                strokeOpacity="0.961"
                vectorEffect="non-scaling-stroke"
                d="
            M 222.85 336.39
            L 222.45 337.12
            Q 222.41 337.20 222.35 337.13
            Q 222.26 337.02 222.22 336.88
            Q 222.13 336.57 221.81 336.63
            Q 219.47 337.01 215.72 335.95"
              />
              <path
                stroke="#81696b"
                strokeOpacity="0.961"
                vectorEffect="non-scaling-stroke"
                d="
            M 215.72 335.95
            Q 208.72 331.54 199.55 332.25"
              />
              <path
                stroke="#24293c"
                strokeOpacity="0.961"
                vectorEffect="non-scaling-stroke"
                d="
            M 199.55 332.25
            Q 199.25 331.97 198.76 331.84"
              />
              <path
                stroke="#fbd8da"
                vectorEffect="non-scaling-stroke"
                d="
            M 108.79 352.88
            L 109.41 356.17
            Q 109.50 356.67 109.00 356.70
            Q 99.24 357.33 89.49 358.10
            C 87.22 358.28 83.35 358.08 80.23 358.89"
              />
              <path
                stroke="#fdd7ce"
                vectorEffect="non-scaling-stroke"
                d="
            M 80.23 358.89
            C 76.58 359.38 78.78 353.94 79.17 352.38"
              />
              <path
                stroke="#93cce9"
                vectorEffect="non-scaling-stroke"
                d="
            M 339.73 313.31
            L 234.52 312.39"
              />
              <path
                stroke="#d5adb0"
                strokeOpacity="0.580"
                vectorEffect="non-scaling-stroke"
                d="
            M 493.50 377.76
            L 489.75 378.06"
              />
              <path
                stroke="#bb989a"
                strokeOpacity="0.663"
                vectorEffect="non-scaling-stroke"
                d="
            M 489.75 378.06
            L 485.21 378.62"
              />
              <path
                stroke="#a8898b"
                strokeOpacity="0.737"
                vectorEffect="non-scaling-stroke"
                d="
            M 485.21 378.62
            Q 485.29 378.83 484.75 378.76"
              />
              <path
                stroke="#8f7476"
                strokeOpacity="0.867"
                vectorEffect="non-scaling-stroke"
                d="
            M 484.75 378.76
            L 477.53 379.48"
              />
              <path
                stroke="#81696b"
                strokeOpacity="0.961"
                vectorEffect="non-scaling-stroke"
                d="
            M 477.53 379.48
            C 473.91 379.78 470.58 379.80 467.00 380.82
            C 459.85 382.85 454.81 382.97 447.17 382.36
            C 438.73 381.68 430.16 382.61 421.74 382.89
            C 407.18 383.38 392.59 384.18 378.06 384.62
            Q 246.07 388.59 114.19 381.85
            Q 96.59 380.95 71.02 378.35"
              />
              <path
                stroke="#8b7173"
                strokeOpacity="0.890"
                vectorEffect="non-scaling-stroke"
                d="
            M 71.02 378.35
            L 67.47 378.06"
              />
              <path
                stroke="#9d8082"
                strokeOpacity="0.784"
                vectorEffect="non-scaling-stroke"
                d="
            M 67.47 378.06
            Q 66.72 377.79 66.69 378.31"
              />
              <path
                stroke="#a28486"
                strokeOpacity="0.765"
                vectorEffect="non-scaling-stroke"
                d="
            M 66.69 378.31
            Q 66.58 378.17 66.47 378.02"
              />
              <path
                stroke="#a8898b"
                strokeOpacity="0.737"
                vectorEffect="non-scaling-stroke"
                d="
            M 66.47 378.02
            Q 66.55 377.59 65.49 377.80"
              />
              <path
                stroke="#b19092"
                strokeOpacity="0.698"
                vectorEffect="non-scaling-stroke"
                d="
            M 65.49 377.80
            Q 65.10 377.69 64.88 377.78"
              />
              <path
                stroke="#bb989a"
                strokeOpacity="0.663"
                vectorEffect="non-scaling-stroke"
                d="
            M 64.88 377.78
            Q 64.57 377.41 64.50 377.56"
              />
              <path
                stroke="#d5adb0"
                strokeOpacity="0.580"
                vectorEffect="non-scaling-stroke"
                d="
            M 64.50 377.56
            L 60.50 377.05"
              />
              <path
                stroke="#e1b7ba"
                strokeOpacity="0.549"
                vectorEffect="non-scaling-stroke"
                d="
            M 60.50 377.05
            Q 60.43 377.04 60.35 377.04"
              />
              <path
                stroke="#fbd8da"
                vectorEffect="non-scaling-stroke"
                d="
            M 57.42 360.08
            Q 57.83 360.18 58.11 360.57
            A 0.85 0.84 -21.0 0 0 58.90 360.92
            L 71.52 359.52
            Q 71.92 359.47 72.25 359.23
            L 72.59 358.97"
              />
              <path
                stroke="#f9c8c0"
                vectorEffect="non-scaling-stroke"
                d="
            M 72.59 358.97
            L 72.64 360.52"
              />
              <path
                stroke="#fbbf67"
                vectorEffect="non-scaling-stroke"
                d="
            M 72.64 360.52
            C 73.55 364.91 81.42 363.03 84.33 361.79
            Q 85.55 361.27 84.57 360.38
            Q 83.86 359.73 81.76 359.75"
              />
              <path
                stroke="#f9c8c0"
                vectorEffect="non-scaling-stroke"
                d="
            M 81.76 359.75
            L 80.23 358.89"
              />
              <path
                stroke="#9d8082"
                strokeOpacity="0.784"
                vectorEffect="non-scaling-stroke"
                d="
            M 118.81 350.15
            L 118.79 351.97
            Q 118.79 352.47 119.23 352.70
            Q 120.17 353.21 121.31 352.43"
              />
              <path
                stroke="#c6b0b4"
                strokeOpacity="0.792"
                vectorEffect="non-scaling-stroke"
                d="
            M 121.31 352.43
            C 125.23 352.41 127.94 351.57 130.67 348.47
            Q 134.34 344.27 140.13 343.91
            C 140.77 343.87 141.42 343.57 141.25 342.84"
              />
              <path
                stroke="#a8898b"
                strokeOpacity="0.737"
                vectorEffect="non-scaling-stroke"
                d="
            M 141.25 342.84
            Q 141.57 342.54 141.57 341.81"
              />
              <path
                stroke="#8a7889"
                vectorEffect="non-scaling-stroke"
                d="
            M 141.57 341.81
            L 142.79 337.24"
              />
              <path
                stroke="#a8898b"
                strokeOpacity="0.737"
                vectorEffect="non-scaling-stroke"
                d="
            M 142.79 337.24
            L 143.83 334.28"
              />
              <path
                stroke="#a8898b"
                strokeOpacity="0.737"
                vectorEffect="non-scaling-stroke"
                d="
            M 170.29 318.44
            Q 168.98 328.07 170.48 336.84"
              />
              <path
                stroke="#9f8c9f"
                vectorEffect="non-scaling-stroke"
                d="
            M 196.07 330.44
            Q 196.71 333.07 199.55 332.25"
              />
              <path
                stroke="#fbd8da"
                vectorEffect="non-scaling-stroke"
                d="
            M 215.72 335.95
            Q 221.18 342.81 223.26 350.11
            A 1.73 1.68 -46.0 0 1 223.26 351.10
            C 222.90 352.35 223.58 352.57 224.69 352.47
            Q 229.82 352.03 234.42 353.07"
              />
              <path
                stroke="#aebfd2"
                vectorEffect="non-scaling-stroke"
                d="
            M 234.42 353.07
            Q 239.16 354.58 245.32 353.88
            Q 245.91 353.81 245.98 354.40
            C 246.79 361.16 251.23 362.18 257.47 362.22
            Q 286.49 362.43 315.49 362.67
            C 322.58 362.73 325.01 361.57 327.00 354.87
            A 0.33 0.32 -78.5 0 1 327.33 354.64
            Q 333.11 355.10 338.83 354.42
            C 340.60 354.22 342.41 353.18 344.13 352.51"
              />
              <path
                stroke="#9f8c9f"
                vectorEffect="non-scaling-stroke"
                d="
            M 362.15 330.98
            L 361.00 333.89
            Q 360.86 334.23 361.12 334.50
            L 361.41 334.79
            A 0.43 0.43 0.0 0 0 362.04 334.76
            L 365.23 331.04"
              />
              <path
                stroke="#fbd8da"
                vectorEffect="non-scaling-stroke"
                d="
            M 366.89 331.25
            C 365.50 330.34 363.11 335.76 362.45 336.90
            A 0.40 0.40 0.0 0 0 362.80 337.50
            L 364.95 337.50
            A 0.76 0.75 9.0 0 0 365.67 336.98
            L 367.24 332.24
            A 0.86 0.85 25.6 0 0 366.89 331.25"
              />
              <path
                stroke="#fbbf67"
                vectorEffect="non-scaling-stroke"
                d="
            M 111.06 359.97
            C 110.82 364.89 120.48 362.13 122.73 360.74
            Q 123.19 360.46 122.74 360.15
            C 120.85 358.83 114.42 360.11 111.60 359.55
            Q 111.09 359.44 111.06 359.97"
              />
              <path
                stroke="#93cce9"
                vectorEffect="non-scaling-stroke"
                d="
            M 339.21 324.10
            L 234.55 323.30"
              />
              <path
                stroke="#fdd7ce"
                vectorEffect="non-scaling-stroke"
                d="
            M 72.40 350.71
            L 72.59 358.97"
              />
              <path
                stroke="#93cce9"
                vectorEffect="non-scaling-stroke"
                d="
            M 339.22 329.01
            L 234.22 328.16"
              />
              <path
                stroke="#93cce9"
                vectorEffect="non-scaling-stroke"
                d="
            M 339.01 340.03
            Q 338.46 340.08 338.19 339.81
            Q 286.36 339.45 234.48 338.94"
              />
              <path
                stroke="#e0e6f1"
                vectorEffect="non-scaling-stroke"
                d="
            M 234.48 338.94
            C 229.99 339.05 226.71 339.54 222.85 336.39"
              />
              <path
                stroke="#131b2f"
                strokeOpacity="0.737"
                vectorEffect="non-scaling-stroke"
                d="
            M 142.79 337.24
            Q 141.33 338.26 141.57 341.81"
              />
              <path
                stroke="#b2cedf"
                vectorEffect="non-scaling-stroke"
                d="
            M 234.48 338.94
            L 234.42 353.07"
              />
              <path
                stroke="#fdbe5b"
                vectorEffect="non-scaling-stroke"
                d="
            M 81.76 359.75
            Q 77.99 361.21 74.03 359.88
            Q 73.52 359.70 73.13 360.07
            L 72.64 360.52"
              />
            </g>
            <rect
              fill="#ffb502"
              x="-2.13"
              y="-1.02"
              transform="translate(293.41,74.57) rotate(-19.1)"
              width="4.26"
              height="2.04"
              rx="0.90"
            />
            <rect
              fill="#ffb502"
              x="-2.21"
              y="-0.99"
              transform="translate(287.75,76.84) rotate(-31.7)"
              width="4.42"
              height="1.98"
              rx="0.84"
            />
            <rect
              fill="#ffb502"
              x="-2.25"
              y="-1.00"
              transform="translate(282.49,80.32) rotate(-39.1)"
              width="4.50"
              height="2.00"
              rx="0.85"
            />
            <rect
              fill="#ffb502"
              x="-0.94"
              y="-2.21"
              transform="translate(278.59,85.33) rotate(26.3)"
              width="1.88"
              height="4.42"
              rx="0.87"
            />
            <path
              fill="#ffb502"
              d="
            M 345.76 112.03
            Q 375.63 139.34 375.75 180.25
            Q 375.76 182.29 374.85 186.96
            C 372.71 198.37 367.89 206.20 362.60 216.15
            Q 362.73 215.86 361.72 216.03
            L 361.54 204.78
            L 359.29 196.87
            Q 359.14 196.32 358.57 196.30
            L 354.04 196.16
            C 354.00 194.98 354.62 191.50 352.52 192.03
            C 362.72 156.32 342.63 118.90 307.40 107.94
            C 249.32 89.88 198.62 150.59 226.48 204.55
            Q 236.51 223.99 256.93 233.86
            L 268.38 281.25
            L 235.80 280.89
            L 235.07 271.91
            Q 234.27 259.80 231.68 248.46
            L 229.66 242.93
            C 221.90 227.72 212.11 214.73 204.60 198.67
            Q 200.84 190.63 200.56 178.01
            C 199.63 135.19 233.11 97.79 274.79 91.64
            Q 275.26 91.57 275.34 91.11
            L 275.63 89.65
            Q 275.73 89.10 276.29 89.06
            L 277.04 89.01
            A 0.58 0.58 0.0 0 1 277.58 89.89
            L 277.34 90.29
            A 0.51 0.51 0.0 0 0 277.83 91.05
            Q 316.36 87.39 345.76 112.03
            Z"
            />
            <path
              fill="#cbe9f4"
              d="
            M 422.80 237.51
            L 418.83 237.60
            L 413.20 234.89
            Q 411.93 229.92 412.18 223.45
            Q 412.77 223.37 412.73 224.39
            A 0.69 0.68 -32.9 0 0 414.05 224.67
            Q 414.84 222.74 416.11 220.86
            Q 416.40 220.43 416.86 220.16
            C 457.77 196.33 446.84 136.63 400.25 128.80
            C 389.99 127.08 380.14 129.30 370.77 133.47
            C 368.98 134.27 367.12 133.95 365.21 134.02
            Q 364.68 134.04 364.83 134.55
            Q 365.13 135.57 365.66 136.42
            C 368.38 140.74 370.33 145.79 371.91 150.55
            A 0.65 0.65 0.0 0 0 373.18 150.39
            C 374.00 139.37 395.93 139.35 403.03 141.60
            C 434.28 151.53 440.81 189.69 414.21 209.23
            Q 406.71 214.74 401.58 207.41
            L 402.59 205.38
            C 407.18 196.13 401.36 186.39 390.61 192.69
            Q 389.12 193.56 386.96 193.65
            C 381.52 193.86 385.26 199.10 387.73 200.32
            C 386.80 203.21 384.48 211.06 387.50 213.78
            A 1.01 1.00 -34.2 0 0 388.52 213.97
            L 389.22 213.71
            A 0.56 0.56 0.0 0 1 389.97 214.21
            Q 390.00 214.74 389.22 215.22
            Q 388.55 215.26 388.16 215.53
            L 386.63 215.52
            L 373.65 210.07
            Q 373.84 205.66 371.93 205.03
            Q 373.09 200.34 376.58 197.03
            A 1.85 1.82 76.9 0 0 377.08 196.21
            C 377.89 193.34 376.69 191.01 376.23 188.17
            Q 376.16 187.76 375.75 187.75
            Q 375.59 187.75 375.42 187.74
            Q 375.09 187.74 375.03 187.42
            Q 374.99 187.17 374.85 186.96
            Q 375.76 182.29 375.75 180.25
            Q 375.63 139.34 345.76 112.03
            Q 346.53 112.11 346.80 111.48
            L 347.22 111.54
            A 0.45 0.44 -4.2 0 0 347.71 110.98
            L 346.63 107.30
            Q 347.80 105.23 349.77 104.31
            Q 350.26 104.08 350.54 104.54
            C 356.97 115.04 361.86 123.49 376.18 116.34
            C 384.63 112.13 383.11 102.02 382.08 94.24
            A 1.06 1.06 0.0 0 1 383.17 93.05
            L 410.58 94.32
            A 0.83 0.83 0.0 0 1 411.35 95.35
            C 410.18 100.11 408.08 111.04 411.79 115.03
            C 416.16 119.75 427.58 125.75 433.93 121.69
            Q 438.97 118.48 444.60 110.25
            Q 445.06 109.58 445.60 110.18
            L 464.50 130.75
            A 1.13 1.13 0.0 0 1 464.24 132.48
            C 460.25 134.81 451.30 141.12 450.98 146.09
            C 450.49 153.94 454.54 167.49 464.30 168.30
            Q 470.91 168.85 477.11 167.88
            A 1.09 1.08 87.0 0 1 478.36 169.01
            L 476.84 196.48
            A 0.88 0.88 0.0 0 1 475.74 197.28
            C 471.77 196.27 460.29 194.01 457.08 196.55
            Q 446.84 204.64 446.56 217.95
            C 446.47 222.22 453.86 228.73 458.31 232.43
            Q 458.91 232.94 458.31 233.45
            L 436.94 251.46
            A 0.94 0.94 0.0 0 1 435.52 251.21
            C 432.41 245.80 429.11 239.62 422.80 237.51
            Z"
            />
            <path
              fill="#ffb502"
              d="
            M 206.74 100.39
            A 0.42 0.42 0.0 0 1 206.36 100.85
            L 204.50 100.99
            A 2.16 0.82 -4.5 0 1 202.29 100.34
            L 202.25 99.86
            A 2.16 0.82 -4.5 0 1 204.34 98.88
            L 206.19 98.73
            A 0.42 0.42 0.0 0 1 206.64 99.12
            L 206.74 100.39
            Z"
            />
            <rect
              fill="#ffb502"
              x="-2.13"
              y="-1.01"
              transform="translate(210.63,100.46) rotate(17.4)"
              width="4.26"
              height="2.02"
              rx="0.89"
            />
            <rect
              fill="#ffb502"
              x="-2.23"
              y="-1.01"
              transform="translate(198.74,101.52) rotate(-27.1)"
              width="4.46"
              height="2.02"
              rx="0.77"
            />
            <rect
              fill="#ffb502"
              x="-2.21"
              y="-0.95"
              transform="translate(216.31,103.17) rotate(33.9)"
              width="4.42"
              height="1.90"
              rx="0.73"
            />
            <rect
              fill="#ffb502"
              x="-0.96"
              y="-2.33"
              transform="translate(194.24,105.87) rotate(30.5)"
              width="1.92"
              height="4.66"
              rx="0.89"
            />
            <path
              fill="#ffcf03"
              d="
            M 352.52 192.03
            L 311.74 192.25
            L 301.82 192.35
            Q 301.34 192.35 301.10 192.77
            L 300.49 193.82
            L 248.27 193.79
            Q 247.73 193.79 247.81 194.32
            C 249.82 207.22 254.02 220.19 256.93 233.86
            Q 236.51 223.99 226.48 204.55
            C 198.62 150.59 249.32 89.88 307.40 107.94
            C 342.63 118.90 362.72 156.32 352.52 192.03
            Z"
            />
            <rect
              fill="#ffb502"
              x="-0.98"
              y="-2.35"
              transform="translate(220.66,107.78) rotate(-36.4)"
              width="1.96"
              height="4.70"
              rx="0.92"
            />
            <path
              fill="#71868b"
              fillOpacity="0.580"
              d="
            M 346.63 107.30
            L 347.71 110.98
            A 0.45 0.44 -4.2 0 1 347.22 111.54
            L 346.80 111.48
            Q 346.71 110.29 345.95 109.27
            A 0.75 0.75 0.0 0 1 345.92 108.43
            L 346.63 107.30
            Z"
            />
            <rect
              fill="#ffb502"
              x="-1.00"
              y="-2.36"
              transform="translate(191.39,111.68) rotate(19.3)"
              width="2.00"
              height="4.72"
              rx="0.87"
            />
            <rect
              fill="#ffb502"
              x="-0.94"
              y="-2.43"
              transform="translate(224.24,113.12) rotate(-27.3)"
              width="1.88"
              height="4.86"
              rx="0.79"
            />
            <rect
              fill="#ffb502"
              x="-1.00"
              y="-2.22"
              transform="translate(189.70,118.01) rotate(13.2)"
              width="2.00"
              height="4.44"
              rx="0.67"
            />
            <rect
              fill="#ffb502"
              x="-0.95"
              y="-2.42"
              transform="translate(188.69,124.51) rotate(7.3)"
              width="1.90"
              height="4.84"
              rx="0.89"
            />
            <path
              fill="#c1c4c4"
              fillOpacity="0.780"
              d="
            M 412.18 223.45
            C 411.14 218.86 410.41 214.90 404.86 214.27
            Q 403.10 213.49 401.00 213.76
            Q 398.65 212.90 397.78 210.14
            L 401.58 207.41
            Q 406.71 214.74 414.21 209.23
            C 440.81 189.69 434.28 151.53 403.03 141.60
            C 395.93 139.35 374.00 139.37 373.18 150.39
            A 0.65 0.65 0.0 0 1 371.91 150.55
            C 370.33 145.79 368.38 140.74 365.66 136.42
            Q 365.13 135.57 364.83 134.55
            Q 364.68 134.04 365.21 134.02
            C 367.12 133.95 368.98 134.27 370.77 133.47
            C 380.14 129.30 389.99 127.08 400.25 128.80
            C 446.84 136.63 457.77 196.33 416.86 220.16
            Q 416.40 220.43 416.11 220.86
            Q 414.84 222.74 414.05 224.67
            A 0.69 0.68 -32.9 0 1 412.73 224.39
            Q 412.77 223.37 412.18 223.45
            Z"
            />
            <rect
              fill="#ffb502"
              x="-0.96"
              y="-2.22"
              transform="translate(187.95,130.97) rotate(3.0)"
              width="1.92"
              height="4.44"
              rx="0.86"
            />
            <rect
              fill="#000101"
              fillOpacity="0.922"
              x="-1.12"
              y="-2.82"
              transform="translate(492.13,132.95) rotate(0.2)"
              width="2.24"
              height="5.64"
              rx="0.81"
            />
            <path
              fill="#ffb502"
              d="
            M 186.21 139.87
            A 0.29 0.29 0.0 0 1 185.95 139.55
            L 185.98 139.28
            A 4.28 0.73 -84.8 0 1 187.09 135.09
            L 187.61 135.13
            A 4.28 0.73 -84.8 0 1 187.95 139.46
            L 187.92 139.73
            A 0.29 0.29 0.0 0 1 187.61 139.99
            L 186.21 139.87
            Z"
            />
            <rect
              fill="#000101"
              fillOpacity="0.922"
              x="-1.13"
              y="-2.74"
              transform="translate(492.12,141.00) rotate(0.1)"
              width="2.26"
              height="5.48"
              rx="0.68"
            />
            <rect
              fill="#ffb502"
              x="-0.99"
              y="-2.47"
              transform="translate(186.25,144.20) rotate(10.1)"
              width="1.98"
              height="4.94"
              rx="0.89"
            />
            <rect
              fill="#000101"
              fillOpacity="0.922"
              x="-1.18"
              y="-2.73"
              transform="translate(492.07,149.03) rotate(1.4)"
              width="2.36"
              height="5.46"
              rx="0.68"
            />
            <rect
              fill="#ffb502"
              x="-1.00"
              y="-2.45"
              transform="translate(184.89,150.56) rotate(13.6)"
              width="2.00"
              height="4.90"
              rx="0.83"
            />
            <rect
              fill="#ffb502"
              x="-0.98"
              y="-2.37"
              transform="translate(151.02,150.87) rotate(-7.9)"
              width="1.96"
              height="4.74"
              rx="0.79"
            />
            <rect
              fill="#000101"
              fillOpacity="0.922"
              x="490.75"
              y="154.30"
              width="2.50"
              height="5.48"
              rx="0.81"
            />
            <rect
              fill="#ffb502"
              x="-1.01"
              y="-2.22"
              transform="translate(182.61,156.84) rotate(24.0)"
              width="2.02"
              height="4.44"
              rx="0.72"
            />
            <rect
              fill="#ffb502"
              x="-0.98"
              y="-2.40"
              transform="translate(152.53,157.32) rotate(-17.4)"
              width="1.96"
              height="4.80"
              rx="0.86"
            />
            <rect
              fill="#ffb502"
              x="-0.85"
              y="-2.11"
              transform="translate(179.39,162.28) rotate(37.2)"
              width="1.70"
              height="4.22"
              rx="0.43"
            />
            <path
              fill="#ffb502"
              d="
            M 153.28 162.06
            A 0.29 0.29 0.0 0 1 153.41 161.67
            L 153.65 161.55
            A 1.49 1.38 63.3 0 1 155.55 162.26
            L 156.30 163.76
            A 1.49 1.38 63.3 0 1 155.74 165.72
            L 155.50 165.84
            A 0.29 0.29 0.0 0 1 155.11 165.71
            L 153.28 162.06
            Z"
            />
            <rect
              fill="#000101"
              fillOpacity="0.922"
              x="-1.25"
              y="-2.87"
              transform="translate(492.00,165.11) rotate(-0.1)"
              width="2.50"
              height="5.74"
              rx="1.03"
            />
            <rect
              fill="#ffb502"
              x="-2.42"
              y="-1.01"
              transform="translate(175.07,166.99) rotate(-44.4)"
              width="4.84"
              height="2.02"
              rx="0.95"
            />
            <path
              fill="#ffb502"
              d="
            M 160.58 169.42
            A 0.42 0.42 0.0 0 1 160.59 170.02
            L 160.32 170.29
            A 2.12 1.32 44.2 0 1 157.88 169.76
            L 157.50 169.38
            A 2.12 1.32 44.2 0 1 156.90 166.96
            L 157.16 166.68
            A 0.42 0.42 0.0 0 1 157.76 166.68
            L 160.58 169.42
            Z"
            />
            <rect
              fill="#ffb502"
              x="-2.22"
              y="-0.91"
              transform="translate(170.07,170.57) rotate(-25.2)"
              width="4.44"
              height="1.82"
              rx="0.70"
            />
            <rect
              fill="#000101"
              fillOpacity="0.922"
              x="-1.20"
              y="-2.83"
              transform="translate(491.95,173.12) rotate(-0.6)"
              width="2.40"
              height="5.66"
              rx="0.84"
            />
            <rect
              fill="#ffb502"
              x="-2.09"
              y="-1.01"
              transform="translate(163.94,171.63) rotate(10.4)"
              width="4.18"
              height="2.02"
              rx="0.82"
            />
            <path
              fill="#464e72"
              d="
            M 92.06 175.94
            C 97.48 175.15 98.78 184.94 103.90 179.57
            C 108.82 174.41 110.83 175.74 115.24 180.11
            A 2.69 2.69 0.0 0 0 119.03 180.10
            L 123.28 175.85
            Q 123.69 175.44 124.03 175.90
            L 124.24 176.19
            Q 124.55 176.61 124.18 176.98
            L 119.34 181.73
            A 1.77 1.72 -68.6 0 1 118.28 182.21
            C 113.61 182.60 113.74 179.25 111.00 177.92
            C 107.10 176.02 104.79 182.57 101.08 182.61
            C 95.29 182.68 94.93 171.65 87.33 181.08
            C 83.64 185.66 79.21 179.54 76.74 177.38
            A 0.61 0.61 0.0 0 1 76.81 176.40
            L 77.15 176.17
            Q 77.59 175.89 77.91 176.30
            C 86.02 186.70 85.60 176.87 92.06 175.94
            Z"
            />
            <rect
              fill="#000101"
              fillOpacity="0.922"
              x="-1.13"
              y="-2.85"
              transform="translate(491.88,181.13) rotate(0.2)"
              width="2.26"
              height="5.70"
              rx="0.83"
            />
            <path
              fill="#464e72"
              d="
            M 185.28 190.00
            Q 184.05 189.36 182.95 189.75
            Q 182.44 189.92 182.45 190.46
            L 182.96 223.57
            Q 182.97 224.16 183.55 224.18
            L 186.05 224.26
            L 191.74 224.39
            Q 192.45 224.41 191.96 223.89
            L 186.24 217.88
            L 186.00 216.60
            Q 185.89 216.02 186.46 216.17
            L 187.71 216.51
            C 191.09 220.15 194.98 225.79 198.89 223.90
            L 210.72 224.20
            L 210.80 230.90
            L 207.28 230.66
            C 199.38 230.25 191.21 229.69 183.60 230.77
            A 0.66 0.65 86.0 0 0 183.04 231.42
            L 183.33 253.36
            A 0.61 0.60 90.0 0 0 183.92 253.96
            L 187.10 253.97
            L 191.36 253.97
            A 0.48 0.48 0.0 0 0 191.60 253.08
            Q 189.50 251.82 187.56 249.07
            Q 187.73 248.60 186.81 247.64
            Q 186.45 247.27 186.48 246.75
            Q 186.52 246.05 187.18 245.92
            Q 190.87 248.94 193.94 252.84
            Q 197.99 254.80 204.27 253.89
            L 219.46 253.99
            L 219.30 260.26
            L 206.22 260.28
            L 197.54 260.25
            L 187.27 260.20
            L 183.96 260.24
            A 0.55 0.55 0.0 0 0 183.42 260.79
            L 183.78 285.89
            A 0.65 0.64 -89.1 0 0 184.39 286.53
            L 191.21 286.85
            A 0.76 0.76 0.0 0 0 191.80 285.57
            L 189.72 283.35
            Q 189.41 283.03 189.27 283.45
            Q 189.21 283.63 189.19 283.78
            Q 188.48 283.31 188.90 283.07
            Q 186.86 280.94 187.91 278.78
            Q 187.95 278.88 187.98 278.98
            Q 189.12 281.01 191.35 282.38
            L 195.34 286.26
            Q 195.71 286.62 196.24 286.62
            L 209.71 286.54
            Q 213.44 285.89 211.63 292.57
            L 187.42 292.53
            Q 185.65 292.36 184.28 292.84
            Q 183.84 292.99 183.84 293.46
            L 184.66 352.64
            A 0.61 0.60 -0.5 0 1 184.05 353.25
            L 175.78 353.25
            A 0.71 0.71 0.0 0 1 175.07 352.53
            L 175.85 293.27
            Q 175.85 292.76 175.36 292.63
            Q 173.43 292.11 171.92 292.89
            Q 161.31 292.22 150.48 292.75
            L 150.01 286.68
            L 163.13 286.54
            Q 163.60 286.54 163.91 286.19
            L 166.78 283.02
            Q 167.30 282.45 166.53 282.42
            Q 165.34 282.38 164.94 281.85
            L 166.47 281.68
            Q 166.99 281.73 167.35 282.34
            Q 167.60 282.77 167.94 282.40
            L 170.99 279.06
            Q 171.64 278.73 172.03 278.75
            Q 172.69 278.79 172.42 279.40
            L 171.32 281.89
            Q 169.82 284.21 167.21 285.45
            A 0.54 0.54 0.0 0 0 167.44 286.48
            L 171.74 286.48
            L 175.24 286.44
            A 0.70 0.70 0.0 0 0 175.93 285.75
            L 176.35 261.10
            Q 176.36 260.58 175.87 260.41
            Q 174.08 259.81 172.77 260.29
            L 152.07 260.31
            L 138.94 260.37
            Q 139.35 256.85 138.58 254.04
            L 149.58 253.69
            Q 150.22 253.67 149.63 253.41
            L 148.70 252.99
            C 152.13 253.45 155.87 254.94 159.16 252.86
            Q 159.87 254.02 161.96 253.72
            L 163.17 253.90
            A 0.87 0.85 -63.6 0 0 163.95 253.63
            L 172.31 244.59
            Q 172.89 246.39 172.73 247.71
            L 167.49 253.32
            Q 166.93 253.91 167.75 253.89
            L 172.96 253.76
            Q 174.69 254.35 175.96 253.86
            A 0.83 0.83 0.0 0 0 176.49 253.10
            L 176.53 231.44
            Q 176.53 230.79 175.88 230.78
            C 174.39 230.76 173.26 230.31 171.84 230.31
            Q 161.34 230.24 150.74 230.22
            A 0.63 0.63 0.0 0 1 150.12 229.58
            L 150.27 224.42
            L 160.27 224.40
            Q 162.41 224.82 163.70 224.06
            L 165.25 222.55
            Q 169.46 220.27 171.83 215.99
            Q 172.00 215.45 172.72 214.96
            C 174.01 214.87 173.89 216.06 173.66 216.87
            L 166.80 223.73
            Q 166.31 224.22 166.98 224.42
            Q 170.31 225.43 173.83 224.22
            Q 175.21 224.63 176.19 224.38
            Q 176.72 224.24 176.73 223.70
            L 177.32 190.78
            A 0.87 0.87 0.0 0 0 176.95 190.07
            Q 175.33 188.94 174.33 189.90
            L 170.89 189.74
            Q 170.34 189.72 170.33 189.17
            L 170.21 179.40
            A 0.65 0.64 90.0 0 1 170.85 178.75
            L 188.62 178.75
            Q 189.25 178.75 189.25 179.38
            L 189.25 189.02
            A 0.72 0.71 -2.6 0 1 188.60 189.73
            L 185.28 190.00
            Z"
            />
            <path
              fill="#c1c4c4"
              fillOpacity="0.780"
              d="
            M 374.85 186.96
            Q 374.99 187.17 375.03 187.42
            Q 375.09 187.74 375.42 187.74
            Q 375.59 187.75 375.75 187.75
            Q 376.16 187.76 376.23 188.17
            C 376.69 191.01 377.89 193.34 377.08 196.21
            A 1.85 1.82 76.9 0 1 376.58 197.03
            Q 373.09 200.34 371.93 205.03
            Q 370.57 210.39 371.99 216.13
            A 0.54 0.53 -15.4 0 1 371.62 216.77
            Q 370.41 217.14 370.26 218.01
            L 369.88 218.70
            Q 365.23 219.35 362.60 216.15
            C 367.89 206.20 372.71 198.37 374.85 186.96
            Z"
            />
            <path
              fill="#6d76a1"
              d="
            M 173.83 224.22
            Q 174.37 220.47 173.66 216.87
            C 173.89 216.06 174.01 214.87 172.72 214.96
            C 174.80 212.87 174.25 196.06 174.33 189.90
            Q 175.33 188.94 176.95 190.07
            A 0.87 0.87 0.0 0 1 177.32 190.78
            L 176.73 223.70
            Q 176.72 224.24 176.19 224.38
            Q 175.21 224.63 173.83 224.22
            Z"
            />
            <path
              fill="#6d76a1"
              d="
            M 185.28 190.00
            Q 185.68 201.89 185.98 213.69
            C 186.01 215.04 186.74 215.55 187.84 216.09
            Q 187.68 216.17 187.71 216.51
            L 186.46 216.17
            Q 185.89 216.02 186.00 216.60
            L 186.24 217.88
            L 186.05 224.26
            L 183.55 224.18
            Q 182.97 224.16 182.96 223.57
            L 182.45 190.46
            Q 182.44 189.92 182.95 189.75
            Q 184.05 189.36 185.28 190.00
            Z"
            />
            <path
              fill="#ffb502"
              d="
            M 402.59 205.38
            L 397.77 204.20
            L 387.73 200.32
            C 385.26 199.10 381.52 193.86 386.96 193.65
            Q 389.12 193.56 390.61 192.69
            C 401.36 186.39 407.18 196.13 402.59 205.38
            Z"
            />
            <path
              fill="#64b4d7"
              d="
            M 352.52 192.03
            C 354.62 191.50 354.00 194.98 354.04 196.16
            L 312.27 196.14
            Q 311.68 196.14 311.69 195.55
            L 311.74 192.25
            L 352.52 192.03
            Z"
            />
            <path
              fill="#4ca1be"
              d="
            M 311.74 192.25
            L 311.69 195.55
            Q 311.68 196.14 312.27 196.14
            L 354.04 196.16
            L 358.57 196.30
            Q 359.14 196.32 359.29 196.87
            L 361.54 204.78
            L 315.25 204.80
            L 292.49 204.89
            L 294.12 198.25
            Q 294.31 195.47 299.44 196.28
            Q 300.78 196.49 301.03 195.16
            Q 301.17 194.42 300.49 193.82
            L 301.10 192.77
            Q 301.34 192.35 301.82 192.35
            L 311.74 192.25
            Z"
            />
            <path
              fill="#464e72"
              d="
            M 300.49 193.82
            Q 301.17 194.42 301.03 195.16
            Q 300.78 196.49 299.44 196.28
            Q 294.31 195.47 294.12 198.25
            L 253.36 197.91
            A 0.42 0.41 -6.5 0 0 252.95 198.42
            L 262.20 236.85
            L 272.76 281.18
            L 268.38 281.25
            L 256.93 233.86
            C 254.02 220.19 249.82 207.22 247.81 194.32
            Q 247.73 193.79 248.27 193.79
            L 300.49 193.82
            Z"
            />
            <path
              fill="#cbe9f4"
              d="
            M 160.86 222.49
            L 160.27 224.40
            L 150.27 224.42
            L 148.35 224.53
            Q 147.77 224.57 147.77 225.15
            L 147.76 228.48
            C 145.45 229.74 146.07 232.55 142.40 231.90
            Q 131.99 231.01 121.38 233.78
            Q 119.70 231.34 117.27 230.48
            Q 116.86 230.33 116.54 230.63
            Q 115.72 231.40 115.00 231.30
            Q 113.91 231.05 113.16 229.97
            Q 113.88 227.58 111.81 226.42
            Q 111.30 226.13 111.32 225.54
            L 111.44 222.32
            C 116.84 221.86 126.38 218.44 126.93 211.99
            Q 127.58 204.47 126.65 197.17
            A 0.83 0.83 0.0 0 1 127.51 196.23
            L 155.51 197.46
            A 0.56 0.56 0.0 0 1 156.05 198.08
            C 155.44 203.57 153.27 210.57 155.28 215.70
            C 156.28 218.27 158.82 220.49 160.86 222.49
            Z"
            />
            <path
              fill="#ffcf03"
              d="
            M 294.12 198.25
            L 292.49 204.89
            L 292.49 241.00
            Q 277.16 241.65 262.20 236.85
            L 252.95 198.42
            A 0.42 0.41 -6.5 0 1 253.36 197.91
            L 294.12 198.25
            Z"
            />
            <path
              fill="#fbc6b4"
              d="
            M 387.73 200.32
            L 397.77 204.20
            Q 398.53 206.88 396.88 208.89
            A 0.72 0.71 -34.1 0 0 396.75 209.53
            Q 397.06 210.63 397.78 210.14
            Q 398.65 212.90 401.00 213.76
            L 400.64 213.75
            Q 400.13 213.72 399.77 214.08
            Q 395.52 218.35 389.63 219.28
            A 0.94 0.93 1.7 0 1 388.57 218.16
            L 389.22 215.22
            Q 390.00 214.74 389.97 214.21
            A 0.56 0.56 0.0 0 0 389.22 213.71
            L 388.52 213.97
            A 1.01 1.00 -34.2 0 1 387.50 213.78
            C 384.48 211.06 386.80 203.21 387.73 200.32
            Z"
            />
            <path
              fill="#ffb502"
              d="
            M 108.72 215.23
            Q 103.52 215.28 98.74 217.89
            L 93.65 219.63
            Q 91.56 216.29 91.21 211.58
            C 92.63 203.58 101.25 201.17 107.07 206.59
            A 1.12 1.10 -27.1 0 0 107.97 206.87
            Q 110.70 206.49 112.48 208.34
            Q 112.96 208.84 112.65 209.47
            Q 111.11 212.63 108.11 214.55
            Q 107.55 214.91 108.13 215.22
            Q 108.40 215.36 108.72 215.23
            Z"
            />
            <path
              fill="#1c2745"
              d="
            M 397.77 204.20
            L 402.59 205.38
            L 401.58 207.41
            L 397.78 210.14
            Q 397.06 210.63 396.75 209.53
            A 0.72 0.71 -34.1 0 1 396.88 208.89
            Q 398.53 206.88 397.77 204.20
            Z"
            />
            <path
              fill="#64b4d7"
              d="
            M 315.25 204.80
            L 315.25 265.16
            L 308.48 265.33
            L 303.93 265.21
            L 293.63 265.33
            A 1.13 1.13 0.0 0 1 292.49 264.20
            L 292.49 241.00
            L 292.49 204.89
            L 315.25 204.80
            Z
            M 297.98 221.21
            L 309.23 221.27
            Q 310.33 222.02 311.31 221.70
            Q 311.71 221.57 311.70 221.15
            L 311.60 212.94
            A 0.65 0.64 -0.4 0 0 310.94 212.30
            L 296.24 212.51
            Q 295.75 212.51 295.75 213.01
            L 295.75 221.08
            A 0.63 0.63 0.0 0 0 296.41 221.71
            Q 297.11 221.69 297.98 221.21
            Z"
            />
            <path
              fill="#c1e4fa"
              d="
            M 361.54 204.78
            L 361.72 216.03
            Q 361.05 221.76 361.91 227.32
            Q 360.98 230.74 361.71 233.74
            L 361.77 241.23
            L 361.79 248.98
            L 361.76 263.93
            A 1.14 1.13 -0.3 0 1 360.63 265.06
            L 340.65 265.14
            L 315.25 265.16
            L 315.25 204.80
            L 361.54 204.78
            Z
            M 352.71 222.10
            A 13.73 13.73 0.0 0 0 338.98 208.37
            A 13.73 13.73 0.0 0 0 325.25 222.10
            A 13.73 13.73 0.0 0 0 338.98 235.83
            A 13.73 13.73 0.0 0 0 352.71 222.10
            Z
            M 354.01 238.60
            A 0.60 0.60 0.0 0 0 353.41 238.00
            L 325.85 238.00
            A 0.60 0.60 0.0 0 0 325.25 238.60
            L 325.25 240.66
            A 0.60 0.60 0.0 0 0 325.85 241.26
            L 353.41 241.26
            A 0.60 0.60 0.0 0 0 354.01 240.66
            L 354.01 238.60
            Z
            M 331.08 260.92
            A 0.44 0.44 0.0 0 0 331.48 261.56
            L 347.78 261.44
            A 0.44 0.44 0.0 0 0 348.17 260.80
            L 339.91 244.98
            A 0.44 0.44 0.0 0 0 339.12 244.99
            L 331.08 260.92
            Z"
            />
            <path
              fill="#fbc6b4"
              d="
            M 373.65 210.07
            Q 374.50 214.02 376.38 216.51
            Q 378.28 220.36 382.14 221.62
            Q 384.14 222.76 386.17 222.64
            L 388.70 222.49
            Q 389.19 222.46 389.41 222.90
            L 393.23 230.54
            Q 393.45 230.97 392.98 231.09
            Q 389.82 231.89 385.60 231.71
            L 380.84 231.21
            Q 373.38 226.91 371.91 217.98
            Q 371.82 217.45 371.28 217.47
            Q 370.84 217.49 370.26 218.01
            Q 370.41 217.14 371.62 216.77
            A 0.54 0.53 -15.4 0 0 371.99 216.13
            Q 370.57 210.39 371.93 205.03
            Q 373.84 205.66 373.65 210.07
            Z"
            />
            <path
              fill="#64b4d7"
              d="
            M 496.32 212.13
            A 5.66 5.66 0.0 0 1 490.66 217.79
            A 5.66 5.66 0.0 0 1 485.00 212.13
            A 5.66 5.66 0.0 0 1 490.66 206.47
            A 5.66 5.66 0.0 0 1 496.32 212.13
            Z
            M 493.2009 209.5372
            A 3.15 3.15 0.0 0 0 488.7638 209.1412
            L 488.1347 209.6672
            A 3.15 3.15 0.0 0 0 487.7387 214.1044
            L 488.2391 214.7028
            A 3.15 3.15 0.0 0 0 492.6762 215.0988
            L 493.3053 214.5728
            A 3.15 3.15 0.0 0 0 493.7013 210.1356
            L 493.2009 209.5372
            Z"
            />
            <path
              fill="#4ca1be"
              d="
            M 352.71 222.10
            A 13.73 13.73 0.0 0 1 338.98 235.83
            A 13.73 13.73 0.0 0 1 325.25 222.10
            A 13.73 13.73 0.0 0 1 338.98 208.37
            A 13.73 13.73 0.0 0 1 352.71 222.10
            Z
            M 350.73 222.08
            A 11.77 11.77 0.0 0 0 338.96 210.31
            A 11.77 11.77 0.0 0 0 327.19 222.08
            A 11.77 11.77 0.0 0 0 338.96 233.85
            A 11.77 11.77 0.0 0 0 350.73 222.08
            Z"
            />
            <rect
              fill="#c1c4c4"
              fillOpacity="0.780"
              x="-3.56"
              y="-3.54"
              transform="translate(490.72,212.12) rotate(-39.9)"
              width="7.12"
              height="7.08"
              rx="3.15"
            />
            <circle fill="#64b4d7" cx="338.96" cy="222.08" r="11.77" />
            <path
              fill="#ffe7e7"
              d="
            M 373.65 210.07
            L 386.63 215.52
            Q 385.80 216.29 385.35 216.23
            Q 380.96 215.84 376.38 216.51
            Q 374.50 214.02 373.65 210.07
            Z"
            />
            <path
              fill="#cbe9f4"
              d="
            M 91.21 211.58
            Q 91.56 216.29 93.65 219.63
            Q 95.30 223.14 98.50 224.34
            Q 97.82 226.71 96.13 227.68
            Q 95.78 228.19 95.46 227.97
            L 90.17 228.74
            Q 85.99 228.64 82.60 233.37
            Q 76.72 232.63 72.99 226.52
            A 0.94 0.94 0.0 0 1 73.19 225.31
            C 74.75 223.97 88.79 211.26 89.65 212.90
            Q 89.89 213.37 90.30 213.05
            Q 90.84 212.65 91.21 211.58
            Z"
            />
            <path
              fill="#6d76a1"
              d="
            M 309.23 221.27
            Q 309.98 221.08 309.97 220.49
            Q 309.95 219.88 309.34 219.89
            L 298.41 220.14
            Q 297.80 220.15 297.78 220.76
            Q 297.78 220.99 297.98 221.21
            Q 297.11 221.69 296.41 221.71
            A 0.63 0.63 0.0 0 1 295.75 221.08
            L 295.75 213.01
            Q 295.75 212.51 296.24 212.51
            L 310.94 212.30
            A 0.65 0.64 -0.4 0 1 311.60 212.94
            L 311.70 221.15
            Q 311.71 221.57 311.31 221.70
            Q 310.33 222.02 309.23 221.27
            Z
            M 309.7576 213.9088
            A 0.27 0.27 0.0 0 0 309.4862 213.6402
            L 298.1064 213.6998
            A 0.27 0.27 0.0 0 0 297.8378 213.9712
            L 297.8624 218.6712
            A 0.27 0.27 0.0 0 0 298.1338 218.9398
            L 309.5136 218.8802
            A 0.27 0.27 0.0 0 0 309.7822 218.6088
            L 309.7576 213.9088
            Z"
            />
            <rect
              fill="#464e72"
              x="-5.96"
              y="-2.62"
              transform="translate(303.81,216.29) rotate(-0.3)"
              width="11.92"
              height="5.24"
              rx="0.27"
            />
            <path
              fill="#cbe9f4"
              d="
            M 198.89 223.90
            C 194.98 225.79 191.09 220.15 187.71 216.51
            Q 187.68 216.17 187.84 216.09
            L 189.32 214.10
            A 0.62 0.61 35.3 0 1 190.16 213.96
            Q 195.61 217.66 198.89 223.90
            Z"
            />
            <path
              fill="#ffb502"
              d="
            M 401.00 213.76
            L 401.00 214.69
            Q 401.00 215.16 401.48 215.18
            Q 403.43 215.28 404.86 214.27
            C 410.41 214.90 411.14 218.86 412.18 223.45
            Q 411.93 229.92 413.20 234.89
            Q 413.58 237.30 414.13 237.84
            L 415.55 241.51
            Q 405.56 239.36 402.95 230.25
            Q 402.81 229.74 402.35 230.00
            C 400.77 230.86 396.28 233.94 394.74 232.12
            Q 394.40 231.72 394.03 232.10
            Q 389.46 236.91 385.60 231.71
            Q 389.82 231.89 392.98 231.09
            Q 393.45 230.97 393.23 230.54
            L 389.41 222.90
            Q 389.19 222.46 388.70 222.49
            L 386.17 222.64
            L 388.16 215.53
            Q 388.55 215.26 389.22 215.22
            L 388.57 218.16
            A 0.94 0.93 1.7 0 0 389.63 219.28
            Q 395.52 218.35 399.77 214.08
            Q 400.13 213.72 400.64 213.75
            L 401.00 213.76
            Z"
            />
            <path
              fill="#1c2745"
              d="
            M 401.00 213.76
            Q 403.10 213.49 404.86 214.27
            Q 403.43 215.28 401.48 215.18
            Q 401.00 215.16 401.00 214.69
            L 401.00 213.76
            Z"
            />
            <path
              fill="#fbc6b4"
              d="
            M 108.72 215.23
            Q 110.77 218.08 111.44 222.32
            L 111.32 225.54
            Q 111.30 226.13 111.81 226.42
            Q 113.88 227.58 113.16 229.97
            L 112.23 230.11
            Q 110.57 227.21 107.73 228.20
            Q 107.21 228.39 107.49 228.86
            L 109.10 231.59
            Q 108.48 234.37 106.29 233.71
            Q 101.58 232.29 98.08 230.32
            Q 97.64 230.07 97.37 229.64
            L 96.13 227.68
            Q 97.82 226.71 98.50 224.34
            Q 98.93 224.11 99.15 224.26
            A 0.49 0.49 0.0 0 0 99.79 223.54
            Q 97.46 220.75 98.74 217.89
            Q 103.52 215.28 108.72 215.23
            Z"
            />
            <path
              fill="#1c2745"
              d="
            M 388.16 215.53
            L 386.17 222.64
            Q 384.14 222.76 382.14 221.62
            L 385.35 216.23
            Q 385.80 216.29 386.63 215.52
            L 388.16 215.53
            Z"
            />
            <path
              fill="#c1c4c4"
              fillOpacity="0.780"
              d="
            M 171.83 215.99
            Q 169.46 220.27 165.25 222.55
            L 171.83 215.99
            Z"
            />
            <path
              fill="#fbc6b4"
              d="
            M 361.72 216.03
            Q 362.73 215.86 362.60 216.15
            Q 365.23 219.35 369.88 218.70
            Q 369.34 223.87 371.15 229.77
            Q 366.79 229.37 361.91 227.32
            Q 361.05 221.76 361.72 216.03
            Z"
            />
            <path
              fill="#ffb502"
              d="
            M 385.35 216.23
            L 382.14 221.62
            Q 378.28 220.36 376.38 216.51
            Q 380.96 215.84 385.35 216.23
            Z"
            />
            <path
              fill="#c1c4c4"
              fillOpacity="0.780"
              d="
            M 173.66 216.87
            Q 174.37 220.47 173.83 224.22
            Q 170.31 225.43 166.98 224.42
            Q 166.31 224.22 166.80 223.73
            L 173.66 216.87
            Z"
            />
            <path
              fill="#ffb502"
              d="
            M 380.84 231.21
            L 380.94 241.34
            Q 378.99 236.96 379.35 232.21
            A 1.06 1.05 -5.8 0 0 378.01 231.12
            Q 371.56 232.97 371.15 229.77
            Q 369.34 223.87 369.88 218.70
            L 370.26 218.01
            Q 370.84 217.49 371.28 217.47
            Q 371.82 217.45 371.91 217.98
            Q 373.38 226.91 380.84 231.21
            Z"
            />
            <path
              fill="#1c2745"
              d="
            M 98.74 217.89
            Q 97.46 220.75 99.79 223.54
            A 0.49 0.49 0.0 0 1 99.15 224.26
            Q 98.93 224.11 98.50 224.34
            Q 95.30 223.14 93.65 219.63
            L 98.74 217.89
            Z"
            />
            <path
              fill="#c1c4c4"
              fillOpacity="0.780"
              d="
            M 186.24 217.88
            L 191.96 223.89
            Q 192.45 224.41 191.74 224.39
            L 186.05 224.26
            L 186.24 217.88
            Z"
            />
            <path
              fill="#464e72"
              d="
            M 309.23 221.27
            L 297.98 221.21
            Q 297.78 220.99 297.78 220.76
            Q 297.80 220.15 298.41 220.14
            L 309.34 219.89
            Q 309.95 219.88 309.97 220.49
            Q 309.98 221.08 309.23 221.27
            Z"
            />
            <path
              fill="#6d76a1"
              d="
            M 160.86 222.49
            Q 160.56 223.86 163.70 224.06
            Q 162.41 224.82 160.27 224.40
            L 160.86 222.49
            Z"
            />
            <path
              fill="#6d76a1"
              d="
            M 210.72 224.20
            Q 212.31 224.13 213.25 224.54
            Q 213.74 224.76 213.75 225.29
            L 213.94 232.18
            Q 212.55 233.09 211.26 232.41
            Q 211.35 231.66 210.80 230.90
            L 210.72 224.20
            Z"
            />
            <path
              fill="#6d76a1"
              d="
            M 150.27 224.42
            L 150.12 229.58
            A 0.63 0.63 0.0 0 0 150.74 230.22
            Q 161.34 230.24 171.84 230.31
            C 173.26 230.31 174.39 230.76 175.88 230.78
            Q 176.53 230.79 176.53 231.44
            L 176.49 253.10
            A 0.83 0.83 0.0 0 1 175.96 253.86
            Q 174.69 254.35 172.96 253.76
            L 172.73 247.71
            Q 172.89 246.39 172.31 244.59
            Q 173.11 242.23 172.30 240.39
            L 172.46 237.68
            L 172.98 231.85
            A 1.00 1.00 0.0 0 0 171.94 230.76
            L 160.59 231.31
            L 157.78 231.33
            C 155.62 230.97 152.08 230.08 150.29 231.56
            C 149.80 231.97 149.89 232.45 150.51 232.66
            Q 148.96 233.28 148.04 232.78
            L 147.76 228.48
            L 147.77 225.15
            Q 147.77 224.57 148.35 224.53
            L 150.27 224.42
            Z"
            />
            <path
              fill="#cbe9f4"
              d="
            M 361.91 227.32
            Q 366.79 229.37 371.15 229.77
            Q 371.56 232.97 378.01 231.12
            A 1.06 1.05 -5.8 0 1 379.35 232.21
            Q 378.99 236.96 380.94 241.34
            L 382.25 255.95
            L 376.05 255.92
            C 376.56 249.89 378.39 243.45 372.55 239.33
            Q 367.60 234.54 361.71 233.74
            Q 360.98 230.74 361.91 227.32
            Z"
            />
            <path
              fill="#ffb502"
              d="
            M 96.13 227.68
            L 97.37 229.64
            Q 97.64 230.07 98.08 230.32
            Q 101.58 232.29 106.29 233.71
            Q 108.48 234.37 109.10 231.59
            C 111.24 235.36 116.17 246.59 107.98 247.06
            C 101.10 247.46 97.01 234.08 95.46 227.97
            Q 95.78 228.19 96.13 227.68
            Z"
            />
            <path
              fill="#1c2745"
              d="
            M 95.46 227.97
            C 97.01 234.08 101.10 247.46 107.98 247.06
            C 116.17 246.59 111.24 235.36 109.10 231.59
            L 107.49 228.86
            Q 107.21 228.39 107.73 228.20
            Q 110.57 227.21 112.23 230.11
            Q 118.01 240.03 119.07 251.84
            Q 119.24 252.10 119.26 252.41
            Q 119.29 252.87 118.86 253.06
            C 111.30 256.45 102.58 257.62 98.71 249.19
            Q 98.48 240.62 94.43 232.32
            Q 93.71 230.85 90.17 228.74
            L 95.46 227.97
            Z"
            />
            <path
              fill="#c1c4c4"
              fillOpacity="0.780"
              d="
            M 147.76 228.48
            L 148.04 232.78
            Q 146.16 233.40 146.47 234.51
            Q 145.68 233.82 144.89 233.68
            L 144.86 232.76
            A 0.53 0.53 0.0 0 0 144.27 232.25
            Q 143.18 232.36 142.40 231.90
            C 146.07 232.55 145.45 229.74 147.76 228.48
            Z"
            />
            <path
              fill="#ffb502"
              d="
            M 90.17 228.74
            Q 93.71 230.85 94.43 232.32
            Q 98.48 240.62 98.71 249.19
            L 89.00 251.72
            Q 88.47 251.86 88.74 252.33
            Q 90.92 256.15 94.00 259.17
            Q 91.81 267.13 85.06 271.26
            C 85.94 268.05 88.90 251.27 84.76 251.55
            Q 82.45 242.27 82.60 233.37
            Q 85.99 228.64 90.17 228.74
            Z"
            />
            <path
              fill="#1c2745"
              d="
            M 415.55 241.51
            Q 417.57 245.01 419.15 250.06
            C 424.46 264.77 425.79 276.54 425.71 292.72
            Q 424.70 297.57 425.50 302.80
            L 424.47 327.29
            Q 424.95 329.26 422.88 329.29
            Q 421.04 327.70 421.64 325.56
            C 422.88 306.40 420.69 287.97 417.05 268.19
            Q 416.49 263.87 415.26 259.59
            A 0.22 0.21 35.2 0 0 414.84 259.66
            Q 415.02 262.06 415.71 264.41
            Q 415.84 264.82 415.82 265.26
            Q 415.77 266.87 416.54 268.31
            C 419.49 287.63 421.78 304.00 420.95 322.76
            C 420.27 322.79 419.79 322.55 419.52 321.88
            Q 406.30 289.24 392.99 256.54
            Q 392.79 256.05 392.26 256.04
            L 382.25 255.95
            L 380.94 241.34
            L 380.84 231.21
            L 385.60 231.71
            Q 389.46 236.91 394.03 232.10
            Q 394.40 231.72 394.74 232.12
            C 396.28 233.94 400.77 230.86 402.35 230.00
            Q 402.81 229.74 402.95 230.25
            Q 405.56 239.36 415.55 241.51
            Z
            M 413.02 251.77
            Q 412.88 253.16 413.47 254.02
            Q 413.99 254.79 413.89 253.87
            L 413.68 252.00
            Q 413.87 251.28 413.35 250.75
            A 0.50 0.49 23.0 0 0 412.50 251.09
            L 412.50 251.47
            A 0.28 0.27 -83.4 0 0 412.71 251.74
            Q 412.86 251.78 413.02 251.77
            Z
            M 413.94 255.69
            Q 413.72 257.35 414.43 258.90
            Q 414.95 260.01 414.94 258.79
            Q 414.92 256.88 414.36 255.09
            A 0.28 0.28 0.0 0 0 413.87 255.01
            Q 413.61 255.37 413.94 255.69
            Z"
            />
            <path
              fill="#ffb502"
              d="
            M 112.23 230.11
            L 113.16 229.97
            Q 113.91 231.05 115.00 231.30
            Q 115.95 232.57 116.72 232.06
            L 125.19 239.88
            Q 125.58 240.24 125.44 240.77
            L 124.98 242.44
            Q 124.18 242.97 123.95 243.73
            L 120.42 247.48
            C 118.76 249.01 121.08 250.80 119.07 251.84
            Q 118.01 240.03 112.23 230.11
            Z"
            />
            <path
              fill="#c1c4c4"
              fillOpacity="0.780"
              d="
            M 121.38 233.78
            L 116.72 232.06
            Q 115.95 232.57 115.00 231.30
            Q 115.72 231.40 116.54 230.63
            Q 116.86 230.33 117.27 230.48
            Q 119.70 231.34 121.38 233.78
            Z"
            />
            <path
              fill="#6d76a1"
              d="
            M 207.28 230.66
            Q 202.46 232.50 205.21 232.15
            Q 203.30 232.38 201.30 231.76
            Q 195.37 230.66 187.79 230.82
            A 1.15 1.14 -1.0 0 0 186.66 231.98
            L 186.77 239.17
            L 187.18 245.92
            Q 186.52 246.05 186.48 246.75
            Q 186.45 247.27 186.81 247.64
            Q 187.73 248.60 187.56 249.07
            Q 186.54 250.95 187.10 253.97
            L 183.92 253.96
            A 0.61 0.60 90.0 0 1 183.33 253.36
            L 183.04 231.42
            A 0.66 0.65 86.0 0 1 183.60 230.77
            C 191.21 229.69 199.38 230.25 207.28 230.66
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.396"
              d="
            M 157.78 231.33
            Q 157.24 231.38 156.89 231.62
            Q 156.45 231.92 156.98 231.94
            Q 166.49 232.30 160.59 231.31
            L 171.94 230.76
            A 1.00 1.00 0.0 0 1 172.98 231.85
            L 172.46 237.68
            Q 171.90 234.28 169.40 233.28
            Q 168.75 231.46 164.95 232.64
            L 157.91 232.40
            Q 156.24 232.31 154.30 234.13
            Q 153.17 233.41 151.92 233.48
            Q 151.46 232.83 150.51 232.66
            C 149.89 232.45 149.80 231.97 150.29 231.56
            C 152.08 230.08 155.62 230.97 157.78 231.33
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.251"
              d="
            M 201.30 231.76
            Q 200.99 232.13 199.99 232.04
            C 196.69 231.47 194.99 235.15 193.23 237.41
            Q 192.92 237.80 192.43 237.75
            Q 190.86 237.59 189.82 238.79
            Q 189.43 239.24 188.84 239.32
            Q 187.51 239.51 187.92 240.79
            A 0.28 0.25 24.1 0 1 187.42 240.95
            Q 187.05 240.31 186.77 239.17
            L 186.66 231.98
            A 1.15 1.14 -1.0 0 1 187.79 230.82
            Q 195.37 230.66 201.30 231.76
            Z"
            />
            <path
              fill="#71868b"
              fillOpacity="0.580"
              d="
            M 199.99 232.04
            L 198.81 233.54
            Q 196.32 233.95 196.02 236.77
            C 195.63 240.35 186.05 239.52 191.63 247.84
            Q 192.95 250.13 194.94 249.69
            Q 196.01 250.89 193.94 252.84
            Q 190.87 248.94 187.18 245.92
            L 186.77 239.17
            Q 187.05 240.31 187.42 240.95
            A 0.28 0.25 24.1 0 0 187.92 240.79
            Q 187.51 239.51 188.84 239.32
            Q 189.43 239.24 189.82 238.79
            Q 190.86 237.59 192.43 237.75
            Q 192.92 237.80 193.23 237.41
            C 194.99 235.15 196.69 231.47 199.99 232.04
            Z"
            />
            <path
              fill="#cbe9f4"
              d="
            M 199.99 232.04
            Q 200.99 232.13 201.30 231.76
            Q 203.30 232.38 205.21 232.15
            Q 207.21 232.03 207.58 233.24
            L 207.45 236.77
            Q 198.36 241.64 194.94 249.69
            Q 192.95 250.13 191.63 247.84
            Q 191.79 246.17 190.87 244.77
            Q 190.59 244.35 190.67 243.84
            C 191.37 239.39 197.62 241.66 197.31 235.48
            A 1.10 1.09 67.2 0 1 197.66 234.61
            L 198.81 233.54
            L 199.99 232.04
            Z"
            />
            <path
              fill="#c1c4c4"
              fillOpacity="0.780"
              d="
            M 157.91 232.40
            Q 157.38 232.55 157.87 233.64
            Q 158.09 234.14 157.73 234.55
            Q 157.30 235.03 157.31 235.34
            L 154.30 234.13
            Q 156.24 232.31 157.91 232.40
            Z"
            />
            <path
              fill="#cbe9f4"
              d="
            M 164.95 232.64
            L 169.40 233.28
            Q 171.90 234.28 172.46 237.68
            L 172.30 240.39
            L 171.48 243.52
            Q 171.31 244.16 170.79 243.76
            Q 164.40 238.91 157.31 235.34
            Q 157.30 235.03 157.73 234.55
            Q 158.09 234.14 157.87 233.64
            Q 157.38 232.55 157.91 232.40
            L 164.95 232.64
            Z"
            />
            <path
              fill="#c1c4c4"
              fillOpacity="0.780"
              d="
            M 169.40 233.28
            L 164.95 232.64
            Q 168.75 231.46 169.40 233.28
            Z"
            />
            <path
              fill="#64b4d7"
              d="
            M 213.94 232.18
            Q 215.77 236.73 214.75 242.62
            Q 214.69 242.97 214.33 242.97
            L 210.74 242.97
            Q 210.07 242.97 210.05 242.30
            L 209.89 234.15
            Q 209.88 233.75 210.16 233.47
            L 211.26 232.41
            Q 212.55 233.09 213.94 232.18
            Z"
            />
            <path
              fill="#64b4d7"
              d="
            M 148.04 232.78
            Q 148.96 233.28 150.51 232.66
            Q 151.46 232.83 151.92 233.48
            L 151.83 242.23
            A 0.61 0.61 0.0 0 1 151.36 242.82
            Q 146.27 244.00 146.27 240.82
            Q 147.06 237.45 146.47 234.51
            Q 146.16 233.40 148.04 232.78
            Z"
            />
            <path
              fill="#c1c4c4"
              fillOpacity="0.780"
              d="
            M 207.58 233.24
            Q 208.22 233.78 208.59 234.66
            Q 208.80 235.17 208.45 235.58
            L 207.45 236.77
            L 207.58 233.24
            Z"
            />
            <path
              fill="#c1c4c4"
              fillOpacity="0.780"
              d="
            M 198.81 233.54
            L 197.66 234.61
            A 1.10 1.09 67.2 0 0 197.31 235.48
            C 197.62 241.66 191.37 239.39 190.67 243.84
            Q 190.59 244.35 190.87 244.77
            Q 191.79 246.17 191.63 247.84
            C 186.05 239.52 195.63 240.35 196.02 236.77
            Q 196.32 233.95 198.81 233.54
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.322"
              d="
            M 372.55 239.33
            L 373.55 240.77
            Q 374.00 241.41 373.26 241.18
            Q 371.65 240.69 370.00 241.48
            Q 366.81 243.02 362.87 242.96
            Q 362.37 242.96 362.29 242.46
            Q 362.16 241.64 361.77 241.23
            L 361.71 233.74
            Q 367.60 234.54 372.55 239.33
            Z"
            />
            <path
              fill="#fbc6b4"
              d="
            M 144.89 233.68
            Q 145.68 233.82 146.47 234.51
            Q 147.06 237.45 146.27 240.82
            L 144.40 244.26
            L 137.92 252.22
            L 136.40 252.64
            Q 132.70 254.32 128.45 254.03
            Q 123.83 251.76 119.88 255.68
            C 113.02 261.84 101.52 266.79 94.00 259.17
            Q 90.92 256.15 88.74 252.33
            Q 88.47 251.86 89.00 251.72
            L 98.71 249.19
            C 102.58 257.62 111.30 256.45 118.86 253.06
            Q 119.29 252.87 119.26 252.41
            Q 119.24 252.10 119.07 251.84
            C 121.08 250.80 118.76 249.01 120.42 247.48
            Q 123.24 247.64 124.51 244.51
            Q 125.27 244.21 125.76 243.13
            Q 138.92 246.74 144.89 233.68
            Z"
            />
            <path
              fill="#c1c4c4"
              fillOpacity="0.780"
              d="
            M 418.83 237.60
            L 414.13 237.84
            Q 413.58 237.30 413.20 234.89
            L 418.83 237.60
            Z"
            />
            <path
              fill="#ffb502"
              d="
            M 292.49 241.00
            L 292.49 264.20
            A 1.13 1.13 0.0 0 0 293.63 265.33
            L 303.93 265.21
            L 300.07 281.48
            L 272.76 281.18
            L 262.20 236.85
            Q 277.16 241.65 292.49 241.00
            Z"
            />
            <path
              fill="#010001"
              fillOpacity="0.098"
              d="
            M 418.83 237.60
            L 422.80 237.51
            Q 421.68 239.68 424.69 242.53
            Q 425.07 242.88 425.06 243.40
            C 424.97 246.40 422.68 247.41 422.44 249.53
            Q 422.39 249.98 421.93 249.99
            L 419.15 250.06
            Q 417.57 245.01 415.55 241.51
            L 414.13 237.84
            L 418.83 237.60
            Z"
            />
            <rect
              fill="#4ca1be"
              x="325.25"
              y="238.00"
              width="28.76"
              height="3.26"
              rx="0.60"
            />
            <path
              fill="#000000"
              fillOpacity="0.569"
              d="
            M 372.55 239.33
            C 378.39 243.45 376.56 249.89 376.05 255.92
            L 363.29 255.98
            C 361.28 254.41 362.25 251.25 361.79 248.98
            L 361.77 241.23
            Q 362.16 241.64 362.29 242.46
            Q 362.37 242.96 362.87 242.96
            Q 366.81 243.02 370.00 241.48
            Q 371.65 240.69 373.26 241.18
            Q 374.00 241.41 373.55 240.77
            L 372.55 239.33
            Z"
            />
            <path
              fill="#010001"
              fillOpacity="0.098"
              d="
            M 229.66 242.93
            L 231.68 248.46
            L 231.44 249.99
            A 0.41 0.41 0.0 0 1 230.64 250.02
            Q 230.36 248.95 230.23 247.82
            Q 230.19 247.48 229.95 247.25
            L 229.43 246.72
            Q 229.15 246.45 228.95 246.77
            Q 228.58 247.36 227.95 247.24
            Q 227.65 247.18 227.51 247.46
            L 224.63 253.10
            Q 224.42 253.52 223.95 253.57
            C 222.19 253.79 223.65 256.19 222.31 257.32
            C 222.12 254.87 222.88 253.61 219.46 253.99
            L 204.27 253.89
            Q 204.36 253.23 204.18 252.59
            Q 204.04 252.14 204.29 251.74
            Q 204.58 251.27 205.21 251.21
            Q 205.61 251.17 205.82 250.83
            L 206.15 250.28
            Q 206.44 249.78 207.02 249.76
            C 209.24 249.65 210.87 248.26 212.79 248.03
            Q 216.35 247.61 220.00 247.67
            C 221.87 247.70 222.37 246.89 223.22 245.47
            Q 224.76 242.87 228.50 242.25
            Q 228.89 242.18 228.65 242.49
            Q 228.51 242.66 228.48 242.81
            A 0.37 0.37 0.0 0 0 228.60 243.16
            Q 229.05 243.53 229.66 242.93
            Z"
            />
            <path
              fill="#71868b"
              fillOpacity="0.580"
              d="
            M 124.98 242.44
            Q 125.34 242.95 125.76 243.13
            Q 125.27 244.21 124.51 244.51
            Q 123.91 244.66 123.95 243.73
            Q 124.18 242.97 124.98 242.44
            Z"
            />
            <path
              fill="#f7c9cc"
              d="
            M 123.95 243.73
            Q 123.91 244.66 124.51 244.51
            Q 123.24 247.64 120.42 247.48
            L 123.95 243.73
            Z"
            />
            <path
              fill="#cbe9f4"
              d="
            M 144.40 244.26
            C 149.94 246.35 155.16 246.54 159.79 251.23
            Q 159.74 252.02 159.16 252.86
            C 155.87 254.94 152.13 253.45 148.70 252.99
            L 145.03 252.69
            L 137.92 252.22
            L 144.40 244.26
            Z"
            />
            <path
              fill="#6d76a1"
              d="
            M 331.08 260.92
            L 339.12 244.99
            A 0.44 0.44 0.0 0 1 339.91 244.98
            L 348.17 260.80
            A 0.44 0.44 0.0 0 1 347.78 261.44
            L 331.48 261.56
            A 0.44 0.44 0.0 0 1 331.08 260.92
            Z
            M 339.34 247.11
            C 337.28 251.11 334.31 255.63 332.98 259.84
            A 0.51 0.50 -81.1 0 0 333.46 260.50
            L 345.89 260.50
            A 0.47 0.46 76.5 0 0 346.30 259.82
            L 339.83 247.11
            Q 339.58 246.63 339.34 247.11
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.251"
              d="
            M 231.68 248.46
            Q 234.27 259.80 235.07 271.91
            Q 233.80 272.87 232.77 270.51
            Q 232.61 270.14 232.43 270.50
            L 230.61 273.98
            A 1.33 1.31 -80.4 0 1 229.64 274.68
            Q 227.81 274.96 226.35 276.01
            Q 225.97 276.28 225.64 275.96
            Q 225.00 275.36 224.29 276.05
            Q 224.09 276.24 224.10 276.50
            Q 224.10 276.66 223.96 276.81
            Q 223.56 277.22 223.45 276.65
            L 222.85 273.24
            Q 223.12 273.20 223.39 273.16
            L 223.69 263.51
            Q 223.71 263.01 223.26 262.77
            L 222.20 262.22
            L 222.31 257.32
            C 223.65 256.19 222.19 253.79 223.95 253.57
            Q 224.42 253.52 224.63 253.10
            L 227.51 247.46
            Q 227.65 247.18 227.95 247.24
            Q 228.58 247.36 228.95 246.77
            Q 229.15 246.45 229.43 246.72
            L 229.95 247.25
            Q 230.19 247.48 230.23 247.82
            Q 230.36 248.95 230.64 250.02
            A 0.41 0.41 0.0 0 0 231.44 249.99
            L 231.68 248.46
            Z"
            />
            <path
              fill="#ffcf03"
              d="
            M 332.98 259.84
            C 334.31 255.63 337.28 251.11 339.34 247.11
            Q 339.58 246.63 339.83 247.11
            L 346.30 259.82
            A 0.47 0.46 76.5 0 1 345.89 260.50
            L 333.46 260.50
            A 0.51 0.50 -81.1 0 1 332.98 259.84
            Z
            M 338.12 254.11
            Q 337.99 255.93 338.36 257.75
            A 0.21 0.19 42.1 0 0 338.75 257.75
            Q 338.76 256.56 339.77 255.91
            Q 340.28 255.58 339.91 255.10
            L 338.96 253.86
            Q 338.21 252.88 338.12 254.11
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.812"
              d="
            M 361.79 248.98
            C 362.25 251.25 361.28 254.41 363.29 255.98
            Q 362.87 256.30 363.47 257.00
            L 363.02 256.97
            Q 362.42 256.93 362.47 257.54
            Q 362.63 259.34 362.32 261.13
            A 2.05 1.92 43.1 0 0 362.38 262.05
            Q 363.01 264.18 361.23 265.67
            Q 360.87 265.97 360.42 266.02
            Q 357.17 266.43 353.88 266.20
            Q 353.36 266.16 352.99 266.52
            Q 352.51 266.99 351.90 266.89
            Q 350.33 266.62 351.46 267.74
            Q 351.77 268.04 352.20 268.30
            Q 352.57 268.52 352.76 268.92
            Q 353.04 269.52 353.72 269.43
            Q 354.27 269.35 354.42 269.88
            L 355.94 275.06
            Q 356.04 275.41 356.35 275.22
            L 356.63 275.06
            Q 357.27 274.67 357.40 275.42
            Q 357.51 276.07 357.10 276.75
            A 0.30 0.26 -6.3 0 0 357.55 277.07
            L 359.86 275.30
            Q 355.99 278.82 358.20 282.51
            Q 355.01 282.24 356.45 285.77
            Q 356.52 285.95 356.36 286.05
            Q 356.05 286.26 356.50 286.33
            Q 356.67 286.35 356.60 286.50
            L 356.30 287.18
            Q 356.30 287.18 356.31 287.19
            L 356.59 287.28
            A 0.27 0.27 0.0 0 1 356.65 287.76
            L 355.98 288.20
            A 0.04 0.04 0.0 0 0 355.97 288.26
            L 356.25 288.55
            Q 356.39 288.68 356.28 288.83
            L 355.99 289.23
            Q 355.93 289.30 356.02 289.30
            Q 356.17 289.30 356.29 289.35
            A 0.22 0.19 54.9 0 1 356.25 289.76
            Q 356.12 289.75 355.98 289.74
            A 0.27 0.26 0.0 0 0 355.70 290.01
            C 355.75 291.69 356.03 298.84 355.12 300.25
            Q 355.08 300.32 355.16 300.31
            Q 355.30 300.31 355.43 300.32
            A 0.27 0.27 0.0 0 1 355.56 300.81
            L 354.97 301.21
            A 0.08 0.08 0.0 0 0 355.02 301.35
            Q 355.21 301.33 355.28 301.36
            A 0.22 0.18 54.9 0 1 355.25 301.76
            Q 355.08 301.75 354.91 301.74
            A 0.22 0.21 -8.7 0 0 354.70 302.02
            Q 355.18 303.51 353.93 304.28
            A 0.02 0.02 0.0 0 0 353.94 304.32
            L 354.36 304.40
            Q 354.87 304.49 354.47 304.82
            L 353.97 305.23
            A 0.06 0.05 -58.3 0 0 353.99 305.33
            L 354.32 305.39
            Q 354.34 305.40 354.32 305.41
            Q 353.20 306.90 353.80 308.86
            Q 353.98 309.46 353.39 309.65
            Q 352.47 309.95 352.71 310.84
            Q 352.82 311.23 352.53 311.52
            Q 350.68 313.37 351.75 315.70
            A 0.70 0.70 0.0 0 1 351.35 316.65
            L 351.11 316.73
            A 0.33 0.32 79.0 0 0 350.90 317.05
            Q 350.92 317.51 351.17 317.43
            Q 351.75 317.24 351.75 317.85
            L 351.75 318.38
            Q 351.75 319.00 351.12 319.00
            L 350.17 319.00
            Q 349.67 319.00 349.54 319.48
            Q 349.37 320.07 349.67 320.67
            Q 349.86 321.06 349.68 321.45
            Q 349.10 322.71 347.83 323.17
            Q 347.72 323.21 347.74 323.31
            Q 347.77 323.45 347.76 323.58
            A 0.44 0.44 0.0 0 1 347.32 324.00
            L 346.75 324.00
            Q 345.98 324.00 346.59 323.53
            Q 347.39 322.90 347.09 322.47
            C 352.05 315.87 345.43 313.34 339.73 313.31
            Q 339.10 311.21 339.51 308.38
            C 351.45 310.07 352.17 296.41 339.70 297.64
            L 339.75 292.77
            Q 343.80 292.94 345.01 292.54
            C 349.01 291.21 350.27 286.48 347.19 283.46
            C 345.14 281.46 341.61 281.87 339.02 281.66
            Q 339.07 273.36 340.65 265.14
            L 360.63 265.06
            A 1.14 1.13 -0.3 0 0 361.76 263.93
            L 361.79 248.98
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.161"
              d="
            M 187.56 249.07
            Q 189.50 251.82 191.60 253.08
            A 0.48 0.48 0.0 0 1 191.36 253.97
            L 187.10 253.97
            Q 186.54 250.95 187.56 249.07
            Z"
            />
            <path
              fill="#464e72"
              d="
            M 413.68 252.00
            Q 413.34 251.68 413.02 251.77
            Q 412.86 251.78 412.71 251.74
            A 0.28 0.27 -83.4 0 1 412.50 251.47
            L 412.50 251.09
            A 0.50 0.49 23.0 0 1 413.35 250.75
            Q 413.87 251.28 413.68 252.00
            Z"
            />
            <path
              fill="#71868b"
              fillOpacity="0.580"
              d="
            M 159.79 251.23
            Q 161.26 251.94 161.96 253.72
            Q 159.87 254.02 159.16 252.86
            Q 159.74 252.02 159.79 251.23
            Z"
            />
            <path
              fill="#cbe9f4"
              d="
            M 84.76 251.55
            C 88.90 251.27 85.94 268.05 85.06 271.26
            L 79.35 303.71
            C 77.32 299.54 73.82 291.86 68.88 291.30
            Q 61.92 290.52 54.42 291.30
            A 1.45 1.45 0.0 0 1 52.83 289.78
            L 54.27 262.97
            A 1.11 1.11 0.0 0 1 55.60 261.94
            C 63.97 263.64 74.99 266.26 79.54 256.52
            Q 81.86 251.57 84.76 251.55
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.471"
              d="
            M 413.02 251.77
            Q 413.34 251.68 413.68 252.00
            L 413.89 253.87
            Q 413.99 254.79 413.47 254.02
            Q 412.88 253.16 413.02 251.77
            Z"
            />
            <path
              fill="#71868b"
              fillOpacity="0.580"
              d="
            M 137.92 252.22
            L 145.03 252.69
            L 136.40 252.64
            L 137.92 252.22
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.396"
              d="
            M 136.40 252.64
            L 145.03 252.69
            L 148.70 252.99
            L 149.63 253.41
            Q 150.22 253.67 149.58 253.69
            L 138.58 254.04
            C 137.22 253.49 135.99 253.08 136.01 255.11
            Q 136.04 258.28 135.93 261.07
            Q 135.67 262.13 135.20 262.67
            C 134.26 261.08 132.83 255.41 130.67 256.36
            Q 130.18 256.57 130.24 257.09
            Q 130.53 259.70 128.47 260.32
            Q 130.15 257.55 130.19 254.72
            Q 130.20 254.22 129.70 254.26
            Q 129.01 254.30 128.45 254.03
            Q 132.70 254.32 136.40 252.64
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.322"
              d="
            M 128.45 254.03
            Q 129.01 254.30 129.70 254.26
            Q 130.20 254.22 130.19 254.72
            Q 130.15 257.55 128.47 260.32
            Q 124.42 261.37 125.50 263.92
            C 124.21 264.64 121.86 263.16 121.34 264.78
            L 119.88 255.68
            Q 123.83 251.76 128.45 254.03
            Z"
            />
            <path
              fill="#6d76a1"
              d="
            M 138.58 254.04
            Q 139.35 256.85 138.94 260.37
            L 139.17 262.41
            Q 137.66 263.49 135.93 261.07
            Q 136.04 258.28 136.01 255.11
            C 135.99 253.08 137.22 253.49 138.58 254.04
            Z"
            />
            <path
              fill="#6d76a1"
              d="
            M 338.96 253.86
            L 339.91 255.10
            Q 340.28 255.58 339.77 255.91
            Q 338.76 256.56 338.75 257.75
            A 0.21 0.19 42.1 0 1 338.36 257.75
            Q 337.99 255.93 338.12 254.11
            Q 338.21 252.88 338.96 253.86
            Z"
            />
            <path
              fill="#6d76a1"
              d="
            M 219.46 253.99
            C 222.88 253.61 222.12 254.87 222.31 257.32
            L 222.20 262.22
            Q 220.91 262.70 219.27 262.44
            Q 219.73 261.65 219.30 260.26
            L 219.46 253.99
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.251"
              d="
            M 413.94 255.69
            Q 413.61 255.37 413.87 255.01
            A 0.28 0.28 0.0 0 1 414.36 255.09
            Q 414.92 256.88 414.94 258.79
            Q 414.95 260.01 414.43 258.90
            Q 413.72 257.35 413.94 255.69
            Z"
            />
            <path
              fill="#1c2745"
              d="
            M 119.88 255.68
            L 121.34 264.78
            Q 122.79 272.13 124.15 279.52
            C 128.18 301.33 125.76 321.51 120.55 343.18
            L 118.81 350.15
            Q 117.16 355.23 108.79 352.88
            L 106.98 352.42
            Q 106.46 352.28 106.34 351.76
            C 102.96 336.84 103.12 322.18 103.29 307.01
            Q 104.13 304.00 103.64 300.97
            Q 103.42 299.61 103.33 300.98
            L 102.97 306.44
            C 99.64 323.57 89.89 338.94 79.17 352.38
            L 72.40 350.71
            L 71.04 350.17
            A 0.63 0.62 16.0 0 1 70.65 349.48
            L 77.58 312.88
            L 79.35 303.71
            L 85.06 271.26
            Q 91.81 267.13 94.00 259.17
            C 101.52 266.79 113.02 261.84 119.88 255.68
            Z
            M 113.91 272.27
            C 111.33 273.21 118.49 282.13 121.65 282.26
            A 0.43 0.43 0.0 0 0 121.85 281.45
            Q 116.11 278.75 114.48 272.57
            A 0.44 0.44 0.0 0 0 113.91 272.27
            Z
            M 92.73 275.13
            Q 91.09 281.04 85.68 283.45
            A 0.42 0.42 0.0 0 0 85.79 284.25
            C 89.36 284.76 93.32 277.65 94.18 274.69
            A 0.46 0.46 0.0 0 0 93.59 274.13
            Q 92.95 274.35 92.73 275.13
            Z"
            />
            <path
              fill="#464e72"
              d="
            M 376.05 255.92
            L 382.25 255.95
            L 392.26 256.04
            Q 392.79 256.05 392.99 256.54
            Q 406.30 289.24 419.52 321.88
            C 419.79 322.55 420.27 322.79 420.95 322.76
            Q 420.41 325.84 421.64 325.56
            Q 421.04 327.70 422.88 329.29
            L 434.55 359.27
            A 0.59 0.59 0.0 0 1 434.24 360.02
            L 433.20 360.48
            A 0.49 0.48 66.7 0 1 432.55 360.22
            L 425.17 342.78
            Q 424.95 342.25 424.37 342.25
            L 401.75 342.25
            Q 401.10 342.25 401.34 342.85
            L 407.97 359.24
            A 0.59 0.59 0.0 0 1 407.66 360.00
            L 406.51 360.53
            Q 405.87 360.83 405.60 360.17
            L 392.45 327.39
            A 0.54 0.54 0.0 0 0 391.45 327.37
            C 390.92 328.58 388.35 333.34 389.91 333.98
            Q 390.58 334.26 390.18 334.86
            Q 389.99 335.15 390.01 335.51
            A 0.45 0.39 37.5 0 1 389.17 335.56
            Q 389.05 335.22 388.78 335.00
            A 0.47 0.47 0.0 0 0 388.01 335.39
            Q 388.09 336.80 387.27 337.93
            A 0.63 0.63 0.0 0 0 387.48 338.85
            Q 388.30 339.29 387.79 340.10
            Q 387.64 340.36 387.34 340.32
            L 386.99 340.27
            Q 386.41 340.19 386.28 340.76
            L 385.56 344.02
            Q 385.47 344.40 385.70 344.72
            Q 386.28 345.55 385.83 346.40
            Q 385.60 346.82 385.36 346.41
            L 385.10 345.98
            A 0.39 0.39 0.0 0 0 384.40 346.04
            L 378.68 361.84
            Q 378.49 362.36 377.94 362.43
            C 376.24 362.65 376.08 361.56 376.61 360.21
            Q 383.78 341.92 390.36 323.37
            Q 390.53 322.90 390.35 322.43
            L 385.16 309.24
            L 382.59 303.74
            Q 382.38 303.28 381.99 302.95
            L 378.95 300.42
            Q 380.02 300.08 380.97 301.71
            A 0.40 0.40 0.0 0 0 381.69 301.37
            L 377.66 290.82
            A 0.38 0.38 0.0 0 0 376.96 290.81
            L 374.78 296.16
            A 1.32 1.32 0.0 0 0 375.49 297.88
            Q 377.47 298.70 377.02 299.32
            L 374.92 298.17
            Q 374.41 297.89 374.20 298.44
            L 362.90 328.97
            C 362.44 328.93 362.08 329.13 361.92 329.59
            Q 356.68 345.00 350.78 360.17
            Q 350.57 360.70 350.04 360.50
            L 348.78 360.03
            A 0.62 0.62 0.0 0 1 348.40 359.28
            L 350.43 352.56
            L 372.10 296.06
            L 375.58 287.17
            Q 375.76 286.70 375.57 286.23
            L 368.11 267.64
            L 363.47 257.00
            Q 362.87 256.30 363.29 255.98
            L 376.05 255.92
            Z
            M 375.06 259.01
            L 368.34 259.10
            Q 367.65 259.11 367.89 259.75
            L 370.23 265.93
            L 384.37 300.92
            A 1.15 1.15 0.0 0 0 385.49 301.63
            Q 391.75 301.35 398.01 301.57
            A 0.91 0.90 -77.7 0 0 398.87 301.01
            L 400.28 297.53
            A 0.34 0.34 0.0 0 0 399.99 297.06
            Q 399.67 297.03 399.53 296.82
            Q 399.49 296.77 399.51 296.71
            Q 399.57 296.48 399.63 296.51
            C 400.90 297.09 401.71 293.50 402.00 292.64
            C 403.61 287.86 399.92 279.18 397.57 275.00
            L 391.30 258.96
            Q 391.10 258.45 390.54 258.45
            L 381.17 258.57
            Q 377.81 256.87 375.06 259.01
            Z
            M 404.39 298.31
            L 403.87 296.38
            A 0.36 0.36 0.0 0 0 403.17 296.39
            L 402.16 300.34
            Q 402.05 300.77 402.43 300.99
            Q 403.98 301.88 405.04 301.08
            L 405.31 300.63
            A 0.21 0.21 0.0 0 1 405.70 300.71
            C 405.86 302.03 407.19 301.89 408.03 301.43
            Q 408.46 301.20 408.27 300.75
            L 405.00 292.88
            A 0.39 0.39 0.0 0 0 404.26 292.94
            Q 403.68 295.35 405.01 297.54
            A 0.46 0.46 0.0 0 1 404.84 298.19
            Q 404.59 298.33 404.39 298.31
            Z
            M 389.27 307.20
            C 388.48 306.95 386.58 306.11 387.24 307.92
            Q 388.25 310.68 389.54 313.31
            Q 389.76 313.75 390.22 313.92
            C 393.75 315.22 396.26 311.17 393.68 310.25
            Q 396.49 309.13 397.29 304.65
            Q 397.36 304.28 396.99 304.28
            L 386.43 304.19
            Q 385.78 304.18 386.12 304.74
            Q 386.89 306.00 389.27 307.20
            Z
            M 402.98 313.68
            Q 405.46 314.77 408.95 314.11
            Q 410.87 314.60 413.02 314.12
            Q 413.64 313.98 413.39 313.40
            L 409.72 304.65
            A 1.39 1.38 37.7 0 0 407.07 304.99
            L 406.89 306.31
            L 406.16 304.88
            Q 405.94 304.42 405.45 304.30
            Q 404.12 303.96 403.92 305.08
            Q 402.57 303.93 401.10 304.07
            A 0.99 0.97 7.9 0 0 400.29 304.67
            L 397.56 311.27
            Q 397.37 311.73 397.63 312.15
            Q 399.54 315.27 402.98 313.68
            Z
            M 392.06 319.04
            Q 392.99 317.67 392.81 317.04
            A 1.03 0.83 39.9 0 0 390.94 317.00
            Q 391.07 318.06 391.55 319.00
            Q 391.77 319.46 392.06 319.04
            Z
            M 412.91 326.86
            L 418.19 326.67
            Q 418.74 326.65 418.54 326.14
            L 415.00 316.97
            Q 414.79 316.43 414.23 316.51
            L 409.67 317.12
            Q 409.90 316.65 409.38 316.82
            Q 406.65 316.12 404.72 316.83
            L 395.99 316.59
            A 0.74 0.73 -80.9 0 0 395.26 317.12
            C 394.15 320.79 392.88 322.53 394.65 326.33
            Q 394.87 326.81 395.40 326.81
            L 412.91 326.86
            Z
            M 412.51 339.68
            L 422.05 339.47
            Q 422.58 340.01 423.65 339.71
            Q 424.16 339.56 423.95 339.08
            L 420.05 329.83
            Q 419.83 329.31 419.27 329.30
            L 416.71 329.25
            L 396.38 329.25
            A 0.43 0.43 0.0 0 0 395.99 329.85
            L 399.95 339.23
            Q 400.15 339.70 400.67 339.70
            L 412.51 339.68
            Z"
            />
            <path
              fill="#71868b"
              fillOpacity="0.580"
              d="
            M 135.20 262.67
            L 135.00 264.98
            L 125.50 263.92
            Q 124.42 261.37 128.47 260.32
            Q 130.53 259.70 130.24 257.09
            Q 130.18 256.57 130.67 256.36
            C 132.83 255.41 134.26 261.08 135.20 262.67
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.733"
              d="
            M 363.47 257.00
            L 368.11 267.64
            Q 363.16 270.66 359.86 275.30
            L 357.55 277.07
            A 0.30 0.26 -6.3 0 1 357.10 276.75
            Q 357.51 276.07 357.40 275.42
            Q 357.27 274.67 356.63 275.06
            L 356.35 275.22
            Q 356.04 275.41 355.94 275.06
            L 354.42 269.88
            Q 354.27 269.35 353.72 269.43
            Q 353.04 269.52 352.76 268.92
            Q 352.57 268.52 352.20 268.30
            Q 351.77 268.04 351.46 267.74
            Q 350.33 266.62 351.90 266.89
            Q 352.51 266.99 352.99 266.52
            Q 353.36 266.16 353.88 266.20
            Q 357.17 266.43 360.42 266.02
            Q 360.87 265.97 361.23 265.67
            Q 363.01 264.18 362.38 262.05
            A 2.05 1.92 43.1 0 1 362.32 261.13
            Q 362.63 259.34 362.47 257.54
            Q 362.42 256.93 363.02 256.97
            L 363.47 257.00
            Z"
            />
            <path
              fill="#6d76a1"
              d="
            M 381.17 258.57
            Q 379.45 260.41 377.92 260.69
            Q 377.85 260.21 378.43 259.81
            Q 378.96 259.46 378.33 259.39
            L 375.06 259.01
            Q 377.81 256.87 381.17 258.57
            Z"
            />
            <rect
              fill="#464e72"
              x="471.10"
              y="258.00"
              width="20.16"
              height="1.50"
              rx="0.65"
            />
            <path
              fill="#1c2745"
              d="
            M 381.17 258.57
            L 390.54 258.45
            Q 391.10 258.45 391.30 258.96
            L 397.57 275.00
            L 391.61 279.96
            Q 391.19 280.31 391.44 280.79
            L 399.63 296.51
            Q 399.57 296.48 399.51 296.71
            Q 399.49 296.77 399.53 296.82
            Q 399.67 297.03 399.99 297.06
            A 0.34 0.34 0.0 0 1 400.28 297.53
            L 398.87 301.01
            A 0.91 0.90 -77.7 0 1 398.01 301.57
            Q 391.75 301.35 385.49 301.63
            A 1.15 1.15 0.0 0 1 384.37 300.92
            L 370.23 265.93
            L 377.92 260.69
            Q 379.45 260.41 381.17 258.57
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.569"
              d="
            M 375.06 259.01
            L 378.33 259.39
            Q 378.96 259.46 378.43 259.81
            Q 377.85 260.21 377.92 260.69
            L 370.23 265.93
            L 367.89 259.75
            Q 367.65 259.11 368.34 259.10
            L 375.06 259.01
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.251"
              d="
            M 417.05 268.19
            L 416.54 268.31
            Q 415.77 266.87 415.82 265.26
            Q 415.84 264.82 415.71 264.41
            Q 415.02 262.06 414.84 259.66
            A 0.22 0.21 35.2 0 1 415.26 259.59
            Q 416.49 263.87 417.05 268.19
            Z"
            />
            <path
              fill="#6d76a1"
              d="
            M 171.74 286.48
            Q 172.68 283.18 171.32 281.89
            L 172.42 279.40
            Q 172.69 278.79 172.03 278.75
            Q 171.64 278.73 170.99 279.06
            Q 170.74 278.97 170.53 279.00
            Q 171.44 277.03 172.20 277.88
            Q 173.10 275.71 172.76 272.95
            Q 172.71 272.51 172.27 272.49
            Q 172.09 272.49 171.88 272.50
            L 172.77 260.29
            Q 174.08 259.81 175.87 260.41
            Q 176.36 260.58 176.35 261.10
            L 175.93 285.75
            A 0.70 0.70 0.0 0 1 175.24 286.44
            L 171.74 286.48
            Z"
            />
            <path
              fill="#71868b"
              fillOpacity="0.580"
              d="
            M 197.54 260.25
            L 197.06 260.52
            Q 196.69 260.72 196.82 261.11
            L 197.22 262.37
            L 190.30 262.73
            L 187.83 262.74
            Q 187.36 262.74 187.20 262.29
            Q 186.85 261.28 187.27 260.20
            L 197.54 260.25
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.322"
              d="
            M 152.07 260.31
            Q 148.78 262.90 148.88 265.41
            Q 149.13 265.61 148.52 265.45
            Q 148.20 265.17 148.08 264.88
            Q 147.89 264.46 147.44 264.32
            Q 144.31 263.38 141.02 263.77
            Q 140.46 262.75 139.17 262.41
            L 138.94 260.37
            L 152.07 260.31
            Z"
            />
            <path
              fill="#6d76a1"
              d="
            M 187.27 260.20
            Q 186.85 261.28 187.20 262.29
            Q 187.36 262.74 187.83 262.74
            L 190.30 262.73
            Q 189.19 263.33 187.70 263.29
            Q 187.15 263.27 187.16 263.82
            L 187.36 278.19
            Q 187.37 278.46 187.63 278.42
            Q 187.84 278.38 187.96 278.25
            Q 188.07 278.70 187.91 278.78
            Q 186.86 280.94 188.90 283.07
            C 186.22 284.10 188.14 287.14 190.85 286.11
            Q 191.45 285.88 190.98 285.45
            L 189.19 283.78
            Q 189.21 283.63 189.27 283.45
            Q 189.41 283.03 189.72 283.35
            L 191.80 285.57
            A 0.76 0.76 0.0 0 1 191.21 286.85
            L 184.39 286.53
            A 0.65 0.64 -89.1 0 1 183.78 285.89
            L 183.42 260.79
            A 0.55 0.55 0.0 0 1 183.96 260.24
            L 187.27 260.20
            Z"
            />
            <path
              fill="#010001"
              fillOpacity="0.098"
              d="
            M 206.22 260.28
            L 219.30 260.26
            Q 219.73 261.65 219.27 262.44
            C 218.17 263.11 218.39 269.13 218.26 270.75
            C 217.58 272.62 211.89 271.73 210.47 271.55
            L 214.83 271.22
            Q 215.08 271.20 215.18 270.96
            Q 215.23 270.83 215.27 270.68
            Q 215.33 270.49 215.13 270.49
            C 214.31 270.53 207.40 270.76 207.48 269.85
            Q 207.50 269.69 207.67 269.70
            L 208.34 269.75
            Q 208.83 269.79 209.08 269.37
            Q 210.92 266.24 209.23 263.08
            A 0.23 0.23 0.0 0 1 209.44 262.74
            Q 209.64 262.75 209.84 262.75
            Q 209.94 262.75 209.96 262.65
            L 210.00 262.34
            Q 210.07 261.83 209.55 261.79
            Q 208.40 261.71 207.25 261.78
            A 0.24 0.24 0.0 0 1 207.19 261.30
            Q 208.07 261.13 208.95 261.21
            Q 209.40 261.25 209.27 260.83
            Q 209.22 260.66 209.16 260.49
            Q 209.15 260.45 209.10 260.45
            Q 207.55 260.70 206.22 260.28
            Z"
            />
            <path
              fill="#64b4d7"
              d="
            M 135.93 261.07
            Q 137.66 263.49 139.17 262.41
            Q 140.46 262.75 141.02 263.77
            L 140.68 266.69
            L 140.52 271.93
            A 0.59 0.59 0.0 0 1 139.93 272.50
            L 135.73 272.50
            A 0.68 0.68 0.0 0 1 135.05 271.83
            L 135.00 264.98
            L 135.20 262.67
            Q 135.67 262.13 135.93 261.07
            Z"
            />
            <rect
              fill="#464e72"
              x="457.49"
              y="262.01"
              width="34.68"
              height="1.74"
              rx="0.85"
            />
            <path
              fill="#cbe9f4"
              d="
            M 197.22 262.37
            Q 198.72 263.40 200.15 265.83
            Q 203.60 271.67 210.47 271.55
            C 211.89 271.73 217.58 272.62 218.26 270.75
            C 218.87 270.95 219.27 271.36 218.97 271.89
            Q 218.83 272.12 219.09 272.19
            C 220.91 272.66 221.80 271.56 223.39 273.16
            Q 223.12 273.20 222.85 273.24
            L 222.29 285.24
            C 222.27 290.44 222.43 292.43 217.85 295.52
            Q 216.36 296.24 215.11 294.75
            L 214.77 287.30
            Q 214.74 286.77 214.21 286.74
            L 209.71 286.54
            L 196.24 286.62
            Q 195.71 286.62 195.34 286.26
            L 191.35 282.38
            Q 190.90 279.84 188.96 277.49
            Q 188.96 277.03 188.69 276.68
            Q 188.42 276.32 188.32 276.76
            L 187.96 278.25
            Q 187.84 278.38 187.63 278.42
            Q 187.37 278.46 187.36 278.19
            L 187.16 263.82
            Q 187.15 263.27 187.70 263.29
            Q 189.19 263.33 190.30 262.73
            L 197.22 262.37
            Z"
            />
            <path
              fill="#64b4d7"
              d="
            M 222.20 262.22
            L 223.26 262.77
            Q 223.71 263.01 223.69 263.51
            L 223.39 273.16
            C 221.80 271.56 220.91 272.66 219.09 272.19
            Q 218.83 272.12 218.97 271.89
            C 219.27 271.36 218.87 270.95 218.26 270.75
            C 218.39 269.13 218.17 263.11 219.27 262.44
            Q 220.91 262.70 222.20 262.22
            Z"
            />
            <path
              fill="#c1c4c4"
              fillOpacity="0.780"
              d="
            M 148.52 265.45
            L 147.79 265.50
            Q 146.65 264.41 145.14 264.47
            Q 144.65 264.49 144.35 264.86
            Q 143.39 266.03 143.13 267.59
            L 140.68 266.69
            L 141.02 263.77
            Q 144.31 263.38 147.44 264.32
            Q 147.89 264.46 148.08 264.88
            Q 148.20 265.17 148.52 265.45
            Z"
            />
            <path
              fill="#cbe9f4"
              d="
            M 147.79 265.50
            Q 148.96 267.40 149.74 267.25
            Q 150.00 267.25 150.29 267.74
            Q 150.19 269.56 148.94 269.89
            L 143.13 267.59
            Q 143.39 266.03 144.35 264.86
            Q 144.65 264.49 145.14 264.47
            Q 146.65 264.41 147.79 265.50
            Z"
            />
            <path
              fill="#ffb502"
              d="
            M 315.25 265.16
            L 340.65 265.14
            Q 339.07 273.36 339.02 281.66
            L 304.23 281.50
            L 308.48 265.33
            L 315.25 265.16
            Z"
            />
            <path
              fill="#464e72"
              d="
            M 303.93 265.21
            L 308.48 265.33
            L 304.23 281.50
            L 300.07 281.48
            L 303.93 265.21
            Z"
            />
            <path
              fill="#464e72"
              d="
            M 147.79 265.50
            L 148.52 265.45
            Q 149.13 265.61 148.88 265.41
            L 149.74 267.25
            Q 148.96 267.40 147.79 265.50
            Z"
            />
            <path
              fill="#c1c4c4"
              fillOpacity="0.780"
              d="
            M 150.29 267.74
            Q 153.67 271.12 158.09 273.38
            Q 156.80 274.09 156.71 274.98
            L 148.94 269.89
            Q 150.19 269.56 150.29 267.74
            Z"
            />
            <path
              fill="#1c2745"
              d="
            M 368.11 267.64
            L 375.57 286.23
            Q 375.76 286.70 375.58 287.17
            L 372.10 296.06
            Q 370.59 294.31 366.81 291.69
            Q 363.27 289.23 358.20 282.51
            Q 355.99 278.82 359.86 275.30
            Q 363.16 270.66 368.11 267.64
            Z"
            />
            <path
              fill="#ffe7e7"
              d="
            M 416.54 268.31
            L 417.05 268.19
            C 420.69 287.97 422.88 306.40 421.64 325.56
            Q 420.41 325.84 420.95 322.76
            C 421.78 304.00 419.49 287.63 416.54 268.31
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.471"
              d="
            M 235.07 271.91
            L 235.80 280.89
            C 230.87 281.12 225.13 279.39 223.01 285.40
            Q 223.11 285.21 222.29 285.24
            L 222.85 273.24
            L 223.45 276.65
            Q 223.56 277.22 223.96 276.81
            Q 224.10 276.66 224.10 276.50
            Q 224.09 276.24 224.29 276.05
            Q 225.00 275.36 225.64 275.96
            Q 225.97 276.28 226.35 276.01
            Q 227.81 274.96 229.64 274.68
            A 1.33 1.31 -80.4 0 0 230.61 273.98
            L 232.43 270.50
            Q 232.61 270.14 232.77 270.51
            Q 233.80 272.87 235.07 271.91
            Z"
            />
            <path
              fill="#71868b"
              fillOpacity="0.580"
              d="
            M 171.88 272.50
            L 172.20 277.88
            Q 171.44 277.03 170.53 279.00
            Q 169.93 278.81 169.99 278.27
            Q 171.25 276.20 169.84 274.61
            Q 169.52 274.25 169.04 274.27
            Q 167.97 274.30 166.97 273.92
            L 170.82 271.59
            Q 171.32 271.29 171.40 271.87
            Q 171.49 272.57 171.88 272.50
            Z"
            />
            <path
              fill="#c1c4c4"
              fillOpacity="0.780"
              d="
            M 171.88 272.50
            Q 172.09 272.49 172.27 272.49
            Q 172.71 272.51 172.76 272.95
            Q 173.10 275.71 172.20 277.88
            L 171.88 272.50
            Z"
            />
            <path
              fill="#cbe9f4"
              d="
            M 158.09 273.38
            Q 162.22 275.54 166.97 273.92
            Q 167.97 274.30 169.04 274.27
            Q 169.52 274.25 169.84 274.61
            Q 171.25 276.20 169.99 278.27
            L 166.47 281.68
            L 164.94 281.85
            L 156.71 274.98
            Q 156.80 274.09 158.09 273.38
            Z"
            />
            <path
              fill="#ffe7e7"
              d="
            M 92.73 275.13
            Q 92.95 274.35 93.59 274.13
            A 0.46 0.46 0.0 0 1 94.18 274.69
            C 93.32 277.65 89.36 284.76 85.79 284.25
            A 0.42 0.42 0.0 0 1 85.68 283.45
            Q 91.09 281.04 92.73 275.13
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.322"
              d="
            M 397.57 275.00
            C 399.92 279.18 403.61 287.86 402.00 292.64
            C 401.71 293.50 400.90 297.09 399.63 296.51
            L 391.44 280.79
            Q 391.19 280.31 391.61 279.96
            L 397.57 275.00
            Z"
            />
            <path
              fill="#71868b"
              fillOpacity="0.580"
              d="
            M 188.96 277.49
            L 189.24 278.76
            A 0.40 0.39 2.6 0 1 188.73 279.22
            L 187.98 278.98
            Q 187.95 278.88 187.91 278.78
            Q 188.07 278.70 187.96 278.25
            L 188.32 276.76
            Q 188.42 276.32 188.69 276.68
            Q 188.96 277.03 188.96 277.49
            Z"
            />
            <path
              fill="#c1c4c4"
              fillOpacity="0.780"
              d="
            M 188.96 277.49
            Q 190.90 279.84 191.35 282.38
            Q 189.12 281.01 187.98 278.98
            L 188.73 279.22
            A 0.40 0.39 2.6 0 0 189.24 278.76
            L 188.96 277.49
            Z"
            />
            <path
              fill="#c1c4c4"
              fillOpacity="0.780"
              d="
            M 169.99 278.27
            Q 169.93 278.81 170.53 279.00
            Q 170.74 278.97 170.99 279.06
            L 167.94 282.40
            Q 167.60 282.77 167.35 282.34
            Q 166.99 281.73 166.47 281.68
            L 169.99 278.27
            Z"
            />
            <path
              fill="#c1e4fa"
              d="
            M 235.80 280.89
            L 268.38 281.25
            L 272.76 281.18
            L 300.07 281.48
            L 304.23 281.50
            L 339.02 281.66
            C 341.61 281.87 345.14 281.46 347.19 283.46
            C 350.27 286.48 349.01 291.21 345.01 292.54
            Q 343.80 292.94 339.75 292.77
            L 234.99 291.89
            L 226.01 291.79
            Q 222.64 288.68 223.01 285.40
            C 225.13 279.39 230.87 281.12 235.80 280.89
            Z"
            />
            <path
              fill="#ffb502"
              d="
            M 36.29 284.02
            L 38.55 284.89
            A 0.51 0.51 0.0 0 1 38.53 285.85
            L 36.23 286.61
            A 0.51 0.51 0.0 0 0 35.91 286.92
            L 35.04 289.18
            A 0.51 0.51 0.0 0 1 34.08 289.16
            L 33.32 286.86
            A 0.51 0.51 0.0 0 0 33.01 286.54
            L 30.75 285.67
            A 0.51 0.51 0.0 0 1 30.77 284.71
            L 33.07 283.95
            A 0.51 0.51 0.0 0 0 33.39 283.64
            L 34.26 281.38
            A 0.51 0.51 0.0 0 1 35.22 281.40
            L 35.98 283.70
            A 0.51 0.51 0.0 0 0 36.29 284.02
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.161"
              d="
            M 171.32 281.89
            Q 172.68 283.18 171.74 286.48
            L 167.44 286.48
            A 0.54 0.54 0.0 0 1 167.21 285.45
            Q 169.82 284.21 171.32 281.89
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.776"
              d="
            M 358.20 282.51
            Q 363.27 289.23 366.81 291.69
            Q 370.59 294.31 372.10 296.06
            L 350.43 352.56
            L 344.13 352.51
            Q 342.19 352.19 340.36 352.75
            A 1.04 1.04 0.0 0 1 339.02 351.76
            L 339.01 340.03
            Q 339.47 339.63 340.27 339.81
            C 350.58 342.10 351.52 328.77 342.25 328.99
            Q 340.70 329.03 339.22 329.01
            L 339.21 324.10
            C 342.02 323.88 344.79 324.72 347.09 322.47
            Q 347.39 322.90 346.59 323.53
            Q 345.98 324.00 346.75 324.00
            L 347.32 324.00
            A 0.44 0.44 0.0 0 0 347.76 323.58
            Q 347.77 323.45 347.74 323.31
            Q 347.72 323.21 347.83 323.17
            Q 349.10 322.71 349.68 321.45
            Q 349.86 321.06 349.67 320.67
            Q 349.37 320.07 349.54 319.48
            Q 349.67 319.00 350.17 319.00
            L 351.12 319.00
            Q 351.75 319.00 351.75 318.38
            L 351.75 317.85
            Q 351.75 317.24 351.17 317.43
            Q 350.92 317.51 350.90 317.05
            A 0.33 0.32 79.0 0 1 351.11 316.73
            L 351.35 316.65
            A 0.70 0.70 0.0 0 0 351.75 315.70
            Q 350.68 313.37 352.53 311.52
            Q 352.82 311.23 352.71 310.84
            Q 352.47 309.95 353.39 309.65
            Q 353.98 309.46 353.80 308.86
            Q 353.20 306.90 354.32 305.41
            Q 354.34 305.40 354.32 305.39
            L 353.99 305.33
            A 0.06 0.05 -58.3 0 1 353.97 305.23
            L 354.47 304.82
            Q 354.87 304.49 354.36 304.40
            L 353.94 304.32
            A 0.02 0.02 0.0 0 1 353.93 304.28
            Q 355.18 303.51 354.70 302.02
            A 0.22 0.21 -8.7 0 1 354.91 301.74
            Q 355.08 301.75 355.25 301.76
            A 0.22 0.18 54.9 0 0 355.28 301.36
            Q 355.21 301.33 355.02 301.35
            A 0.08 0.08 0.0 0 1 354.97 301.21
            L 355.56 300.81
            A 0.27 0.27 0.0 0 0 355.43 300.32
            Q 355.30 300.31 355.16 300.31
            Q 355.08 300.32 355.12 300.25
            C 356.03 298.84 355.75 291.69 355.70 290.01
            A 0.27 0.26 0.0 0 1 355.98 289.74
            Q 356.12 289.75 356.25 289.76
            A 0.22 0.19 54.9 0 0 356.29 289.35
            Q 356.17 289.30 356.02 289.30
            Q 355.93 289.30 355.99 289.23
            L 356.28 288.83
            Q 356.39 288.68 356.25 288.55
            L 355.97 288.26
            A 0.04 0.04 0.0 0 1 355.98 288.20
            L 356.65 287.76
            A 0.27 0.27 0.0 0 0 356.59 287.28
            L 356.31 287.19
            Q 356.30 287.18 356.30 287.18
            L 356.60 286.50
            Q 356.67 286.35 356.50 286.33
            Q 356.05 286.26 356.36 286.05
            Q 356.52 285.95 356.45 285.77
            Q 355.01 282.24 358.20 282.51
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.161"
              d="
            M 188.90 283.07
            Q 188.48 283.31 189.19 283.78
            L 190.98 285.45
            Q 191.45 285.88 190.85 286.11
            C 188.14 287.14 186.22 284.10 188.90 283.07
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.647"
              d="
            M 222.29 285.24
            Q 223.11 285.21 223.01 285.40
            Q 222.64 288.68 226.01 291.79
            Q 227.65 293.68 231.73 292.87
            A 0.65 0.64 -5.5 0 1 232.50 293.50
            L 232.50 295.45
            Q 232.50 295.91 232.05 295.93
            L 226.80 296.18
            Q 226.40 296.19 226.08 296.43
            Q 223.97 297.93 222.59 300.13
            Q 222.33 300.55 222.31 301.04
            L 222.15 304.05
            A 0.25 0.25 0.0 0 1 221.90 304.29
            L 221.51 304.29
            Q 220.72 304.30 220.95 305.05
            L 221.47 306.78
            Q 221.61 307.23 221.24 307.51
            Q 220.54 308.04 220.48 308.79
            Q 220.44 309.33 220.07 309.73
            L 218.64 311.24
            Q 218.41 311.49 218.36 311.82
            Q 218.19 313.19 216.95 313.92
            Q 216.58 314.14 216.43 314.55
            Q 215.56 316.93 213.30 318.32
            A 0.63 0.62 63.7 0 0 213.05 319.08
            Q 213.34 319.85 212.70 320.21
            Q 212.33 320.41 212.31 320.83
            Q 212.22 322.44 210.50 323.16
            Q 210.08 323.34 210.18 323.78
            Q 210.39 324.79 209.60 325.26
            Q 209.23 325.48 209.22 325.91
            L 209.20 328.94
            Q 209.20 329.30 208.85 329.37
            L 205.75 329.96
            Q 204.47 330.20 205.73 330.54
            Q 207.08 330.91 208.47 330.73
            A 0.25 0.24 -4.1 0 1 208.75 330.97
            Q 208.75 331.15 208.75 331.32
            Q 208.74 331.73 208.33 331.73
            L 205.99 331.73
            Q 202.51 331.24 198.76 331.84
            Q 197.24 331.40 196.07 330.44
            L 192.90 326.15
            Q 194.05 325.66 194.55 326.34
            Q 195.38 327.45 195.28 326.51
            Q 195.24 326.08 195.00 325.76
            A 0.36 0.32 1.5 0 1 195.51 325.32
            Q 196.23 325.82 196.91 324.87
            Q 197.33 324.28 197.25 324.74
            Q 197.19 325.08 197.43 325.35
            A 0.34 0.34 0.0 0 0 198.03 325.11
            Q 197.95 323.09 199.79 322.19
            Q 200.25 321.97 200.25 321.46
            L 200.25 320.47
            Q 200.25 320.25 200.47 320.25
            Q 200.64 320.25 200.80 320.25
            Q 201.11 320.24 201.12 319.92
            L 201.20 318.14
            Q 201.22 317.63 201.58 317.27
            L 206.68 312.10
            Q 207.04 311.74 207.01 311.23
            Q 206.91 309.18 208.77 308.15
            A 0.18 0.18 0.0 0 0 208.74 307.83
            Q 208.62 307.79 208.50 307.77
            Q 208.02 307.69 208.59 307.29
            Q 209.32 306.78 209.10 305.83
            Q 208.98 305.31 209.45 305.58
            L 209.77 305.78
            A 0.32 0.32 0.0 0 0 210.25 305.50
            L 210.25 300.63
            Q 210.25 300.12 210.75 300.01
            Q 210.87 299.98 211.00 299.99
            L 211.01 304.49
            Q 211.01 304.94 211.46 304.96
            L 215.34 305.10
            A 0.92 0.92 0.0 0 0 216.26 303.94
            Q 214.90 298.90 217.85 295.52
            C 222.43 292.43 222.27 290.44 222.29 285.24
            Z"
            />
            <path
              fill="#6d76a1"
              d="
            M 150.01 286.68
            L 150.48 292.75
            Q 150.02 293.77 150.13 294.76
            Q 148.89 295.09 148.04 294.71
            L 147.79 287.25
            A 0.61 0.61 0.0 0 1 148.42 286.62
            L 150.01 286.68
            Z"
            />
            <path
              fill="#6d76a1"
              d="
            M 209.71 286.54
            L 214.21 286.74
            Q 214.74 286.77 214.77 287.30
            L 215.11 294.75
            Q 213.46 295.43 211.69 295.20
            Q 212.36 293.68 211.63 292.57
            Q 213.44 285.89 209.71 286.54
            Z"
            />
            <path
              fill="#1c2745"
              d="
            M 378.95 300.42
            L 377.02 299.32
            Q 377.47 298.70 375.49 297.88
            A 1.32 1.32 0.0 0 1 374.78 296.16
            L 376.96 290.81
            A 0.38 0.38 0.0 0 1 377.66 290.82
            L 381.69 301.37
            A 0.40 0.40 0.0 0 1 380.97 301.71
            Q 380.02 300.08 378.95 300.42
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.733"
              d="
            M 226.01 291.79
            L 234.99 291.89
            L 235.01 296.68
            Q 231.89 296.59 228.74 296.60
            C 223.50 296.62 221.19 302.05 224.57 306.04
            C 224.55 309.87 228.73 308.90 231.21 309.21
            A 0.63 0.62 -86.3 0 1 231.75 309.83
            L 231.75 311.00
            Q 231.75 311.53 231.23 311.50
            Q 228.09 311.34 225.03 312.16
            Q 224.48 312.31 224.12 312.75
            Q 219.96 317.88 224.61 322.86
            Q 224.87 323.14 225.29 323.88
            C 226.46 325.99 228.72 324.23 229.91 326.31
            Q 230.30 327.00 229.50 327.00
            L 226.77 327.00
            Q 226.26 327.00 225.96 327.40
            Q 225.40 328.16 224.50 328.04
            A 1.11 1.10 27.8 0 0 223.61 328.31
            Q 221.63 330.05 222.03 332.70
            Q 222.12 333.29 221.54 333.35
            Q 219.99 333.50 218.55 334.15
            A 0.22 0.22 0.0 0 0 218.64 334.57
            Q 219.88 334.54 220.51 335.37
            A 0.45 0.45 0.0 0 1 220.10 336.08
            C 214.89 335.49 211.37 332.51 205.99 331.73
            L 208.33 331.73
            Q 208.74 331.73 208.75 331.32
            Q 208.75 331.15 208.75 330.97
            A 0.25 0.24 -4.1 0 0 208.47 330.73
            Q 207.08 330.91 205.73 330.54
            Q 204.47 330.20 205.75 329.96
            L 208.85 329.37
            Q 209.20 329.30 209.20 328.94
            L 209.22 325.91
            Q 209.23 325.48 209.60 325.26
            Q 210.39 324.79 210.18 323.78
            Q 210.08 323.34 210.50 323.16
            Q 212.22 322.44 212.31 320.83
            Q 212.33 320.41 212.70 320.21
            Q 213.34 319.85 213.05 319.08
            A 0.63 0.62 63.7 0 1 213.30 318.32
            Q 215.56 316.93 216.43 314.55
            Q 216.58 314.14 216.95 313.92
            Q 218.19 313.19 218.36 311.82
            Q 218.41 311.49 218.64 311.24
            L 220.07 309.73
            Q 220.44 309.33 220.48 308.79
            Q 220.54 308.04 221.24 307.51
            Q 221.61 307.23 221.47 306.78
            L 220.95 305.05
            Q 220.72 304.30 221.51 304.29
            L 221.90 304.29
            A 0.25 0.25 0.0 0 0 222.15 304.05
            L 222.31 301.04
            Q 222.33 300.55 222.59 300.13
            Q 223.97 297.93 226.08 296.43
            Q 226.40 296.19 226.80 296.18
            L 232.05 295.93
            Q 232.50 295.91 232.50 295.45
            L 232.50 293.50
            A 0.65 0.64 -5.5 0 0 231.73 292.87
            Q 227.65 293.68 226.01 291.79
            Z"
            />
            <path
              fill="#64b4d7"
              d="
            M 339.75 292.77
            L 339.70 297.64
            L 235.01 296.68
            L 234.99 291.89
            L 339.75 292.77
            Z"
            />
            <path
              fill="#6d76a1"
              d="
            M 187.42 292.53
            Q 186.81 296.07 188.70 296.45
            C 186.89 296.64 188.67 322.32 188.76 323.38
            L 189.02 324.23
            L 188.78 324.38
            Q 188.36 324.64 188.37 325.14
            L 189.07 352.54
            A 0.73 0.72 89.2 0 0 189.79 353.25
            L 196.57 353.25
            Q 197.21 353.25 197.49 353.83
            L 201.40 362.17
            Q 201.66 362.72 201.05 362.72
            L 160.49 362.81
            A 0.41 0.40 12.5 0 1 160.12 362.24
            L 164.12 353.71
            Q 164.33 353.25 164.84 353.25
            L 169.97 353.25
            Q 170.52 353.25 170.57 352.70
            Q 171.30 344.47 170.48 336.84
            L 170.71 318.53
            Q 172.33 307.58 171.89 296.60
            L 171.92 292.89
            Q 173.43 292.11 175.36 292.63
            Q 175.85 292.76 175.85 293.27
            L 175.07 352.53
            A 0.71 0.71 0.0 0 0 175.78 353.25
            L 184.05 353.25
            A 0.61 0.60 -0.5 0 0 184.66 352.64
            L 183.84 293.46
            Q 183.84 292.99 184.28 292.84
            Q 185.65 292.36 187.42 292.53
            Z"
            />
            <path
              fill="#cbe9f4"
              d="
            M 187.42 292.53
            L 211.63 292.57
            Q 212.36 293.68 211.69 295.20
            Q 210.90 295.88 210.85 295.52
            Q 208.45 296.41 206.15 298.98
            L 199.82 300.00
            Q 199.59 299.52 199.27 299.54
            Q 194.20 297.45 188.70 296.45
            Q 186.81 296.07 187.42 292.53
            Z"
            />
            <path
              fill="#1c2745"
              d="
            M 405.04 301.08
            Q 405.10 299.52 404.39 298.31
            Q 404.59 298.33 404.84 298.19
            A 0.46 0.46 0.0 0 0 405.01 297.54
            Q 403.68 295.35 404.26 292.94
            A 0.39 0.39 0.0 0 1 405.00 292.88
            L 408.27 300.75
            Q 408.46 301.20 408.03 301.43
            C 407.19 301.89 405.86 302.03 405.70 300.71
            A 0.21 0.21 0.0 0 0 405.31 300.63
            L 405.04 301.08
            Z"
            />
            <path
              fill="#464e72"
              d="
            M 425.71 292.72
            L 426.25 302.21
            Q 425.31 302.14 425.50 302.80
            Q 424.70 297.57 425.71 292.72
            Z"
            />
            <path
              fill="#64b4d7"
              d="
            M 148.04 294.71
            Q 148.89 295.09 150.13 294.76
            Q 151.73 295.33 151.73 296.24
            Q 151.76 300.44 151.75 304.72
            Q 151.75 305.29 151.18 305.25
            L 147.35 305.00
            Q 146.75 304.96 146.75 304.35
            L 146.75 296.39
            Q 146.75 295.85 147.15 295.50
            L 148.04 294.71
            Z"
            />
            <path
              fill="#64b4d7"
              d="
            M 215.11 294.75
            Q 216.36 296.24 217.85 295.52
            Q 214.90 298.90 216.26 303.94
            A 0.92 0.92 0.0 0 1 215.34 305.10
            L 211.46 304.96
            Q 211.01 304.94 211.01 304.49
            L 211.00 299.99
            L 210.71 298.69
            L 210.85 295.52
            Q 210.90 295.88 211.69 295.20
            Q 213.46 295.43 215.11 294.75
            Z"
            />
            <path
              fill="#6d76a1"
              d="
            M 210.85 295.52
            L 210.71 298.69
            L 205.90 299.04
            Q 206.02 299.01 206.15 298.98
            Q 208.45 296.41 210.85 295.52
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.161"
              d="
            M 404.39 298.31
            Q 405.10 299.52 405.04 301.08
            Q 403.98 301.88 402.43 300.99
            Q 402.05 300.77 402.16 300.34
            L 403.17 296.39
            A 0.36 0.36 0.0 0 1 403.87 296.38
            L 404.39 298.31
            Z"
            />
            <path
              fill="#010001"
              fillOpacity="0.098"
              d="
            M 171.89 296.60
            Q 172.33 307.58 170.71 318.53
            Q 169.62 318.50 170.29 318.44
            C 168.00 311.53 153.48 322.32 150.71 325.19
            C 148.34 327.64 146.08 331.29 143.83 334.28
            Q 140.09 336.71 137.41 333.96
            Q 137.06 333.60 136.55 333.53
            L 131.77 332.91
            L 130.79 332.73
            Q 130.43 332.67 130.79 332.60
            C 131.46 332.46 135.85 331.79 135.74 331.17
            Q 135.70 330.97 135.50 331.00
            Q 135.27 331.03 135.07 330.95
            A 0.24 0.15 -18.3 0 1 135.32 330.65
            Q 136.60 330.80 137.27 329.90
            Q 137.52 329.56 137.93 329.53
            C 139.95 329.35 139.71 326.89 141.32 326.95
            Q 141.85 326.97 142.08 326.49
            Q 142.56 325.48 143.67 325.07
            Q 144.12 324.90 144.37 324.49
            Q 146.26 321.38 149.60 319.70
            Q 150.11 319.44 150.46 318.98
            Q 152.04 316.87 154.32 315.43
            Q 154.74 315.17 154.87 314.69
            Q 155.23 313.44 155.92 312.40
            C 156.64 311.30 158.16 310.68 158.98 309.27
            A 1.08 1.04 8.7 0 1 159.72 308.75
            C 161.33 308.47 161.21 307.25 162.21 306.49
            Q 163.27 305.68 164.48 305.24
            Q 164.94 305.07 165.25 304.68
            L 168.44 300.66
            Q 168.77 300.24 168.78 299.72
            Q 168.87 296.59 171.89 296.60
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.471"
              d="
            M 188.70 296.45
            Q 194.20 297.45 199.27 299.54
            Q 198.47 300.95 200.70 301.35
            A 0.61 0.61 0.0 0 1 201.19 302.04
            C 200.83 304.24 199.36 305.16 198.22 306.97
            Q 195.58 311.18 190.12 315.52
            Q 189.92 315.68 189.83 315.44
            Q 189.76 315.23 189.72 315.20
            A 0.57 0.54 -67.8 0 0 188.78 315.62
            L 188.76 323.38
            C 188.67 322.32 186.89 296.64 188.70 296.45
            Z"
            />
            <path
              fill="#c1e4fa"
              d="
            M 235.01 296.68
            L 339.70 297.64
            C 352.17 296.41 351.45 310.07 339.51 308.38
            Q 287.74 308.02 236.00 307.50
            Q 235.48 307.49 234.59 307.79
            Q 233.59 307.32 232.52 307.57
            Q 227.98 308.60 224.57 306.04
            C 221.19 302.05 223.50 296.62 228.74 296.60
            Q 231.89 296.59 235.01 296.68
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.647"
              d="
            M 377.02 299.32
            L 378.95 300.42
            L 381.99 302.95
            Q 382.38 303.28 382.59 303.74
            L 385.16 309.24
            L 384.78 310.61
            Q 384.64 311.10 384.13 311.14
            Q 381.76 311.36 380.14 313.12
            A 0.82 0.82 0.0 0 1 379.33 313.37
            Q 378.32 313.10 377.83 313.99
            Q 377.62 314.37 377.23 314.56
            C 371.35 317.27 366.97 325.18 365.23 331.04
            L 362.15 330.98
            Q 362.86 329.83 362.90 328.97
            L 374.20 298.44
            Q 374.41 297.89 374.92 298.17
            L 377.02 299.32
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.569"
              d="
            M 210.71 298.69
            L 211.00 299.99
            Q 210.87 299.98 210.75 300.01
            Q 210.25 300.12 210.25 300.63
            L 210.25 305.50
            A 0.32 0.32 0.0 0 1 209.77 305.78
            L 209.45 305.58
            Q 208.98 305.31 209.10 305.83
            Q 209.32 306.78 208.59 307.29
            Q 208.02 307.69 208.50 307.77
            Q 208.62 307.79 208.74 307.83
            A 0.18 0.18 0.0 0 1 208.77 308.15
            Q 206.91 309.18 207.01 311.23
            Q 207.04 311.74 206.68 312.10
            L 201.58 317.27
            Q 201.22 317.63 201.20 318.14
            L 201.12 319.92
            Q 201.11 320.24 200.80 320.25
            Q 200.64 320.25 200.47 320.25
            Q 200.25 320.25 200.25 320.47
            L 200.25 321.46
            Q 200.25 321.97 199.79 322.19
            Q 197.95 323.09 198.03 325.11
            A 0.34 0.34 0.0 0 1 197.43 325.35
            Q 197.19 325.08 197.25 324.74
            Q 197.33 324.28 196.91 324.87
            Q 196.23 325.82 195.51 325.32
            A 0.36 0.32 1.5 0 0 195.00 325.76
            Q 195.24 326.08 195.28 326.51
            Q 195.38 327.45 194.55 326.34
            Q 194.05 325.66 192.90 326.15
            L 189.02 324.23
            L 188.76 323.38
            L 188.78 315.62
            A 0.57 0.54 -67.8 0 1 189.72 315.20
            Q 189.76 315.23 189.83 315.44
            Q 189.92 315.68 190.12 315.52
            Q 195.58 311.18 198.22 306.97
            C 199.36 305.16 200.83 304.24 201.19 302.04
            A 0.61 0.61 0.0 0 0 200.70 301.35
            Q 198.47 300.95 199.27 299.54
            Q 199.59 299.52 199.82 300.00
            Q 199.66 299.53 199.79 300.13
            Q 199.81 300.22 199.90 300.21
            C 203.80 299.74 205.63 303.73 207.28 303.38
            Q 207.73 303.28 207.55 302.86
            L 205.90 299.04
            L 210.71 298.69
            Z"
            />
            <path
              fill="#71868b"
              fillOpacity="0.580"
              d="
            M 206.15 298.98
            Q 206.02 299.01 205.90 299.04
            L 207.55 302.86
            Q 207.73 303.28 207.28 303.38
            C 205.63 303.73 203.80 299.74 199.90 300.21
            Q 199.81 300.22 199.79 300.13
            Q 199.66 299.53 199.82 300.00
            L 206.15 298.98
            Z"
            />
            <path
              fill="#464e72"
              d="
            M 103.29 307.01
            Q 103.32 306.56 102.97 306.44
            L 103.33 300.98
            Q 103.42 299.61 103.64 300.97
            Q 104.13 304.00 103.29 307.01
            Z"
            />
            <path
              fill="#ffe7e7"
              d="
            M 514.98 363.04
            L 514.68 363.15
            Q 514.43 363.24 514.18 363.19
            C 493.70 359.47 474.43 358.67 454.53 356.89
            A 0.52 0.51 -83.5 0 1 454.07 356.31
            C 455.91 341.94 447.38 326.81 431.89 326.45
            C 429.67 326.40 426.98 327.18 424.47 327.29
            L 425.50 302.80
            Q 425.31 302.14 426.25 302.21
            Q 427.08 302.46 427.59 301.78
            Q 427.96 301.30 428.43 301.69
            L 433.45 305.83
            Q 434.56 306.74 435.80 306.05
            C 455.76 295.02 473.67 305.50 484.45 322.78
            A 1.19 1.19 0.0 0 0 485.87 323.27
            C 498.17 318.83 511.36 328.94 515.35 339.93
            Q 519.29 350.79 514.98 363.04
            Z"
            />
            <path
              fill="#1c2745"
              d="
            M 393.68 310.25
            L 389.27 307.20
            Q 386.89 306.00 386.12 304.74
            Q 385.78 304.18 386.43 304.19
            L 396.99 304.28
            Q 397.36 304.28 397.29 304.65
            Q 396.49 309.13 393.68 310.25
            Z"
            />
            <path
              fill="#1c2745"
              d="
            M 403.92 305.08
            Q 404.79 308.91 402.51 312.19
            Q 402.23 312.60 402.57 312.96
            Q 402.83 313.23 403.25 313.30
            Q 403.12 313.49 402.98 313.68
            Q 399.54 315.27 397.63 312.15
            Q 397.37 311.73 397.56 311.27
            L 400.29 304.67
            A 0.99 0.97 7.9 0 1 401.10 304.07
            Q 402.57 303.93 403.92 305.08
            Z"
            />
            <path
              fill="#1c2745"
              d="
            M 408.95 314.11
            Q 409.10 313.30 408.44 312.44
            Q 408.68 311.39 408.23 311.13
            L 406.89 306.31
            L 407.07 304.99
            A 1.39 1.38 37.7 0 1 409.72 304.65
            L 413.39 313.40
            Q 413.64 313.98 413.02 314.12
            Q 410.87 314.60 408.95 314.11
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.471"
              d="
            M 406.89 306.31
            L 408.23 311.13
            L 405.10 312.34
            L 403.25 313.30
            Q 402.83 313.23 402.57 312.96
            Q 402.23 312.60 402.51 312.19
            Q 404.79 308.91 403.92 305.08
            Q 404.12 303.96 405.45 304.30
            Q 405.94 304.42 406.16 304.88
            L 406.89 306.31
            Z"
            />
            <path
              fill="#000101"
              fillOpacity="0.922"
              d="
            M 224.57 306.04
            Q 227.98 308.60 232.52 307.57
            Q 233.59 307.32 234.59 307.79
            L 234.52 312.39
            C 231.60 312.22 227.82 311.68 225.38 313.18
            C 220.79 316.02 222.82 323.14 228.79 323.24
            Q 231.71 323.29 234.55 323.30
            L 234.22 328.16
            C 228.02 327.89 221.25 327.20 222.85 336.39
            L 222.45 337.12
            Q 222.41 337.20 222.35 337.13
            Q 222.26 337.02 222.22 336.88
            Q 222.13 336.57 221.81 336.63
            Q 219.47 337.01 215.72 335.95
            Q 208.72 331.54 199.55 332.25
            Q 199.25 331.97 198.76 331.84
            Q 202.51 331.24 205.99 331.73
            C 211.37 332.51 214.89 335.49 220.10 336.08
            A 0.45 0.45 0.0 0 0 220.51 335.37
            Q 219.88 334.54 218.64 334.57
            A 0.22 0.22 0.0 0 1 218.55 334.15
            Q 219.99 333.50 221.54 333.35
            Q 222.12 333.29 222.03 332.70
            Q 221.63 330.05 223.61 328.31
            A 1.11 1.10 27.8 0 1 224.50 328.04
            Q 225.40 328.16 225.96 327.40
            Q 226.26 327.00 226.77 327.00
            L 229.50 327.00
            Q 230.30 327.00 229.91 326.31
            C 228.72 324.23 226.46 325.99 225.29 323.88
            Q 224.87 323.14 224.61 322.86
            Q 219.96 317.88 224.12 312.75
            Q 224.48 312.31 225.03 312.16
            Q 228.09 311.34 231.23 311.50
            Q 231.75 311.53 231.75 311.00
            L 231.75 309.83
            A 0.63 0.62 -86.3 0 0 231.21 309.21
            C 228.73 308.90 224.55 309.87 224.57 306.04
            Z"
            />
            <path
              fill="#ffe7e7"
              d="
            M 102.97 306.44
            Q 103.32 306.56 103.29 307.01
            C 103.12 322.18 102.96 336.84 106.34 351.76
            Q 106.46 352.28 106.98 352.42
            L 108.79 352.88
            L 109.41 356.17
            Q 109.50 356.67 109.00 356.70
            Q 99.24 357.33 89.49 358.10
            C 87.22 358.28 83.35 358.08 80.23 358.89
            C 76.58 359.38 78.78 353.94 79.17 352.38
            C 89.89 338.94 99.64 323.57 102.97 306.44
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.569"
              d="
            M 389.27 307.20
            L 393.68 310.25
            C 396.26 311.17 393.75 315.22 390.22 313.92
            Q 389.76 313.75 389.54 313.31
            Q 388.25 310.68 387.24 307.92
            C 386.58 306.11 388.48 306.95 389.27 307.20
            Z"
            />
            <path
              fill="#64b4d7"
              d="
            M 339.51 308.38
            Q 339.10 311.21 339.73 313.31
            L 234.52 312.39
            L 234.59 307.79
            Q 235.48 307.49 236.00 307.50
            Q 287.74 308.02 339.51 308.38
            Z"
            />
            <path
              fill="#f7c9cc"
              d="
            M 385.16 309.24
            L 390.35 322.43
            Q 390.53 322.90 390.36 323.37
            Q 383.78 341.92 376.61 360.21
            C 376.08 361.56 376.24 362.65 377.94 362.43
            Q 378.49 362.36 378.68 361.84
            L 384.40 346.04
            A 0.39 0.39 0.0 0 1 385.10 345.98
            L 385.36 346.41
            Q 385.60 346.82 385.83 346.40
            Q 386.28 345.55 385.70 344.72
            Q 385.47 344.40 385.56 344.02
            L 386.28 340.76
            Q 386.41 340.19 386.99 340.27
            L 387.34 340.32
            Q 387.64 340.36 387.79 340.10
            Q 388.30 339.29 387.48 338.85
            A 0.63 0.63 0.0 0 1 387.27 337.93
            Q 388.09 336.80 388.01 335.39
            A 0.47 0.47 0.0 0 1 388.78 335.00
            Q 389.05 335.22 389.17 335.56
            A 0.45 0.39 37.5 0 0 390.01 335.51
            Q 389.99 335.15 390.18 334.86
            Q 390.58 334.26 389.91 333.98
            C 388.35 333.34 390.92 328.58 391.45 327.37
            A 0.54 0.54 0.0 0 1 392.45 327.39
            L 405.60 360.17
            Q 405.87 360.83 406.51 360.53
            L 407.66 360.00
            A 0.59 0.59 0.0 0 0 407.97 359.24
            L 401.34 342.85
            Q 401.10 342.25 401.75 342.25
            L 424.37 342.25
            Q 424.95 342.25 425.17 342.78
            L 432.55 360.22
            A 0.49 0.48 66.7 0 0 433.20 360.48
            L 434.24 360.02
            A 0.59 0.59 0.0 0 0 434.55 359.27
            L 422.88 329.29
            Q 424.95 329.26 424.47 327.29
            C 426.98 327.18 429.67 326.40 431.89 326.45
            C 447.38 326.81 455.91 341.94 454.07 356.31
            A 0.52 0.51 -83.5 0 0 454.53 356.89
            C 474.43 358.67 493.70 359.47 514.18 363.19
            Q 514.43 363.24 514.68 363.15
            L 514.98 363.04
            Q 516.51 363.90 517.01 363.99
            Q 523.44 365.08 528.12 367.72
            Q 528.59 367.98 528.68 368.51
            C 529.66 374.18 497.72 377.18 493.50 377.76
            L 489.75 378.06
            L 485.21 378.62
            Q 485.29 378.83 484.75 378.76
            L 477.53 379.48
            C 473.91 379.78 470.58 379.80 467.00 380.82
            C 459.85 382.85 454.81 382.97 447.17 382.36
            C 438.73 381.68 430.16 382.61 421.74 382.89
            C 407.18 383.38 392.59 384.18 378.06 384.62
            Q 246.07 388.59 114.19 381.85
            Q 96.59 380.95 71.02 378.35
            L 67.47 378.06
            Q 66.72 377.79 66.69 378.31
            Q 66.58 378.17 66.47 378.02
            Q 66.55 377.59 65.49 377.80
            Q 65.10 377.69 64.88 377.78
            Q 64.57 377.41 64.50 377.56
            L 60.50 377.05
            Q 60.43 377.04 60.35 377.04
            C 50.71 375.81 39.40 375.12 30.88 370.51
            A 1.63 1.63 0.0 0 1 30.92 367.63
            C 38.49 363.78 48.22 362.38 56.57 361.40
            C 57.11 361.34 58.18 360.70 57.42 360.08
            Q 57.83 360.18 58.11 360.57
            A 0.85 0.84 -21.0 0 0 58.90 360.92
            L 71.52 359.52
            Q 71.92 359.47 72.25 359.23
            L 72.59 358.97
            L 72.64 360.52
            C 73.55 364.91 81.42 363.03 84.33 361.79
            Q 85.55 361.27 84.57 360.38
            Q 83.86 359.73 81.76 359.75
            L 80.23 358.89
            C 83.35 358.08 87.22 358.28 89.49 358.10
            Q 99.24 357.33 109.00 356.70
            Q 109.50 356.67 109.41 356.17
            L 108.79 352.88
            Q 117.16 355.23 118.81 350.15
            L 118.79 351.97
            Q 118.79 352.47 119.23 352.70
            Q 120.17 353.21 121.31 352.43
            C 125.23 352.41 127.94 351.57 130.67 348.47
            Q 134.34 344.27 140.13 343.91
            C 140.77 343.87 141.42 343.57 141.25 342.84
            Q 141.57 342.54 141.57 341.81
            L 142.79 337.24
            L 143.83 334.28
            C 146.08 331.29 148.34 327.64 150.71 325.19
            C 153.48 322.32 168.00 311.53 170.29 318.44
            Q 168.98 328.07 170.48 336.84
            Q 171.30 344.47 170.57 352.70
            Q 170.52 353.25 169.97 353.25
            L 164.84 353.25
            Q 164.33 353.25 164.12 353.71
            L 160.12 362.24
            A 0.41 0.40 12.5 0 0 160.49 362.81
            L 201.05 362.72
            Q 201.66 362.72 201.40 362.17
            L 197.49 353.83
            Q 197.21 353.25 196.57 353.25
            L 189.79 353.25
            A 0.73 0.72 89.2 0 1 189.07 352.54
            L 188.37 325.14
            Q 188.36 324.64 188.78 324.38
            L 189.02 324.23
            L 192.90 326.15
            L 196.07 330.44
            Q 196.71 333.07 199.55 332.25
            Q 208.72 331.54 215.72 335.95
            Q 221.18 342.81 223.26 350.11
            A 1.73 1.68 -46.0 0 1 223.26 351.10
            C 222.90 352.35 223.58 352.57 224.69 352.47
            Q 229.82 352.03 234.42 353.07
            Q 239.16 354.58 245.32 353.88
            Q 245.91 353.81 245.98 354.40
            C 246.79 361.16 251.23 362.18 257.47 362.22
            Q 286.49 362.43 315.49 362.67
            C 322.58 362.73 325.01 361.57 327.00 354.87
            A 0.33 0.32 -78.5 0 1 327.33 354.64
            Q 333.11 355.10 338.83 354.42
            C 340.60 354.22 342.41 353.18 344.13 352.51
            L 350.43 352.56
            L 348.40 359.28
            A 0.62 0.62 0.0 0 0 348.78 360.03
            L 350.04 360.50
            Q 350.57 360.70 350.78 360.17
            Q 356.68 345.00 361.92 329.59
            C 362.08 329.13 362.44 328.93 362.90 328.97
            Q 362.86 329.83 362.15 330.98
            L 361.00 333.89
            Q 360.86 334.23 361.12 334.50
            L 361.41 334.79
            A 0.43 0.43 0.0 0 0 362.04 334.76
            L 365.23 331.04
            C 366.97 325.18 371.35 317.27 377.23 314.56
            Q 377.62 314.37 377.83 313.99
            Q 378.32 313.10 379.33 313.37
            A 0.82 0.82 0.0 0 0 380.14 313.12
            Q 381.76 311.36 384.13 311.14
            Q 384.64 311.10 384.78 310.61
            L 385.16 309.24
            Z
            M 366.89 331.25
            C 365.50 330.34 363.11 335.76 362.45 336.90
            A 0.40 0.40 0.0 0 0 362.80 337.50
            L 364.95 337.50
            A 0.76 0.75 9.0 0 0 365.67 336.98
            L 367.24 332.24
            A 0.86 0.85 25.6 0 0 366.89 331.25
            Z
            M 111.06 359.97
            C 110.82 364.89 120.48 362.13 122.73 360.74
            Q 123.19 360.46 122.74 360.15
            C 120.85 358.83 114.42 360.11 111.60 359.55
            Q 111.09 359.44 111.06 359.97
            Z"
            />
            <path
              fill="#464e72"
              d="
            M 408.23 311.13
            Q 408.68 311.39 408.44 312.44
            L 405.10 312.34
            L 408.23 311.13
            Z"
            />
            <path
              fill="#c1e4fa"
              d="
            M 234.52 312.39
            L 339.73 313.31
            C 345.43 313.34 352.05 315.87 347.09 322.47
            C 344.79 324.72 342.02 323.88 339.21 324.10
            L 234.55 323.30
            Q 231.71 323.29 228.79 323.24
            C 222.82 323.14 220.79 316.02 225.38 313.18
            C 227.82 311.68 231.60 312.22 234.52 312.39
            Z"
            />
            <path
              fill="#fbc6b4"
              d="
            M 408.44 312.44
            Q 409.10 313.30 408.95 314.11
            Q 405.46 314.77 402.98 313.68
            Q 403.12 313.49 403.25 313.30
            L 405.10 312.34
            L 408.44 312.44
            Z"
            />
            <path
              fill="#ffe7e7"
              d="
            M 77.58 312.88
            L 70.65 349.48
            A 0.63 0.62 16.0 0 0 71.04 350.17
            L 72.40 350.71
            L 72.59 358.97
            L 72.25 359.23
            Q 71.92 359.47 71.52 359.52
            L 58.90 360.92
            A 0.85 0.84 -21.0 0 1 58.11 360.57
            Q 57.83 360.18 57.42 360.08
            Q 46.26 343.06 54.91 326.15
            C 58.58 318.98 64.12 314.69 71.85 313.02
            C 74.15 312.52 75.73 313.74 77.58 312.88
            Z"
            />
            <path
              fill="#f7c9cc"
              d="
            M 392.06 319.04
            Q 391.77 319.46 391.55 319.00
            Q 391.07 318.06 390.94 317.00
            A 1.03 0.83 39.9 0 1 392.81 317.04
            Q 392.99 317.67 392.06 319.04
            Z"
            />
            <path
              fill="#f7c9cc"
              d="
            M 404.72 316.83
            Q 402.07 318.21 401.70 320.35
            Q 401.60 320.96 402.22 320.90
            Q 406.50 320.49 409.38 316.82
            Q 409.90 316.65 409.67 317.12
            L 412.91 326.86
            L 395.40 326.81
            Q 394.87 326.81 394.65 326.33
            C 392.88 322.53 394.15 320.79 395.26 317.12
            A 0.74 0.73 -80.9 0 1 395.99 316.59
            L 404.72 316.83
            Z"
            />
            <path
              fill="#ffb502"
              d="
            M 409.38 316.82
            Q 406.50 320.49 402.22 320.90
            Q 401.60 320.96 401.70 320.35
            Q 402.07 318.21 404.72 316.83
            Q 406.65 316.12 409.38 316.82
            Z"
            />
            <path
              fill="#1c2745"
              d="
            M 412.91 326.86
            L 409.67 317.12
            L 414.23 316.51
            Q 414.79 316.43 415.00 316.97
            L 418.54 326.14
            Q 418.74 326.65 418.19 326.67
            L 412.91 326.86
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.471"
              d="
            M 170.29 318.44
            Q 169.62 318.50 170.71 318.53
            L 170.48 336.84
            Q 168.98 328.07 170.29 318.44
            Z"
            />
            <path
              fill="#64b4d7"
              d="
            M 339.21 324.10
            L 339.22 329.01
            L 234.22 328.16
            L 234.55 323.30
            L 339.21 324.10
            Z"
            />
            <path
              fill="#c1e4fa"
              d="
            M 234.22 328.16
            L 339.22 329.01
            Q 340.70 329.03 342.25 328.99
            C 351.52 328.77 350.58 342.10 340.27 339.81
            Q 339.47 339.63 339.01 340.03
            Q 338.46 340.08 338.19 339.81
            Q 286.36 339.45 234.48 338.94
            C 229.99 339.05 226.71 339.54 222.85 336.39
            C 221.25 327.20 228.02 327.89 234.22 328.16
            Z"
            />
            <path
              fill="#f7c9cc"
              d="
            M 416.71 329.25
            Q 418.12 333.32 417.32 337.84
            Q 409.95 336.79 412.51 339.68
            L 400.67 339.70
            Q 400.15 339.70 399.95 339.23
            L 395.99 329.85
            A 0.43 0.43 0.0 0 1 396.38 329.25
            L 416.71 329.25
            Z"
            />
            <path
              fill="#fbc6b4"
              d="
            M 416.71 329.25
            L 419.27 329.30
            Q 419.83 329.31 420.05 329.83
            L 423.95 339.08
            Q 424.16 339.56 423.65 339.71
            Q 422.58 340.01 422.05 339.47
            Q 423.40 336.69 417.32 337.84
            Q 418.12 333.32 416.71 329.25
            Z"
            />
            <path
              fill="#464e72"
              d="
            M 196.07 330.44
            Q 197.24 331.40 198.76 331.84
            Q 199.25 331.97 199.55 332.25
            Q 196.71 333.07 196.07 330.44
            Z"
            />
            <path
              fill="#464e72"
              d="
            M 362.15 330.98
            L 365.23 331.04
            L 362.04 334.76
            A 0.43 0.43 0.0 0 1 361.41 334.79
            L 361.12 334.50
            Q 360.86 334.23 361.00 333.89
            L 362.15 330.98
            Z"
            />
            <path
              fill="#ffe7e7"
              d="
            M 362.45 336.90
            C 363.11 335.76 365.50 330.34 366.89 331.25
            A 0.86 0.85 25.6 0 1 367.24 332.24
            L 365.67 336.98
            A 0.76 0.75 9.0 0 1 364.95 337.50
            L 362.80 337.50
            A 0.40 0.40 0.0 0 1 362.45 336.90
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.471"
              d="
            M 131.77 332.91
            L 136.55 333.53
            Q 137.06 333.60 137.41 333.96
            Q 140.09 336.71 143.83 334.28
            L 142.79 337.24
            Q 141.33 338.26 141.57 341.81
            Q 141.57 342.54 141.25 342.84
            L 139.68 342.94
            A 2.41 2.41 0.0 0 1 137.64 339.03
            Q 139.48 336.73 137.92 334.96
            C 136.32 333.15 133.44 333.78 131.23 334.06
            Q 131.50 333.63 131.30 333.30
            Q 131.15 333.06 131.43 333.00
            Q 131.60 332.96 131.77 332.91
            Z"
            />
            <path
              fill="#71868b"
              fillOpacity="0.580"
              d="
            M 141.25 342.84
            C 141.42 343.57 140.77 343.87 140.13 343.91
            Q 134.34 344.27 130.67 348.47
            C 127.94 351.57 125.23 352.41 121.31 352.43
            Q 123.71 350.21 124.88 345.95
            L 126.17 337.90
            Q 125.81 341.43 128.21 343.01
            Q 128.80 343.40 129.01 342.73
            L 129.68 340.57
            Q 129.80 340.16 130.23 340.19
            L 133.94 340.48
            Q 134.26 340.50 134.53 340.33
            Q 136.52 339.04 137.03 336.84
            A 0.60 0.60 0.0 0 0 136.52 336.12
            Q 133.45 335.77 130.93 337.25
            A 1.19 1.17 38.6 0 1 129.98 337.35
            Q 127.57 336.59 126.17 337.90
            Q 126.55 336.58 128.09 334.87
            Q 130.31 335.29 131.23 334.06
            C 133.44 333.78 136.32 333.15 137.92 334.96
            Q 139.48 336.73 137.64 339.03
            A 2.41 2.41 0.0 0 0 139.68 342.94
            L 141.25 342.84
            Z"
            />
            <circle fill="#c1e4fa" cx="34.60" cy="338.50" r="4.48" />
            <path
              fill="#000000"
              fillOpacity="0.396"
              d="
            M 128.09 334.87
            Q 126.55 336.58 126.17 337.90
            L 124.88 345.95
            L 124.66 340.26
            Q 123.41 336.25 128.09 334.87
            Z"
            />
            <path
              fill="#c1c4c4"
              fillOpacity="0.780"
              d="
            M 126.17 337.90
            Q 127.57 336.59 129.98 337.35
            A 1.19 1.17 38.6 0 0 130.93 337.25
            Q 133.45 335.77 136.52 336.12
            A 0.60 0.60 0.0 0 1 137.03 336.84
            Q 136.52 339.04 134.53 340.33
            Q 134.26 340.50 133.94 340.48
            L 130.23 340.19
            Q 129.80 340.16 129.68 340.57
            L 129.01 342.73
            Q 128.80 343.40 128.21 343.01
            Q 125.81 341.43 126.17 337.90
            Z"
            />
            <path
              fill="#ffe7e7"
              d="
            M 215.72 335.95
            Q 219.47 337.01 221.81 336.63
            Q 222.13 336.57 222.22 336.88
            Q 222.26 337.02 222.35 337.13
            Q 222.41 337.20 222.45 337.12
            L 222.85 336.39
            C 226.71 339.54 229.99 339.05 234.48 338.94
            L 234.42 353.07
            Q 229.82 352.03 224.69 352.47
            C 223.58 352.57 222.90 352.35 223.26 351.10
            A 1.73 1.68 -46.0 0 0 223.26 350.11
            Q 221.18 342.81 215.72 335.95
            Z"
            />
            <path
              fill="#1c2745"
              d="
            M 142.79 337.24
            L 141.57 341.81
            Q 141.33 338.26 142.79 337.24
            Z"
            />
            <path
              fill="#ffb502"
              d="
            M 417.32 337.84
            Q 423.40 336.69 422.05 339.47
            L 412.51 339.68
            Q 409.95 336.79 417.32 337.84
            Z"
            />
            <path
              fill="#64b4d7"
              d="
            M 234.48 338.94
            Q 286.36 339.45 338.19 339.81
            Q 338.46 340.08 339.01 340.03
            L 339.02 351.76
            A 1.04 1.04 0.0 0 0 340.36 352.75
            Q 342.19 352.19 344.13 352.51
            C 342.41 353.18 340.60 354.22 338.83 354.42
            Q 333.11 355.10 327.33 354.64
            A 0.33 0.32 -78.5 0 0 327.00 354.87
            C 325.01 361.57 322.58 362.73 315.49 362.67
            Q 286.49 362.43 257.47 362.22
            C 251.23 362.18 246.79 361.16 245.98 354.40
            Q 245.91 353.81 245.32 353.88
            Q 239.16 354.58 234.42 353.07
            L 234.48 338.94
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.569"
              d="
            M 124.66 340.26
            L 124.88 345.95
            Q 123.71 350.21 121.31 352.43
            Q 120.17 353.21 119.23 352.70
            Q 118.79 352.47 118.79 351.97
            L 118.81 350.15
            L 120.55 343.18
            Q 120.65 343.46 120.73 343.65
            A 0.29 0.28 28.6 0 0 121.27 343.50
            Q 121.25 343.35 121.25 343.21
            Q 121.26 342.89 121.55 343.03
            L 122.11 343.29
            Q 122.64 343.54 123.03 343.11
            Q 124.17 341.87 124.66 340.26
            Z"
            />
            <path
              fill="#fbc6b4"
              d="
            M 72.40 350.71
            L 79.17 352.38
            C 78.78 353.94 76.58 359.38 80.23 358.89
            L 81.76 359.75
            Q 77.99 361.21 74.03 359.88
            Q 73.52 359.70 73.13 360.07
            L 72.64 360.52
            L 72.59 358.97
            L 72.40 350.71
            Z"
            />
            <path
              fill="#ffb502"
              d="
            M 122.73 360.74
            C 120.48 362.13 110.82 364.89 111.06 359.97
            Q 111.09 359.44 111.60 359.55
            C 114.42 360.11 120.85 358.83 122.74 360.15
            Q 123.19 360.46 122.73 360.74
            Z"
            />
            <path
              fill="#ffb502"
              d="
            M 81.76 359.75
            Q 83.86 359.73 84.57 360.38
            Q 85.55 361.27 84.33 361.79
            C 81.42 363.03 73.55 364.91 72.64 360.52
            L 73.13 360.07
            Q 73.52 359.70 74.03 359.88
            Q 77.99 361.21 81.76 359.75
            Z"
            />
            <path
              fill="#010001"
              fillOpacity="0.098"
              d="
            M 60.35 377.04
            Q 60.43 377.04 60.50 377.05
            Q 60.39 377.40 60.78 377.51
            A 0.35 0.18 39.2 0 1 61.00 378.02
            Q 60.61 377.98 60.83 378.61
            Q 60.87 378.73 60.99 378.75
            Q 61.12 378.77 61.26 378.74
            A 0.25 0.24 -88.4 0 1 61.54 379.04
            Q 60.01 384.82 60.37 390.75
            C 60.65 395.34 67.74 398.94 70.86 401.60
            C 75.66 405.70 80.33 408.40 85.30 411.71
            C 96.60 419.25 111.13 423.07 125.59 426.80
            C 129.73 427.87 133.78 429.31 137.90 430.01
            Q 153.79 432.69 169.71 435.19
            L 167.99 437.14
            Q 167.67 437.51 167.18 437.54
            C 165.53 437.64 163.80 439.91 162.46 438.09
            A 0.75 0.72 -16.5 0 0 161.88 437.79
            L 158.19 437.73
            A 0.21 0.21 0.0 0 1 157.99 437.51
            Q 158.00 437.37 158.00 437.25
            Q 158.00 437.07 157.82 437.05
            Q 154.64 436.66 151.40 436.95
            Q 150.99 436.99 150.63 436.78
            L 147.39 434.89
            Q 146.87 434.58 146.27 434.72
            Q 144.07 435.25 143.01 433.32
            A 0.91 0.91 0.0 0 0 142.00 432.87
            Q 138.11 433.82 135.23 431.36
            Q 134.81 431.00 134.25 431.00
            L 123.25 431.00
            A 0.47 0.47 0.0 0 1 122.81 430.69
            L 122.71 430.37
            Q 122.68 430.28 122.59 430.27
            Q 119.31 429.63 116.02 429.29
            Q 115.47 429.23 115.06 428.85
            C 113.24 427.16 108.79 425.92 106.36 425.15
            C 103.80 424.35 101.65 423.00 98.95 422.40
            Q 98.51 422.30 98.24 421.94
            Q 97.02 420.36 94.99 420.50
            Q 94.57 420.53 94.24 420.28
            Q 92.32 418.86 89.99 418.60
            A 0.86 0.84 -11.1 0 1 89.35 418.18
            Q 88.52 416.74 87.23 416.69
            C 84.16 416.57 83.63 415.65 81.26 414.54
            Q 79.47 413.71 77.74 412.69
            Q 77.40 412.49 77.21 412.15
            Q 76.05 410.15 73.88 409.66
            Q 73.38 409.55 73.05 409.16
            C 71.87 407.76 69.67 407.55 69.11 405.90
            A 1.85 1.85 0.0 0 0 68.54 405.08
            L 66.23 403.13
            Q 65.88 402.83 65.43 402.72
            Q 64.41 402.49 63.99 401.53
            Q 63.80 401.11 63.48 400.79
            L 57.55 394.75
            Q 57.20 394.39 57.25 393.90
            Q 57.38 392.70 56.59 391.73
            Q 56.32 391.40 56.25 390.98
            Q 56.05 389.75 56.65 388.67
            Q 56.89 388.25 56.90 387.76
            Q 56.98 381.97 60.35 377.04
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.161"
              d="
            M 60.50 377.05
            L 64.50 377.56
            Q 64.94 378.28 62.88 378.42
            C 62.69 384.27 60.25 390.54 66.00 394.75
            Q 70.71 398.21 75.63 401.34
            C 76.40 401.83 77.01 402.87 77.94 403.27
            C 80.43 404.32 82.25 405.65 84.49 407.10
            C 85.20 407.56 85.76 408.49 86.77 408.53
            Q 87.27 408.56 87.47 409.02
            Q 88.36 411.03 90.59 411.54
            Q 91.05 411.64 91.43 411.92
            C 93.22 413.26 95.36 413.64 97.01 414.89
            Q 97.38 415.18 97.85 415.29
            C 100.54 415.93 103.16 417.53 105.80 418.31
            Q 106.30 418.46 107.15 419.00
            C 108.33 419.74 109.64 419.48 110.78 419.89
            Q 117.50 422.36 124.44 424.02
            C 128.45 424.98 134.35 426.89 139.52 427.52
            C 140.19 427.61 140.31 428.03 141.03 428.14
            C 147.36 429.04 153.86 430.90 159.72 431.58
            Q 167.60 432.50 175.51 433.13
            Q 175.86 433.16 175.71 432.86
            A 0.21 0.20 67.9 0 1 175.83 432.56
            Q 176.86 432.27 177.70 432.81
            Q 177.95 432.98 178.16 432.76
            L 178.95 431.98
            Q 179.35 431.58 179.87 431.79
            Q 181.04 432.26 181.37 433.60
            Q 181.48 434.07 181.97 434.15
            C 187.45 435.00 192.97 435.27 198.41 436.13
            C 201.65 436.64 205.24 436.57 208.13 437.03
            Q 224.69 439.68 241.50 439.49
            C 243.27 439.47 244.91 440.14 246.68 440.19
            C 249.09 440.26 268.98 440.35 269.40 440.86
            A 0.91 0.89 -18.4 0 0 270.08 441.19
            Q 293.80 441.60 305.56 440.92
            Q 318.12 440.18 324.80 440.20
            A 1.85 1.78 29.3 0 0 325.69 439.97
            Q 326.39 439.57 327.76 439.58
            C 332.98 439.63 339.61 438.98 345.86 437.74
            C 347.98 437.32 350.25 438.02 352.04 436.70
            Q 352.42 436.42 352.88 436.47
            C 356.18 436.83 358.32 435.39 360.71 434.89
            C 362.18 434.58 365.81 434.56 366.92 433.63
            A 1.01 1.00 -57.1 0 1 367.79 433.44
            Q 369.77 433.97 371.17 432.65
            Q 371.61 432.24 372.20 432.38
            Q 373.92 432.79 375.18 431.71
            A 1.19 1.18 31.6 0 1 376.26 431.46
            Q 377.95 431.90 379.03 430.74
            A 1.02 1.01 -60.8 0 1 380.04 430.45
            Q 381.77 430.92 382.99 429.78
            Q 383.39 429.40 383.93 429.51
            Q 385.17 429.76 385.86 428.82
            Q 386.21 428.34 386.79 428.48
            Q 388.11 428.81 388.83 427.86
            Q 389.18 427.39 389.75 427.44
            Q 391.16 427.56 391.50 426.70
            A 0.67 0.67 0.0 0 1 392.25 426.28
            Q 393.59 426.52 394.16 425.90
            Q 394.52 425.52 395.03 425.55
            Q 396.71 425.64 398.50 424.59
            Q 400.52 423.40 403.96 423.26
            Q 404.42 423.24 404.77 422.93
            Q 406.79 421.15 409.54 420.46
            Q 409.95 420.36 410.13 419.97
            Q 410.45 419.24 411.44 419.46
            Q 411.88 419.56 412.27 419.34
            L 415.48 417.52
            Q 415.76 417.35 415.97 417.10
            Q 416.66 416.26 417.76 416.25
            Q 418.25 416.24 418.61 415.91
            Q 419.23 415.32 420.03 415.31
            Q 420.55 415.31 421.03 415.11
            L 428.39 412.08
            Q 428.71 411.94 428.96 411.71
            Q 429.77 410.95 431.08 411.22
            Q 431.28 411.26 431.18 411.08
            L 431.03 410.81
            A 0.21 0.21 0.0 0 1 431.24 410.51
            Q 432.80 410.71 433.97 409.73
            Q 434.33 409.43 434.78 409.52
            Q 436.17 409.79 437.05 408.86
            Q 437.41 408.47 437.94 408.51
            C 439.78 408.63 440.84 407.56 442.37 407.24
            C 444.78 406.75 446.77 406.40 449.10 405.21
            C 451.58 403.95 454.17 403.67 456.55 402.19
            C 458.58 400.93 461.88 400.36 463.59 399.65
            C 467.24 398.14 471.42 397.55 474.66 396.01
            Q 477.19 394.81 479.62 393.42
            Q 480.03 393.19 480.29 392.78
            C 481.62 390.68 483.86 389.25 485.10 387.51
            Q 487.76 383.74 490.10 379.74
            Q 490.30 379.39 489.93 379.23
            Q 489.64 379.10 489.42 379.47
            Q 489.13 379.20 489.03 378.94
            Q 488.89 378.58 489.27 378.53
            Q 489.87 378.44 489.75 378.06
            L 493.50 377.76
            Q 493.35 378.21 492.75 378.36
            Q 490.57 382.43 488.50 386.68
            C 487.25 389.23 483.74 393.24 481.53 394.81
            C 478.57 396.90 475.78 397.81 472.84 399.20
            Q 471.09 400.02 470.68 400.16
            Q 457.81 404.46 445.47 410.10
            Q 436.75 414.09 427.83 417.62
            Q 427.36 417.80 427.29 418.31
            A 0.88 0.86 -7.3 0 1 426.75 418.99
            L 402.26 428.63
            A 1.75 1.75 0.0 0 0 401.54 429.16
            Q 401.30 429.45 401.00 429.51
            Q 395.58 430.57 384.07 434.10
            Q 376.72 436.35 360.17 439.69
            C 358.08 440.11 355.69 440.03 353.43 440.52
            Q 350.04 441.26 348.48 441.38
            C 341.78 441.91 335.00 443.15 328.50 443.39
            Q 323.75 443.56 319.01 443.75
            Q 317.60 443.80 316.91 444.02
            Q 316.47 444.15 316.04 443.96
            Q 315.37 443.66 314.19 443.65
            Q 311.81 443.64 309.45 443.59
            Q 309.28 443.59 309.17 443.70
            L 308.96 443.91
            Q 308.68 444.20 308.28 444.20
            Q 295.05 444.38 281.83 444.28
            Q 281.20 444.27 280.23 443.97
            C 278.98 443.58 277.12 443.81 276.30 443.73
            Q 268.57 442.96 260.82 443.35
            Q 260.11 443.38 259.43 443.18
            A 2.11 2.02 -40.7 0 0 258.51 443.13
            C 255.19 443.76 252.01 442.71 249.29 442.73
            Q 247.09 442.74 244.90 442.83
            Q 244.43 442.85 244.07 442.56
            C 243.31 441.96 231.83 442.00 229.40 441.75
            Q 221.64 440.93 217.16 440.83
            Q 208.44 440.65 199.73 440.13
            Q 199.59 440.13 199.54 439.99
            Q 199.49 439.87 199.38 439.79
            Q 199.21 439.68 199.10 439.86
            L 198.86 440.26
            Q 198.64 440.62 198.53 440.22
            Q 198.43 439.84 198.70 439.69
            A 0.34 0.17 7.9 0 0 198.27 439.39
            Q 197.68 439.51 197.44 439.00
            Q 197.21 438.50 196.67 438.51
            L 189.33 438.58
            L 187.74 436.72
            Q 187.46 436.39 187.32 435.98
            C 186.71 434.24 183.60 435.25 182.25 435.51
            A 0.82 0.82 0.0 0 1 181.33 435.02
            L 180.60 433.31
            Q 180.37 432.75 179.85 433.07
            Q 179.37 433.36 179.20 433.89
            Q 179.02 434.47 178.41 434.51
            Q 177.66 434.55 177.16 433.94
            Q 176.87 433.58 176.41 433.51
            Q 175.24 433.32 174.40 434.21
            Q 174.07 434.57 173.59 434.52
            Q 171.39 434.28 169.71 435.19
            Q 153.79 432.69 137.90 430.01
            C 133.78 429.31 129.73 427.87 125.59 426.80
            C 111.13 423.07 96.60 419.25 85.30 411.71
            C 80.33 408.40 75.66 405.70 70.86 401.60
            C 67.74 398.94 60.65 395.34 60.37 390.75
            Q 60.01 384.82 61.54 379.04
            A 0.25 0.24 -88.4 0 0 61.26 378.74
            Q 61.12 378.77 60.99 378.75
            Q 60.87 378.73 60.83 378.61
            Q 60.61 377.98 61.00 378.02
            A 0.35 0.18 39.2 0 0 60.78 377.51
            Q 60.39 377.40 60.50 377.05
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.322"
              d="
            M 64.50 377.56
            Q 64.57 377.41 64.88 377.78
            Q 64.18 378.80 64.46 379.34
            Q 64.82 380.04 64.85 380.27
            L 65.80 387.81
            Q 65.87 388.40 66.29 388.82
            Q 71.66 394.27 79.10 396.27
            A 0.92 0.91 -5.1 0 1 79.68 396.75
            Q 79.89 397.19 80.46 397.52
            Q 88.33 402.02 92.58 404.41
            Q 94.28 405.37 95.94 406.40
            C 97.37 407.29 98.89 407.19 100.43 408.23
            Q 100.75 408.45 101.14 408.53
            Q 102.17 408.75 102.54 409.79
            Q 102.69 410.20 103.10 410.38
            C 109.52 413.19 115.74 416.33 122.56 418.11
            C 124.82 418.70 125.76 420.04 128.42 420.21
            C 133.25 420.53 137.60 422.66 142.86 423.69
            C 149.86 425.05 156.54 426.88 163.68 427.64
            Q 164.03 427.67 164.20 427.89
            Q 164.44 428.19 164.82 428.19
            Q 169.46 428.14 173.94 429.16
            C 178.25 430.13 182.05 430.24 186.19 430.89
            C 189.13 431.35 192.41 431.07 195.53 431.69
            C 197.16 432.01 204.07 433.18 205.24 432.60
            Q 205.35 432.55 205.44 432.63
            Q 205.55 432.72 205.53 432.87
            Q 205.52 432.99 205.64 433.00
            Q 213.40 433.19 221.16 433.66
            Q 221.21 433.67 221.25 433.70
            L 221.61 434.06
            Q 221.78 434.24 222.02 434.24
            Q 230.20 434.16 250.94 435.12
            Q 265.29 435.79 295.24 434.95
            Q 297.23 434.90 299.61 434.55
            C 305.39 433.70 311.28 434.57 317.16 433.83
            C 320.64 433.39 325.02 433.55 327.55 432.91
            Q 331.25 431.97 333.10 432.11
            A 1.51 1.45 -57.5 0 0 334.00 431.89
            Q 334.33 431.67 334.56 431.65
            Q 344.98 430.64 355.02 427.69
            Q 360.44 426.09 365.84 424.61
            C 367.57 424.14 369.07 423.51 371.01 423.38
            Q 373.38 423.23 375.32 421.69
            Q 375.74 421.36 376.28 421.38
            Q 377.44 421.42 378.29 420.71
            Q 378.69 420.38 379.19 420.45
            Q 380.72 420.64 381.89 419.60
            Q 382.25 419.28 382.73 419.31
            C 386.16 419.51 388.09 417.93 391.16 417.06
            Q 392.84 416.59 394.38 415.68
            A 0.07 0.07 0.0 0 1 394.49 415.73
            Q 394.51 415.93 394.50 416.00
            Q 394.50 416.04 394.53 416.03
            C 397.58 414.60 400.33 412.36 403.25 411.28
            C 412.45 407.87 424.65 404.21 433.93 402.92
            Q 440.34 402.04 458.51 396.23
            C 461.66 395.22 465.38 395.46 468.79 393.54
            C 470.69 392.47 472.96 392.28 474.64 390.44
            C 476.13 388.82 478.24 388.68 479.89 386.96
            C 481.08 385.72 487.69 380.75 485.36 378.94
            Q 485.29 378.78 485.21 378.62
            L 489.75 378.06
            Q 489.87 378.44 489.27 378.53
            Q 488.89 378.58 489.03 378.94
            Q 489.13 379.20 489.42 379.47
            C 487.14 379.76 487.55 380.58 486.66 382.00
            Q 480.98 390.99 470.23 394.23
            C 461.20 396.94 447.30 402.29 435.28 404.80
            Q 427.44 406.44 420.06 409.50
            C 418.43 410.18 416.62 410.28 414.93 411.16
            Q 412.83 412.24 411.33 412.72
            C 406.19 414.35 400.34 417.00 396.70 419.00
            Q 396.26 419.24 395.77 419.18
            C 393.91 418.95 389.01 421.24 387.42 421.94
            C 385.09 422.98 382.17 423.52 379.74 425.01
            Q 379.32 425.27 378.82 425.25
            C 376.07 425.15 374.38 426.82 372.08 427.10
            Q 369.92 427.36 367.73 427.44
            Q 367.43 427.45 367.21 427.66
            L 366.86 428.01
            Q 366.46 428.42 365.89 428.49
            Q 363.56 428.77 361.57 430.00
            Q 361.10 430.29 360.54 430.26
            Q 358.35 430.11 356.39 431.09
            Q 355.92 431.32 355.40 431.23
            C 353.95 430.98 352.88 431.93 351.82 432.11
            C 343.90 433.48 335.79 434.77 327.75 435.19
            C 321.34 435.53 314.53 436.83 309.81 437.02
            Q 282.56 438.14 255.33 436.99
            C 243.93 436.51 231.57 435.83 219.71 435.53
            C 214.34 435.40 209.30 434.48 203.82 434.18
            C 196.78 433.79 190.38 432.61 181.90 431.97
            Q 181.44 431.94 181.04 431.69
            Q 179.59 430.76 178.30 431.65
            A 1.35 1.32 -57.0 0 1 177.32 431.87
            Q 172.34 431.03 167.31 431.27
            Q 167.10 431.28 166.93 431.16
            Q 166.77 431.04 166.65 430.93
            Q 166.34 430.62 165.91 430.57
            Q 148.84 428.61 132.26 424.28
            Q 131.91 424.19 131.59 424.32
            Q 131.16 424.49 130.74 424.28
            C 127.68 422.77 123.69 422.02 121.31 421.32
            Q 117.83 420.28 114.30 419.36
            Q 113.83 419.24 113.46 418.91
            Q 112.81 418.32 111.88 418.50
            Q 111.34 418.61 110.86 418.32
            Q 105.84 415.35 100.30 413.39
            Q 99.87 413.25 99.57 412.92
            C 98.10 411.35 96.24 411.67 94.79 410.81
            Q 92.66 409.54 89.23 407.05
            Q 84.57 403.67 71.20 396.28
            C 68.05 394.55 65.55 394.08 63.66 390.62
            C 62.00 387.58 63.01 382.18 62.88 378.42
            Q 64.94 378.28 64.50 377.56
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.396"
              d="
            M 64.88 377.78
            Q 65.10 377.69 65.49 377.80
            C 69.04 382.69 66.06 387.02 73.01 390.46
            Q 80.77 394.30 89.11 396.64
            Q 92.72 397.66 95.44 399.27
            Q 103.24 403.91 107.52 406.99
            Q 109.44 408.37 111.14 408.68
            Q 111.61 408.76 111.93 409.10
            C 113.79 411.04 116.64 411.24 118.30 411.92
            Q 122.56 413.68 127.00 414.90
            C 130.66 415.91 134.68 418.09 139.15 418.38
            Q 139.38 418.40 139.46 418.62
            L 139.56 418.92
            A 0.42 0.42 0.0 0 0 139.97 419.21
            C 143.99 419.07 146.96 421.58 151.79 421.20
            A 1.78 1.75 58.0 0 1 152.87 421.46
            Q 155.91 423.34 159.46 423.28
            A 1.86 1.83 -30.4 0 1 160.41 423.52
            C 162.57 424.76 165.94 424.14 168.59 424.90
            Q 171.78 425.81 173.54 425.98
            C 179.90 426.59 185.80 427.60 192.51 428.03
            C 198.18 428.39 203.74 429.58 209.27 429.86
            Q 212.97 430.04 216.66 430.35
            C 226.75 431.20 236.57 431.02 246.55 431.32
            Q 258.46 431.68 265.33 431.63
            Q 291.00 431.41 316.62 429.63
            Q 316.75 429.62 316.75 429.49
            Q 316.75 429.37 316.74 429.24
            Q 316.73 429.01 316.96 428.98
            Q 322.20 428.44 327.32 427.37
            C 329.03 427.01 330.88 427.09 332.82 426.64
            Q 334.61 426.22 336.88 426.15
            C 339.37 426.08 341.80 424.82 344.08 424.54
            Q 350.65 423.71 356.91 421.43
            Q 357.38 421.26 357.88 421.29
            Q 359.20 421.40 360.69 420.47
            C 363.63 418.65 368.69 418.53 371.25 416.23
            A 2.05 2.05 0.0 0 1 372.07 415.80
            C 374.81 415.15 377.05 413.66 379.76 413.04
            C 384.28 412.00 388.72 410.07 392.24 408.79
            Q 398.03 406.70 401.89 405.65
            Q 414.67 402.19 427.57 399.19
            C 432.26 398.10 438.18 397.97 443.47 396.46
            C 444.53 396.16 445.89 396.44 446.68 396.17
            Q 454.13 393.60 462.00 392.96
            Q 464.06 392.79 469.74 390.35
            Q 470.21 390.15 470.71 390.23
            Q 472.16 390.46 472.81 389.31
            Q 473.07 388.86 473.56 388.67
            Q 480.73 385.94 485.36 378.94
            C 487.69 380.75 481.08 385.72 479.89 386.96
            C 478.24 388.68 476.13 388.82 474.64 390.44
            C 472.96 392.28 470.69 392.47 468.79 393.54
            C 465.38 395.46 461.66 395.22 458.51 396.23
            Q 440.34 402.04 433.93 402.92
            C 424.65 404.21 412.45 407.87 403.25 411.28
            C 400.33 412.36 397.58 414.60 394.53 416.03
            Q 394.50 416.04 394.50 416.00
            Q 394.51 415.93 394.49 415.73
            A 0.07 0.07 0.0 0 0 394.38 415.68
            Q 392.84 416.59 391.16 417.06
            C 388.09 417.93 386.16 419.51 382.73 419.31
            Q 382.25 419.28 381.89 419.60
            Q 380.72 420.64 379.19 420.45
            Q 378.69 420.38 378.29 420.71
            Q 377.44 421.42 376.28 421.38
            Q 375.74 421.36 375.32 421.69
            Q 373.38 423.23 371.01 423.38
            C 369.07 423.51 367.57 424.14 365.84 424.61
            Q 360.44 426.09 355.02 427.69
            Q 344.98 430.64 334.56 431.65
            Q 334.33 431.67 334.00 431.89
            A 1.51 1.45 -57.5 0 1 333.10 432.11
            Q 331.25 431.97 327.55 432.91
            C 325.02 433.55 320.64 433.39 317.16 433.83
            C 311.28 434.57 305.39 433.70 299.61 434.55
            Q 297.23 434.90 295.24 434.95
            Q 265.29 435.79 250.94 435.12
            Q 230.20 434.16 222.02 434.24
            Q 221.78 434.24 221.61 434.06
            L 221.25 433.70
            Q 221.21 433.67 221.16 433.66
            Q 213.40 433.19 205.64 433.00
            Q 205.52 432.99 205.53 432.87
            Q 205.55 432.72 205.44 432.63
            Q 205.35 432.55 205.24 432.60
            C 204.07 433.18 197.16 432.01 195.53 431.69
            C 192.41 431.07 189.13 431.35 186.19 430.89
            C 182.05 430.24 178.25 430.13 173.94 429.16
            Q 169.46 428.14 164.82 428.19
            Q 164.44 428.19 164.20 427.89
            Q 164.03 427.67 163.68 427.64
            C 156.54 426.88 149.86 425.05 142.86 423.69
            C 137.60 422.66 133.25 420.53 128.42 420.21
            C 125.76 420.04 124.82 418.70 122.56 418.11
            C 115.74 416.33 109.52 413.19 103.10 410.38
            Q 102.69 410.20 102.54 409.79
            Q 102.17 408.75 101.14 408.53
            Q 100.75 408.45 100.43 408.23
            C 98.89 407.19 97.37 407.29 95.94 406.40
            Q 94.28 405.37 92.58 404.41
            Q 88.33 402.02 80.46 397.52
            Q 79.89 397.19 79.68 396.75
            A 0.92 0.91 -5.1 0 0 79.10 396.27
            Q 71.66 394.27 66.29 388.82
            Q 65.87 388.40 65.80 387.81
            L 64.85 380.27
            Q 64.82 380.04 64.46 379.34
            Q 64.18 378.80 64.88 377.78
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.471"
              d="
            M 65.49 377.80
            Q 66.55 377.59 66.47 378.02
            Q 66.66 379.51 68.34 380.01
            Q 68.75 380.14 68.75 380.56
            L 68.75 381.50
            Q 68.75 382.10 69.02 382.62
            Q 71.48 387.45 76.56 389.33
            Q 76.90 389.46 76.99 389.81
            Q 77.07 390.10 77.32 390.17
            Q 85.70 392.45 93.70 395.77
            A 2.00 1.86 -34.2 0 0 94.61 395.91
            C 96.84 395.76 98.37 397.45 99.87 398.04
            Q 105.23 400.12 110.20 403.04
            Q 112.30 404.28 121.16 407.54
            Q 121.22 407.56 121.22 407.63
            Q 121.23 407.78 121.26 407.94
            Q 121.30 408.20 121.55 408.26
            Q 124.46 408.94 129.21 411.01
            Q 134.82 413.45 148.71 417.36
            Q 158.27 420.05 163.57 420.94
            Q 163.98 421.01 164.20 421.37
            Q 164.61 422.10 165.44 422.07
            C 168.75 421.93 171.30 423.18 173.87 423.43
            C 181.19 424.14 188.92 425.38 195.74 425.91
            C 201.68 426.36 205.97 426.65 213.47 427.45
            Q 218.25 427.96 225.31 428.16
            Q 249.02 428.80 272.74 428.70
            C 274.18 428.70 275.88 428.15 277.50 428.20
            C 285.31 428.42 293.44 428.74 301.17 427.60
            Q 303.54 427.25 305.97 427.55
            Q 306.47 427.61 306.93 427.41
            Q 308.89 426.57 310.96 426.44
            C 315.72 426.12 320.33 425.39 325.06 424.80
            Q 325.25 424.77 325.37 424.63
            C 325.69 424.27 325.43 424.33 325.97 424.25
            Q 339.47 422.40 352.39 418.12
            C 353.91 417.62 355.69 416.64 357.48 416.13
            C 362.88 414.60 367.63 412.20 373.20 411.13
            C 379.06 410.01 384.51 406.43 390.85 405.08
            Q 396.65 403.84 402.24 401.79
            C 405.92 400.44 409.76 400.31 413.70 398.99
            Q 415.44 398.40 418.04 398.18
            Q 418.54 398.13 418.99 398.36
            C 419.71 398.72 419.98 398.29 420.64 398.17
            C 425.58 397.30 430.29 396.49 435.32 396.23
            C 445.80 395.69 457.12 392.41 465.61 389.52
            Q 466.51 389.21 468.29 388.27
            C 470.50 387.11 473.27 386.67 475.15 385.63
            Q 478.17 383.96 481.03 381.92
            Q 481.44 381.63 481.62 381.15
            Q 482.07 379.95 483.74 379.57
            Q 485.00 379.54 484.74 379.06
            Q 484.75 378.91 484.75 378.76
            Q 485.29 378.83 485.21 378.62
            Q 485.29 378.78 485.36 378.94
            Q 480.73 385.94 473.56 388.67
            Q 473.07 388.86 472.81 389.31
            Q 472.16 390.46 470.71 390.23
            Q 470.21 390.15 469.74 390.35
            Q 464.06 392.79 462.00 392.96
            Q 454.13 393.60 446.68 396.17
            C 445.89 396.44 444.53 396.16 443.47 396.46
            C 438.18 397.97 432.26 398.10 427.57 399.19
            Q 414.67 402.19 401.89 405.65
            Q 398.03 406.70 392.24 408.79
            C 388.72 410.07 384.28 412.00 379.76 413.04
            C 377.05 413.66 374.81 415.15 372.07 415.80
            A 2.05 2.05 0.0 0 0 371.25 416.23
            C 368.69 418.53 363.63 418.65 360.69 420.47
            Q 359.20 421.40 357.88 421.29
            Q 357.38 421.26 356.91 421.43
            Q 350.65 423.71 344.08 424.54
            C 341.80 424.82 339.37 426.08 336.88 426.15
            Q 334.61 426.22 332.82 426.64
            C 330.88 427.09 329.03 427.01 327.32 427.37
            Q 322.20 428.44 316.96 428.98
            Q 316.73 429.01 316.74 429.24
            Q 316.75 429.37 316.75 429.49
            Q 316.75 429.62 316.62 429.63
            Q 291.00 431.41 265.33 431.63
            Q 258.46 431.68 246.55 431.32
            C 236.57 431.02 226.75 431.20 216.66 430.35
            Q 212.97 430.04 209.27 429.86
            C 203.74 429.58 198.18 428.39 192.51 428.03
            C 185.80 427.60 179.90 426.59 173.54 425.98
            Q 171.78 425.81 168.59 424.90
            C 165.94 424.14 162.57 424.76 160.41 423.52
            A 1.86 1.83 -30.4 0 0 159.46 423.28
            Q 155.91 423.34 152.87 421.46
            A 1.78 1.75 58.0 0 0 151.79 421.20
            C 146.96 421.58 143.99 419.07 139.97 419.21
            A 0.42 0.42 0.0 0 1 139.56 418.92
            L 139.46 418.62
            Q 139.38 418.40 139.15 418.38
            C 134.68 418.09 130.66 415.91 127.00 414.90
            Q 122.56 413.68 118.30 411.92
            C 116.64 411.24 113.79 411.04 111.93 409.10
            Q 111.61 408.76 111.14 408.68
            Q 109.44 408.37 107.52 406.99
            Q 103.24 403.91 95.44 399.27
            Q 92.72 397.66 89.11 396.64
            Q 80.77 394.30 73.01 390.46
            C 66.06 387.02 69.04 382.69 65.49 377.80
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.525"
              d="
            M 66.47 378.02
            Q 66.58 378.17 66.69 378.31
            Q 70.24 379.10 70.55 382.81
            A 1.70 1.68 23.8 0 0 70.92 383.74
            C 72.10 385.23 72.41 386.56 74.17 387.46
            Q 77.63 389.24 82.49 390.29
            Q 86.29 391.11 96.99 394.52
            Q 99.64 395.36 100.95 396.14
            A 1.97 1.89 -25.9 0 0 101.78 396.41
            C 103.31 396.53 104.67 397.50 105.66 397.88
            C 111.82 400.24 117.67 403.56 123.58 405.81
            Q 127.88 407.45 132.12 409.20
            Q 133.54 409.79 138.25 410.77
            Q 140.01 411.13 144.79 413.42
            Q 147.33 414.63 150.46 415.20
            Q 155.53 416.13 160.37 417.94
            C 163.00 418.92 165.77 418.98 168.50 419.52
            C 170.50 419.92 172.50 419.38 174.55 419.80
            C 178.65 420.63 181.57 420.84 185.76 421.46
            Q 195.42 422.90 207.23 423.51
            Q 209.29 423.62 225.22 424.58
            Q 234.22 425.13 243.25 424.93
            C 245.15 424.89 247.79 425.88 250.20 425.89
            Q 260.76 425.93 271.31 425.65
            Q 273.42 425.59 274.46 425.18
            Q 274.87 425.02 275.30 425.04
            Q 282.33 425.31 289.30 424.42
            Q 289.77 424.36 290.18 424.59
            Q 290.62 424.83 291.01 424.78
            Q 298.14 423.74 305.35 424.00
            A 2.05 1.94 32.0 0 0 306.29 423.81
            C 309.16 422.46 311.81 423.37 314.45 422.86
            Q 318.29 422.12 322.19 421.86
            C 324.20 421.73 326.16 420.92 328.29 420.75
            Q 328.73 420.71 328.75 420.27
            Q 328.75 420.13 328.75 420.00
            A 0.14 0.11 39.7 0 1 329.00 420.00
            Q 329.04 420.13 329.10 420.27
            Q 329.16 420.42 329.31 420.34
            Q 330.77 419.56 332.37 419.75
            Q 332.62 419.79 332.70 419.54
            L 332.87 419.06
            Q 332.88 419.01 332.92 419.05
            L 333.15 419.27
            Q 333.51 419.64 333.62 419.13
            L 333.84 418.01
            A 0.17 0.17 0.0 0 1 334.17 418.00
            Q 334.21 418.14 334.25 418.29
            Q 334.33 418.63 334.58 418.38
            L 334.98 417.98
            Q 335.00 417.96 335.02 417.98
            L 335.21 418.17
            Q 335.29 418.25 335.39 418.18
            Q 335.59 418.05 335.74 417.88
            A 0.08 0.06 -62.3 0 1 335.81 417.85
            Q 338.27 418.08 340.21 416.67
            Q 340.57 416.42 341.00 416.37
            Q 343.17 416.16 345.06 415.21
            A 2.02 1.99 -55.6 0 1 346.09 415.01
            Q 351.22 415.45 355.49 412.47
            Q 355.89 412.19 356.37 412.14
            Q 358.54 411.87 360.43 411.05
            Q 362.85 410.01 363.76 409.69
            Q 365.45 409.10 367.05 408.32
            A 1.54 1.52 36.0 0 1 367.98 408.18
            Q 369.19 408.39 369.84 407.10
            Q 369.86 407.05 369.91 407.08
            Q 370.02 407.14 370.11 407.23
            Q 370.30 407.39 370.47 407.22
            Q 371.06 406.63 372.02 406.77
            Q 372.39 406.83 372.59 406.52
            L 372.95 405.98
            Q 372.98 405.94 373.01 405.97
            L 373.28 406.24
            Q 373.39 406.35 373.49 406.22
            L 373.80 405.80
            Q 373.82 405.77 373.85 405.79
            L 374.10 406.09
            Q 374.20 406.20 374.35 406.18
            Q 376.10 405.95 377.26 404.76
            Q 377.60 404.41 378.08 404.30
            Q 379.94 403.84 381.82 403.33
            Q 382.13 403.24 382.45 403.25
            Q 383.09 403.26 383.53 402.80
            Q 383.79 402.53 384.14 402.39
            Q 385.74 401.72 387.54 401.79
            A 1.77 1.76 -59.9 0 0 388.59 401.51
            Q 390.20 400.50 392.14 400.76
            Q 392.56 400.82 392.69 400.42
            L 392.80 400.10
            Q 392.81 400.05 392.86 400.07
            Q 393.04 400.14 393.20 400.30
            Q 393.36 400.46 393.48 400.26
            L 393.65 399.98
            A 0.11 0.10 -75.1 0 1 393.74 399.92
            Q 397.37 399.82 400.45 397.97
            Q 400.85 397.73 401.31 397.75
            C 405.05 397.86 408.63 396.36 411.84 396.13
            Q 428.63 394.94 445.32 392.84
            C 449.59 392.30 454.15 390.99 458.56 390.15
            C 466.35 388.66 471.74 386.49 478.11 382.86
            C 479.99 381.78 481.10 379.07 483.74 379.57
            Q 482.07 379.95 481.62 381.15
            Q 481.44 381.63 481.03 381.92
            Q 478.17 383.96 475.15 385.63
            C 473.27 386.67 470.50 387.11 468.29 388.27
            Q 466.51 389.21 465.61 389.52
            C 457.12 392.41 445.80 395.69 435.32 396.23
            C 430.29 396.49 425.58 397.30 420.64 398.17
            C 419.98 398.29 419.71 398.72 418.99 398.36
            Q 418.54 398.13 418.04 398.18
            Q 415.44 398.40 413.70 398.99
            C 409.76 400.31 405.92 400.44 402.24 401.79
            Q 396.65 403.84 390.85 405.08
            C 384.51 406.43 379.06 410.01 373.20 411.13
            C 367.63 412.20 362.88 414.60 357.48 416.13
            C 355.69 416.64 353.91 417.62 352.39 418.12
            Q 339.47 422.40 325.97 424.25
            C 325.43 424.33 325.69 424.27 325.37 424.63
            Q 325.25 424.77 325.06 424.80
            C 320.33 425.39 315.72 426.12 310.96 426.44
            Q 308.89 426.57 306.93 427.41
            Q 306.47 427.61 305.97 427.55
            Q 303.54 427.25 301.17 427.60
            C 293.44 428.74 285.31 428.42 277.50 428.20
            C 275.88 428.15 274.18 428.70 272.74 428.70
            Q 249.02 428.80 225.31 428.16
            Q 218.25 427.96 213.47 427.45
            C 205.97 426.65 201.68 426.36 195.74 425.91
            C 188.92 425.38 181.19 424.14 173.87 423.43
            C 171.30 423.18 168.75 421.93 165.44 422.07
            Q 164.61 422.10 164.20 421.37
            Q 163.98 421.01 163.57 420.94
            Q 158.27 420.05 148.71 417.36
            Q 134.82 413.45 129.21 411.01
            Q 124.46 408.94 121.55 408.26
            Q 121.30 408.20 121.26 407.94
            Q 121.23 407.78 121.22 407.63
            Q 121.22 407.56 121.16 407.54
            Q 112.30 404.28 110.20 403.04
            Q 105.23 400.12 99.87 398.04
            C 98.37 397.45 96.84 395.76 94.61 395.91
            A 2.00 1.86 -34.2 0 1 93.70 395.77
            Q 85.70 392.45 77.32 390.17
            Q 77.07 390.10 76.99 389.81
            Q 76.90 389.46 76.56 389.33
            Q 71.48 387.45 69.02 382.62
            Q 68.75 382.10 68.75 381.50
            L 68.75 380.56
            Q 68.75 380.14 68.34 380.01
            Q 66.66 379.51 66.47 378.02
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.569"
              d="
            M 66.69 378.31
            Q 66.72 377.79 67.47 378.06
            L 69.41 378.82
            Q 72.37 380.30 73.13 383.04
            Q 73.26 383.51 73.65 383.81
            Q 77.95 387.04 80.48 387.82
            C 87.54 389.99 97.93 391.58 107.14 393.99
            Q 110.99 395.00 114.83 395.95
            C 116.27 396.31 117.83 397.28 119.42 397.68
            Q 121.70 398.26 122.86 398.82
            Q 130.54 402.54 138.93 403.90
            C 140.53 404.16 141.94 405.33 143.17 406.29
            A 1.43 1.39 -26.2 0 0 144.06 406.58
            Q 147.30 406.53 150.07 407.91
            Q 154.34 410.02 154.65 410.13
            Q 158.79 411.51 163.14 412.06
            A 1.67 1.62 -19.4 0 1 164.01 412.46
            Q 164.70 413.09 165.46 412.82
            Q 165.89 412.66 166.14 413.04
            L 166.45 413.52
            Q 166.48 413.56 166.51 413.53
            L 166.76 413.28
            Q 166.87 413.18 166.98 413.26
            Q 168.18 414.11 169.67 413.76
            Q 170.16 413.65 170.64 413.80
            Q 171.40 414.05 172.10 413.85
            Q 172.56 413.72 172.96 413.98
            Q 174.78 415.17 176.95 415.00
            Q 177.45 414.95 177.88 415.22
            Q 180.08 416.55 182.55 416.79
            C 186.06 417.12 188.91 418.09 192.23 417.99
            Q 192.72 417.98 193.16 418.19
            Q 194.94 419.05 197.70 418.72
            Q 199.48 418.51 202.73 419.09
            Q 205.46 419.58 207.71 419.66
            C 213.46 419.86 219.25 420.76 224.78 420.80
            C 226.62 420.81 235.25 420.88 235.28 421.36
            Q 235.30 421.74 235.67 421.74
            C 237.68 421.76 239.46 421.91 241.48 421.51
            C 243.11 421.18 245.43 421.77 246.50 421.77
            Q 258.31 421.80 270.12 421.63
            C 271.10 421.62 272.07 420.97 273.16 420.96
            Q 282.25 420.91 291.26 419.90
            C 297.02 419.26 302.91 420.50 308.56 418.59
            Q 311.61 417.56 313.32 417.69
            Q 314.57 417.79 317.49 416.77
            Q 317.94 416.62 318.40 416.75
            Q 319.98 417.19 321.03 415.95
            Q 321.11 415.87 321.16 415.97
            Q 321.21 416.11 321.23 416.25
            Q 321.29 416.73 321.53 416.38
            C 322.51 414.99 324.31 416.38 324.88 415.34
            Q 325.12 414.92 325.59 414.98
            Q 328.65 415.39 331.36 413.65
            Q 331.81 413.36 332.33 413.49
            Q 333.43 413.77 335.21 413.14
            Q 341.45 410.96 347.73 408.97
            A 1.81 1.81 0.0 0 0 348.52 408.48
            Q 349.42 407.52 350.51 407.62
            A 1.79 1.77 -55.3 0 0 351.48 407.44
            L 356.20 405.13
            Q 356.22 405.11 356.22 405.14
            Q 356.20 405.37 356.23 405.45
            Q 356.52 406.18 356.50 405.25
            Q 356.50 405.07 356.51 404.88
            Q 356.52 404.50 356.88 404.63
            Q 358.25 405.13 358.94 404.16
            Q 359.22 403.77 359.69 403.77
            L 361.94 403.74
            A 0.54 0.53 -73.3 0 0 362.39 403.49
            Q 362.90 402.66 363.97 402.81
            A 0.79 0.79 0.0 0 0 364.75 402.44
            Q 366.01 400.43 368.42 400.67
            Q 368.51 400.68 368.56 400.60
            L 368.78 400.18
            Q 368.86 400.03 369.02 399.99
            Q 374.79 398.58 380.63 397.54
            Q 380.74 397.52 380.74 397.41
            Q 380.73 397.26 380.79 397.14
            Q 380.82 397.08 380.88 397.07
            Q 388.55 395.83 396.30 395.39
            C 399.98 395.18 404.17 394.09 408.26 393.91
            C 413.29 393.70 418.26 392.98 423.25 392.92
            Q 444.55 392.67 465.97 386.43
            Q 472.52 384.52 477.06 380.48
            Q 480.48 379.20 484.74 379.06
            Q 485.00 379.54 483.74 379.57
            C 481.10 379.07 479.99 381.78 478.11 382.86
            C 471.74 386.49 466.35 388.66 458.56 390.15
            C 454.15 390.99 449.59 392.30 445.32 392.84
            Q 428.63 394.94 411.84 396.13
            C 408.63 396.36 405.05 397.86 401.31 397.75
            Q 400.85 397.73 400.45 397.97
            Q 397.37 399.82 393.74 399.92
            A 0.11 0.10 -75.1 0 0 393.65 399.98
            L 393.48 400.26
            Q 393.36 400.46 393.20 400.30
            Q 393.04 400.14 392.86 400.07
            Q 392.81 400.05 392.80 400.10
            L 392.69 400.42
            Q 392.56 400.82 392.14 400.76
            Q 390.20 400.50 388.59 401.51
            A 1.77 1.76 -59.9 0 1 387.54 401.79
            Q 385.74 401.72 384.14 402.39
            Q 383.79 402.53 383.53 402.80
            Q 383.09 403.26 382.45 403.25
            Q 382.13 403.24 381.82 403.33
            Q 379.94 403.84 378.08 404.30
            Q 377.60 404.41 377.26 404.76
            Q 376.10 405.95 374.35 406.18
            Q 374.20 406.20 374.10 406.09
            L 373.85 405.79
            Q 373.82 405.77 373.80 405.80
            L 373.49 406.22
            Q 373.39 406.35 373.28 406.24
            L 373.01 405.97
            Q 372.98 405.94 372.95 405.98
            L 372.59 406.52
            Q 372.39 406.83 372.02 406.77
            Q 371.06 406.63 370.47 407.22
            Q 370.30 407.39 370.11 407.23
            Q 370.02 407.14 369.91 407.08
            Q 369.86 407.05 369.84 407.10
            Q 369.19 408.39 367.98 408.18
            A 1.54 1.52 36.0 0 0 367.05 408.32
            Q 365.45 409.10 363.76 409.69
            Q 362.85 410.01 360.43 411.05
            Q 358.54 411.87 356.37 412.14
            Q 355.89 412.19 355.49 412.47
            Q 351.22 415.45 346.09 415.01
            A 2.02 1.99 -55.6 0 0 345.06 415.21
            Q 343.17 416.16 341.00 416.37
            Q 340.57 416.42 340.21 416.67
            Q 338.27 418.08 335.81 417.85
            A 0.08 0.06 -62.3 0 0 335.74 417.88
            Q 335.59 418.05 335.39 418.18
            Q 335.29 418.25 335.21 418.17
            L 335.02 417.98
            Q 335.00 417.96 334.98 417.98
            L 334.58 418.38
            Q 334.33 418.63 334.25 418.29
            Q 334.21 418.14 334.17 418.00
            A 0.17 0.17 0.0 0 0 333.84 418.01
            L 333.62 419.13
            Q 333.51 419.64 333.15 419.27
            L 332.92 419.05
            Q 332.88 419.01 332.87 419.06
            L 332.70 419.54
            Q 332.62 419.79 332.37 419.75
            Q 330.77 419.56 329.31 420.34
            Q 329.16 420.42 329.10 420.27
            Q 329.04 420.13 329.00 420.00
            A 0.14 0.11 39.7 0 0 328.75 420.00
            Q 328.75 420.13 328.75 420.27
            Q 328.73 420.71 328.29 420.75
            C 326.16 420.92 324.20 421.73 322.19 421.86
            Q 318.29 422.12 314.45 422.86
            C 311.81 423.37 309.16 422.46 306.29 423.81
            A 2.05 1.94 32.0 0 1 305.35 424.00
            Q 298.14 423.74 291.01 424.78
            Q 290.62 424.83 290.18 424.59
            Q 289.77 424.36 289.30 424.42
            Q 282.33 425.31 275.30 425.04
            Q 274.87 425.02 274.46 425.18
            Q 273.42 425.59 271.31 425.65
            Q 260.76 425.93 250.20 425.89
            C 247.79 425.88 245.15 424.89 243.25 424.93
            Q 234.22 425.13 225.22 424.58
            Q 209.29 423.62 207.23 423.51
            Q 195.42 422.90 185.76 421.46
            C 181.57 420.84 178.65 420.63 174.55 419.80
            C 172.50 419.38 170.50 419.92 168.50 419.52
            C 165.77 418.98 163.00 418.92 160.37 417.94
            Q 155.53 416.13 150.46 415.20
            Q 147.33 414.63 144.79 413.42
            Q 140.01 411.13 138.25 410.77
            Q 133.54 409.79 132.12 409.20
            Q 127.88 407.45 123.58 405.81
            C 117.67 403.56 111.82 400.24 105.66 397.88
            C 104.67 397.50 103.31 396.53 101.78 396.41
            A 1.97 1.89 -25.9 0 1 100.95 396.14
            Q 99.64 395.36 96.99 394.52
            Q 86.29 391.11 82.49 390.29
            Q 77.63 389.24 74.17 387.46
            C 72.41 386.56 72.10 385.23 70.92 383.74
            A 1.70 1.68 23.8 0 1 70.55 382.81
            Q 70.24 379.10 66.69 378.31
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.776"
              d="
            M 67.47 378.06
            L 71.02 378.35
            Q 73.94 380.56 76.44 379.84
            C 77.02 380.85 82.26 382.03 83.71 382.69
            Q 85.54 383.53 86.96 383.89
            Q 106.13 388.78 125.90 388.34
            Q 126.14 388.34 126.24 388.55
            C 126.34 388.76 126.65 388.87 126.73 388.61
            Q 126.78 388.42 126.97 388.42
            Q 135.85 388.31 144.69 387.44
            C 152.86 386.64 161.08 387.41 169.11 386.48
            Q 171.71 386.18 174.41 386.42
            Q 174.43 386.43 174.42 386.44
            L 174.27 386.69
            Q 174.21 386.80 174.32 386.76
            Q 176.96 385.81 179.80 386.38
            A 0.33 0.25 40.1 0 1 179.93 386.95
            Q 179.59 386.99 179.34 387.25
            A 0.25 0.25 0.0 0 0 179.58 387.66
            Q 180.80 387.34 181.22 388.04
            Q 181.46 388.43 181.87 388.61
            Q 183.57 389.37 185.12 388.32
            A 0.05 0.05 0.0 0 1 185.20 388.35
            L 185.29 388.61
            A 0.23 0.22 -45.9 0 0 185.72 388.60
            Q 185.77 388.42 185.84 388.23
            Q 185.87 388.13 185.95 388.19
            C 187.49 389.24 191.18 388.25 191.54 389.35
            Q 191.68 389.76 192.11 389.77
            L 201.31 389.85
            Q 201.57 389.85 201.45 390.08
            L 201.26 390.43
            Q 201.01 390.91 201.49 390.66
            Q 201.74 390.52 201.84 390.34
            Q 201.85 390.32 202.03 390.40
            C 202.78 390.71 206.20 390.80 206.31 391.49
            Q 206.39 391.92 206.82 391.88
            C 207.45 391.82 210.39 391.17 210.39 392.31
            Q 210.39 392.74 210.69 392.44
            L 211.02 392.10
            A 0.14 0.13 -23.1 0 1 211.25 392.19
            Q 211.26 392.34 211.23 392.50
            A 0.29 0.15 -42.2 0 0 211.67 392.38
            Q 211.78 392.18 211.96 392.00
            A 0.15 0.14 -22.8 0 1 212.21 392.10
            L 212.21 392.52
            Q 212.21 392.73 212.42 392.75
            Q 212.67 392.77 212.81 392.56
            A 0.19 0.18 66.4 0 1 213.14 392.70
            Q 213.01 394.23 214.71 393.65
            Q 215.25 393.47 215.25 394.04
            L 215.25 394.50
            Q 215.25 395.18 215.69 394.48
            Q 215.76 394.35 215.79 394.15
            A 0.22 0.22 0.0 0 1 216.19 394.06
            Q 216.27 394.18 216.25 394.30
            Q 216.18 394.62 216.51 394.66
            L 220.25 395.12
            Q 220.36 395.13 220.33 395.25
            Q 220.30 395.37 220.24 395.50
            A 0.25 0.24 -21.8 0 0 220.69 395.68
            Q 220.80 395.47 220.74 395.21
            Q 220.62 394.64 221.14 394.90
            Q 221.43 395.05 221.36 395.30
            Q 221.17 396.07 221.63 395.49
            Q 221.82 395.26 222.00 394.96
            Q 222.09 394.81 222.16 394.98
            Q 222.21 395.10 222.23 395.23
            Q 222.30 395.69 222.70 395.47
            C 223.21 395.20 224.33 395.79 224.36 396.42
            Q 224.38 396.67 224.62 396.70
            C 225.52 396.81 229.26 396.62 229.44 397.42
            Q 229.53 397.81 229.94 397.81
            L 234.03 397.79
            Q 234.25 397.79 234.25 398.01
            Q 234.25 398.16 234.23 398.33
            Q 234.19 398.77 234.61 398.63
            Q 236.54 397.99 238.15 399.44
            Q 238.53 399.78 239.04 399.79
            L 241.88 399.82
            A 0.42 0.41 -1.5 0 1 242.29 400.20
            Q 242.36 401.01 243.62 400.67
            A 0.18 0.17 83.8 0 0 243.75 400.50
            Q 243.75 400.37 243.74 400.25
            Q 243.71 399.96 244.00 399.91
            Q 246.16 399.55 248.26 400.00
            Q 248.37 400.02 248.49 400.07
            Q 248.89 400.24 249.39 399.81
            Q 249.88 399.38 250.26 399.92
            Q 250.78 400.67 251.58 399.76
            Q 252.05 399.22 252.28 399.90
            L 252.46 400.43
            Q 252.54 400.66 252.73 400.51
            Q 252.86 400.41 252.91 400.18
            A 0.18 0.17 53.6 0 1 253.25 400.25
            Q 253.25 400.44 253.09 400.63
            Q 253.04 400.69 253.11 400.71
            Q 253.32 400.79 253.53 400.74
            Q 253.86 400.67 253.77 400.34
            Q 253.73 400.19 253.68 400.05
            Q 253.47 399.55 253.93 399.83
            L 254.30 400.04
            Q 254.45 400.13 254.35 400.27
            Q 254.24 400.42 253.98 400.46
            A 0.08 0.08 0.0 0 0 253.97 400.62
            Q 255.38 401.00 255.73 400.33
            Q 255.93 399.95 256.04 400.28
            C 256.37 401.35 258.19 401.10 257.67 400.02
            Q 257.42 399.52 257.90 399.81
            L 258.32 400.06
            A 0.13 0.13 0.0 0 1 258.36 400.24
            Q 258.30 400.35 258.16 400.41
            A 0.32 0.19 12.1 0 0 258.55 400.76
            Q 259.61 400.52 260.16 401.40
            Q 260.42 401.82 260.90 401.92
            Q 261.38 402.01 261.70 401.71
            Q 262.01 401.44 262.21 401.79
            L 262.57 402.39
            Q 262.60 402.44 262.64 402.40
            Q 262.73 402.28 262.78 402.13
            Q 262.82 401.96 263.00 401.93
            Q 264.53 401.73 266.11 401.82
            Q 266.27 401.82 266.34 401.96
            L 266.48 402.22
            A 0.09 0.08 51.7 0 0 266.62 402.24
            Q 267.26 401.41 268.32 401.99
            Q 268.95 402.33 269.51 401.86
            Q 269.94 401.49 270.28 401.95
            Q 270.78 402.64 271.55 401.78
            A 0.41 0.41 0.0 0 1 272.16 401.79
            Q 272.29 401.93 272.56 402.05
            Q 272.93 402.20 273.27 402.00
            L 273.64 401.78
            Q 273.86 401.65 274.04 401.83
            L 274.34 402.13
            Q 274.57 402.36 274.85 402.20
            Q 275.60 401.76 276.36 401.38
            C 277.59 400.76 278.48 399.17 280.29 399.99
            Q 280.71 400.18 281.08 399.90
            C 282.05 399.15 283.04 400.45 283.83 399.21
            Q 284.09 398.80 284.57 398.86
            Q 286.67 399.11 288.41 398.02
            A 0.04 0.04 0.0 0 1 288.46 398.07
            L 288.31 398.36
            A 0.09 0.08 -1.6 0 0 288.43 398.47
            Q 289.97 397.54 291.85 397.76
            Q 292.26 397.81 292.55 397.52
            L 293.16 396.92
            A 0.10 0.10 0.0 0 1 293.33 396.98
            L 293.39 397.31
            Q 293.41 397.43 293.50 397.36
            Q 294.94 396.23 296.86 396.99
            Q 297.30 397.16 297.55 396.77
            L 298.10 395.91
            A 0.13 0.12 56.2 0 1 298.33 395.96
            L 298.39 396.32
            Q 298.42 396.50 298.59 396.43
            Q 301.46 395.21 304.27 395.66
            Q 306.45 396.01 308.16 395.31
            Q 308.20 395.30 308.20 395.34
            L 308.25 395.69
            A 0.22 0.22 0.0 0 0 308.50 395.88
            Q 309.91 395.69 311.26 395.60
            C 312.34 395.53 313.77 396.17 315.10 395.22
            Q 315.19 395.16 315.19 395.26
            Q 315.19 395.40 315.25 395.51
            A 0.29 0.22 36.1 0 0 315.76 395.50
            Q 315.75 395.37 315.74 395.25
            A 0.23 0.18 33.8 0 1 316.15 395.22
            Q 316.29 395.47 316.45 395.71
            Q 316.86 396.30 316.77 395.59
            Q 316.75 395.40 316.75 395.21
            Q 316.75 394.88 317.08 394.91
            Q 318.89 395.04 320.28 393.99
            Q 320.62 393.73 321.06 393.75
            Q 322.64 393.84 324.13 393.32
            Q 324.20 393.30 324.21 393.36
            L 324.25 393.68
            A 0.22 0.22 0.0 0 0 324.67 393.73
            Q 324.75 393.53 324.83 393.30
            Q 324.89 393.11 325.10 393.09
            L 329.67 392.65
            Q 329.69 392.65 329.69 392.63
            Q 329.72 392.46 329.76 392.31
            A 0.18 0.18 0.0 0 1 330.04 392.21
            Q 331.28 393.10 332.82 392.31
            Q 333.06 392.18 333.21 392.41
            L 333.42 392.73
            Q 333.46 392.79 333.53 392.76
            Q 333.74 392.67 333.77 392.48
            Q 333.82 392.23 334.07 392.17
            Q 339.65 390.92 345.14 389.31
            Q 345.18 389.30 345.20 389.34
            L 345.29 389.62
            Q 345.39 389.92 345.64 389.72
            Q 345.89 389.51 346.15 389.20
            Q 346.35 388.97 346.27 389.27
            C 346.12 389.89 346.78 389.92 346.78 389.39
            A 0.27 0.26 87.7 0 1 347.02 389.12
            Q 365.59 387.07 384.26 387.46
            C 388.72 387.55 394.12 386.67 399.16 387.08
            Q 399.40 387.10 399.51 387.31
            C 400.03 388.25 430.72 387.62 434.24 387.52
            C 439.38 387.37 444.73 386.37 449.95 385.74
            C 452.47 385.43 454.65 384.76 457.00 384.02
            C 460.08 383.06 463.11 382.76 466.32 381.77
            Q 470.85 380.36 475.81 380.31
            Q 472.27 381.33 468.60 381.24
            A 1.42 1.42 0.0 0 0 467.65 381.58
            Q 466.60 382.49 465.07 382.47
            A 0.94 0.93 -69.8 0 0 464.32 382.82
            L 463.27 384.17
            Q 462.97 384.54 462.58 384.27
            Q 461.54 383.54 461.01 384.46
            Q 460.75 384.93 460.21 384.82
            Q 459.41 384.66 458.99 385.40
            A 0.92 0.92 0.0 0 1 458.10 385.85
            Q 454.43 385.44 450.81 386.08
            C 432.38 389.34 414.11 388.78 395.49 388.72
            Q 395.33 388.72 395.30 388.56
            C 395.18 388.03 394.79 388.28 394.58 388.53
            Q 394.40 388.75 394.12 388.75
            C 386.26 388.74 378.05 388.33 370.23 389.00
            C 366.29 389.33 363.77 389.00 358.87 390.24
            Q 358.45 390.35 358.14 390.03
            C 357.51 389.37 348.53 390.92 347.05 391.08
            Q 346.90 391.09 346.85 391.23
            Q 346.79 391.38 346.74 391.52
            Q 346.60 391.94 346.17 391.86
            Q 344.78 391.61 344.67 392.75
            A 0.16 0.16 0.0 0 1 344.37 392.81
            Q 344.30 392.69 344.29 392.56
            Q 344.26 392.36 344.06 392.39
            Q 342.04 392.69 340.26 393.60
            Q 339.82 393.82 339.34 393.72
            Q 337.56 393.37 336.39 394.64
            Q 336.29 394.74 336.29 394.60
            L 336.29 394.04
            Q 336.29 394.00 336.25 394.00
            Q 336.10 394.00 335.95 394.00
            Q 335.75 394.00 335.75 394.20
            Q 335.75 394.39 335.76 394.58
            A 0.19 0.19 0.0 0 1 335.51 394.77
            Q 333.64 394.25 332.52 395.73
            Q 332.48 395.78 332.45 395.74
            L 332.22 395.51
            A 0.21 0.19 55.2 0 0 332.00 395.46
            Q 329.99 396.23 328.10 395.58
            Q 327.83 395.48 327.62 395.66
            C 326.79 396.33 325.57 395.19 324.44 396.58
            Q 324.32 396.74 324.29 396.55
            Q 324.27 396.41 324.32 396.29
            A 0.24 0.24 0.0 0 0 324.22 396.01
            L 323.80 395.76
            Q 323.54 395.61 323.63 395.89
            Q 323.67 396.02 323.71 396.14
            Q 323.89 396.70 323.31 396.75
            L 321.14 396.92
            Q 320.75 396.95 320.75 397.35
            L 320.75 397.80
            Q 320.75 398.07 320.51 397.97
            Q 318.62 397.25 317.65 398.48
            Q 317.38 398.84 316.93 398.84
            L 312.90 398.86
            Q 312.67 398.87 312.70 399.09
            L 312.76 399.50
            A 0.27 0.26 -4.8 0 1 312.50 399.80
            L 307.89 399.90
            Q 307.68 399.91 307.71 400.11
            L 307.77 400.60
            Q 307.80 400.81 307.59 400.82
            L 304.71 400.86
            Q 304.53 400.87 304.64 401.01
            Q 304.71 401.10 304.84 401.18
            A 0.38 0.25 -22.4 0 1 304.50 401.69
            L 301.20 401.91
            A 0.11 0.11 0.0 0 0 301.16 402.11
            L 301.40 402.24
            A 0.87 0.86 65.5 0 1 300.80 403.85
            Q 298.34 403.25 296.43 404.61
            A 0.23 0.11 -16.1 0 1 296.08 404.55
            Q 296.22 404.39 296.18 404.29
            A 0.25 0.19 42.1 0 0 295.75 404.25
            L 295.75 405.19
            A 0.49 0.49 0.0 0 1 295.26 405.68
            Q 293.10 405.65 290.99 405.96
            Q 290.74 405.99 290.75 406.23
            Q 290.75 406.41 290.75 406.56
            A 0.41 0.41 0.0 0 1 290.20 406.95
            Q 288.21 406.22 286.70 407.38
            Q 286.29 407.71 285.76 407.72
            Q 283.80 407.78 281.81 407.96
            Q 281.35 408.00 280.96 408.27
            C 279.54 409.27 277.52 408.72 276.31 408.81
            Q 273.36 409.03 270.38 408.77
            Q 270.35 408.77 270.33 408.74
            Q 270.28 408.62 270.28 408.49
            A 0.06 0.06 0.0 0 0 270.22 408.44
            L 268.35 408.76
            Q 268.13 408.80 268.16 408.57
            Q 268.18 408.42 268.27 408.25
            A 0.20 0.12 -28.0 0 0 267.94 408.24
            Q 267.31 409.07 266.28 408.70
            Q 266.14 408.65 266.17 408.49
            Q 266.20 408.38 266.27 408.25
            A 0.20 0.12 -28.1 0 0 265.94 408.24
            Q 265.31 409.07 264.28 408.70
            Q 264.14 408.65 264.17 408.49
            Q 264.20 408.38 264.27 408.25
            A 0.20 0.12 -28.1 0 0 263.94 408.24
            Q 263.28 409.11 262.09 408.64
            Q 262.05 408.62 262.07 408.58
            L 262.25 408.27
            Q 262.42 407.99 262.10 408.04
            Q 261.70 408.11 261.57 408.54
            Q 261.45 408.95 261.02 408.92
            L 255.99 408.65
            Q 255.66 408.63 255.36 408.76
            Q 254.89 408.96 254.18 408.73
            Q 253.98 408.66 254.13 408.51
            Q 254.30 408.34 254.27 408.02
            A 0.17 0.17 0.0 0 0 253.94 407.98
            Q 253.52 409.19 252.19 408.69
            Q 252.02 408.63 252.14 408.49
            Q 252.27 408.36 252.29 408.14
            A 0.13 0.13 0.0 0 0 252.04 408.07
            Q 251.55 409.05 250.34 408.76
            Q 250.22 408.74 250.22 408.61
            Q 250.21 408.44 250.16 408.29
            Q 250.07 407.98 249.86 408.23
            Q 249.23 408.99 248.09 408.61
            A 0.03 0.03 0.0 0 1 248.07 408.56
            Q 248.24 408.38 248.25 408.29
            A 0.28 0.22 64.8 0 0 247.81 408.07
            Q 247.74 408.20 247.74 408.36
            Q 247.74 408.70 247.41 408.77
            Q 246.42 408.98 246.12 408.28
            A 0.23 0.16 39.5 0 0 245.73 408.25
            Q 245.76 408.43 245.75 408.60
            A 0.34 0.34 0.0 0 1 245.39 408.92
            L 240.30 408.72
            Q 240.12 408.71 240.16 408.54
            Q 240.20 408.38 240.29 408.18
            A 0.34 0.33 10.7 0 0 239.97 407.72
            L 234.57 407.84
            Q 234.24 407.85 234.25 407.52
            Q 234.25 407.36 234.25 407.19
            A 0.38 0.37 -0.8 0 0 233.86 406.82
            Q 231.10 406.88 228.20 406.35
            A 0.99 0.95 35.5 0 0 227.58 406.44
            Q 225.42 407.57 223.81 406.04
            A 1.18 1.17 66.0 0 0 222.98 405.72
            C 221.82 405.75 216.67 406.10 216.18 405.24
            Q 215.96 404.85 215.50 404.82
            L 212.25 404.62
            Q 212.14 404.61 212.17 404.51
            Q 212.21 404.36 212.26 404.21
            A 0.24 0.23 13.2 0 0 212.06 403.90
            L 208.49 403.59
            Q 208.07 403.55 208.37 403.25
            Q 208.64 402.99 207.99 402.85
            Q 207.60 402.77 207.20 402.79
            Q 206.49 402.84 206.24 402.32
            Q 206.01 401.86 205.49 401.85
            L 203.14 401.84
            Q 202.93 401.84 203.04 401.66
            L 203.22 401.36
            Q 203.46 400.95 203.00 400.86
            L 202.20 400.70
            A 0.12 0.12 0.0 0 1 202.13 400.51
            Q 202.24 400.35 202.53 400.20
            A 0.19 0.19 0.0 0 0 202.45 399.85
            L 200.26 399.77
            Q 199.98 399.76 200.13 399.51
            Q 200.20 399.40 200.34 399.33
            A 0.36 0.22 14.8 0 0 199.93 398.91
            Q 198.72 399.07 198.06 398.01
            A 0.55 0.54 65.9 0 0 197.45 397.77
            Q 196.39 398.07 195.88 397.27
            Q 195.63 396.87 195.16 396.83
            Q 194.14 396.72 194.09 395.54
            Q 194.06 394.93 193.73 395.45
            C 193.39 395.97 192.47 396.02 192.24 395.51
            Q 192.11 395.22 191.84 395.38
            Q 190.78 396.02 189.37 395.90
            Q 189.07 395.87 189.15 395.58
            Q 189.20 395.39 189.27 395.19
            A 0.34 0.33 -87.9 0 0 188.87 394.75
            Q 187.29 395.21 186.25 394.28
            Q 185.87 393.95 185.37 393.91
            L 182.42 393.70
            Q 182.13 393.68 182.28 393.42
            L 182.43 393.17
            Q 182.54 392.98 182.33 392.95
            L 179.99 392.62
            Q 179.75 392.58 179.61 392.78
            Q 179.51 392.93 179.30 392.99
            Q 179.03 393.07 179.08 392.80
            Q 179.11 392.60 179.14 392.39
            Q 179.28 391.38 178.76 392.26
            L 178.53 392.64
            A 0.15 0.15 0.0 0 1 178.25 392.57
            Q 178.25 392.41 178.27 392.25
            Q 178.34 391.68 177.80 392.33
            Q 177.30 392.93 176.34 392.63
            A 0.12 0.12 0.0 0 1 176.27 392.45
            L 176.40 392.22
            A 0.26 0.26 0.0 0 0 176.19 391.83
            L 170.17 391.58
            Q 169.69 391.56 169.25 391.72
            Q 168.50 391.99 168.09 391.26
            Q 167.98 391.06 167.82 391.22
            L 167.51 391.53
            Q 167.43 391.61 167.41 391.50
            L 167.36 391.15
            Q 167.28 390.68 166.94 391.02
            L 166.76 391.20
            Q 166.55 391.41 166.31 391.24
            Q 165.58 390.75 164.72 391.11
            Q 164.39 391.25 164.04 391.16
            Q 161.13 390.40 158.30 390.61
            C 154.80 390.87 151.78 390.90 148.42 390.81
            A 0.09 0.08 80.3 0 1 148.34 390.75
            Q 148.28 390.59 148.25 390.43
            A 0.14 0.14 0.0 0 0 148.02 390.35
            Q 147.23 391.02 146.29 390.67
            Q 145.99 390.56 145.68 390.62
            Q 144.60 390.83 143.56 390.84
            Q 129.26 390.84 114.99 389.94
            Q 101.96 389.11 93.00 387.27
            Q 84.00 385.42 80.49 383.55
            Q 75.22 380.75 73.47 380.22
            L 72.00 379.50
            Q 70.74 378.66 69.41 378.82
            L 67.47 378.06
            Z"
            />
            <path
              fill="#000101"
              fillOpacity="0.922"
              d="
            M 71.02 378.35
            Q 96.59 380.95 114.19 381.85
            Q 246.07 388.59 378.06 384.62
            C 392.59 384.18 407.18 383.38 421.74 382.89
            C 430.16 382.61 438.73 381.68 447.17 382.36
            C 454.81 382.97 459.85 382.85 467.00 380.82
            C 470.58 379.80 473.91 379.78 477.53 379.48
            L 475.81 380.31
            Q 470.85 380.36 466.32 381.77
            C 463.11 382.76 460.08 383.06 457.00 384.02
            L 442.82 384.23
            A 1.54 1.51 27.2 0 0 441.95 384.50
            Q 440.15 385.70 437.50 385.72
            Q 389.67 386.00 341.84 386.19
            A 1.96 1.90 -58.2 0 0 340.93 386.42
            Q 339.31 387.28 338.00 387.27
            Q 326.64 387.18 315.29 387.33
            Q 314.99 387.33 314.83 387.59
            C 314.39 388.28 246.35 388.02 235.21 387.96
            Q 229.46 387.93 216.69 387.12
            C 205.74 386.43 194.92 386.66 183.80 385.94
            Q 168.10 384.91 152.39 385.15
            Q 151.16 385.17 148.82 384.72
            C 146.07 384.18 141.91 385.01 140.24 385.01
            Q 132.17 385.01 124.09 384.87
            Q 123.85 384.87 124.03 384.70
            Q 124.17 384.57 124.16 384.49
            Q 124.10 384.07 123.82 384.51
            Q 123.29 385.33 122.36 384.87
            A 0.20 0.19 -74.0 0 1 122.26 384.68
            Q 122.27 384.55 122.23 384.40
            Q 122.19 384.25 122.05 384.26
            Q 106.85 385.28 94.99 383.02
            Q 91.42 382.33 88.90 382.24
            C 84.43 382.07 80.78 380.48 76.44 379.84
            Q 73.94 380.56 71.02 378.35
            Z"
            />
            <path
              fill="#010001"
              fillOpacity="0.098"
              d="
            M 492.75 378.36
            Q 493.39 380.17 492.76 382.02
            C 492.38 383.17 491.34 383.60 491.77 385.34
            Q 491.85 385.69 491.50 385.74
            L 491.12 385.79
            Q 490.88 385.83 490.86 386.06
            C 490.49 390.14 485.11 396.66 482.67 399.31
            Q 482.34 399.68 481.86 399.80
            Q 479.26 400.48 476.29 402.30
            Q 472.76 404.48 467.84 404.86
            A 0.97 0.94 12.9 0 0 467.10 405.31
            C 465.84 407.41 463.83 406.09 462.99 407.42
            A 0.77 0.77 0.0 0 1 462.21 407.78
            C 458.29 407.16 457.94 410.90 456.30 410.77
            Q 455.82 410.73 455.42 411.01
            Q 452.54 412.99 449.24 414.00
            A 0.21 0.21 0.0 0 0 449.21 414.40
            Q 449.83 414.68 448.87 414.85
            A 2.08 1.92 37.9 0 1 448.38 414.89
            Q 446.79 414.82 445.99 415.71
            Q 444.36 417.50 441.98 417.73
            Q 441.47 417.78 441.48 418.24
            Q 441.48 418.76 440.96 418.73
            C 438.54 418.59 437.27 421.09 436.02 420.71
            A 0.41 0.40 4.3 0 0 435.50 421.15
            C 435.68 422.38 433.84 421.20 433.23 422.21
            Q 433.02 422.55 432.63 422.66
            Q 430.07 423.40 428.20 425.38
            Q 427.90 425.70 427.47 425.65
            Q 425.50 425.46 424.94 427.31
            A 0.73 0.73 0.0 0 1 424.09 427.81
            Q 422.37 427.44 421.34 428.46
            Q 420.98 428.82 420.49 428.99
            L 412.35 431.82
            A 0.20 0.20 0.0 0 0 412.27 432.15
            Q 412.41 432.28 412.52 432.38
            Q 412.68 432.53 412.46 432.56
            C 411.91 432.63 408.30 432.93 408.30 433.43
            Q 408.30 433.54 408.19 433.57
            Q 404.44 434.53 401.08 436.57
            A 0.11 0.10 85.0 0 1 400.93 436.44
            Q 401.03 436.17 400.86 435.90
            A 0.17 0.16 -57.8 0 0 400.56 435.97
            L 400.50 436.46
            Q 400.46 436.72 400.20 436.67
            Q 398.49 436.37 397.26 437.56
            Q 397.14 437.67 397.09 437.52
            Q 397.04 437.36 396.98 437.18
            A 0.26 0.25 61.1 0 0 396.58 437.06
            Q 396.46 437.17 396.47 437.38
            Q 396.47 437.49 396.36 437.52
            Q 392.41 438.56 388.31 438.83
            C 383.95 439.11 379.98 441.14 375.60 441.76
            C 374.99 441.85 373.85 441.37 373.47 442.28
            Q 373.32 442.64 372.94 442.65
            L 368.26 442.79
            Q 367.83 442.81 367.48 443.07
            Q 365.80 444.38 363.78 443.95
            A 0.25 0.24 -85.4 0 0 363.49 444.20
            Q 363.50 444.36 363.50 444.50
            Q 363.50 444.75 363.25 444.75
            L 350.23 444.75
            Q 349.70 444.75 349.24 445.01
            C 346.67 446.44 328.56 444.71 328.69 447.00
            L 273.19 447.00
            Q 261.72 445.46 250.07 446.08
            C 247.95 446.19 246.18 445.10 244.06 445.05
            Q 230.82 444.72 226.69 445.16
            Q 222.19 445.63 219.80 445.45
            Q 219.29 445.41 218.92 445.07
            Q 216.37 442.74 212.74 442.99
            Q 211.76 443.05 209.36 441.96
            C 206.10 440.47 201.97 440.90 198.46 441.04
            Q 198.05 441.06 197.76 440.76
            L 196.11 439.06
            Q 195.79 438.73 195.33 438.72
            L 189.33 438.58
            L 196.67 438.51
            Q 197.21 438.50 197.44 439.00
            Q 197.68 439.51 198.27 439.39
            A 0.34 0.17 7.9 0 1 198.70 439.69
            Q 198.43 439.84 198.53 440.22
            Q 198.64 440.62 198.86 440.26
            L 199.10 439.86
            Q 199.21 439.68 199.38 439.79
            Q 199.49 439.87 199.54 439.99
            Q 199.59 440.13 199.73 440.13
            Q 208.44 440.65 217.16 440.83
            Q 221.64 440.93 229.40 441.75
            C 231.83 442.00 243.31 441.96 244.07 442.56
            Q 244.43 442.85 244.90 442.83
            Q 247.09 442.74 249.29 442.73
            C 252.01 442.71 255.19 443.76 258.51 443.13
            A 2.11 2.02 -40.7 0 1 259.43 443.18
            Q 260.11 443.38 260.82 443.35
            Q 268.57 442.96 276.30 443.73
            C 277.12 443.81 278.98 443.58 280.23 443.97
            Q 281.20 444.27 281.83 444.28
            Q 295.05 444.38 308.28 444.20
            Q 308.68 444.20 308.96 443.91
            L 309.17 443.70
            Q 309.28 443.59 309.45 443.59
            Q 311.81 443.64 314.19 443.65
            Q 315.37 443.66 316.04 443.96
            Q 316.47 444.15 316.91 444.02
            Q 317.60 443.80 319.01 443.75
            Q 323.75 443.56 328.50 443.39
            C 335.00 443.15 341.78 441.91 348.48 441.38
            Q 350.04 441.26 353.43 440.52
            C 355.69 440.03 358.08 440.11 360.17 439.69
            Q 376.72 436.35 384.07 434.10
            Q 395.58 430.57 401.00 429.51
            Q 401.30 429.45 401.54 429.16
            A 1.75 1.75 0.0 0 1 402.26 428.63
            L 426.75 418.99
            A 0.88 0.86 -7.3 0 0 427.29 418.31
            Q 427.36 417.80 427.83 417.62
            Q 436.75 414.09 445.47 410.10
            Q 457.81 404.46 470.68 400.16
            Q 471.09 400.02 472.84 399.20
            C 475.78 397.81 478.57 396.90 481.53 394.81
            C 483.74 393.24 487.25 389.23 488.50 386.68
            Q 490.57 382.43 492.75 378.36
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.251"
              d="
            M 62.88 378.42
            C 63.01 382.18 62.00 387.58 63.66 390.62
            C 65.55 394.08 68.05 394.55 71.20 396.28
            Q 84.57 403.67 89.23 407.05
            Q 92.66 409.54 94.79 410.81
            C 96.24 411.67 98.10 411.35 99.57 412.92
            Q 99.87 413.25 100.30 413.39
            Q 105.84 415.35 110.86 418.32
            Q 111.34 418.61 111.88 418.50
            Q 112.81 418.32 113.46 418.91
            Q 113.83 419.24 114.30 419.36
            Q 117.83 420.28 121.31 421.32
            C 123.69 422.02 127.68 422.77 130.74 424.28
            Q 131.16 424.49 131.59 424.32
            Q 131.91 424.19 132.26 424.28
            Q 148.84 428.61 165.91 430.57
            Q 166.34 430.62 166.65 430.93
            Q 166.77 431.04 166.93 431.16
            Q 167.10 431.28 167.31 431.27
            Q 172.34 431.03 177.32 431.87
            A 1.35 1.32 -57.0 0 0 178.30 431.65
            Q 179.59 430.76 181.04 431.69
            Q 181.44 431.94 181.90 431.97
            C 190.38 432.61 196.78 433.79 203.82 434.18
            C 209.30 434.48 214.34 435.40 219.71 435.53
            C 231.57 435.83 243.93 436.51 255.33 436.99
            Q 282.56 438.14 309.81 437.02
            C 314.53 436.83 321.34 435.53 327.75 435.19
            C 335.79 434.77 343.90 433.48 351.82 432.11
            C 352.88 431.93 353.95 430.98 355.40 431.23
            Q 355.92 431.32 356.39 431.09
            Q 358.35 430.11 360.54 430.26
            Q 361.10 430.29 361.57 430.00
            Q 363.56 428.77 365.89 428.49
            Q 366.46 428.42 366.86 428.01
            L 367.21 427.66
            Q 367.43 427.45 367.73 427.44
            Q 369.92 427.36 372.08 427.10
            C 374.38 426.82 376.07 425.15 378.82 425.25
            Q 379.32 425.27 379.74 425.01
            C 382.17 423.52 385.09 422.98 387.42 421.94
            C 389.01 421.24 393.91 418.95 395.77 419.18
            Q 396.26 419.24 396.70 419.00
            C 400.34 417.00 406.19 414.35 411.33 412.72
            Q 412.83 412.24 414.93 411.16
            C 416.62 410.28 418.43 410.18 420.06 409.50
            Q 427.44 406.44 435.28 404.80
            C 447.30 402.29 461.20 396.94 470.23 394.23
            Q 480.98 390.99 486.66 382.00
            C 487.55 380.58 487.14 379.76 489.42 379.47
            Q 489.64 379.10 489.93 379.23
            Q 490.30 379.39 490.10 379.74
            Q 487.76 383.74 485.10 387.51
            C 483.86 389.25 481.62 390.68 480.29 392.78
            Q 480.03 393.19 479.62 393.42
            Q 477.19 394.81 474.66 396.01
            C 471.42 397.55 467.24 398.14 463.59 399.65
            C 461.88 400.36 458.58 400.93 456.55 402.19
            C 454.17 403.67 451.58 403.95 449.10 405.21
            C 446.77 406.40 444.78 406.75 442.37 407.24
            C 440.84 407.56 439.78 408.63 437.94 408.51
            Q 437.41 408.47 437.05 408.86
            Q 436.17 409.79 434.78 409.52
            Q 434.33 409.43 433.97 409.73
            Q 432.80 410.71 431.24 410.51
            A 0.21 0.21 0.0 0 0 431.03 410.81
            L 431.18 411.08
            Q 431.28 411.26 431.08 411.22
            Q 429.77 410.95 428.96 411.71
            Q 428.71 411.94 428.39 412.08
            L 421.03 415.11
            Q 420.55 415.31 420.03 415.31
            Q 419.23 415.32 418.61 415.91
            Q 418.25 416.24 417.76 416.25
            Q 416.66 416.26 415.97 417.10
            Q 415.76 417.35 415.48 417.52
            L 412.27 419.34
            Q 411.88 419.56 411.44 419.46
            Q 410.45 419.24 410.13 419.97
            Q 409.95 420.36 409.54 420.46
            Q 406.79 421.15 404.77 422.93
            Q 404.42 423.24 403.96 423.26
            Q 400.52 423.40 398.50 424.59
            Q 396.71 425.64 395.03 425.55
            Q 394.52 425.52 394.16 425.90
            Q 393.59 426.52 392.25 426.28
            A 0.67 0.67 0.0 0 0 391.50 426.70
            Q 391.16 427.56 389.75 427.44
            Q 389.18 427.39 388.83 427.86
            Q 388.11 428.81 386.79 428.48
            Q 386.21 428.34 385.86 428.82
            Q 385.17 429.76 383.93 429.51
            Q 383.39 429.40 382.99 429.78
            Q 381.77 430.92 380.04 430.45
            A 1.02 1.01 -60.8 0 0 379.03 430.74
            Q 377.95 431.90 376.26 431.46
            A 1.19 1.18 31.6 0 0 375.18 431.71
            Q 373.92 432.79 372.20 432.38
            Q 371.61 432.24 371.17 432.65
            Q 369.77 433.97 367.79 433.44
            A 1.01 1.00 -57.1 0 0 366.92 433.63
            C 365.81 434.56 362.18 434.58 360.71 434.89
            C 358.32 435.39 356.18 436.83 352.88 436.47
            Q 352.42 436.42 352.04 436.70
            C 350.25 438.02 347.98 437.32 345.86 437.74
            C 339.61 438.98 332.98 439.63 327.76 439.58
            Q 326.39 439.57 325.69 439.97
            A 1.85 1.78 29.3 0 1 324.80 440.20
            Q 318.12 440.18 305.56 440.92
            Q 293.80 441.60 270.08 441.19
            A 0.91 0.89 -18.4 0 1 269.40 440.86
            C 268.98 440.35 249.09 440.26 246.68 440.19
            C 244.91 440.14 243.27 439.47 241.50 439.49
            Q 224.69 439.68 208.13 437.03
            C 205.24 436.57 201.65 436.64 198.41 436.13
            C 192.97 435.27 187.45 435.00 181.97 434.15
            Q 181.48 434.07 181.37 433.60
            Q 181.04 432.26 179.87 431.79
            Q 179.35 431.58 178.95 431.98
            L 178.16 432.76
            Q 177.95 432.98 177.70 432.81
            Q 176.86 432.27 175.83 432.56
            A 0.21 0.20 67.9 0 0 175.71 432.86
            Q 175.86 433.16 175.51 433.13
            Q 167.60 432.50 159.72 431.58
            C 153.86 430.90 147.36 429.04 141.03 428.14
            C 140.31 428.03 140.19 427.61 139.52 427.52
            C 134.35 426.89 128.45 424.98 124.44 424.02
            Q 117.50 422.36 110.78 419.89
            C 109.64 419.48 108.33 419.74 107.15 419.00
            Q 106.30 418.46 105.80 418.31
            C 103.16 417.53 100.54 415.93 97.85 415.29
            Q 97.38 415.18 97.01 414.89
            C 95.36 413.64 93.22 413.26 91.43 411.92
            Q 91.05 411.64 90.59 411.54
            Q 88.36 411.03 87.47 409.02
            Q 87.27 408.56 86.77 408.53
            C 85.76 408.49 85.20 407.56 84.49 407.10
            C 82.25 405.65 80.43 404.32 77.94 403.27
            C 77.01 402.87 76.40 401.83 75.63 401.34
            Q 70.71 398.21 66.00 394.75
            C 60.25 390.54 62.69 384.27 62.88 378.42
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.647"
              d="
            M 69.41 378.82
            Q 70.74 378.66 72.00 379.50
            L 73.96 382.54
            Q 74.21 382.93 74.67 383.03
            Q 76.24 383.35 77.21 384.71
            Q 77.49 385.09 77.95 385.25
            Q 89.46 389.13 101.43 391.11
            C 111.91 392.84 117.46 393.89 125.52 394.87
            Q 126.85 395.04 129.39 396.07
            Q 131.79 397.04 134.73 396.89
            Q 135.38 396.86 135.32 397.61
            Q 135.30 397.83 135.45 397.67
            Q 135.57 397.56 135.70 397.42
            Q 135.89 397.21 136.07 397.43
            C 136.34 397.77 137.38 398.01 137.66 397.47
            Q 137.80 397.21 138.02 397.41
            Q 138.65 398.01 139.44 397.87
            Q 139.93 397.78 140.39 397.98
            Q 141.55 398.51 142.45 399.39
            Q 142.75 399.69 143.18 399.70
            L 149.07 399.87
            Q 149.31 399.87 149.20 400.09
            L 149.07 400.32
            Q 148.88 400.69 149.29 400.72
            L 151.86 400.89
            Q 152.00 400.90 152.00 401.03
            Q 152.00 401.18 152.00 401.32
            Q 152.01 401.67 152.36 401.69
            L 156.33 401.87
            Q 156.62 401.88 156.80 402.12
            Q 157.40 402.95 158.41 402.97
            Q 158.79 402.98 158.96 403.33
            Q 159.38 404.25 160.59 403.75
            Q 161.02 403.57 161.14 404.03
            L 161.21 404.33
            Q 161.34 404.82 161.84 404.84
            L 163.56 404.89
            Q 163.98 404.90 164.18 405.26
            Q 164.58 405.97 165.35 405.87
            Q 165.61 405.84 165.87 405.88
            Q 166.31 405.96 166.15 406.23
            Q 165.88 406.70 166.42 406.71
            L 169.12 406.80
            Q 169.66 406.82 169.99 407.25
            Q 171.47 409.18 173.87 408.79
            A 0.22 0.22 0.0 0 1 174.13 409.01
            L 174.12 409.36
            Q 174.12 409.76 174.51 409.70
            Q 176.19 409.47 177.44 410.44
            Q 177.84 410.75 178.35 410.75
            L 179.45 410.75
            Q 179.85 410.75 180.03 411.11
            C 180.78 412.64 182.99 411.06 183.49 412.44
            Q 183.64 412.85 184.07 412.76
            Q 186.03 412.35 187.52 413.52
            Q 187.55 413.54 187.58 413.51
            Q 187.72 413.36 187.67 413.27
            Q 187.65 413.22 187.70 413.24
            Q 190.09 413.96 192.65 413.77
            Q 193.14 413.74 193.24 414.22
            Q 193.28 414.37 193.25 414.50
            A 0.19 0.14 -24.8 0 0 193.56 414.56
            Q 193.66 414.47 193.76 414.36
            Q 193.85 414.26 193.95 414.35
            Q 194.16 414.53 194.42 414.77
            A 0.90 0.86 -22.8 0 0 195.02 415.00
            L 199.71 415.00
            Q 199.91 415.00 199.98 415.19
            Q 200.02 415.30 200.05 415.44
            Q 200.07 415.52 200.15 415.53
            L 215.40 416.89
            Q 215.71 416.92 215.90 417.18
            Q 216.32 417.76 217.17 417.51
            Q 217.39 417.44 217.48 417.23
            C 217.69 416.74 218.07 417.03 218.30 417.26
            Q 218.50 417.46 218.70 417.26
            L 218.98 416.98
            Q 219.00 416.96 219.02 416.98
            L 219.41 417.37
            Q 219.68 417.64 219.76 417.27
            Q 219.78 417.13 219.83 417.00
            A 0.11 0.11 0.0 0 1 220.02 416.97
            L 220.47 417.52
            Q 220.49 417.55 220.52 417.52
            L 220.80 417.25
            Q 220.93 417.11 221.08 417.22
            L 221.49 417.52
            A 0.02 0.02 0.0 0 0 221.52 417.52
            L 221.72 417.32
            Q 221.80 417.24 221.90 417.29
            L 222.47 417.54
            Q 222.49 417.55 222.51 417.53
            L 222.77 417.27
            Q 223.00 417.04 223.23 417.27
            L 223.49 417.53
            Q 223.56 417.61 223.58 417.50
            L 223.63 417.23
            Q 223.70 416.88 224.03 417.01
            Q 224.40 417.15 224.28 417.69
            A 0.14 0.13 -24.6 0 0 224.53 417.78
            Q 224.64 417.59 224.71 417.38
            Q 224.85 416.89 225.21 417.25
            L 225.49 417.53
            Q 225.56 417.61 225.58 417.50
            L 225.65 417.14
            Q 225.74 416.63 226.07 417.03
            L 226.47 417.52
            Q 226.48 417.53 226.49 417.53
            Q 226.66 417.43 226.73 417.34
            Q 226.86 417.17 227.06 417.23
            Q 229.28 417.89 232.56 417.85
            Q 241.66 417.72 273.81 417.76
            Q 274.48 417.76 275.62 417.40
            C 276.99 416.96 278.75 417.39 280.16 417.17
            C 281.16 417.02 288.73 416.58 288.75 416.55
            Q 288.84 416.42 288.98 416.47
            L 289.52 416.66
            Q 289.62 416.69 289.62 416.58
            L 289.63 416.25
            Q 289.63 415.95 289.93 415.94
            L 299.60 415.72
            Q 300.12 415.70 300.56 415.42
            Q 302.32 414.31 304.39 414.75
            Q 304.88 414.85 305.29 414.59
            C 306.36 413.90 309.61 413.79 309.87 412.97
            A 0.17 0.16 50.0 0 1 310.19 413.00
            L 310.24 413.33
            Q 310.27 413.59 310.50 413.45
            L 311.37 412.89
            Q 311.78 412.64 312.25 412.72
            Q 313.81 412.98 315.03 412.19
            A 0.15 0.14 -19.5 0 1 315.25 412.29
            L 315.29 412.64
            A 0.20 0.20 0.0 0 0 315.63 412.75
            Q 315.87 412.51 315.63 412.23
            Q 315.32 411.88 315.79 411.86
            L 319.96 411.71
            Q 320.23 411.70 320.41 411.51
            Q 321.21 410.73 322.20 410.66
            Q 322.55 410.64 322.73 410.33
            C 323.30 409.37 325.90 410.11 327.32 408.93
            A 0.96 0.95 -57.1 0 1 328.20 408.74
            Q 330.72 409.43 331.93 407.00
            Q 332.07 406.72 332.17 407.02
            Q 332.23 407.17 332.24 407.35
            Q 332.24 407.40 332.28 407.37
            Q 332.87 406.78 333.80 406.77
            Q 334.33 406.77 334.72 406.40
            Q 335.48 405.66 336.54 405.81
            Q 337.03 405.87 337.42 405.58
            C 339.38 404.10 341.72 403.98 343.64 402.87
            Q 346.18 401.42 348.96 400.61
            Q 349.43 400.47 349.81 400.16
            Q 350.59 399.52 351.75 399.80
            Q 352.28 399.93 352.63 399.51
            Q 353.37 398.63 354.43 398.82
            Q 354.86 398.89 355.23 398.68
            L 358.11 397.04
            Q 358.19 396.99 358.20 397.09
            Q 358.21 397.26 358.26 397.43
            Q 358.35 397.79 358.58 397.50
            Q 359.48 396.41 361.07 396.69
            Q 361.58 396.79 361.50 396.28
            C 361.42 395.76 371.20 395.12 371.87 394.14
            Q 371.93 394.05 372.00 394.13
            Q 372.17 394.30 372.38 394.51
            Q 372.59 394.73 372.69 394.44
            L 372.79 394.11
            Q 372.84 393.97 372.99 393.96
            Q 376.53 393.66 380.06 393.29
            Q 383.66 392.90 386.85 392.87
            Q 394.46 392.79 402.07 392.75
            C 403.78 392.74 404.96 391.95 406.76 391.98
            Q 418.69 392.19 430.50 390.79
            L 441.08 389.78
            A 0.48 0.46 16.2 0 0 441.39 389.62
            C 441.97 388.95 456.02 386.95 457.98 386.61
            C 465.09 385.38 470.36 382.14 477.06 380.48
            Q 472.52 384.52 465.97 386.43
            Q 444.55 392.67 423.25 392.92
            C 418.26 392.98 413.29 393.70 408.26 393.91
            C 404.17 394.09 399.98 395.18 396.30 395.39
            Q 388.55 395.83 380.88 397.07
            Q 380.82 397.08 380.79 397.14
            Q 380.73 397.26 380.74 397.41
            Q 380.74 397.52 380.63 397.54
            Q 374.79 398.58 369.02 399.99
            Q 368.86 400.03 368.78 400.18
            L 368.56 400.60
            Q 368.51 400.68 368.42 400.67
            Q 366.01 400.43 364.75 402.44
            A 0.79 0.79 0.0 0 1 363.97 402.81
            Q 362.90 402.66 362.39 403.49
            A 0.54 0.53 -73.3 0 1 361.94 403.74
            L 359.69 403.77
            Q 359.22 403.77 358.94 404.16
            Q 358.25 405.13 356.88 404.63
            Q 356.52 404.50 356.51 404.88
            Q 356.50 405.07 356.50 405.25
            Q 356.52 406.18 356.23 405.45
            Q 356.20 405.37 356.22 405.14
            Q 356.22 405.11 356.20 405.13
            L 351.48 407.44
            A 1.79 1.77 -55.3 0 1 350.51 407.62
            Q 349.42 407.52 348.52 408.48
            A 1.81 1.81 0.0 0 1 347.73 408.97
            Q 341.45 410.96 335.21 413.14
            Q 333.43 413.77 332.33 413.49
            Q 331.81 413.36 331.36 413.65
            Q 328.65 415.39 325.59 414.98
            Q 325.12 414.92 324.88 415.34
            C 324.31 416.38 322.51 414.99 321.53 416.38
            Q 321.29 416.73 321.23 416.25
            Q 321.21 416.11 321.16 415.97
            Q 321.11 415.87 321.03 415.95
            Q 319.98 417.19 318.40 416.75
            Q 317.94 416.62 317.49 416.77
            Q 314.57 417.79 313.32 417.69
            Q 311.61 417.56 308.56 418.59
            C 302.91 420.50 297.02 419.26 291.26 419.90
            Q 282.25 420.91 273.16 420.96
            C 272.07 420.97 271.10 421.62 270.12 421.63
            Q 258.31 421.80 246.50 421.77
            C 245.43 421.77 243.11 421.18 241.48 421.51
            C 239.46 421.91 237.68 421.76 235.67 421.74
            Q 235.30 421.74 235.28 421.36
            C 235.25 420.88 226.62 420.81 224.78 420.80
            C 219.25 420.76 213.46 419.86 207.71 419.66
            Q 205.46 419.58 202.73 419.09
            Q 199.48 418.51 197.70 418.72
            Q 194.94 419.05 193.16 418.19
            Q 192.72 417.98 192.23 417.99
            C 188.91 418.09 186.06 417.12 182.55 416.79
            Q 180.08 416.55 177.88 415.22
            Q 177.45 414.95 176.95 415.00
            Q 174.78 415.17 172.96 413.98
            Q 172.56 413.72 172.10 413.85
            Q 171.40 414.05 170.64 413.80
            Q 170.16 413.65 169.67 413.76
            Q 168.18 414.11 166.98 413.26
            Q 166.87 413.18 166.76 413.28
            L 166.51 413.53
            Q 166.48 413.56 166.45 413.52
            L 166.14 413.04
            Q 165.89 412.66 165.46 412.82
            Q 164.70 413.09 164.01 412.46
            A 1.67 1.62 -19.4 0 0 163.14 412.06
            Q 158.79 411.51 154.65 410.13
            Q 154.34 410.02 150.07 407.91
            Q 147.30 406.53 144.06 406.58
            A 1.43 1.39 -26.2 0 1 143.17 406.29
            C 141.94 405.33 140.53 404.16 138.93 403.90
            Q 130.54 402.54 122.86 398.82
            Q 121.70 398.26 119.42 397.68
            C 117.83 397.28 116.27 396.31 114.83 395.95
            Q 110.99 395.00 107.14 393.99
            C 97.93 391.58 87.54 389.99 80.48 387.82
            Q 77.95 387.04 73.65 383.81
            Q 73.26 383.51 73.13 383.04
            Q 72.37 380.30 69.41 378.82
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.733"
              d="
            M 484.75 378.76
            Q 484.75 378.91 484.74 379.06
            Q 480.48 379.20 477.06 380.48
            C 470.36 382.14 465.09 385.38 457.98 386.61
            C 456.02 386.95 441.97 388.95 441.39 389.62
            A 0.48 0.46 16.2 0 1 441.08 389.78
            L 430.50 390.79
            Q 412.38 390.71 394.26 390.77
            C 388.43 390.79 381.85 391.78 375.53 391.83
            C 372.84 391.86 370.18 392.88 367.26 392.89
            Q 366.97 392.89 366.81 393.13
            L 366.55 393.52
            Q 366.52 393.56 366.49 393.53
            L 366.22 393.27
            A 0.31 0.30 58.2 0 0 365.89 393.19
            C 365.41 393.35 361.49 393.80 361.48 394.18
            Q 361.48 394.64 361.02 394.63
            C 358.52 394.56 356.91 395.93 353.64 395.83
            A 0.10 0.10 0.0 0 0 353.54 395.92
            Q 353.51 396.14 353.65 396.35
            Q 353.89 396.74 353.44 396.70
            L 352.05 396.59
            Q 351.79 396.57 351.55 396.69
            C 350.78 397.06 349.38 396.33 348.80 397.33
            Q 348.59 397.71 348.16 397.66
            C 345.40 397.36 339.85 400.05 337.83 401.33
            Q 337.41 401.59 336.93 401.66
            Q 334.54 401.99 332.56 403.61
            Q 332.20 403.91 331.74 403.83
            Q 330.34 403.60 329.44 404.51
            Q 329.07 404.87 328.56 404.84
            Q 326.73 404.72 325.77 406.51
            Q 325.50 407.02 324.95 406.84
            Q 323.46 406.37 322.71 407.50
            Q 322.43 407.92 321.92 407.89
            L 319.91 407.75
            A 0.97 0.94 -62.8 0 0 319.25 407.97
            Q 318.12 408.96 316.62 408.90
            Q 316.19 408.88 315.99 409.25
            C 315.32 410.48 313.10 408.77 311.59 410.47
            A 0.91 0.89 -63.5 0 1 310.76 410.76
            Q 308.35 410.33 306.23 411.57
            Q 306.12 411.63 306.12 411.51
            L 306.13 411.19
            Q 306.13 410.59 305.90 411.20
            C 305.60 412.01 303.48 411.36 302.40 412.53
            Q 302.32 412.61 302.32 412.50
            Q 302.31 412.37 302.25 412.25
            A 0.30 0.22 36.8 0 0 301.74 412.25
            Q 301.75 412.38 301.75 412.52
            Q 301.76 412.76 301.52 412.74
            Q 297.62 412.53 293.74 412.89
            Q 293.70 412.89 293.68 412.93
            L 293.50 413.22
            Q 293.41 413.37 293.29 413.25
            L 293.01 412.97
            A 0.04 0.04 0.0 0 0 292.95 412.98
            L 292.62 413.49
            A 0.32 0.32 0.0 0 1 292.04 413.36
            L 291.99 412.98
            Q 291.95 412.75 291.72 412.75
            L 283.75 412.92
            Q 283.68 412.92 283.67 412.98
            L 283.61 413.32
            Q 283.55 413.64 283.32 413.41
            Q 282.77 412.86 282.51 413.56
            Q 282.43 413.78 282.25 413.63
            Q 282.05 413.46 282.06 413.29
            Q 282.06 413.25 282.02 413.27
            C 279.21 414.33 276.27 412.88 273.60 414.58
            Q 273.16 414.86 272.65 414.86
            L 233.85 415.00
            A 1.00 0.97 64.5 0 1 233.21 414.76
            Q 232.97 414.56 232.92 414.19
            A 0.03 0.02 52.3 0 0 232.87 414.18
            Q 232.79 414.38 232.75 414.46
            Q 232.49 414.89 232.24 414.46
            L 232.04 414.12
            A 0.14 0.14 0.0 0 0 231.78 414.15
            Q 231.74 414.28 231.70 414.41
            Q 231.57 414.77 231.38 414.44
            L 231.12 414.01
            A 0.64 0.64 0.0 0 0 230.59 413.70
            C 228.72 413.66 218.50 414.16 218.05 413.26
            Q 217.86 412.88 217.44 412.87
            L 210.09 412.71
            Q 210.06 412.71 210.05 412.68
            Q 210.03 412.51 209.99 412.34
            Q 209.84 411.64 209.75 412.35
            L 209.71 412.66
            Q 209.70 412.72 209.65 412.68
            Q 208.60 411.62 207.18 411.84
            A 2.05 2.04 -38.8 0 1 206.15 411.73
            Q 202.35 410.30 198.21 410.82
            Q 197.79 410.87 197.50 410.56
            Q 196.34 409.28 194.55 409.86
            Q 194.16 409.99 194.02 409.61
            Q 193.96 409.46 194.09 409.31
            A 0.52 0.34 10.5 0 0 193.50 408.75
            L 191.14 408.93
            Q 190.84 408.95 190.65 408.72
            Q 189.50 407.32 187.71 407.80
            Q 187.32 407.90 187.26 407.50
            L 187.21 407.14
            A 0.40 0.39 -15.0 0 0 186.67 406.83
            Q 184.90 407.53 184.13 406.20
            Q 183.88 405.78 183.39 405.78
            Q 182.24 405.80 181.12 405.72
            Q 181.04 405.72 181.04 405.65
            L 181.04 405.32
            Q 181.04 405.04 180.76 405.00
            L 178.41 404.72
            A 0.18 0.18 0.0 0 1 178.30 404.41
            L 178.49 404.22
            Q 178.53 404.18 178.49 404.14
            Q 177.77 403.43 178.17 402.47
            Q 178.41 401.90 177.80 401.86
            L 176.16 401.74
            A 0.19 0.19 0.0 0 1 176.04 401.42
            L 176.27 401.19
            Q 176.49 400.97 176.18 400.96
            Q 175.28 400.95 175.12 400.40
            Q 174.99 399.99 174.58 399.88
            L 173.47 399.60
            Q 172.16 399.26 173.51 399.25
            Q 173.64 399.25 173.76 399.24
            A 0.17 0.16 45.0 0 0 173.75 398.92
            L 171.39 398.68
            Q 170.75 398.61 171.32 398.32
            Q 171.68 398.14 172.08 398.19
            Q 172.23 398.21 172.21 398.18
            L 172.05 397.88
            Q 172.01 397.81 171.94 397.81
            L 168.25 397.78
            Q 168.12 397.77 168.20 397.13
            Q 168.21 397.01 168.07 396.88
            A 0.91 0.91 0.0 0 0 167.15 396.71
            Q 165.31 397.39 164.19 396.22
            A 1.22 1.21 68.1 0 0 163.31 395.84
            L 155.27 395.81
            Q 155.00 395.80 155.00 395.54
            Q 155.00 395.37 155.02 395.16
            Q 155.06 394.76 154.66 394.80
            Q 150.82 395.18 147.23 394.05
            Q 146.84 393.93 146.74 394.32
            Q 146.69 394.50 146.52 394.60
            A 0.15 0.15 0.0 0 1 146.31 394.40
            C 146.76 393.54 129.92 394.02 129.24 393.26
            Q 128.94 392.92 128.49 392.90
            Q 110.57 392.14 93.00 388.48
            Q 92.99 388.47 92.52 388.50
            Q 92.32 388.51 92.24 388.31
            Q 92.13 388.02 91.81 387.99
            C 84.30 387.27 78.68 385.60 73.47 380.22
            Q 75.22 380.75 80.49 383.55
            Q 84.00 385.42 93.00 387.27
            Q 101.96 389.11 114.99 389.94
            Q 129.26 390.84 143.56 390.84
            Q 144.60 390.83 145.68 390.62
            Q 145.99 390.56 146.29 390.67
            Q 147.23 391.02 148.02 390.35
            A 0.14 0.14 0.0 0 1 148.25 390.43
            Q 148.28 390.59 148.34 390.75
            A 0.09 0.08 80.3 0 0 148.42 390.81
            C 151.78 390.90 154.80 390.87 158.30 390.61
            Q 161.13 390.40 164.04 391.16
            Q 164.39 391.25 164.72 391.11
            Q 165.58 390.75 166.31 391.24
            Q 166.55 391.41 166.76 391.20
            L 166.94 391.02
            Q 167.28 390.68 167.36 391.15
            L 167.41 391.50
            Q 167.43 391.61 167.51 391.53
            L 167.82 391.22
            Q 167.98 391.06 168.09 391.26
            Q 168.50 391.99 169.25 391.72
            Q 169.69 391.56 170.17 391.58
            L 176.19 391.83
            A 0.26 0.26 0.0 0 1 176.40 392.22
            L 176.27 392.45
            A 0.12 0.12 0.0 0 0 176.34 392.63
            Q 177.30 392.93 177.80 392.33
            Q 178.34 391.68 178.27 392.25
            Q 178.25 392.41 178.25 392.57
            A 0.15 0.15 0.0 0 0 178.53 392.64
            L 178.76 392.26
            Q 179.28 391.38 179.14 392.39
            Q 179.11 392.60 179.08 392.80
            Q 179.03 393.07 179.30 392.99
            Q 179.51 392.93 179.61 392.78
            Q 179.75 392.58 179.99 392.62
            L 182.33 392.95
            Q 182.54 392.98 182.43 393.17
            L 182.28 393.42
            Q 182.13 393.68 182.42 393.70
            L 185.37 393.91
            Q 185.87 393.95 186.25 394.28
            Q 187.29 395.21 188.87 394.75
            A 0.34 0.33 -87.9 0 1 189.27 395.19
            Q 189.20 395.39 189.15 395.58
            Q 189.07 395.87 189.37 395.90
            Q 190.78 396.02 191.84 395.38
            Q 192.11 395.22 192.24 395.51
            C 192.47 396.02 193.39 395.97 193.73 395.45
            Q 194.06 394.93 194.09 395.54
            Q 194.14 396.72 195.16 396.83
            Q 195.63 396.87 195.88 397.27
            Q 196.39 398.07 197.45 397.77
            A 0.55 0.54 65.9 0 1 198.06 398.01
            Q 198.72 399.07 199.93 398.91
            A 0.36 0.22 14.8 0 1 200.34 399.33
            Q 200.20 399.40 200.13 399.51
            Q 199.98 399.76 200.26 399.77
            L 202.45 399.85
            A 0.19 0.19 0.0 0 1 202.53 400.20
            Q 202.24 400.35 202.13 400.51
            A 0.12 0.12 0.0 0 0 202.20 400.70
            L 203.00 400.86
            Q 203.46 400.95 203.22 401.36
            L 203.04 401.66
            Q 202.93 401.84 203.14 401.84
            L 205.49 401.85
            Q 206.01 401.86 206.24 402.32
            Q 206.49 402.84 207.20 402.79
            Q 207.60 402.77 207.99 402.85
            Q 208.64 402.99 208.37 403.25
            Q 208.07 403.55 208.49 403.59
            L 212.06 403.90
            A 0.24 0.23 13.2 0 1 212.26 404.21
            Q 212.21 404.36 212.17 404.51
            Q 212.14 404.61 212.25 404.62
            L 215.50 404.82
            Q 215.96 404.85 216.18 405.24
            C 216.67 406.10 221.82 405.75 222.98 405.72
            A 1.18 1.17 66.0 0 1 223.81 406.04
            Q 225.42 407.57 227.58 406.44
            A 0.99 0.95 35.5 0 1 228.20 406.35
            Q 231.10 406.88 233.86 406.82
            A 0.38 0.37 -0.8 0 1 234.25 407.19
            Q 234.25 407.36 234.25 407.52
            Q 234.24 407.85 234.57 407.84
            L 239.97 407.72
            A 0.34 0.33 10.7 0 1 240.29 408.18
            Q 240.20 408.38 240.16 408.54
            Q 240.12 408.71 240.30 408.72
            L 245.39 408.92
            A 0.34 0.34 0.0 0 0 245.75 408.60
            Q 245.76 408.43 245.73 408.25
            A 0.23 0.16 39.5 0 1 246.12 408.28
            Q 246.42 408.98 247.41 408.77
            Q 247.74 408.70 247.74 408.36
            Q 247.74 408.20 247.81 408.07
            A 0.28 0.22 64.8 0 1 248.25 408.29
            Q 248.24 408.38 248.07 408.56
            A 0.03 0.03 0.0 0 0 248.09 408.61
            Q 249.23 408.99 249.86 408.23
            Q 250.07 407.98 250.16 408.29
            Q 250.21 408.44 250.22 408.61
            Q 250.22 408.74 250.34 408.76
            Q 251.55 409.05 252.04 408.07
            A 0.13 0.13 0.0 0 1 252.29 408.14
            Q 252.27 408.36 252.14 408.49
            Q 252.02 408.63 252.19 408.69
            Q 253.52 409.19 253.94 407.98
            A 0.17 0.17 0.0 0 1 254.27 408.02
            Q 254.30 408.34 254.13 408.51
            Q 253.98 408.66 254.18 408.73
            Q 254.89 408.96 255.36 408.76
            Q 255.66 408.63 255.99 408.65
            L 261.02 408.92
            Q 261.45 408.95 261.57 408.54
            Q 261.70 408.11 262.10 408.04
            Q 262.42 407.99 262.25 408.27
            L 262.07 408.58
            Q 262.05 408.62 262.09 408.64
            Q 263.28 409.11 263.94 408.24
            A 0.20 0.12 -28.1 0 1 264.27 408.25
            Q 264.20 408.38 264.17 408.49
            Q 264.14 408.65 264.28 408.70
            Q 265.31 409.07 265.94 408.24
            A 0.20 0.12 -28.1 0 1 266.27 408.25
            Q 266.20 408.38 266.17 408.49
            Q 266.14 408.65 266.28 408.70
            Q 267.31 409.07 267.94 408.24
            A 0.20 0.12 -28.0 0 1 268.27 408.25
            Q 268.18 408.42 268.16 408.57
            Q 268.13 408.80 268.35 408.76
            L 270.22 408.44
            A 0.06 0.06 0.0 0 1 270.28 408.49
            Q 270.28 408.62 270.33 408.74
            Q 270.35 408.77 270.38 408.77
            Q 273.36 409.03 276.31 408.81
            C 277.52 408.72 279.54 409.27 280.96 408.27
            Q 281.35 408.00 281.81 407.96
            Q 283.80 407.78 285.76 407.72
            Q 286.29 407.71 286.70 407.38
            Q 288.21 406.22 290.20 406.95
            A 0.41 0.41 0.0 0 0 290.75 406.56
            Q 290.75 406.41 290.75 406.23
            Q 290.74 405.99 290.99 405.96
            Q 293.10 405.65 295.26 405.68
            A 0.49 0.49 0.0 0 0 295.75 405.19
            L 295.75 404.25
            A 0.25 0.19 42.1 0 1 296.18 404.29
            Q 296.22 404.39 296.08 404.55
            A 0.23 0.11 -16.1 0 0 296.43 404.61
            Q 298.34 403.25 300.80 403.85
            A 0.87 0.86 65.5 0 0 301.40 402.24
            L 301.16 402.11
            A 0.11 0.11 0.0 0 1 301.20 401.91
            L 304.50 401.69
            A 0.38 0.25 -22.4 0 0 304.84 401.18
            Q 304.71 401.10 304.64 401.01
            Q 304.53 400.87 304.71 400.86
            L 307.59 400.82
            Q 307.80 400.81 307.77 400.60
            L 307.71 400.11
            Q 307.68 399.91 307.89 399.90
            L 312.50 399.80
            A 0.27 0.26 -4.8 0 0 312.76 399.50
            L 312.70 399.09
            Q 312.67 398.87 312.90 398.86
            L 316.93 398.84
            Q 317.38 398.84 317.65 398.48
            Q 318.62 397.25 320.51 397.97
            Q 320.75 398.07 320.75 397.80
            L 320.75 397.35
            Q 320.75 396.95 321.14 396.92
            L 323.31 396.75
            Q 323.89 396.70 323.71 396.14
            Q 323.67 396.02 323.63 395.89
            Q 323.54 395.61 323.80 395.76
            L 324.22 396.01
            A 0.24 0.24 0.0 0 1 324.32 396.29
            Q 324.27 396.41 324.29 396.55
            Q 324.32 396.74 324.44 396.58
            C 325.57 395.19 326.79 396.33 327.62 395.66
            Q 327.83 395.48 328.10 395.58
            Q 329.99 396.23 332.00 395.46
            A 0.21 0.19 55.2 0 1 332.22 395.51
            L 332.45 395.74
            Q 332.48 395.78 332.52 395.73
            Q 333.64 394.25 335.51 394.77
            A 0.19 0.19 0.0 0 0 335.76 394.58
            Q 335.75 394.39 335.75 394.20
            Q 335.75 394.00 335.95 394.00
            Q 336.10 394.00 336.25 394.00
            Q 336.29 394.00 336.29 394.04
            L 336.29 394.60
            Q 336.29 394.74 336.39 394.64
            Q 337.56 393.37 339.34 393.72
            Q 339.82 393.82 340.26 393.60
            Q 342.04 392.69 344.06 392.39
            Q 344.26 392.36 344.29 392.56
            Q 344.30 392.69 344.37 392.81
            A 0.16 0.16 0.0 0 0 344.67 392.75
            Q 344.78 391.61 346.17 391.86
            Q 346.60 391.94 346.74 391.52
            Q 346.79 391.38 346.85 391.23
            Q 346.90 391.09 347.05 391.08
            C 348.53 390.92 357.51 389.37 358.14 390.03
            Q 358.45 390.35 358.87 390.24
            C 363.77 389.00 366.29 389.33 370.23 389.00
            C 378.05 388.33 386.26 388.74 394.12 388.75
            Q 394.40 388.75 394.58 388.53
            C 394.79 388.28 395.18 388.03 395.30 388.56
            Q 395.33 388.72 395.49 388.72
            C 414.11 388.78 432.38 389.34 450.81 386.08
            Q 454.43 385.44 458.10 385.85
            A 0.92 0.92 0.0 0 0 458.99 385.40
            Q 459.41 384.66 460.21 384.82
            Q 460.75 384.93 461.01 384.46
            Q 461.54 383.54 462.58 384.27
            Q 462.97 384.54 463.27 384.17
            L 464.32 382.82
            A 0.94 0.93 -69.8 0 1 465.07 382.47
            Q 466.60 382.49 467.65 381.58
            A 1.42 1.42 0.0 0 1 468.60 381.24
            Q 472.27 381.33 475.81 380.31
            L 477.53 379.48
            L 484.75 378.76
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.690"
              d="
            M 72.00 379.50
            L 73.47 380.22
            C 78.68 385.60 84.30 387.27 91.81 387.99
            Q 92.13 388.02 92.24 388.31
            Q 92.32 388.51 92.52 388.50
            Q 92.99 388.47 93.00 388.48
            Q 110.57 392.14 128.49 392.90
            Q 128.94 392.92 129.24 393.26
            C 129.92 394.02 146.76 393.54 146.31 394.40
            A 0.15 0.15 0.0 0 0 146.52 394.60
            Q 146.69 394.50 146.74 394.32
            Q 146.84 393.93 147.23 394.05
            Q 150.82 395.18 154.66 394.80
            Q 155.06 394.76 155.02 395.16
            Q 155.00 395.37 155.00 395.54
            Q 155.00 395.80 155.27 395.81
            L 163.31 395.84
            A 1.22 1.21 68.1 0 1 164.19 396.22
            Q 165.31 397.39 167.15 396.71
            A 0.91 0.91 0.0 0 1 168.07 396.88
            Q 168.21 397.01 168.20 397.13
            Q 168.12 397.77 168.25 397.78
            L 171.94 397.81
            Q 172.01 397.81 172.05 397.88
            L 172.21 398.18
            Q 172.23 398.21 172.08 398.19
            Q 171.68 398.14 171.32 398.32
            Q 170.75 398.61 171.39 398.68
            L 173.75 398.92
            A 0.17 0.16 45.0 0 1 173.76 399.24
            Q 173.64 399.25 173.51 399.25
            Q 172.16 399.26 173.47 399.60
            L 174.58 399.88
            Q 174.99 399.99 175.12 400.40
            Q 175.28 400.95 176.18 400.96
            Q 176.49 400.97 176.27 401.19
            L 176.04 401.42
            A 0.19 0.19 0.0 0 0 176.16 401.74
            L 177.80 401.86
            Q 178.41 401.90 178.17 402.47
            Q 177.77 403.43 178.49 404.14
            Q 178.53 404.18 178.49 404.22
            L 178.30 404.41
            A 0.18 0.18 0.0 0 0 178.41 404.72
            L 180.76 405.00
            Q 181.04 405.04 181.04 405.32
            L 181.04 405.65
            Q 181.04 405.72 181.12 405.72
            Q 182.24 405.80 183.39 405.78
            Q 183.88 405.78 184.13 406.20
            Q 184.90 407.53 186.67 406.83
            A 0.40 0.39 -15.0 0 1 187.21 407.14
            L 187.26 407.50
            Q 187.32 407.90 187.71 407.80
            Q 189.50 407.32 190.65 408.72
            Q 190.84 408.95 191.14 408.93
            L 193.50 408.75
            A 0.52 0.34 10.5 0 1 194.09 409.31
            Q 193.96 409.46 194.02 409.61
            Q 194.16 409.99 194.55 409.86
            Q 196.34 409.28 197.50 410.56
            Q 197.79 410.87 198.21 410.82
            Q 202.35 410.30 206.15 411.73
            A 2.05 2.04 -38.8 0 0 207.18 411.84
            Q 208.60 411.62 209.65 412.68
            Q 209.70 412.72 209.71 412.66
            L 209.75 412.35
            Q 209.84 411.64 209.99 412.34
            Q 210.03 412.51 210.05 412.68
            Q 210.06 412.71 210.09 412.71
            L 217.44 412.87
            Q 217.86 412.88 218.05 413.26
            C 218.50 414.16 228.72 413.66 230.59 413.70
            A 0.64 0.64 0.0 0 1 231.12 414.01
            L 231.38 414.44
            Q 231.57 414.77 231.70 414.41
            Q 231.74 414.28 231.78 414.15
            A 0.14 0.14 0.0 0 1 232.04 414.12
            L 232.24 414.46
            Q 232.49 414.89 232.75 414.46
            Q 232.79 414.38 232.87 414.18
            A 0.03 0.02 52.3 0 1 232.92 414.19
            Q 232.97 414.56 233.21 414.76
            A 1.00 0.97 64.5 0 0 233.85 415.00
            L 272.65 414.86
            Q 273.16 414.86 273.60 414.58
            C 276.27 412.88 279.21 414.33 282.02 413.27
            Q 282.06 413.25 282.06 413.29
            Q 282.05 413.46 282.25 413.63
            Q 282.43 413.78 282.51 413.56
            Q 282.77 412.86 283.32 413.41
            Q 283.55 413.64 283.61 413.32
            L 283.67 412.98
            Q 283.68 412.92 283.75 412.92
            L 291.72 412.75
            Q 291.95 412.75 291.99 412.98
            L 292.04 413.36
            A 0.32 0.32 0.0 0 0 292.62 413.49
            L 292.95 412.98
            A 0.04 0.04 0.0 0 1 293.01 412.97
            L 293.29 413.25
            Q 293.41 413.37 293.50 413.22
            L 293.68 412.93
            Q 293.70 412.89 293.74 412.89
            Q 297.62 412.53 301.52 412.74
            Q 301.76 412.76 301.75 412.52
            Q 301.75 412.38 301.74 412.25
            A 0.30 0.22 36.8 0 1 302.25 412.25
            Q 302.31 412.37 302.32 412.50
            Q 302.32 412.61 302.40 412.53
            C 303.48 411.36 305.60 412.01 305.90 411.20
            Q 306.13 410.59 306.13 411.19
            L 306.12 411.51
            Q 306.12 411.63 306.23 411.57
            Q 308.35 410.33 310.76 410.76
            A 0.91 0.89 -63.5 0 0 311.59 410.47
            C 313.10 408.77 315.32 410.48 315.99 409.25
            Q 316.19 408.88 316.62 408.90
            Q 318.12 408.96 319.25 407.97
            A 0.97 0.94 -62.8 0 1 319.91 407.75
            L 321.92 407.89
            Q 322.43 407.92 322.71 407.50
            Q 323.46 406.37 324.95 406.84
            Q 325.50 407.02 325.77 406.51
            Q 326.73 404.72 328.56 404.84
            Q 329.07 404.87 329.44 404.51
            Q 330.34 403.60 331.74 403.83
            Q 332.20 403.91 332.56 403.61
            Q 334.54 401.99 336.93 401.66
            Q 337.41 401.59 337.83 401.33
            C 339.85 400.05 345.40 397.36 348.16 397.66
            Q 348.59 397.71 348.80 397.33
            C 349.38 396.33 350.78 397.06 351.55 396.69
            Q 351.79 396.57 352.05 396.59
            L 353.44 396.70
            Q 353.89 396.74 353.65 396.35
            Q 353.51 396.14 353.54 395.92
            A 0.10 0.10 0.0 0 1 353.64 395.83
            C 356.91 395.93 358.52 394.56 361.02 394.63
            Q 361.48 394.64 361.48 394.18
            C 361.49 393.80 365.41 393.35 365.89 393.19
            A 0.31 0.30 58.2 0 1 366.22 393.27
            L 366.49 393.53
            Q 366.52 393.56 366.55 393.52
            L 366.81 393.13
            Q 366.97 392.89 367.26 392.89
            C 370.18 392.88 372.84 391.86 375.53 391.83
            C 381.85 391.78 388.43 390.79 394.26 390.77
            Q 412.38 390.71 430.50 390.79
            Q 418.69 392.19 406.76 391.98
            C 404.96 391.95 403.78 392.74 402.07 392.75
            Q 394.46 392.79 386.85 392.87
            Q 383.66 392.90 380.06 393.29
            Q 376.53 393.66 372.99 393.96
            Q 372.84 393.97 372.79 394.11
            L 372.69 394.44
            Q 372.59 394.73 372.38 394.51
            Q 372.17 394.30 372.00 394.13
            Q 371.93 394.05 371.87 394.14
            C 371.20 395.12 361.42 395.76 361.50 396.28
            Q 361.58 396.79 361.07 396.69
            Q 359.48 396.41 358.58 397.50
            Q 358.35 397.79 358.26 397.43
            Q 358.21 397.26 358.20 397.09
            Q 358.19 396.99 358.11 397.04
            L 355.23 398.68
            Q 354.86 398.89 354.43 398.82
            Q 353.37 398.63 352.63 399.51
            Q 352.28 399.93 351.75 399.80
            Q 350.59 399.52 349.81 400.16
            Q 349.43 400.47 348.96 400.61
            Q 346.18 401.42 343.64 402.87
            C 341.72 403.98 339.38 404.10 337.42 405.58
            Q 337.03 405.87 336.54 405.81
            Q 335.48 405.66 334.72 406.40
            Q 334.33 406.77 333.80 406.77
            Q 332.87 406.78 332.28 407.37
            Q 332.24 407.40 332.24 407.35
            Q 332.23 407.17 332.17 407.02
            Q 332.07 406.72 331.93 407.00
            Q 330.72 409.43 328.20 408.74
            A 0.96 0.95 -57.1 0 0 327.32 408.93
            C 325.90 410.11 323.30 409.37 322.73 410.33
            Q 322.55 410.64 322.20 410.66
            Q 321.21 410.73 320.41 411.51
            Q 320.23 411.70 319.96 411.71
            L 315.79 411.86
            Q 315.32 411.88 315.63 412.23
            Q 315.87 412.51 315.63 412.75
            A 0.20 0.20 0.0 0 1 315.29 412.64
            L 315.25 412.29
            A 0.15 0.14 -19.5 0 0 315.03 412.19
            Q 313.81 412.98 312.25 412.72
            Q 311.78 412.64 311.37 412.89
            L 310.50 413.45
            Q 310.27 413.59 310.24 413.33
            L 310.19 413.00
            A 0.17 0.16 50.0 0 0 309.87 412.97
            C 309.61 413.79 306.36 413.90 305.29 414.59
            Q 304.88 414.85 304.39 414.75
            Q 302.32 414.31 300.56 415.42
            Q 300.12 415.70 299.60 415.72
            L 289.93 415.94
            Q 289.63 415.95 289.63 416.25
            L 289.62 416.58
            Q 289.62 416.69 289.52 416.66
            L 288.98 416.47
            Q 288.84 416.42 288.75 416.55
            C 288.73 416.58 281.16 417.02 280.16 417.17
            C 278.75 417.39 276.99 416.96 275.62 417.40
            Q 274.48 417.76 273.81 417.76
            Q 241.66 417.72 232.56 417.85
            Q 229.28 417.89 227.06 417.23
            Q 226.86 417.17 226.73 417.34
            Q 226.66 417.43 226.49 417.53
            Q 226.48 417.53 226.47 417.52
            L 226.07 417.03
            Q 225.74 416.63 225.65 417.14
            L 225.58 417.50
            Q 225.56 417.61 225.49 417.53
            L 225.21 417.25
            Q 224.85 416.89 224.71 417.38
            Q 224.64 417.59 224.53 417.78
            A 0.14 0.13 -24.6 0 1 224.28 417.69
            Q 224.40 417.15 224.03 417.01
            Q 223.70 416.88 223.63 417.23
            L 223.58 417.50
            Q 223.56 417.61 223.49 417.53
            L 223.23 417.27
            Q 223.00 417.04 222.77 417.27
            L 222.51 417.53
            Q 222.49 417.55 222.47 417.54
            L 221.90 417.29
            Q 221.80 417.24 221.72 417.32
            L 221.52 417.52
            A 0.02 0.02 0.0 0 1 221.49 417.52
            L 221.08 417.22
            Q 220.93 417.11 220.80 417.25
            L 220.52 417.52
            Q 220.49 417.55 220.47 417.52
            L 220.02 416.97
            A 0.11 0.11 0.0 0 0 219.83 417.00
            Q 219.78 417.13 219.76 417.27
            Q 219.68 417.64 219.41 417.37
            L 219.02 416.98
            Q 219.00 416.96 218.98 416.98
            L 218.70 417.26
            Q 218.50 417.46 218.30 417.26
            C 218.07 417.03 217.69 416.74 217.48 417.23
            Q 217.39 417.44 217.17 417.51
            Q 216.32 417.76 215.90 417.18
            Q 215.71 416.92 215.40 416.89
            L 200.15 415.53
            Q 200.07 415.52 200.05 415.44
            Q 200.02 415.30 199.98 415.19
            Q 199.91 415.00 199.71 415.00
            L 195.02 415.00
            A 0.90 0.86 -22.8 0 1 194.42 414.77
            Q 194.16 414.53 193.95 414.35
            Q 193.85 414.26 193.76 414.36
            Q 193.66 414.47 193.56 414.56
            A 0.19 0.14 -24.8 0 1 193.25 414.50
            Q 193.28 414.37 193.24 414.22
            Q 193.14 413.74 192.65 413.77
            Q 190.09 413.96 187.70 413.24
            Q 187.65 413.22 187.67 413.27
            Q 187.72 413.36 187.58 413.51
            Q 187.55 413.54 187.52 413.52
            Q 186.03 412.35 184.07 412.76
            Q 183.64 412.85 183.49 412.44
            C 182.99 411.06 180.78 412.64 180.03 411.11
            Q 179.85 410.75 179.45 410.75
            L 178.35 410.75
            Q 177.84 410.75 177.44 410.44
            Q 176.19 409.47 174.51 409.70
            Q 174.12 409.76 174.12 409.36
            L 174.13 409.01
            A 0.22 0.22 0.0 0 0 173.87 408.79
            Q 171.47 409.18 169.99 407.25
            Q 169.66 406.82 169.12 406.80
            L 166.42 406.71
            Q 165.88 406.70 166.15 406.23
            Q 166.31 405.96 165.87 405.88
            Q 165.61 405.84 165.35 405.87
            Q 164.58 405.97 164.18 405.26
            Q 163.98 404.90 163.56 404.89
            L 161.84 404.84
            Q 161.34 404.82 161.21 404.33
            L 161.14 404.03
            Q 161.02 403.57 160.59 403.75
            Q 159.38 404.25 158.96 403.33
            Q 158.79 402.98 158.41 402.97
            Q 157.40 402.95 156.80 402.12
            Q 156.62 401.88 156.33 401.87
            L 152.36 401.69
            Q 152.01 401.67 152.00 401.32
            Q 152.00 401.18 152.00 401.03
            Q 152.00 400.90 151.86 400.89
            L 149.29 400.72
            Q 148.88 400.69 149.07 400.32
            L 149.20 400.09
            Q 149.31 399.87 149.07 399.87
            L 143.18 399.70
            Q 142.75 399.69 142.45 399.39
            Q 141.55 398.51 140.39 397.98
            Q 139.93 397.78 139.44 397.87
            Q 138.65 398.01 138.02 397.41
            Q 137.80 397.21 137.66 397.47
            C 137.38 398.01 136.34 397.77 136.07 397.43
            Q 135.89 397.21 135.70 397.42
            Q 135.57 397.56 135.45 397.67
            Q 135.30 397.83 135.32 397.61
            Q 135.38 396.86 134.73 396.89
            Q 131.79 397.04 129.39 396.07
            Q 126.85 395.04 125.52 394.87
            C 117.46 393.89 111.91 392.84 101.43 391.11
            Q 89.46 389.13 77.95 385.25
            Q 77.49 385.09 77.21 384.71
            Q 76.24 383.35 74.67 383.03
            Q 74.21 382.93 73.96 382.54
            L 72.00 379.50
            Z"
            />
            <path
              fill="#000000"
              fillOpacity="0.812"
              d="
            M 457.00 384.02
            C 454.65 384.76 452.47 385.43 449.95 385.74
            C 444.73 386.37 439.38 387.37 434.24 387.52
            C 430.72 387.62 400.03 388.25 399.51 387.31
            Q 399.40 387.10 399.16 387.08
            C 394.12 386.67 388.72 387.55 384.26 387.46
            Q 365.59 387.07 347.02 389.12
            A 0.27 0.26 87.7 0 0 346.78 389.39
            C 346.78 389.92 346.12 389.89 346.27 389.27
            Q 346.35 388.97 346.15 389.20
            Q 345.89 389.51 345.64 389.72
            Q 345.39 389.92 345.29 389.62
            L 345.20 389.34
            Q 345.18 389.30 345.14 389.31
            Q 339.65 390.92 334.07 392.17
            Q 333.82 392.23 333.77 392.48
            Q 333.74 392.67 333.53 392.76
            Q 333.46 392.79 333.42 392.73
            L 333.21 392.41
            Q 333.06 392.18 332.82 392.31
            Q 331.28 393.10 330.04 392.21
            A 0.18 0.18 0.0 0 0 329.76 392.31
            Q 329.72 392.46 329.69 392.63
            Q 329.69 392.65 329.67 392.65
            L 325.10 393.09
            Q 324.89 393.11 324.83 393.30
            Q 324.75 393.53 324.67 393.73
            A 0.22 0.22 0.0 0 1 324.25 393.68
            L 324.21 393.36
            Q 324.20 393.30 324.13 393.32
            Q 322.64 393.84 321.06 393.75
            Q 320.62 393.73 320.28 393.99
            Q 318.89 395.04 317.08 394.91
            Q 316.75 394.88 316.75 395.21
            Q 316.75 395.40 316.77 395.59
            Q 316.86 396.30 316.45 395.71
            Q 316.29 395.47 316.15 395.22
            A 0.23 0.18 33.8 0 0 315.74 395.25
            Q 315.75 395.37 315.76 395.50
            A 0.29 0.22 36.1 0 1 315.25 395.51
            Q 315.19 395.40 315.19 395.26
            Q 315.19 395.16 315.10 395.22
            C 313.77 396.17 312.34 395.53 311.26 395.60
            Q 309.91 395.69 308.50 395.88
            A 0.22 0.22 0.0 0 1 308.25 395.69
            L 308.20 395.34
            Q 308.20 395.30 308.16 395.31
            Q 306.45 396.01 304.27 395.66
            Q 301.46 395.21 298.59 396.43
            Q 298.42 396.50 298.39 396.32
            L 298.33 395.96
            A 0.13 0.12 56.2 0 0 298.10 395.91
            L 297.55 396.77
            Q 297.30 397.16 296.86 396.99
            Q 294.94 396.23 293.50 397.36
            Q 293.41 397.43 293.39 397.31
            L 293.33 396.98
            A 0.10 0.10 0.0 0 0 293.16 396.92
            L 292.55 397.52
            Q 292.26 397.81 291.85 397.76
            Q 289.97 397.54 288.43 398.47
            A 0.09 0.08 -1.6 0 1 288.31 398.36
            L 288.46 398.07
            A 0.04 0.04 0.0 0 0 288.41 398.02
            Q 286.67 399.11 284.57 398.86
            Q 284.09 398.80 283.83 399.21
            C 283.04 400.45 282.05 399.15 281.08 399.90
            Q 280.71 400.18 280.29 399.99
            C 278.48 399.17 277.59 400.76 276.36 401.38
            Q 275.60 401.76 274.85 402.20
            Q 274.57 402.36 274.34 402.13
            L 274.04 401.83
            Q 273.86 401.65 273.64 401.78
            L 273.27 402.00
            Q 272.93 402.20 272.56 402.05
            Q 272.29 401.93 272.16 401.79
            A 0.41 0.41 0.0 0 0 271.55 401.78
            Q 270.78 402.64 270.28 401.95
            Q 269.94 401.49 269.51 401.86
            Q 268.95 402.33 268.32 401.99
            Q 267.26 401.41 266.62 402.24
            A 0.09 0.08 51.7 0 1 266.48 402.22
            L 266.34 401.96
            Q 266.27 401.82 266.11 401.82
            Q 264.53 401.73 263.00 401.93
            Q 262.82 401.96 262.78 402.13
            Q 262.73 402.28 262.64 402.40
            Q 262.60 402.44 262.57 402.39
            L 262.21 401.79
            Q 262.01 401.44 261.70 401.71
            Q 261.38 402.01 260.90 401.92
            Q 260.42 401.82 260.16 401.40
            Q 259.61 400.52 258.55 400.76
            A 0.32 0.19 12.1 0 1 258.16 400.41
            Q 258.30 400.35 258.36 400.24
            A 0.13 0.13 0.0 0 0 258.32 400.06
            L 257.90 399.81
            Q 257.42 399.52 257.67 400.02
            C 258.19 401.10 256.37 401.35 256.04 400.28
            Q 255.93 399.95 255.73 400.33
            Q 255.38 401.00 253.97 400.62
            A 0.08 0.08 0.0 0 1 253.98 400.46
            Q 254.24 400.42 254.35 400.27
            Q 254.45 400.13 254.30 400.04
            L 253.93 399.83
            Q 253.47 399.55 253.68 400.05
            Q 253.73 400.19 253.77 400.34
            Q 253.86 400.67 253.53 400.74
            Q 253.32 400.79 253.11 400.71
            Q 253.04 400.69 253.09 400.63
            Q 253.25 400.44 253.25 400.25
            A 0.18 0.17 53.6 0 0 252.91 400.18
            Q 252.86 400.41 252.73 400.51
            Q 252.54 400.66 252.46 400.43
            L 252.28 399.90
            Q 252.05 399.22 251.58 399.76
            Q 250.78 400.67 250.26 399.92
            Q 249.88 399.38 249.39 399.81
            Q 248.89 400.24 248.49 400.07
            Q 248.37 400.02 248.26 400.00
            Q 246.16 399.55 244.00 399.91
            Q 243.71 399.96 243.74 400.25
            Q 243.75 400.37 243.75 400.50
            A 0.18 0.17 83.8 0 1 243.62 400.67
            Q 242.36 401.01 242.29 400.20
            A 0.42 0.41 -1.5 0 0 241.88 399.82
            L 239.04 399.79
            Q 238.53 399.78 238.15 399.44
            Q 236.54 397.99 234.61 398.63
            Q 234.19 398.77 234.23 398.33
            Q 234.25 398.16 234.25 398.01
            Q 234.25 397.79 234.03 397.79
            L 229.94 397.81
            Q 229.53 397.81 229.44 397.42
            C 229.26 396.62 225.52 396.81 224.62 396.70
            Q 224.38 396.67 224.36 396.42
            C 224.33 395.79 223.21 395.20 222.70 395.47
            Q 222.30 395.69 222.23 395.23
            Q 222.21 395.10 222.16 394.98
            Q 222.09 394.81 222.00 394.96
            Q 221.82 395.26 221.63 395.49
            Q 221.17 396.07 221.36 395.30
            Q 221.43 395.05 221.14 394.90
            Q 220.62 394.64 220.74 395.21
            Q 220.80 395.47 220.69 395.68
            A 0.25 0.24 -21.8 0 1 220.24 395.50
            Q 220.30 395.37 220.33 395.25
            Q 220.36 395.13 220.25 395.12
            L 216.51 394.66
            Q 216.18 394.62 216.25 394.30
            Q 216.27 394.18 216.19 394.06
            A 0.22 0.22 0.0 0 0 215.79 394.15
            Q 215.76 394.35 215.69 394.48
            Q 215.25 395.18 215.25 394.50
            L 215.25 394.04
            Q 215.25 393.47 214.71 393.65
            Q 213.01 394.23 213.14 392.70
            A 0.19 0.18 66.4 0 0 212.81 392.56
            Q 212.67 392.77 212.42 392.75
            Q 212.21 392.73 212.21 392.52
            L 212.21 392.10
            A 0.15 0.14 -22.8 0 0 211.96 392.00
            Q 211.78 392.18 211.67 392.38
            A 0.29 0.15 -42.2 0 1 211.23 392.50
            Q 211.26 392.34 211.25 392.19
            A 0.14 0.13 -23.1 0 0 211.02 392.10
            L 210.69 392.44
            Q 210.39 392.74 210.39 392.31
            C 210.39 391.17 207.45 391.82 206.82 391.88
            Q 206.39 391.92 206.31 391.49
            C 206.20 390.80 202.78 390.71 202.03 390.40
            Q 201.85 390.32 201.84 390.34
            Q 201.74 390.52 201.49 390.66
            Q 201.01 390.91 201.26 390.43
            L 201.45 390.08
            Q 201.57 389.85 201.31 389.85
            L 192.11 389.77
            Q 191.68 389.76 191.54 389.35
            C 191.18 388.25 187.49 389.24 185.95 388.19
            Q 185.87 388.13 185.84 388.23
            Q 185.77 388.42 185.72 388.60
            A 0.23 0.22 -45.9 0 1 185.29 388.61
            L 185.20 388.35
            A 0.05 0.05 0.0 0 0 185.12 388.32
            Q 183.57 389.37 181.87 388.61
            Q 181.46 388.43 181.22 388.04
            Q 180.80 387.34 179.58 387.66
            A 0.25 0.25 0.0 0 1 179.34 387.25
            Q 179.59 386.99 179.93 386.95
            A 0.33 0.25 40.1 0 0 179.80 386.38
            Q 176.96 385.81 174.32 386.76
            Q 174.21 386.80 174.27 386.69
            L 174.42 386.44
            Q 174.43 386.43 174.41 386.42
            Q 171.71 386.18 169.11 386.48
            C 161.08 387.41 152.86 386.64 144.69 387.44
            Q 135.85 388.31 126.97 388.42
            Q 126.78 388.42 126.73 388.61
            C 126.65 388.87 126.34 388.76 126.24 388.55
            Q 126.14 388.34 125.90 388.34
            Q 106.13 388.78 86.96 383.89
            Q 85.54 383.53 83.71 382.69
            C 82.26 382.03 77.02 380.85 76.44 379.84
            C 80.78 380.48 84.43 382.07 88.90 382.24
            Q 91.42 382.33 94.99 383.02
            Q 106.85 385.28 122.05 384.26
            Q 122.19 384.25 122.23 384.40
            Q 122.27 384.55 122.26 384.68
            A 0.20 0.19 -74.0 0 0 122.36 384.87
            Q 123.29 385.33 123.82 384.51
            Q 124.10 384.07 124.16 384.49
            Q 124.17 384.57 124.03 384.70
            Q 123.85 384.87 124.09 384.87
            Q 132.17 385.01 140.24 385.01
            C 141.91 385.01 146.07 384.18 148.82 384.72
            Q 151.16 385.17 152.39 385.15
            Q 168.10 384.91 183.80 385.94
            C 194.92 386.66 205.74 386.43 216.69 387.12
            Q 229.46 387.93 235.21 387.96
            C 246.35 388.02 314.39 388.28 314.83 387.59
            Q 314.99 387.33 315.29 387.33
            Q 326.64 387.18 338.00 387.27
            Q 339.31 387.28 340.93 386.42
            A 1.96 1.90 -58.2 0 1 341.84 386.19
            Q 389.67 386.00 437.50 385.72
            Q 440.15 385.70 441.95 384.50
            A 1.54 1.51 27.2 0 1 442.82 384.23
            L 457.00 384.02
            Z"
            />
          </svg>
        </div>
      </div>
      {/* BOTONES CABECERA */}
      <div className="text-center font-bold ml-[0px] sm:mt-[10px] md:mt-[30px] mb-[30px] sm:ml-[60px] w-[100%] sm:w-[450px] h-[65px] flex justify-around">
        <Link to="/galeria">
          <button className="w-[163px] h-[65px] sm:w-[113px] sm:h-[50px] md:w-[163px] md:h-[65px] bg-[#00B5A1] border border-[#00B5A1] rounded hover:bg-[#0F4072] hover:border-none">
            GALERÍA
          </button>
        </Link>
        <Link to="/about">
          <button className="w-[163px] h-[65px] sm:w-[113px] sm:h-[50px] md:w-[163px] md:h-[65px] text-[#00B5A1] border border-[#00B5A1] rounded hover:bg-[#00B5A1] hover:text-white">
            ABOUT
          </button>
        </Link>
      </div>
      {/* FIN BOTONES CABECERA */}
    </header>
  );
}

export default Header;
