import styled from 'styled-components'

const WrapperStart = styled.div`
	width: 50%;
	height: 100vh;
	padding: 60px;
`
const ProductName = styled.h3`
	font-size: 26px;
	color: black;
`
const ProductCategory = styled.p`
	margin-block: 10px;
`
const Wrapper = styled.div`
	width: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const InlineElements = styled.div<{
	$gap?: string
	$outline?: boolean
	$margin?: string
}>`
	display: flex;
	gap: ${props => props.$gap};
	align-items: center;
	border: ${props => (props.$outline ? '2px solid black' : 'none')};
	border-radius: ${props => (props.$outline ? '10px' : 'none')};
	padding: ${props => (props.$outline ? '10px' : 'none')};
	margin: ${props => (props.$margin ? props.$margin : '0')};
`
const Availability = styled.span`
	font-size: 12px;
	font-weight: 700;
	padding: 5px;
	color: #5ad758;
	background-color: #ebfaeb;
	border-radius: 5px;
`
const ActualPrice = styled.s`
	color: #a6a3ac;
`
const Button = styled.button`
	font-size: 20px;
	border: none;
	padding: 5px;
	background-color: inherit;
	cursor: pointer;
`
const ButtonMain = styled.button<{ $notmain?: boolean }>`
	width: ${props => (props.$notmain ? 'auto' : '100%')};
	padding: ${props => (props.$notmain ? '16px' : ' 16px 0')};
	background-color: ${props => (props.$notmain ? 'inherit' : ' #131118')};
	color: ${props => (props.$notmain ? '#000' : ' #fff')};
	border-radius: 10px;
	border: ${props => (props.$notmain ? '2px solid black' : ' none')};
	cursor: pointer;

	&:focus {
	}
`
const RadioTitle = styled.span<{ color?: string }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 50px;
	min-height: 50px;
	border-radius: 0.5rem;
	background-color: ${props => (props.color ? props.color : '#fff')};
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
	transition: 0.15s ease;
	cursor: pointer;
	position: relative;
	font-weight: 800;
	font-size: 24px;
`
const RadioInput = styled.input`
	clip: rect(0 0 0 0);
	-webkit-clip-path: inset(100%);
	clip-path: inset(100%);
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
	width: 1px;
	&:checked + ${RadioTitle} {
		border: 3px solid #000;
		box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
		color: #000;
		transform: scale(1.2);
	}
`
const RadioInputs = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 350px;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	& > * {
		margin: 6px;
	}
`
const StarAmount = styled.span`
	color: #a6a3ac;
`
const Heading4 = styled.h4`
	font-size: 20px;
	margin-top: 20px;
`
const Container = styled.div`
	width: 100%;
	max-width: 1230px;
	padding: 0 15px;
	margin-inline: auto;
`

export {
	ActualPrice,
	Availability,
	Button,
	ButtonMain,
	Container,
	Heading4,
	InlineElements,
	ProductCategory,
	ProductName,
	RadioInput,
	RadioInputs,
	RadioTitle,
	StarAmount,
	Wrapper,
	WrapperStart,
}
