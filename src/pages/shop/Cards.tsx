
import { Col, Row, Typography } from 'antd';
const { Title} = Typography
const style: React.CSSProperties = { 
    background: '#fff', 
    border: "2px solid grey",

};

function Cards() {
    return (
        <>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{marginTop: "40px"}}>
                <Col className="gutter-row" span={6}>
                    <div style={style}>
                        <img style={{width: "100%"}} src="https://picsum.photos/id/237/200" alt="" />
                        <Title level={5} style={{fontWeight: "600", padding: "0px 12px"}}>Allen Solly</Title>
                        <Title level={5} style={{padding: "0px 12px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nesciunt.</Title>
                        <Title level={5} style={{fontWeight: "600", padding: "0px 12px"}}>$100</Title>                    
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>
                        <img style={{width: "100%"}} src="https://picsum.photos/id/237/200" alt="" />
                        <Title level={5} style={{fontWeight: "600", padding: "0px 12px"}}>Allen Solly</Title>
                        <Title level={5} style={{padding: "0px 12px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nesciunt.</Title>
                        <Title level={5} style={{fontWeight: "600", padding: "0px 12px"}}>$100</Title>                    
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>
                        <img style={{width: "100%"}} src="https://picsum.photos/id/237/200" alt="" />
                        <Title level={5} style={{fontWeight: "600", padding: "0px 12px"}}>Allen Solly</Title>
                        <Title level={5} style={{padding: "0px 12px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nesciunt.</Title>
                        <Title level={5} style={{fontWeight: "600", padding: "0px 12px"}}>$100</Title>                    
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>
                        <img style={{width: "100%"}} src="https://picsum.photos/id/237/200" alt="" />
                        <Title level={5} style={{fontWeight: "600", padding: "0px 12px"}}>Allen Solly</Title>
                        <Title level={5} style={{padding: "0px 12px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nesciunt.</Title>
                        <Title level={5} style={{fontWeight: "600", padding: "0px 12px"}}>$100</Title>                    
                    </div>
                </Col>           
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{marginTop: "40px"}}>
                <Col className="gutter-row" span={6}>
                    <div style={style}>
                        <img style={{width: "100%"}} src="https://picsum.photos/id/237/200" alt="" />
                        <Title level={5} style={{fontWeight: "600", padding: "0px 12px"}}>Allen Solly</Title>
                        <Title level={5} style={{padding: "0px 12px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nesciunt.</Title>
                        <Title level={5} style={{fontWeight: "600", padding: "0px 12px"}}>$100</Title>                    
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>
                        <img style={{width: "100%"}} src="https://picsum.photos/id/237/200" alt="" />
                        <Title level={5} style={{fontWeight: "600", padding: "0px 12px"}}>Allen Solly</Title>
                        <Title level={5} style={{padding: "0px 12px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nesciunt.</Title>
                        <Title level={5} style={{fontWeight: "600", padding: "0px 12px"}}>$100</Title>                    
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>
                        <img style={{width: "100%"}} src="https://picsum.photos/id/237/200" alt="" />
                        <Title level={5} style={{fontWeight: "600", padding: "0px 12px"}}>Allen Solly</Title>
                        <Title level={5} style={{padding: "0px 12px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nesciunt.</Title>
                        <Title level={5} style={{fontWeight: "600", padding: "0px 12px"}}>$100</Title>                    
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>
                        <img style={{width: "100%"}} src="https://picsum.photos/id/237/200" alt="" />
                        <Title level={5} style={{fontWeight: "600", padding: "0px 12px"}}>Allen Solly</Title>
                        <Title level={5} style={{padding: "0px 12px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nesciunt.</Title>
                        <Title level={5} style={{fontWeight: "600", padding: "0px 12px"}}>$100</Title>                    
                    </div>
                </Col>           
            </Row>
        </>
    );
}

export default Cards