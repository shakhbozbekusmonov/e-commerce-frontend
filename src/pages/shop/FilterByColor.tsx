import { Flex, Typography } from "antd";
import { ColorCards } from "./style";
const { Title} = Typography
const FilterByRed = () => {
    return(
        <Flex justify='space-between'>
            <Flex gap={20}>
                <ColorCards style={{backgroundColor: "red", width: "30px", height:"30px", borderRadius: "4px"}}/>
                <Title level={5}>Red</Title>
            </Flex>
            <Title level={5}>(10)</Title>                        
        </Flex>
    )
}
const FilterByBlue = () => {
    return(
        <Flex justify='space-between'>
            <Flex gap={20}>
                <ColorCards style={{backgroundColor: "blue", width: "30px", height:"30px", borderRadius: "4px"}}/>
                <Title level={5}>Blue</Title>
            </Flex>
            <Title level={5}>(14)</Title>                        
        </Flex>
    )
}
const FilterByOrange = () => {
    return(
        <Flex justify='space-between'>
            <Flex gap={20}>
                <ColorCards style={{backgroundColor: "orange", width: "30px", height:"30px", borderRadius: "4px"}}/>
                <Title level={5}>Orange</Title>
            </Flex>
            <Title level={5}>(8)</Title>                        
        </Flex>
    )
}
const FilterByBlack = () => {
    return(
        <Flex justify='space-between'>
            <Flex gap={20}>
                <ColorCards style={{backgroundColor: "black", width: "30px", height:"30px", borderRadius: "4px"}}/>
                <Title level={5}>Black</Title>
            </Flex>
            <Title level={5}>(9)</Title>                        
        </Flex>
    )
}
const FilterByGreen = () => {
    return(
        <Flex justify='space-between'>
            <Flex gap={20}>
                <ColorCards style={{backgroundColor: "green", width: "30px", height:"30px", borderRadius: "4px"}}/>
                <Title level={5}>Green</Title>
            </Flex>
            <Title level={5}>(4)</Title>                        
        </Flex>
    )
}
const FilterByYellow = () => {
    return(
        <Flex justify='space-between'>
            <Flex gap={20}>
                <ColorCards style={{backgroundColor: "yellow", width: "30px", height:"30px", borderRadius: "4px"}}/>
                <Title level={5}>Yellow</Title>
            </Flex>
            <Title level={5}>(2)</Title>                        
        </Flex>
    )
}

export { FilterByRed, FilterByBlue, FilterByOrange, FilterByBlack, FilterByGreen, FilterByYellow }