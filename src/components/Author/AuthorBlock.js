import React from "react";
import styled from "styled-components";
import {Image} from "antd";

const Author = styled.h2`
    font-family: Roboto, sans-serif;
    font-size: 3.5vw;
    font-weight: 400;
    letter-spacing: 5px;
`

const AuthorDescription = styled.p`
    color: black;
    font-size: 1.5vw;
    font-weight: lighter;
`

const HorizontalLine = styled.hr`
    border: 1px solid black;
`

const AuthorBox = styled.div`
  padding: 0 10vw 5vw 10vw;
  
`

export const AuthorBlock = ({name, description}) => {
    return (
        <AuthorBox>
            <Author>{name}</Author>
            <HorizontalLine/>
            <AuthorDescription>{description}</AuthorDescription>
        </AuthorBox>
    )
}

const RightBackground = styled.img`
    position: absolute;
    bottom: 9vw;
    left: 10vw;
    width: 20vw;
`

const LeftBackground = styled.img`
    position: absolute;
    top: -6vw;
    margin: 10vw 3vw;
    width: 20vw;
`

const RightPicture = styled.img`
    width: 20vw;
    position: relative !important;
    left: 13vw;
    bottom: 1vw;
`

const LeftPicture = styled.img`
    position: absolute;
    top: 1vw;
    width: 20vw;
`

const PictureBox = styled.div`
    padding: 5vw 0 !important;
    
`

export const AuthorPicture = ({bgSrc, src, side}) => {
    return (
        <PictureBox>
            {side === 'right' ? (
                <RightBackground alt='background' src={bgSrc}/>
            ) : (
                <LeftBackground alt='background' src={bgSrc}/>
            )}
            {side === 'right' ? (
                <RightPicture alt="profile-picture" src={src}/>
            ) : (
                <LeftPicture alt="profile-picture" src={src}/>
            )}
        </PictureBox>
    )
}