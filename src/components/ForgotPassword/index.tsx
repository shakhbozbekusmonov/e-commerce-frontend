import { Flex } from 'antd'
import RegisterForm from './ForgotPasswordForm'
import {
	BackLink,
	Text,
	Title,
	Wrapper,
	WrapperEnd,
	WrapperStart,
} from './style'

const ForgotPassword = () => {
	return (
		<Flex style={{ height: '100vh', overflow: 'hidden' }}>
			<WrapperStart />
			<WrapperEnd>
				<Wrapper>
					<BackLink to='/login'>Back</BackLink>
					<Title>Forgot Password</Title>
					<Text>
						Enter your registered email address. we’ll send you a code to reset
						your password.
					</Text>

					<RegisterForm />
				</Wrapper>
			</WrapperEnd>
		</Flex>
	)
}

export default ForgotPassword
