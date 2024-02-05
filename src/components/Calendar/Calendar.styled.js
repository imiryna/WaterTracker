import {styled} from "styled-components";
import { Popper } from "@mui/material";

import {ReactComponent as Arrow} from "Images/Icons/arrow-down.svg"
import {ReactComponent as CloseIcon} from "Images/Icons/close.svg"


export const StyledDiv = styled.div`
@media (min-width: 768px){
    max-width: 646px;
}
`

export const StyledTitle = styled.h2`
font-size: 24px;
font-weight: 500;
color: var(--primery-black);
font-family: var(--primery-font);
font-weight: 500;

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
font-family: var(--primery-font);
max-width: 32px;

@media (min-width: 768px){
    font-size: 16px;
    max-width: 34px;
}
`

export const StyledPercentage = styled.span`
color: var(--secondary-color-4);
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
background-color: var(--primery-white);
border-color:  ${props => props.$percentage < 100 ? 'orange' : 'transparent'}
`



export const StyledPopOver = styled(Popper)`
background-color: #fff;
box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.30);
border-radius: 10px;
font-family: var(--primery-font);
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
color: var(--primery-blue);
font-size: 16px;
`

export const StyledPopOverText = styled.p`
padding: 0;
margin: 0;
font-weight: 400;
`

export const StyledPopOverSpan = styled.span`
margin-left: 6px;
padding: 0;
font-size: 18px;
font-weight: 500;
color: var(--primery-blue);
`

export const StyledLeftArrow = styled(Arrow)`
fill: var(--primery-blue);
background-color: transparent;
transform: rotate(90deg);
width: 14px;
height: 14px;
`

export const StyledRightArrow = styled(Arrow)`
fill: var(--primery-blue);
background-color: transparent;
transform: rotate(-90deg);
width: 14px;
height: 14px;
`

export const StyledArrowButtonLeft = styled.button`
background-color: transparent;
border: none;
outline: none;
width: 14px;
height: 14px;
visibility: ${props => props.$hideButton ? 'hidden' : 'visible'}
`

export const StyledArrowButtonRight = styled.button`
background-color: transparent;
border: none;
outline: none;
width: 14px;
height: 14px;
visibility: ${props => props.$hideButton ? 'hidden' : 'visible'}
`

export const StyledDate = styled.span`
color: var(--primery-blue);
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

export const StyledCloseButton = styled.button`
position: absolute;
top: 24px;
right: 16px;
outline: none;
border: none;
background: transparent;
cursor: pointer;
`

export const StyledCloseIcon = styled(CloseIcon)`
width: 16px;
height: 16px;
stroke: var(--primery-blue);


`