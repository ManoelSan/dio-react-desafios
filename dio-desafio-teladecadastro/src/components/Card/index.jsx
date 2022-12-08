import React from 'react'
import {FiThumbsUp } from 'react-icons/fi'
import { CardContainer, ImageBackground, Content, UserInfo, UserPicture, PostInfo, HasInfo, } from './styles'

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src="https://media.istockphoto.com/id/1267682907/vector/abstract-white-and-gray-gradient-curve-with-halftone-modern-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=gnaypDE5VBw509w8Ld5-5zRbjzkcKvbxG6sW0-v1ZZI=" />
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/82974086?s=400&u=5a99d2a5c9b9e7b7419ea8d210d67b0dfbd819a6&v=4" />
                <div>
                    <h4> Manoel Santos</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito o curso de html e css no bootcamp DIO do Global avanade...<strong>SaibaMais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                    <FiThumbsUp /> 11
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }