import { Flex, Tabs } from 'antd'
import { Container, WrapperStart } from './style'
import ProductDetailBox from './ProductDetailBox'
import { Link } from 'react-router-dom'

const ProductDetail = () => {
	return (
		<Container>
			<Link to={`/home`}> smth / asdasd / asdasd /</Link>
			<Flex style={{ height: '100vh' }}>
				<WrapperStart>
					<img src={''} alt="" />
					image
				</WrapperStart>
				<WrapperStart>
					<ProductDetailBox />
				</WrapperStart>
			</Flex>
			<Tabs
				defaultActiveKey="1"
				items={[
					{
						label: 'Tab 1',
						key: '1',
						children: 'Tab 1',
					},
					{
						label: 'Tab 2',
						key: '2',
						children: 'Tab 2',
					},
					{
						label: 'Tab 3',
						key: '3',
						children: 'Asko',
					},
				]}
			/>
		</Container>
	)
}

export default ProductDetail
