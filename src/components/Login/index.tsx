import { Flex } from 'antd'
import { Link } from 'react-router-dom'
import { LogoIcon } from '../Icons'
import LoginForm from './LoginForm'
import { Text, Title, Wrapper, WrapperEnd, WrapperStart } from './style'

const Login = () => {
	return (
		<Flex style={{ height: '100vh' }}>
			<WrapperStart>
				<Link to='/'>
					<LogoIcon />
				</Link>
			</WrapperStart>
			<WrapperEnd>
				<Wrapper>
					<Title>Welcome 👋</Title>
					<Text>Please login here</Text>

					<LoginForm />
				</Wrapper>
			</WrapperEnd>
		</Flex>
	)
}

export default Login
