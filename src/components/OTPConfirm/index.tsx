import { Flex } from 'antd'
import OTPConfirmForm from './OTPConfirmForm'
import {
	BackLink,
	Text,
	Title,
	Wrapper,
	WrapperEnd,
	WrapperStart,
} from './style'

const OTPConfirm = () => {
	return (
		<Flex style={{ height: '100vh', overflow: 'hidden' }}>
			<WrapperStart />
			<WrapperEnd>
				<Wrapper>
					<BackLink to='/forgot-password'>Back</BackLink>
					<Title>Enter OTP</Title>
					<Text>
						We have share a code of your registered email address
						robertfox@example.com
					</Text>

					<OTPConfirmForm />
				</Wrapper>
			</WrapperEnd>
		</Flex>
	)
}

export default OTPConfirm
