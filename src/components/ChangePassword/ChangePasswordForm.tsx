import type { FormProps } from 'antd'
import { Button, Form, Input } from 'antd'
import React, { useState } from 'react'
import Modal from '../Modal'

type FieldType = {
	password?: string
	confirm_password?: string
}

const ChangePasswordForm: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const onFinish: FormProps<FieldType>['onFinish'] = values => {
		console.log('Success:', values)

		setIsModalOpen(true)
	}

	const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = errorInfo => {
		console.log('Failed:', errorInfo)
	}

	return (
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

			<Form.Item>
				<Button
					type='primary'
					htmlType='submit'
					style={{ width: '100%', height: 45 }}
				>
					Submit
				</Button>

				<Modal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
			</Form.Item>
		</Form>
	)
}

export default ChangePasswordForm
