import type { FormProps } from 'antd'
import { Button, Form, Input } from 'antd'
import React from 'react'

type FieldType = {
	email?: string
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

		<Form.Item>
			<Button
				type='primary'
				htmlType='submit'
				style={{ width: '100%', height: 45 }}
			>
				Send OTP
			</Button>
		</Form.Item>
	</Form>
)

export default RegisterForm
