import { Form, Rate } from 'antd';
import { ActualPrice, Availability, Button, ButtonMain, Color, Heading4, InlineElements, ProductCategory, ProductName, RadioInput, RadioInputs, RadioTitle, StarAmount, Wrapper } from "./style";
import { useState } from 'react';

const ProductDetailBox = () => {
	const [number, setNumber] = useState(1)

	return (
		<div>
			<Wrapper>
				<ProductName>Product Name</ProductName>
				<Availability>In Stock</Availability>
			</Wrapper>
			<ProductCategory>Product Category</ProductCategory>
			<InlineElements $gap="20px">
				<Rate />
				<StarAmount>amount of stars</StarAmount>
			</InlineElements>
			<InlineElements $gap="5px">
				<p>80</p>
				<ActualPrice>100</ActualPrice>
			</InlineElements>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur natus harum doloremque debitis! Impedit architecto corporis quod tempora eveniet temporibus!</p>
			<Form>
				<Heading4>Color</Heading4>
				<InlineElements $gap="10px">
					<RadioInputs>
						<label>
							<RadioInput type='radio' name='color' />
							<RadioTitle >
								<Color color='red' />
							</RadioTitle>
						</label>
						<label>
							<RadioInput type='radio' name='color' />
							<RadioTitle>
								<Color color='blue' />
							</RadioTitle>
						</label>
						<label>
							<RadioInput type='radio' name='color' />
							<RadioTitle>
								<Color color='green' />
							</RadioTitle>
						</label>
					</RadioInputs>

				</InlineElements>
				<Heading4>Size</Heading4>
				<InlineElements $margin='0 0 20px 0'>
					<RadioInputs>
						<label>
							<RadioInput type='radio' name='size' />
							<RadioTitle>K</RadioTitle>
						</label>
						<label>
							<RadioInput type='radio' name='size' />
							<RadioTitle>M</RadioTitle>
						</label>
						<label>
							<RadioInput type='radio' name='size' />
							<RadioTitle>S</RadioTitle>
						</label>
					</RadioInputs>
				</InlineElements>
				<InlineElements $gap="5px">
					<InlineElements $gap='20px' $outline>
						<Button onClick={() => setNumber(number + 1)}>+</Button>
						<span>{number}</span>
						<Button onClick={() => number > 1 && setNumber(number - 1)}>-</Button>
					</InlineElements>
					<ButtonMain>Add to cart</ButtonMain>
					<ButtonMain $notmain>Favourite</ButtonMain>
				</InlineElements>
			</Form>


		</div >
	)
}

export default ProductDetailBox