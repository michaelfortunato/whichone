/* eslint-disable react/no-unescaped-entities */
'use client'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import ConfettiExplosion from 'react-confetti-explosion'






const GavelSealed = (props: any) => (
  <svg
    viewBox="-73.284 0 573.284 544.378"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      transform="matrix(1, 0, 0, 1, 7.613984107971191, 32.73707962036133)"
      style={{}}
    >
      <g id="XMLID_22_" transform="matrix(1, 0, 0, 1, 0.236789, -3.136466)">
        <g style={{}}>
          <motion.g
            style={{
              transformOrigin: "214.644px 213.978px",
            }}
            animate={{ transform: "matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, -9e-06)" }}
            transition={{ ease: "backInOut", duration: 5 }}
          >
            <g style={{}}>
              <path
                style={{
                  fill: "#8E5D3C",
                }}
                d="M388.802,170.645l-86.34,86.34c-2.08-1.32-4.33-2.39-6.72-3.16c-2.08-0.68-3.91-1.85-5.43-3.48 c-4.64-4.98-4.35-13.09,0.65-18.1l36.55-36.55l36.55-36.55c2.63-2.62,6.11-3.95,9.55-3.95c3.11,0,6.19,1.09,8.56,3.3 c1.63,1.52,2.79,3.34,3.47,5.43C386.412,166.315,387.492,168.565,388.802,170.645z"
              />
              <g>
                <path
                  style={{
                    fill: "#8E5D3C",
                  }}
                  d="M410.152,186.475c4.64,4.98,4.34,13.1-0.66,18.11l-73.09,73.09c-5,5-13.13,5.3-18.11,0.66 c-1.63-1.52-2.79-3.35-3.47-5.44c-0.77-2.39-1.85-4.64-3.17-6.72l86.35-86.34c2.08,1.32,4.33,2.4,6.72,3.17 C406.802,183.675,408.632,184.845,410.152,186.475z"
                />
                <g>
                  <path
                    style={{
                      fill: "#8E5D3C",
                    }}
                    d="M246.812,28.655l-86.34,86.34c-2.08-1.32-4.33-2.39-6.72-3.16c-2.09-0.68-3.91-1.85-5.43-3.48 c-4.64-4.98-4.35-13.1,0.66-18.1l73.09-73.1c2.62-2.62,6.11-3.95,9.55-3.95c3.11,0,6.19,1.09,8.56,3.3 c1.63,1.51,2.79,3.34,3.47,5.43C244.422,24.325,245.492,26.575,246.812,28.655z"
                  />
                  <g style={{}}>
                    <g style={{}}>
                      <path
                        style={{
                          fill: "#8E5D3C",
                        }}
                        d="M268.162,44.485c2.2,2.37,3.29,5.44,3.29,8.55c0,3.44-1.33,6.93-3.95,9.56l-73.09,73.09 c-5,5-13.13,5.29-18.11,0.66c-1.63-1.52-2.8-3.35-3.47-5.44c-0.77-2.39-1.85-4.64-3.17-6.72l86.35-86.34 c2.08,1.32,4.33,2.4,6.72,3.17C264.812,41.685,266.642,42.855,268.162,44.485z"
                      />
                      <path
                        style={{
                          fill: "#C4804D",
                        }}
                        d="M249.272,201.815l-208.65,208.65c-5.66,5.65-14.85,5.66-20.51,0c-5.65-5.65-5.65-14.85,0-20.5 l208.65-208.65L249.272,201.815z"
                      />
                      <g>
                        <path
                          style={{
                            fill: "#333333",
                          }}
                          d="M419.662,177.615c9.36,10.04,8.92,26.26-0.97,36.16l-73.1,73.09c-5.13,5.13-11.96,7.72-18.74,7.72 c-6.31,0-12.58-2.24-17.42-6.74c-3.22-3-5.64-6.79-6.98-10.95c-1.64-5.07-5.64-9.07-10.7-10.7c-4.17-1.35-7.95-3.76-10.95-6.99 c-7.51-8.05-8.7-20.08-3.78-29.63l-18.56-18.56l-208.65,208.64c-5.36,5.36-12.4,8.05-19.44,8.05c-7.05,0-14.09-2.69-19.45-8.05 c-10.72-10.72-10.72-28.17,0-38.89l208.65-208.65l-22.49-22.48c-3.82,1.97-8.03,2.96-12.22,2.96c-6.31,0-12.58-2.24-17.42-6.74 c-3.22-3-5.64-6.79-6.98-10.95c-1.64-5.06-5.64-9.07-10.71-10.7c-4.16-1.35-7.94-3.76-10.94-6.99 c-9.36-10.04-8.92-26.26,0.97-36.15l73.1-73.1c9.89-9.89,26.11-10.33,36.16-0.98c3.22,3.01,5.63,6.79,6.98,10.95 c1.64,5.07,5.64,9.07,10.7,10.71c4.16,1.34,7.95,3.76,10.95,6.98c7.51,8.06,8.7,20.08,3.78,29.64l79.94,79.94 c9.55-4.93,21.58-3.73,29.64,3.77c3.22,3.01,5.63,6.79,6.98,10.95c1.64,5.07,5.64,9.07,10.7,10.71 C412.872,171.975,416.662,174.395,419.662,177.615z M409.492,204.585c5-5.01,5.3-13.13,0.66-18.11c-1.52-1.63-3.35-2.8-5.43-3.47 c-2.39-0.77-4.64-1.85-6.72-3.17l-86.35,86.34c1.32,2.08,2.4,4.33,3.17,6.72c0.68,2.09,1.84,3.92,3.47,5.44 c4.98,4.64,13.11,4.34,18.11-0.66L409.492,204.585z M302.462,256.985l86.34-86.34c-1.31-2.08-2.39-4.33-3.16-6.72 c-0.68-2.09-1.84-3.91-3.47-5.43c-2.37-2.21-5.45-3.3-8.56-3.3c-3.44,0-6.92,1.33-9.55,3.95l-36.55,36.55l-36.55,36.55 c-5,5.01-5.29,13.12-0.65,18.1c1.52,1.63,3.35,2.8,5.43,3.48C298.132,254.595,300.382,255.665,302.462,256.985z M351.312,153.515 l-78.17-78.18l-65.98,65.99l78.17,78.17l32.99-32.99L351.312,153.515z M271.452,53.035c0-3.11-1.09-6.18-3.29-8.55 c-1.52-1.63-3.35-2.8-5.43-3.47c-2.39-0.77-4.64-1.85-6.72-3.17l-86.35,86.34c1.32,2.08,2.4,4.33,3.17,6.72 c0.67,2.09,1.84,3.92,3.47,5.44c4.98,4.63,13.11,4.34,18.11-0.66l73.09-73.09C270.122,59.965,271.452,56.475,271.452,53.035z M40.622,410.465l208.65-208.65l-20.51-20.5l-208.65,208.65c-5.65,5.65-5.65,14.85,0,20.5 C25.772,416.125,34.962,416.115,40.622,410.465z M160.472,114.995l86.34-86.34c-1.32-2.08-2.39-4.33-3.16-6.72 c-0.68-2.09-1.84-3.92-3.47-5.43c-2.37-2.21-5.45-3.3-8.56-3.3c-3.44,0-6.93,1.33-9.55,3.95l-73.09,73.1 c-5.01,5-5.3,13.12-0.66,18.1c1.52,1.63,3.34,2.8,5.43,3.48C156.142,112.605,158.392,113.675,160.472,114.995z"
                        />
                      </g>
                    </g>
                    <path
                      style={{
                        fill: "rgb(196, 128, 77)",
                      }}
                      d="M273.142,75.335l78.17,78.18l-32.99,32.99l-32.99,32.99l-78.17-78.17L273.142,75.335z M332.442,156.865c2.54-2.54,2.54-6.65,0-9.19l-53.46-53.47c-2.54-2.54-6.66-2.54-9.2,0c-2.53,2.54-2.53,6.65,0,9.19l53.47,53.47 c1.27,1.27,2.94,1.9,4.6,1.9S331.182,158.135,332.442,156.865z"
                    />
                  </g>
                </g>
              </g>
            </g>
            <path
              style={{
                fill: "rgb(255, 255, 255)",
              }}
              d="M332.442,147.675c2.54,2.54,2.54,6.65,0,9.19c-1.26,1.27-2.93,1.9-4.59,1.9s-3.33-0.63-4.6-1.9 l-53.47-53.47c-2.53-2.54-2.53-6.65,0-9.19c2.54-2.54,6.66-2.54,9.2,0L332.442,147.675z"
            />
          </motion.g>
          <g>
            <rect
              x={243.922}
              y={374.345}
              style={{
                fill: "#C4804D",
              }}
              width={169}
              height={5}
            />
            <rect
              x={216.142}
              y={428.645}
              style={{
                fill: "#C4804D",
              }}
              width={224.57}
              height={14.7}
            />
            <polygon
              style={{
                fill: "#8E5D3C",
              }}
              points="416.212,392.345 434.052,415.645 222.802,415.645 240.632,392.345 &#9;&#9;&#9;"
            />
            <path
              style={{
                fill: "rgb(51, 51, 51)",
              }}
              d="M453.702,422.145l0.01,27.7c0,3.59-2.91,6.5-6.5,6.5h-237.57c-3.59,0-6.5-2.91-6.5-6.5l0.01-27.7 c0-1.4,0.44-2.79,1.32-3.95l26.45-34.55v-15.8c0-3.59,2.91-6.5,6.5-6.5h182c3.59,0,6.5,2.91,6.5,6.5v15.8l26.45,34.55 C453.252,419.355,453.702,420.745,453.702,422.145z M440.712,443.345v-14.7h-224.57v14.7H440.712z M434.052,415.645l-17.84-23.3 h-175.58l-17.83,23.3H434.052z M412.922,379.345v-5h-169v5H412.922z"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
)
const GavelAni = (props: any) => (
  <svg
    viewBox="-73.284 0 573.284 544.378"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      transform="matrix(1, 0, 0, 1, 7.613984107971191, 32.73707962036133)"
      style={{}}
    >
      <g id="XMLID_22_" transform="matrix(1, 0, 0, 1, 0.236789, -3.136466)">
        <g style={{}}>
          <g
            style={{
              transformOrigin: "214.644px 213.978px",
            }}
            transform="matrix(1, 0, 0, 1, 0, -0.000009)"
          >
            <g style={{}}>
              <path
                style={{
                  fill: "#8E5D3C",
                }}
                d="M388.802,170.645l-86.34,86.34c-2.08-1.32-4.33-2.39-6.72-3.16c-2.08-0.68-3.91-1.85-5.43-3.48 c-4.64-4.98-4.35-13.09,0.65-18.1l36.55-36.55l36.55-36.55c2.63-2.62,6.11-3.95,9.55-3.95c3.11,0,6.19,1.09,8.56,3.3 c1.63,1.52,2.79,3.34,3.47,5.43C386.412,166.315,387.492,168.565,388.802,170.645z"
              />
              <g>
                <path
                  style={{
                    fill: "#8E5D3C",
                  }}
                  d="M410.152,186.475c4.64,4.98,4.34,13.1-0.66,18.11l-73.09,73.09c-5,5-13.13,5.3-18.11,0.66 c-1.63-1.52-2.79-3.35-3.47-5.44c-0.77-2.39-1.85-4.64-3.17-6.72l86.35-86.34c2.08,1.32,4.33,2.4,6.72,3.17 C406.802,183.675,408.632,184.845,410.152,186.475z"
                />
                <g>
                  <path
                    style={{
                      fill: "#8E5D3C",
                    }}
                    d="M246.812,28.655l-86.34,86.34c-2.08-1.32-4.33-2.39-6.72-3.16c-2.09-0.68-3.91-1.85-5.43-3.48 c-4.64-4.98-4.35-13.1,0.66-18.1l73.09-73.1c2.62-2.62,6.11-3.95,9.55-3.95c3.11,0,6.19,1.09,8.56,3.3 c1.63,1.51,2.79,3.34,3.47,5.43C244.422,24.325,245.492,26.575,246.812,28.655z"
                  />
                  <g style={{}}>
                    <g style={{}}>
                      <path
                        style={{
                          fill: "#8E5D3C",
                        }}
                        d="M268.162,44.485c2.2,2.37,3.29,5.44,3.29,8.55c0,3.44-1.33,6.93-3.95,9.56l-73.09,73.09 c-5,5-13.13,5.29-18.11,0.66c-1.63-1.52-2.8-3.35-3.47-5.44c-0.77-2.39-1.85-4.64-3.17-6.72l86.35-86.34 c2.08,1.32,4.33,2.4,6.72,3.17C264.812,41.685,266.642,42.855,268.162,44.485z"
                      />
                      <path
                        style={{
                          fill: "#C4804D",
                        }}
                        d="M249.272,201.815l-208.65,208.65c-5.66,5.65-14.85,5.66-20.51,0c-5.65-5.65-5.65-14.85,0-20.5 l208.65-208.65L249.272,201.815z"
                      />
                      <g>
                        <path
                          style={{
                            fill: "#333333",
                          }}
                          d="M419.662,177.615c9.36,10.04,8.92,26.26-0.97,36.16l-73.1,73.09c-5.13,5.13-11.96,7.72-18.74,7.72 c-6.31,0-12.58-2.24-17.42-6.74c-3.22-3-5.64-6.79-6.98-10.95c-1.64-5.07-5.64-9.07-10.7-10.7c-4.17-1.35-7.95-3.76-10.95-6.99 c-7.51-8.05-8.7-20.08-3.78-29.63l-18.56-18.56l-208.65,208.64c-5.36,5.36-12.4,8.05-19.44,8.05c-7.05,0-14.09-2.69-19.45-8.05 c-10.72-10.72-10.72-28.17,0-38.89l208.65-208.65l-22.49-22.48c-3.82,1.97-8.03,2.96-12.22,2.96c-6.31,0-12.58-2.24-17.42-6.74 c-3.22-3-5.64-6.79-6.98-10.95c-1.64-5.06-5.64-9.07-10.71-10.7c-4.16-1.35-7.94-3.76-10.94-6.99 c-9.36-10.04-8.92-26.26,0.97-36.15l73.1-73.1c9.89-9.89,26.11-10.33,36.16-0.98c3.22,3.01,5.63,6.79,6.98,10.95 c1.64,5.07,5.64,9.07,10.7,10.71c4.16,1.34,7.95,3.76,10.95,6.98c7.51,8.06,8.7,20.08,3.78,29.64l79.94,79.94 c9.55-4.93,21.58-3.73,29.64,3.77c3.22,3.01,5.63,6.79,6.98,10.95c1.64,5.07,5.64,9.07,10.7,10.71 C412.872,171.975,416.662,174.395,419.662,177.615z M409.492,204.585c5-5.01,5.3-13.13,0.66-18.11c-1.52-1.63-3.35-2.8-5.43-3.47 c-2.39-0.77-4.64-1.85-6.72-3.17l-86.35,86.34c1.32,2.08,2.4,4.33,3.17,6.72c0.68,2.09,1.84,3.92,3.47,5.44 c4.98,4.64,13.11,4.34,18.11-0.66L409.492,204.585z M302.462,256.985l86.34-86.34c-1.31-2.08-2.39-4.33-3.16-6.72 c-0.68-2.09-1.84-3.91-3.47-5.43c-2.37-2.21-5.45-3.3-8.56-3.3c-3.44,0-6.92,1.33-9.55,3.95l-36.55,36.55l-36.55,36.55 c-5,5.01-5.29,13.12-0.65,18.1c1.52,1.63,3.35,2.8,5.43,3.48C298.132,254.595,300.382,255.665,302.462,256.985z M351.312,153.515 l-78.17-78.18l-65.98,65.99l78.17,78.17l32.99-32.99L351.312,153.515z M271.452,53.035c0-3.11-1.09-6.18-3.29-8.55 c-1.52-1.63-3.35-2.8-5.43-3.47c-2.39-0.77-4.64-1.85-6.72-3.17l-86.35,86.34c1.32,2.08,2.4,4.33,3.17,6.72 c0.67,2.09,1.84,3.92,3.47,5.44c4.98,4.63,13.11,4.34,18.11-0.66l73.09-73.09C270.122,59.965,271.452,56.475,271.452,53.035z M40.622,410.465l208.65-208.65l-20.51-20.5l-208.65,208.65c-5.65,5.65-5.65,14.85,0,20.5 C25.772,416.125,34.962,416.115,40.622,410.465z M160.472,114.995l86.34-86.34c-1.32-2.08-2.39-4.33-3.16-6.72 c-0.68-2.09-1.84-3.92-3.47-5.43c-2.37-2.21-5.45-3.3-8.56-3.3c-3.44,0-6.93,1.33-9.55,3.95l-73.09,73.1 c-5.01,5-5.3,13.12-0.66,18.1c1.52,1.63,3.34,2.8,5.43,3.48C156.142,112.605,158.392,113.675,160.472,114.995z"
                        />
                      </g>
                    </g>
                    <path
                      style={{
                        fill: "rgb(196, 128, 77)",
                      }}
                      d="M273.142,75.335l78.17,78.18l-32.99,32.99l-32.99,32.99l-78.17-78.17L273.142,75.335z M332.442,156.865c2.54-2.54,2.54-6.65,0-9.19l-53.46-53.47c-2.54-2.54-6.66-2.54-9.2,0c-2.53,2.54-2.53,6.65,0,9.19l53.47,53.47 c1.27,1.27,2.94,1.9,4.6,1.9S331.182,158.135,332.442,156.865z"
                    />
                  </g>
                </g>
              </g>
            </g>
            <path
              style={{
                fill: "rgb(255, 255, 255)",
              }}
              d="M332.442,147.675c2.54,2.54,2.54,6.65,0,9.19c-1.26,1.27-2.93,1.9-4.59,1.9s-3.33-0.63-4.6-1.9 l-53.47-53.47c-2.53-2.54-2.53-6.65,0-9.19c2.54-2.54,6.66-2.54,9.2,0L332.442,147.675z"
            />
            <animateTransform
              type="rotate"
              additive="sum"
              attributeName="transform"
              values="0;45"
              dur="0.5s"
              fill="freeze"
              keyTimes="0; 1"
              calcMode="spline"
              keySplines="0.25 0.1 0.25 1"
              begin="0.11s"
            />
          </g>
          <g>
            <rect
              x={243.922}
              y={374.345}
              style={{
                fill: "#C4804D",
              }}
              width={169}
              height={5}
            />
            <rect
              x={216.142}
              y={428.645}
              style={{
                fill: "#C4804D",
              }}
              width={224.57}
              height={14.7}
            />
            <polygon
              style={{
                fill: "#8E5D3C",
              }}
              points="416.212,392.345 434.052,415.645 222.802,415.645 240.632,392.345 &#9;&#9;&#9;"
            />
            <path
              style={{
                fill: "rgb(51, 51, 51)",
              }}
              d="M453.702,422.145l0.01,27.7c0,3.59-2.91,6.5-6.5,6.5h-237.57c-3.59,0-6.5-2.91-6.5-6.5l0.01-27.7 c0-1.4,0.44-2.79,1.32-3.95l26.45-34.55v-15.8c0-3.59,2.91-6.5,6.5-6.5h182c3.59,0,6.5,2.91,6.5,6.5v15.8l26.45,34.55 C453.252,419.355,453.702,420.745,453.702,422.145z M440.712,443.345v-14.7h-224.57v14.7H440.712z M434.052,415.645l-17.84-23.3 h-175.58l-17.83,23.3H434.052z M412.922,379.345v-5h-169v5H412.922z"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
)




function ApplePickingCard(props: any) {
  console.log(props.clickDirection)
  return (<motion.div className='rounded-md shadow-md bg-white container-md min-w-full text-black pl-4 '

    initial={props.clickDirection == 'right' && { x: "100vw" } || props.clickDirection == 'left' && { x: "-100vw" }}
    animate={{ x: 0 }}
    exit={props.clickDirection == 'right' ? { x: "100vw" } : { x: "-100vw" }}


  >
    <div className='flex flex-col gap-4 p-4'>
      <div className='flex justify-center items-center'>
        <h1 className="text-2xl">
          Apple Picking
        </h1>
      </div>
      <div className="flex">
        <div className='flex-1 flex items-center justify-center'>
          <Image priority src="/apple-farm.webp" alt="De apple farm" width={250} height={250} />
        </div>
        <div className='flex-1 flex items-center justify-center'>
          <Image src="/apple.svg" alt="De apple farm" width={250} height={250} />
        </div>
      </div>
      <div className='py-4 flex justify-center text-center'>
        <p>Now this place has it going <a target="_blank" className="inline text-red-500" href="https://www.lookoutfarm.com">on.</a></p>
      </div>
    </div>
  </motion.div>)
}
function CookingCard(props: any) {
  return (<motion.div className='rounded-md shadow-md bg-white container-md min-w-full text-black'
    initial={props.clickDirection == 'right' && { x: "100vw" } || props.clickDirection == 'left' && { x: "-100vw" }}
    animate={{ x: 0 }}
    exit={props.clickDirection == 'right' ? { x: "-100vw" } : { x: "100vw" }}
  >
    <div className='flex flex-col gap-4 p-4'>
      <div className='flex justify-center items-center'>
        <h1 className="text-2xl">
          Cooking Class
        </h1>
      </div>
      <div className="flex">
        <div className='flex-1 flex items-center justify-center'>
          <Image src="/pizza.svg" alt="Bonare" width={250} height={250} />
        </div>
        <div className='flex-1 flex items-center justify-center'>
          <Image src="/pizza.svg" alt="Bonare" width={250} height={250} />
        </div>
      </div>
      <div className='py-4 flex justify-center text-center'>
        <p>This is actually true. I tried to boil brocolli tonight. So I put the brocolli in a cup of cold water and then put that on the stove. Alot of it burned. Pain in the ass. This place looks cool <a target="_blank" className="inline text-red-500" href="https://www.eataly.com/us_en/chef-s-workshop-fresh-egg-pasta-2023-10-13-14739">though.</a>
          {' '}Alright website's all done I'm calling it.
        </p>
      </div>
    </div>
  </motion.div>)
}

function JazzCard(props: any) {
  return (<motion.div className='rounded-md shadow-md bg-white container-md min-w-full text-black'
    initial={props.clickDirection == 'right' && { x: "100vw" } || props.clickDirection == 'left' && { x: "-100vw" }}
    animate={{ x: 0 }}
    exit={props.clickDirection == 'right' ? { x: "-100vw" } : { x: "100vw" }}
  >
    <div className='flex flex-col gap-4 p-4'>
      <div className='flex justify-center items-center'>
        <h1 className="text-2xl">
          Jazz Club
        </h1>
      </div>
      <div className="flex">
        <div className='flex-1 flex items-center justify-center'>
          <Image priority className="rounded" src="/stephane.jpg" alt="Bonare" width={250} height={250} />
        </div>
        <div className='flex-1 flex items-center justify-center'>
          <Image priority className="rounded" src="/django.jpg" alt="Bonare" width={100} height={100} />
        </div>
      </div>
      <div className='py-4 flex justify-center text-center'>
        <p>Go to a jazz bar? Most certainly<a target="_blank" className="inline text-red-500" href="https://www.eataly.com/us_en/chef-s-workshop-fresh-egg-pasta-2023-10-13-14739"></a>
        </p>
      </div>
    </div>
  </motion.div>)
}

function Randomn(props: any) {
  return (<motion.div className='rounded-md shadow-md bg-white container-md min-w-full text-black'
    initial={props.clickDirection == 'right' && { x: "100vw" } || props.clickDirection == 'left' && { x: "-100vw" }}
    animate={{ x: 0 }}
    exit={props.clickDirection == 'right' ? { x: "-100vw" } : { x: "100vw" }}
  >
    <div className='flex flex-col gap-4 p-4 min-h-[16]'>
      <div className='flex justify-center items-center'>
        <h1 className="text-2xl">
          ??
        </h1>
      </div>
      <div className="flex justify-center">
        <Image priority className="rounded" src="/lewis.jpg" alt="Bonare" width={250} height={250} />
      </div>
      <div className='text-center'>
        Excellent
      </div>
    </div>
  </motion.div>)
}

function RedFlag(props: any) {
  return (<motion.div className='rounded-md shadow-md bg-white container-md min-w-full text-black'
    initial={props.clickDirection == 'right' && { x: "100vw" } || props.clickDirection == 'left' && { x: "-100vw" }}
    animate={{ x: 0 }}
    exit={props.clickDirection == 'right' ? { x: "-100vw" } : { x: "100vw" }}
  >
    <div className='flex flex-col gap-4 p-4'>
      <div className='flex justify-center items-center'>

      </div>
      <div className="flex">
        <div className='flex-1 flex items-center justify-center'>
          <Image priority src="/redflag.svg" alt="Bonare" width={250} height={250} />
        </div>
        <div className='flex-1 flex items-center justify-center'>
          <Image priority src="/simp-pic.png" alt="Bonare" width={250} height={250} />
        </div>
      </div>
      <div className='py-4 flex justify-center text-center'>
        <p>Too much? No Problem. Hit that gavel and let me know!</p>
      </div>
    </div>
  </motion.div>)
}


const Gavel = (props: any) => (
  <svg
    viewBox="-73.284 0 573.284 544.378"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      transform="matrix(1, 0, 0, 1, 7.613984107971191, 32.73707962036133)"
      style={{}}
    >
      <g id="XMLID_22_" transform="matrix(1, 0, 0, 1, 0.236789, -3.136466)">
        <g style={{}}>
          <motion.g
            style={{
              transformOrigin: "214.644px 213.978px",
            }}
            transform="matrix(1, 0, 0, 1, 0, -0.000009)"
            animate={props.isClicked ? { rotate: 45 } : { rotate: 0 }}
            initial={false}
          >
            <path
              style={{
                fill: "#8E5D3C",
              }}
              d="M388.802,170.645l-86.34,86.34c-2.08-1.32-4.33-2.39-6.72-3.16c-2.08-0.68-3.91-1.85-5.43-3.48 c-4.64-4.98-4.35-13.09,0.65-18.1l36.55-36.55l36.55-36.55c2.63-2.62,6.11-3.95,9.55-3.95c3.11,0,6.19,1.09,8.56,3.3 c1.63,1.52,2.79,3.34,3.47,5.43C386.412,166.315,387.492,168.565,388.802,170.645z"
            />
            <g>
              <path
                style={{
                  fill: "#8E5D3C",
                }}
                d="M410.152,186.475c4.64,4.98,4.34,13.1-0.66,18.11l-73.09,73.09c-5,5-13.13,5.3-18.11,0.66 c-1.63-1.52-2.79-3.35-3.47-5.44c-0.77-2.39-1.85-4.64-3.17-6.72l86.35-86.34c2.08,1.32,4.33,2.4,6.72,3.17 C406.802,183.675,408.632,184.845,410.152,186.475z"
              />
              <g>
                <path
                  style={{
                    fill: "#8E5D3C",
                  }}
                  d="M246.812,28.655l-86.34,86.34c-2.08-1.32-4.33-2.39-6.72-3.16c-2.09-0.68-3.91-1.85-5.43-3.48 c-4.64-4.98-4.35-13.1,0.66-18.1l73.09-73.1c2.62-2.62,6.11-3.95,9.55-3.95c3.11,0,6.19,1.09,8.56,3.3 c1.63,1.51,2.79,3.34,3.47,5.43C244.422,24.325,245.492,26.575,246.812,28.655z"
                />
                <g style={{}}>
                  <g style={{}}>
                    <path
                      style={{
                        fill: "#8E5D3C",
                      }}
                      d="M268.162,44.485c2.2,2.37,3.29,5.44,3.29,8.55c0,3.44-1.33,6.93-3.95,9.56l-73.09,73.09 c-5,5-13.13,5.29-18.11,0.66c-1.63-1.52-2.8-3.35-3.47-5.44c-0.77-2.39-1.85-4.64-3.17-6.72l86.35-86.34 c2.08,1.32,4.33,2.4,6.72,3.17C264.812,41.685,266.642,42.855,268.162,44.485z"
                    />
                    <path
                      style={{
                        fill: "#C4804D",
                      }}
                      d="M249.272,201.815l-208.65,208.65c-5.66,5.65-14.85,5.66-20.51,0c-5.65-5.65-5.65-14.85,0-20.5 l208.65-208.65L249.272,201.815z"
                    />
                    <g>
                      <path
                        style={{
                          fill: "#333333",
                        }}
                        d="M419.662,177.615c9.36,10.04,8.92,26.26-0.97,36.16l-73.1,73.09c-5.13,5.13-11.96,7.72-18.74,7.72 c-6.31,0-12.58-2.24-17.42-6.74c-3.22-3-5.64-6.79-6.98-10.95c-1.64-5.07-5.64-9.07-10.7-10.7c-4.17-1.35-7.95-3.76-10.95-6.99 c-7.51-8.05-8.7-20.08-3.78-29.63l-18.56-18.56l-208.65,208.64c-5.36,5.36-12.4,8.05-19.44,8.05c-7.05,0-14.09-2.69-19.45-8.05 c-10.72-10.72-10.72-28.17,0-38.89l208.65-208.65l-22.49-22.48c-3.82,1.97-8.03,2.96-12.22,2.96c-6.31,0-12.58-2.24-17.42-6.74 c-3.22-3-5.64-6.79-6.98-10.95c-1.64-5.06-5.64-9.07-10.71-10.7c-4.16-1.35-7.94-3.76-10.94-6.99 c-9.36-10.04-8.92-26.26,0.97-36.15l73.1-73.1c9.89-9.89,26.11-10.33,36.16-0.98c3.22,3.01,5.63,6.79,6.98,10.95 c1.64,5.07,5.64,9.07,10.7,10.71c4.16,1.34,7.95,3.76,10.95,6.98c7.51,8.06,8.7,20.08,3.78,29.64l79.94,79.94 c9.55-4.93,21.58-3.73,29.64,3.77c3.22,3.01,5.63,6.79,6.98,10.95c1.64,5.07,5.64,9.07,10.7,10.71 C412.872,171.975,416.662,174.395,419.662,177.615z M409.492,204.585c5-5.01,5.3-13.13,0.66-18.11c-1.52-1.63-3.35-2.8-5.43-3.47 c-2.39-0.77-4.64-1.85-6.72-3.17l-86.35,86.34c1.32,2.08,2.4,4.33,3.17,6.72c0.68,2.09,1.84,3.92,3.47,5.44 c4.98,4.64,13.11,4.34,18.11-0.66L409.492,204.585z M302.462,256.985l86.34-86.34c-1.31-2.08-2.39-4.33-3.16-6.72 c-0.68-2.09-1.84-3.91-3.47-5.43c-2.37-2.21-5.45-3.3-8.56-3.3c-3.44,0-6.92,1.33-9.55,3.95l-36.55,36.55l-36.55,36.55 c-5,5.01-5.29,13.12-0.65,18.1c1.52,1.63,3.35,2.8,5.43,3.48C298.132,254.595,300.382,255.665,302.462,256.985z M351.312,153.515 l-78.17-78.18l-65.98,65.99l78.17,78.17l32.99-32.99L351.312,153.515z M271.452,53.035c0-3.11-1.09-6.18-3.29-8.55 c-1.52-1.63-3.35-2.8-5.43-3.47c-2.39-0.77-4.64-1.85-6.72-3.17l-86.35,86.34c1.32,2.08,2.4,4.33,3.17,6.72 c0.67,2.09,1.84,3.92,3.47,5.44c4.98,4.63,13.11,4.34,18.11-0.66l73.09-73.09C270.122,59.965,271.452,56.475,271.452,53.035z M40.622,410.465l208.65-208.65l-20.51-20.5l-208.65,208.65c-5.65,5.65-5.65,14.85,0,20.5 C25.772,416.125,34.962,416.115,40.622,410.465z M160.472,114.995l86.34-86.34c-1.32-2.08-2.39-4.33-3.16-6.72 c-0.68-2.09-1.84-3.92-3.47-5.43c-2.37-2.21-5.45-3.3-8.56-3.3c-3.44,0-6.93,1.33-9.55,3.95l-73.09,73.1 c-5.01,5-5.3,13.12-0.66,18.1c1.52,1.63,3.34,2.8,5.43,3.48C156.142,112.605,158.392,113.675,160.472,114.995z"
                      />
                    </g>
                  </g>
                  <path
                    style={{
                      fill: "rgb(196, 128, 77)",
                    }}
                    d="M273.142,75.335l78.17,78.18l-32.99,32.99l-32.99,32.99l-78.17-78.17L273.142,75.335z M332.442,156.865c2.54-2.54,2.54-6.65,0-9.19l-53.46-53.47c-2.54-2.54-6.66-2.54-9.2,0c-2.53,2.54-2.53,6.65,0,9.19l53.47,53.47 c1.27,1.27,2.94,1.9,4.6,1.9S331.182,158.135,332.442,156.865z"
                  />
                </g>
              </g>
            </g>
            <path
              style={{
                fill: "rgb(255, 255, 255)",
              }}
              d="M332.442,147.675c2.54,2.54,2.54,6.65,0,9.19c-1.26,1.27-2.93,1.9-4.59,1.9s-3.33-0.63-4.6-1.9 l-53.47-53.47c-2.53-2.54-2.53-6.65,0-9.19c2.54-2.54,6.66-2.54,9.2,0L332.442,147.675z"
            />
          </motion.g>
          <g>
            <rect
              x={243.922}
              y={374.345}
              style={{
                fill: "#C4804D",
              }}
              width={169}
              height={5}
            />
            <rect
              x={216.142}
              y={428.645}
              style={{
                fill: "#C4804D",
              }}
              width={224.57}
              height={14.7}
            />
            <polygon
              style={{
                fill: "#8E5D3C",
              }}
              points="416.212,392.345 434.052,415.645 222.802,415.645 240.632,392.345 &#9;&#9;&#9;"
            />
            <path
              style={{
                fill: "rgb(51, 51, 51)",
              }}
              d="M453.702,422.145l0.01,27.7c0,3.59-2.91,6.5-6.5,6.5h-237.57c-3.59,0-6.5-2.91-6.5-6.5l0.01-27.7 c0-1.4,0.44-2.79,1.32-3.95l26.45-34.55v-15.8c0-3.59,2.91-6.5,6.5-6.5h182c3.59,0,6.5,2.91,6.5,6.5v15.8l26.45,34.55 C453.252,419.355,453.702,420.745,453.702,422.145z M440.712,443.345v-14.7h-224.57v14.7H440.712z M434.052,415.645l-17.84-23.3 h-175.58l-17.83,23.3H434.052z M412.922,379.345v-5h-169v5H412.922z"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
)




function LeftArrow() {
  return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>)
}

function RightArrow() {
  return (
    < svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20" >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg >)
}

function ActivityIdToText(id: number) {
  switch (id) {
    case 0:
      return 'Apple Picking'
    case 1:
      return 'Cooking Class'
    case 2:
      return 'Jazz'
    case 3:
      return 'Red Flag'
    default:
      return 'Error'
  }
}

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);
  const [selected, setSelected] = useState(0);
  const [clickDirection, setClickDirection] = useState<string | null>(null);
  const [confettiOver, setConfettiOver] = useState(false);
  const handleGavel = async () => {
    if (selected == 3) {
      alert('ERROR #42332. Invalid operation.')
      setIsClicked(false)
    } else {
      setIsClicked(!isClicked)  // Toggle le gavel
    }
  }

  const handleLeftClick = () => {
    if (selected == 0) {
      return;
    }
    setClickDirection('left')
    setSelected(selected - 1)
  }

  const handleRightClick = () => {
    if (selected == 3) {
      return;
    }
    setClickDirection('right')
    setSelected(selected + 1)
  }

  useEffect(() => {
    const pingMichael = async () => {
      if (isClicked) {
        const res = await fetch('/api', { method: "POST", body: JSON.stringify({ "type": ActivityIdToText(selected) }) })
      }
    }
    pingMichael()
    setConfettiOver(false)

  }, [isClicked, selected])




  return (
    <main className="flex min-h-screen flex-col lg:p-24 overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-4">
        {isClicked && <div className='absolute'><ConfettiExplosion onComplete={() => setConfettiOver(true)} /></div>}
        <div className='flex-initial'>
          <h1 className="font-sans text-2xl text-black p-2">
            How does this work?
          </h1>
        </div>
        <div className='flex-initial'>
          <motion.p initial={{ x: "50vh" }} animate={{ x: 0 }} className="font-sans text-base text-center text-black p-2">
            You scroll to the place you want to go together next
          </motion.p>
          <motion.p initial={{ x: "50vh" }} animate={{ x: 0 }} transition={{ delay: .60 }} className="font-sans text-base text-center text-black p-2">
            You smash that gavel
          </motion.p>
          <motion.p initial={{ x: "50vh" }} animate={{ x: 0 }} transition={{ delay: 1.2 }} className="font-sans text-base text-center text-black p-2">
            The app then texts me saying where you want to go
          </motion.p>
        </div>
      </div>
      <div className='flex flex-1 flex-col'>
        <div className='flex-1 flex items-center'>
          <div className='flex-1 flex justify-center'>
            <div className={'hover:cursor-pointer text-black' + (selected == 0 ? " opacity-25 hover:cursor-auto" : "")} onClick={handleLeftClick}>
              <LeftArrow />
            </div>
          </div>
          <div className='flex-[3]'>
            <AnimatePresence mode='wait'>
              {selected == 0 && <ApplePickingCard key={0} clickDirection={clickDirection} /> || selected == 1 && <CookingCard key={1} clickDirection={clickDirection} /> || selected == 2 && <JazzCard key={2} clickDirection={clickDirection} /> || selected == 3 && <RedFlag key={3} clickDirection={clickDirection} />}
            </AnimatePresence>
          </div>
          <div className='flex-1 flex justify-center'>
            <div className={'hover:cursor-pointer text-black' + (selected == 4 ? " opacity-25 hover:cursor-auto" : "")} onClick={handleRightClick}>
              <RightArrow />
            </div>
          </div>
        </div>
        <div className='flex-initial flex justify-center'>
          <Gavel className="hover:cursor-pointer" onClick={handleGavel} height={350} width={350} isClicked={isClicked} />
        </div>
      </div>
      {confettiOver &&
        <div className='absolute text-black float-right'>
          Boom :)</div>
      }
    </main>
  )
}
