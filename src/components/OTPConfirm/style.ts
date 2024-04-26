import arrowLetf from '@/assets/images/arrow-left.svg'
import leftBg from '@/assets/images/otp-img.jpg'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const WrapperStart = styled.div`
	width: 60%;
	height: 100vh;
	padding: 60px;
	background-image: url(${leftBg});
	background-repeat: no-repeat;
	background-size: cover;
`

const WrapperEnd = styled.div`
	width: 40%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-left: 50px;
`

const Title = styled.h1`
	font-weight: 700;
	font-size: 30px;
	color: #131118;
`

const Text = styled.p`
	padding-bottom: 20px;
	font-weight: 400;
	font-size: 16px;
	color: #a4a1aa;
`

const Wrapper = styled.div`
	width: 445px;
`

const Button = styled.button`
	width: 100%;
	padding: 16px 0;
	background-color: #131118;
	color: #fff;
	border-radius: 10px;
	border: none;

	&:focus {
	}
`

const BackLink = styled(Link)`
	display: inline-flex;
	margin-bottom: 30px;
	color: #131118;

	&::before {
		content: '';
		width: 24px;
		height: 24px;
		background-image: url(${arrowLetf});
		background-repeat: no-repeat;
		background-size: 100%;
	}

	&:hover {
		color: #131118;
	}
`

export { BackLink, Button, Text, Title, Wrapper, WrapperEnd, WrapperStart }
