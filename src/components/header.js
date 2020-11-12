import React, { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Link } from "gatsby";

// NOTE: CSS STARTS HERE FOR HEADER COMPONENT!

const Toggle = styled.div`
  margin-top: 0px;
  position: absolute;
  top: 0.75rem;
  right: 1rem;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;

  span {
    height: 3px;
    width: 100%;
    background-color: white;
    border-radius: 0px;
    position: absolute;
  }

  @media (max-width: 800px) {
    display: flex;
  }
`;

const NavEle = styled.div`
  height: 100%;

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    @media (max-width: 800px) {
      width: 100%;
      flex-direction: column;
    }
  }
  li {
    list-style: none;
    @media (max-width: 800px) {
      text-align: center;
    }
  }

  @media (max-width: 800px) {
    display: ${props => props.Display};
    width: 100%;
  }
`;

const NavEleLink = styled(Link)`
  margin-top: 0px;
  padding: 0.25rem;
  text-decoration: none;
  line-height: 1;
  color: white;
  padding: 1rem;

  &:last-of-type {
    margin-right: 0;
  }
  @media (max-width: 800px) {
    padding: 0.5rem 1rem;
  }
`;

// NOTE: HEADER FUNCTION STARTS HERE!

const Header = () => {
  const [some, setSome] = useState("none");

  return (
    <nav
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: black;
        color: white;
        border-bottom: 3px solid yellow;

        @media (max-width: 800px) {
          flex-direction: column;
          align-items: flex-start;
        }
      `}
    >
      <div
        css={css`
          font-size: 1.5rem;
          margin: 0.5rem;
        `}
      >
        Astronomy Club IIT BHU
      </div>
      <Toggle
        onClick={() => {
          some === "none" ? setSome("flex") : setSome("none");
        }}
      >
        <span />
        <span
          css={css`
            top: 7px;
          `}
        />
        <span
          css={css`
            top: 14px;
          `}
        />
      </Toggle>
      <NavEle Display={some}>
        <ul>
          <li>
            {" "}
            <NavEleLink to="/" activeClassName="current-page">
              Home
            </NavEleLink>{" "}
          </li>
          <li>
            {" "}
            <NavEleLink to="/blogs/" activeClassName="current-page">
              Blog
            </NavEleLink>{" "}
          </li>
          <li>
            {" "}
            <NavEleLink to="/events/" activeClassName="current-page">
              Events
            </NavEleLink>{" "}
          </li>
        </ul>
      </NavEle>
    </nav>
  );
};

export default Header;
