// import React from "react";
// import styled from "@emotion/styled";
// import { css } from "@emotion/core";

// const Grid = styled.div`
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: space-around;
//   align-content: space-around;
//   align-items: baseline;
//   width: 100%;
// `;

// const Social = props => {
//   let Card = styled.div`
//     display: flex;
//     flex-flow: column wrap;
//     justify-content: space-between;
//     background: #171321;
//     max-width: ${(1 / props.platform.length) * 100 - 2}%;
//     max-height: 600px;
//     min-width: ${(1 / props.platform.length) * 100 - 2}%;
//     margin-top: 100px;
//     border-radius: 15px;
//     border: 1px solid #0d314a;
//     @media (max-width: 720px) {
//       max-width: 95%;
//       width: 100%;
//     }
//     a,
//     h2,
//     p {
//       padding: 30px;
//       text-decoration: none;
//     }
//   `;

//   return (
//     <Grid>
//       {props.platform.map(platform => (
//         <Card>
//           <img
//             css={css`
//               width: 125px;
//               position: relative;
//               top: -75px;
//               align-self: center;
//             `}
//             src={platform.imgLink}
//             alt={platform.name}
//           ></img>

//           <h2
//             css={css`
//               color: white;
//               margin-top: -60px;
//             `}
//           >
//             {platform.name}
//           </h2>
//           <p
//             css={css`
//               color: #aba7b5;
//             `}
//           >
//             {platform.desc}
//           </p>
//           <a
//             href={platform.link}
//             style={{
//               color: "#abab6b",
//               textTransform: "uppercase",
//               fontSize: "0.75rem",
//             }}
//           >
//             {platform.linkText}
//           </a>
//         </Card>
//       ))}
//     </Grid>
//   );
// };

// export default Social;
