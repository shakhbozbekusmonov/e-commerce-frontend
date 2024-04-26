import { Modal as AntModal } from 'antd'
import React from 'react'

const Modal = ({
	isModalOpen,
	setIsModalOpen,
}: {
	isModalOpen: boolean
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
	const handleOk = () => {
		setIsModalOpen(false)
	}

	const handleCancel = () => {
		setIsModalOpen(false)
	}

	return (
		<>
			<AntModal
				title='Basic Modal'
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</AntModal>
		</>
	)
}

export default Modal
