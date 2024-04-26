import leftBg from '@/assets/images/otp-img.jpg'
import styled from 'styled-components'

const WrapperStart = styled.div`
	width: 60%;
	height: 100vh;
	padding: 60px;
	background-image: url(${leftBg});
	background-repeat: no-repeat;
	background-size: cover;

	@media (max-width: 768px) {
		display: none;
	}
`

const WrapperEnd = styled.div`
	width: 40%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-left: 50px;

	@media (max-width: 768px) {
		width: 100%;
	}
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

export { Button, Text, Title, Wrapper, WrapperEnd, WrapperStart }
