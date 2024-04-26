import { Flex } from 'antd'
import { Link } from 'react-router-dom'
import { LogoIcon } from '../Icons'
import RegisterForm from './RegisterForm'
import { Text, Title, Wrapper, WrapperEnd, WrapperStart } from './style'

const Register = () => {
	return (
		<Flex style={{ height: '100vh', overflow: 'hidden' }}>
			<WrapperStart>
				<Link to='/'>
					<LogoIcon />
				</Link>
			</WrapperStart>
			<WrapperEnd>
				<Wrapper>
					<Title>Create New Account</Title>
					<Text>Please enter details</Text>

					<RegisterForm />
				</Wrapper>
			</WrapperEnd>
		</Flex>
	)
}

export default Register
