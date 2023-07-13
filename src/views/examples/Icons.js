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
// reactstrap components
import {

  Card,
  CardHeader,
Button,
  

 


  Table,
  Container,
  Row,
  
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const Tables = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Approve Payments for Lecture Coverages</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Lecture name</th>
                    <th scope="col">Course Name</th>
                    <th scope="col">Batch Code</th>
                    <th scope="col">Payment Month</th>
                    <th scope="col">Total Hours</th>
                    <th scope="col">Payment Rate</th>
                    <th scope="col">Pay Amount</th>
                    <th scope="col">Documents</th>
                    <th scope="col">Action</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                    <td>Manuja Somarathne</td>
                    </th>
                    <th scope="row">
                    <td>	CCNA</td>
                    </th>
                    
                    <th scope="row">
                    <td>CCNA/K/33 - RS 03</td>
                    </th>
                    
                    <th scope="row">
                    <td>2022-03</td>
                    </th>
                    
                    <th scope="row">
                    <td>8h : 0m</td>
                    </th>
                    
                    <th scope="row">
                    <td>Hourly Rate</td>
                    </th>
                    
                    <th scope="row">
                    <td>Rs. 8000</td>
                    </th>
                    
                    <th scope="row">
                    <td>
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                     View
                    </Button>
                    </td>
                    </th>
                    
                          
                  
                    <th scope="row">
                    <td>
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                   Approve
                    </Button>
                    </td>
                    </th>

                    
                  </tr>
                  <tr>   
                    
                    
                    
                    <th scope="row">
                    <td>Nayani Pinnaduwage</td>
                    </th>
                          
                    <th scope="row">
                    <td>Data Str Alg</td>
                    </th>
                    
                          
                    <th scope="row">
                    <td>DSA 2022 1st</td>
                    </th>
                    
                          
                    <th scope="row">
                    <td>2022-03</td>
                    </th>
                    
                          
                    <th scope="row">
                    <td>	19h : 0m</td>
                    </th>
                    
                          
                    <th scope="row">
                    <td>Hourly Rate</td>
                    </th>
                    
                          
                    <th scope="row">
                    <td>Rs. 28500</td>
                    </th>
                    
                          
                    <th scope="row">
                    <td>
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                     View
                    </Button>
                    </td>
                    </th>
                    
                          
                  
                    <th scope="row">
                    <td>
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                   Approve
                    </Button>
                    </td>
                    </th>
              
    
                    </tr>
                
                    <tr>   
                    
                    
                    
                    <th scope="row">
                    <td>Irushi Jayakody</td>
                    </th>
                          
                    <th scope="row">
                    <td>Digi/M01</td>
                    </th>
                    
                          
                    <th scope="row">
                    <td>Digi/Mo1</td>
                    </th>
                    
                          
                    <th scope="row">
                    <td>2022-03</td>
                    </th>
                    
                          
                    <th scope="row">
                    <td>	12h : 30m</td>
                    </th>
                    
                          
                    <th scope="row">
                    <td>	30% Rate</td>
                    </th>
                    
                          
                    <th scope="row">
                    <td>	Rs. 8900</td>
                    </th>
                    
                          
                    <th scope="row">
                    <td>
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                     View
                    </Button>
                    </td>
                    </th>     
                  
                    <th scope="row">
                    <td>
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                   Approve
                    </Button>
                    </td>
                    </th>
                
                    </tr>
                    <tr>   
                    
                    
                    
                    <th scope="row">
                    <td>Anura Lankeshwara</td>
                    </th>
                          
                    <th scope="row">
                    <td>	CPITA</td>
                    </th>
                    
                          
                    <th scope="row">
                    <td>CPITA/K/68</td>
                    </th>
                    
                          
                    <th scope="row">
                    <td>2022-03</td>
                    </th>
                    
                          
                    <th scope="row">
                    <td>	13h : 30m</td>
                    </th>
                    
                          
                    <th scope="row">
                    <td>	Hourly Rate</td>
                    </th>
                    
                          
                    <th scope="row">
                    <td>		Rs. 10125</td>
                    </th>
                    
                          
                    <th scope="row">
                    <td>
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                     View
                    </Button>
                    </td>
                    </th>     
                  
                    <th scope="row">
                    <td>
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                   Approve
                    </Button>
                    </td>
                    </th>
                
                    </tr>



           
                </tbody>
              </Table>
            
            </Card>
          </div>
        </Row>
        {/* Dark table */}
        
      </Container>
    </>
  );
};

export default Tables;
