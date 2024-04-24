import type { FormProps } from 'antd'
import { Button, Checkbox, Flex, Form, Input } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

type FieldType = {
	email?: string
	password?: string
	remember?: string
}

const onFinish: FormProps<FieldType>['onFinish'] = values => {
	console.log('Success:', values)
}

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = errorInfo => {
	console.log('Failed:', errorInfo)
}

const LoginForm: React.FC = () => (
	<Form
		name='basic'
		labelCol={{ span: 8 }}
		style={{ maxWidth: 445 }}
		initialValues={{ remember: true }}
		onFinish={onFinish}
		onFinishFailed={onFinishFailed}
		autoComplete='off'
		layout='vertical'
	>
		<Form.Item<FieldType>
			label='Email Address'
			name='email'
			rules={[{ required: true, message: 'Please input your email!' }]}
			style={{ marginBottom: 16 }}
		>
			<Input
				type='email'
				autoComplete='email'
				style={{ width: '100%', padding: 12 }}
			/>
		</Form.Item>

		<Form.Item<FieldType>
			label='Password'
			name='password'
			rules={[{ required: true, message: 'Please input your password!' }]}
		>
			<Input.Password
				autoComplete='current-password'
				style={{ width: '100%', padding: 12 }}
			/>
		</Form.Item>

		<Flex justify='space-between'>
			<Form.Item<FieldType> name='remember' valuePropName='checked'>
				<Checkbox
					style={{
						whiteSpace: 'nowrap',
					}}
				>
					Remember me
				</Checkbox>
			</Form.Item>

			<Form.Item>
				<Link
					to='/forgot-password'
					style={{ whiteSpace: 'nowrap', color: '#000' }}
				>
					Forgot password?
				</Link>
			</Form.Item>
		</Flex>

		<Form.Item>
			<Button
				type='primary'
				htmlType='submit'
				style={{ width: '100%', height: 45 }}
			>
				Login
			</Button>
		</Form.Item>
	</Form>
)

export default LoginForm
