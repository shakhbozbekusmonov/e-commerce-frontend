import type { FormProps, GetProp } from 'antd'
import { Button, Form, Input } from 'antd'
import React from 'react'

type FieldType = {
	code?: number
}

const onChange: GetProp<typeof Input.OTP, 'onChange'> = text => {
	console.log('onChange:', text)
}

const onFinish: FormProps<FieldType>['onFinish'] = onChange => {
	console.log('Success:', onChange)
}

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = errorInfo => {
	console.log('Failed:', errorInfo)
}

const sharedProps = {
	onChange,
}

const OTPConfirmForm: React.FC = () => (
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
			name='code'
			rules={[{ required: true, message: 'Please input your code!' }]}
			style={{ marginBottom: 12 }}
		>
			<Input.OTP
				size='large'
				length={5}
				variant='outlined'
				style={{ width: '300px', marginBottom: 15 }}
				{...sharedProps}
			/>
		</Form.Item>

		<Form.Item>
			<Button
				type='primary'
				htmlType='submit'
				style={{ width: '100%', height: 45 }}
			>
				Verify
			</Button>
		</Form.Item>
	</Form>
)

export default OTPConfirmForm
