/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// node.js library that concatenates classes (strings)

// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import {  } from "react-chartjs-2";
// reactstrap components
import {
  
  Card,
  CardHeader,
 
  
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
 
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

const Index = (props) => {
  

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="" fluid>
        <Row>
          <Col className="" xl="">
            <Card className="">
              <CardHeader className="">
               
              </CardHeader>
            
            </Card>
          </Col>
         
        </Row>
       
      </Container>
    </>
  );
};

export default Index;
