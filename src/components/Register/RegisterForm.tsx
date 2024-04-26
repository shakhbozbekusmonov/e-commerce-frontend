import type { FormProps } from 'antd'
import { Button, Checkbox, Flex, Form, Input } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

type FieldType = {
	first_name?: string
	last_name?: string
	email?: string
	password?: string
	confirm_password?: string
	agree?: string
}

const onFinish: FormProps<FieldType>['onFinish'] = values => {
	console.log('Success:', values)
}

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = errorInfo => {
	console.log('Failed:', errorInfo)
}

const RegisterForm: React.FC = () => (
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
			label='First Name'
			name='first_name'
			rules={[{ required: true, message: 'Please input your first name!' }]}
			style={{ marginBottom: 12 }}
		>
			<Input type='text' style={{ width: '100%', padding: 12 }} />
		</Form.Item>

		<Form.Item<FieldType>
			label='Last Name'
			name='last_name'
			rules={[{ required: true, message: 'Please input your last name!' }]}
			style={{ marginBottom: 12 }}
		>
			<Input type='text' style={{ width: '100%', padding: 12 }} />
		</Form.Item>

		<Form.Item<FieldType>
			label='Email Address'
			name='email'
			rules={[{ required: true, message: 'Please input your email!' }]}
			style={{ marginBottom: 12 }}
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
			style={{ marginBottom: 12 }}
			rules={[{ required: true, message: 'Please input your password!' }]}
		>
			<Input.Password
				autoComplete='current-password'
				style={{ width: '100%', padding: 12 }}
			/>
		</Form.Item>

		<Form.Item<FieldType>
			label='Confirm Password'
			name='confirm_password'
			rules={[
				{ required: true, message: 'Please input your confirm password!' },
			]}
		>
			<Input.Password
				autoComplete='current-password'
				style={{ width: '100%', padding: 12 }}
			/>
		</Form.Item>

		<Form.Item<FieldType> name='agree' valuePropName='checked'>
			<Checkbox
				style={{
					whiteSpace: 'nowrap',
				}}
			>
				I agree to the{' '}
				<a href='/terms' style={{ whiteSpace: 'nowrap', color: '#000' }}>
					<b>Terms & Conditions</b>
				</a>
			</Checkbox>
		</Form.Item>

		<Form.Item>
			<Button
				type='primary'
				htmlType='submit'
				style={{ width: '100%', height: 45 }}
			>
				Register
			</Button>
		</Form.Item>

		<Form.Item>
			<Flex justify='center' gap='5px'>
				Already have an account?
				<Link to='/login' style={{ whiteSpace: 'nowrap', color: '#000' }}>
					Login
				</Link>
			</Flex>
		</Form.Item>
	</Form>
)

export default RegisterForm
