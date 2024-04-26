import { Flex } from 'antd'
import ChangePasswordForm from './ChangePasswordForm'
import { Text, Title, Wrapper, WrapperEnd, WrapperStart } from './style'

const ChangePassword = () => {
	return (
		<Flex style={{ height: '100vh', overflow: 'hidden' }}>
			<WrapperStart />

			<WrapperEnd>
				<Wrapper>
					<Title>Change Password</Title>
					<Text>Please enter your new password</Text>

					<ChangePasswordForm />
				</Wrapper>
			</WrapperEnd>
		</Flex>
	)
}

export default ChangePassword
