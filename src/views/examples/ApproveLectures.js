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
                  <h3 className="mb-0">Approve Lecture Coverages</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Lecturer Name</th>
                      <th scope="col">Course Name</th>
                      <th scope="col">Batch Code</th>
                      <th scope="col">	Date</th>
                      <th scope="col">Start Time</th>
                      <th scope="col">End Time</th>
                      <th scope="col">Total Hours</th>
                      <th scope="col">Lecture Coverage</th>
                      <th scope="col">	Action</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                      <td>Hansala Indrachapa</td>
                      </th>
                      <th scope="row">
                      <td>	EAP</td>
                      </th>
                      
                      <th scope="row">
                      <td>EAP-IT - Chapa -March 2023</td>
                      </th>
                      
                      <th scope="row">
                      <td>	2023-04-01</td>
                      </th>
                      
                      <th scope="row">
                      <td>12:30:00</td>
                      </th>
                      
                      <th scope="row">
                      <td>16:30:00</td>
                      </th>
                      
                      <th scope="row">
                      <td>4h : 0m</td>
                      </th>

                      <th scope="row">
                      <td>Questionnaire FOC referencing 2023</td>
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
                      <tr>
                      <td>
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                  Decline
                     
                      </Button>
                      </td>
                      </tr>
                      </th>
            
                    </tr>



                    <tr>   
                      
                      
                      
                      <th scope="row">
                      <td>Hansala Indrachapa</td>
                      </th>
                            
                      <th scope="row">
                      <td>Com.Skil-UOB</td>
                      </th>
                      
                            
                      <th scope="row">
                      <td>CS - UOB - Chapa -March 2023</td>
                      </th>
                      
                            
                      <th scope="row">
                      <td>2023-04-04</td>
                      </th>
                      
                            
                      <th scope="row">
                      <td>	08:00:00</td>
                      </th>
                      
                            
                      <th scope="row">
                      <td>13:30:00</td>
                      </th>
                      
                            
                      <th scope="row">
                      <td>5h : 30m</td>
                      </th>

                      <th scope="row">
                      <td>Session 02+Presentation+Tenses</td>
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
                      <tr>
                      <td>
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                  Decline
                     
                      </Button>
                      </td>
                      </tr>
                      </th>
            
                    </tr>
                      <tr>   
                      
                      
                      
                      <th scope="row">
                      <td>Hansala Indrachapa</td>
                      </th>
                            
                      <th scope="row">
                      <td>CS</td>
                      </th>
                      
                            
                      <th scope="row">
                      <td>C S-IT - Chapa -March 2023</td>
                      </th>
                      
                            
                      <th scope="row">
                      <td>2023-04-09</td>
                      </th>
                      
                            
                      <th scope="row">
                      <td>	09:00:00</td>
                      </th>
                      
                            
                      <th scope="row">
                      <td>		13:00:00</td>
                      </th>
                      
                            
                      <th scope="row">
                      <td>	4h : 0m</td>
                      </th>
                      
                      <th scope="row">
                      <td>		Letter Writing 1 & 2</td>
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
                      <tr>
                      <td>
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                  Decline
                     
                      </Button>
                      </td>
                      </tr>
                      </th>
            
                    </tr>
                      <tr>   
                      
                      
                      
                      <th scope="row">
                      <td>Hansala Indrachapa</td>
                      </th>
                            
                      <th scope="row">
                      <td>		EAPCPITA</td>
                      </th>
                      
                            
                      <th scope="row">
                      <td>EAP-IT - Chapa -March 2023</td>
                      </th>
                      
                            
                      <th scope="row">
                      <td>2023-04-09</td>
                      </th>
                      
                            
                      <th scope="row">
                      <td>	13:30:00</td>
                      </th>
                      
                            
                      <th scope="row">
                      <td>	17:30:00</td>
                      </th>
                      
                            
                      <th scope="row">
                      <td>		4h : 0m</td>
                      </th>
                      
                      <th scope="row">
                      <td>			passive</td>
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
                      <tr>
                      <td>
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                  Decline
                     
                      </Button>
                      </td>
                      </tr>
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
  