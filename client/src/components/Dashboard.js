import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../actions";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import ImagesContent from "./ImagesContent";

const DashboardContainer = styled.div`
  margin: 20px;
  overflow: auto;
`;

const JumboTronContainer = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  padding-top: 24px;
  padding-bottom: 24px;
  border-radius: 6px;
  margin-bottom: 48px;
  background-image: linear-gradient(to right, #ffecd2, #fcb69f);
  color: hsl(209, 61%, 16%);
`;

const JumboTronTitle = styled.h1`
  font-size: 63px;
  margin-top: 20px;
  margin-bottom: 10px;
  margin: 0.67em 0;
  color: inherit;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
`;

const NotFound = styled.h1`
  font-size: 63px;
  margin-top: 20px;
  margin-bottom: 10px;
  margin: 0.67em 0;
  color: inherit;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
`;

const JumboTronHeading = styled.p`
  margin-bottom: 15px;
  font-size: 21px;
  font-weight: 200;
  margin: 0 0 10px;
`;

const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
`;

class Dashboard extends Component {
  render() {
    const { userData } = this.props;
    const isImagesDataLoaded =
      userData !== null &&
      !_.isEmpty(userData) &&
      userData.imagesURLs !== null &&
      userData.imagesURLs.length > 0;
    return (
      <DashboardContainer>
        <JumboTronContainer>
          <JumboTronTitle>
            <i className="fa fa-camera-retro"></i> Web Scraper Media Gallery{" "}
          </JumboTronTitle>
          <JumboTronHeading>
            Please provide sample website URL in the below input field to get a
            bunch of beautiful images that I didn't take (except for the first
            one!)
          </JumboTronHeading>
          <SearchBar />
        </JumboTronContainer>
        <ImagesContainer>
          <ImagesContent
            userData={userData}
            isImagesDataLoaded={isImagesDataLoaded}
          />
          {!isImagesDataLoaded && (
            <NotFound>Not Found :( Try different URL</NotFound>
          )}
        </ImagesContainer>
      </DashboardContainer>
    );
  }
}

const mapStateToProps = ({ userData, authentication }) => ({
  userData,
  authentication,
});

export default connect(mapStateToProps, actions)(Dashboard);
