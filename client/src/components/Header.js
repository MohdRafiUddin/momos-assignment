// React, Redux
import React, { Component } from "react";
import { connect } from "react-redux";
// React Router Link
import { Link } from "react-router-dom";
// External Components
import styled, { keyframes } from "styled-components";
// Constant
import {
  LOGO,
  LOGO_LINK,
  LOGIN_GOOGLE,
  LOGOUT_GOOGLE,
  PLAIN_SLASH,
  GOOGLE_AUTH_LOGIN,
  GOOGLE_AUTH_LOGOUT,
} from "../constants";

const HeaderContainer = styled.nav`
  display: flex;
  flex: 0 1 auto;
  color: hsl(209deg 61% 16%);
  background-image: linear-gradient(to left, #ffecd200, #fcb49f);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const NavWrapper = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const NavLink = styled.div`
  color: #fff;
  font-size: 2.1rem;
  padding: 0;
`;

const Logo = styled.img`
  padding: 0 10px;
`;

const LoginWrapper = styled.div`
  list-style-type: none;
  margin-right: 20px;
`;

const spinnerAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
 `;

const Loader = styled.div`
  margin-top: 15px;
  margin-right: 15px;
  border: 5px solid white;
  border-radius: 50%;
  border-top: 5px solid gray;
  border-left: 5px solid gray;
  width: 25px;
  height: 25px;
  animation: ${spinnerAnimation} 1s linear infinite;
`;

const LoginButton = styled.a`
  text-decoration: none;
  font-size: 22px;
  font-weight: lighter;
  text-align: center;
  &:hover {
    color: gray;
  }
`;

class Header extends Component {
  renderContent() {
    switch (this.props.authentication) {
      case null:
        return <Loader />;
      case false:
        return (
          <LoginButton href={GOOGLE_AUTH_LOGIN}>{LOGIN_GOOGLE}</LoginButton>
        );
      default:
        return (
          <LoginButton href={GOOGLE_AUTH_LOGOUT}>{LOGOUT_GOOGLE}</LoginButton>
        );
    }
  }
  render() {
    return (
      <HeaderContainer>
        <NavWrapper>
          <NavLink>
            <Link to={PLAIN_SLASH}>
              <Logo src={LOGO_LINK} alt={LOGO} />
            </Link>
          </NavLink>
          <LoginWrapper>{this.renderContent()}</LoginWrapper>
        </NavWrapper>
      </HeaderContainer>
    );
  }
}

const mapStateToProps = ({ authentication }) => ({ authentication });

export default connect(mapStateToProps)(Header);
