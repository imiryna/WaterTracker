import {styled} from "styled-components";
import { Popover } from "@mui/material";

import {ReactComponent as Arrow} from "../Images/Icons/arrow-down.svg"


export const StyledDiv = styled.div`
@media (min-width: 768px){
    width: 646px;
}
`

export const StyledTitle = styled.h2`
font-size: 24px;
font-weight: 500;
color: #2F2F2F;

@media (min-width: 768px){
    font-size: 26px;
}
`

export const StyledList = styled.ul`
list-style: none;
display: flex;
flex-wrap: wrap;
gap: 16px 26px;
margin: 0 auto;

@media (min-width: 768px){
   gap: 20px 24px;
}
@media (min-width: 1440px){
   gap: 20px 22px;
}
`

export const StyledItem = styled.li`
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: center;
font-size: 14px;

@media (min-width: 768px){
    font-size: 16px;
}
`

export const StyledPercentage = styled.span`
color: #9EBBFF;
font-size: 10px;
text-align: center;
margin-top: 4px;

@media (min-width: 768px){
    font-size: 13px;
}
@media (min-width: 1440px){
    font-size: 12px;
}
`

export const StyledDay = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
border: 1px solid black;
width: 34px;
height: 34px;
background-color: #fff;

border-color: ${(props) => {
    if(props.percentage < 100 ){
        return 'orange';

    }else{
        return 'transparent';
    }
}}
`

export const StyledPopOver = styled(Popover)`
pointer-events: none;
box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.30);
border-radius: 10px;
`

export const StyledPopOverContainer = styled.div`
display: flex;
flex-direction: column;
padding: 24px 16px;
gap: 16px;
`
export const StyledPopOverDate = styled.p`
padding: 0;
margin: 0;
color: #407BFF;
font-size: 16px;
`

export const StyledPopOverText = styled.p`
padding: 0;
margin: 0
`

export const StyledPopOverSpan = styled.span`
margin-left: 6px;
padding: 0;
font-size: 18px;
color: #407BFF;
`

export const StyledLeftArrow = styled(Arrow)`
fill: #407BFF;
background-color: transparent;
transform: rotate(90deg);
width: 14px;
height: 14px;
`

export const StyledRightArrow = styled(Arrow)`
fill: #407BFF;
background-color: transparent;
transform: rotate(-90deg);
width: 14px;
height: 14px;
`

export const StyledArrowButton = styled.button`
background-color: transparent;
border: none;
outline: none;
width: 14px;
height: 14px;
`

export const StyledDate = styled.span`
color: #407BFF;
font-size: 16px;
font-weight: 400;
margin-left: 12px;
margin-right: 12px;
`
export const StyledPaginationContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
export const StyledContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 16px;
`
