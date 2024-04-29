
import { Checkbox, Flex, Typography } from 'antd';
import type { CheckboxProps } from 'antd';

const onChange: CheckboxProps['onChange'] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
const { Title } = Typography; 
const FilterByS = () => {
    return(
        <Flex justify='space-between'>
            <Flex align='center'>
                <Checkbox style={{fontWeight: "600", width:"280px", height:"30px"}} onChange={onChange}>S</Checkbox>
            </Flex>
            <Title level={5}>(6)</Title>
        </Flex>
    )
}
const FilterByM = () => {
    return(
        <Flex justify='space-between'>
            <Flex align='center'>
                <Checkbox style={{fontWeight: "600", width:"280px", height:"30px"}} onChange={onChange}>M</Checkbox>
            </Flex>
            <Title level={5}>(20)</Title>
        </Flex>
    )
}
const FilterByL = () => {
    return(
        <Flex justify='space-between'>
            <Flex align='center'>
                <Checkbox style={{fontWeight: "600", width:"280px", height:"30px"}} onChange={onChange}>L</Checkbox>
            </Flex>
            <Title level={5}>(7)</Title>
        </Flex>
    )
}
const FilterByXL = () => {
    return(
        <Flex justify='space-between'>
            <Flex align='center'>
                <Checkbox style={{fontWeight: "600", width:"280px", height:"30px"}} onChange={onChange}>XL</Checkbox>
            </Flex>
            <Title level={5}>(16)</Title>
        </Flex>
    )
}
const FilterByXXL = () => {
    return(
        <Flex justify='space-between'>
            <Flex align='center'>
                <Checkbox style={{fontWeight: "600", width:"280px", height:"30px"}} onChange={onChange}>XXL</Checkbox>
            </Flex>
            <Title level={5}>(10)</Title>
        </Flex>
    )
}
const FilterByXXXL = () => {
    return(
        <Flex justify='space-between'>
            <Flex align='center'>
                <Checkbox style={{fontWeight: "600", width:"280px", height:"30px"}} onChange={onChange}>XXXL</Checkbox>
            </Flex>
            <Title level={5}>(2)</Title>
        </Flex>
    )
}

export { FilterByS, FilterByM, FilterByL, FilterByXL, FilterByXXL, FilterByXXXL };