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


    //
    Button,


  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
 
  Col,

  //
    
  
   
  
  
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
          <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-4">
              <big>Create New Batch</big>
            </div>
         
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
         
            <Form role="form">
              
            <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                   
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Enter Batch Code  " type="text" />
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                   
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Enter a Course " type="text" />
                </InputGroup>
              </FormGroup>
           
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                   
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Enter Branch " type="text" />
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                   
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Enter Start Date " type="text" />
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                   
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Enter End Date " type="text" />
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                   
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Enter Batch State " type="text" />
                </InputGroup>
              </FormGroup>

             
              <div className="text-center">
                <Button className="mt-4" color="primary" type="button">
              Create Batch
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Manage Batches</h3>
                </CardHeader>
                <Form>
                <tr> <Input placeholder="Search by batch code ..." type="text" />
                
        
                    </tr>
                    <br></br>
                    </Form>
                    
                
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Batch Code</th>
                      <th scope="col">	Branch</th>
                      <th scope="col">	Course ID</th>
                      <th scope="col">			Start Date</th>
                      <th scope="col">			End Date</th>
                      <th scope="col">		State</th>
                      <th scope="col">		</th>
                    <th scope="col" />
                    </tr>
                  </thead>

                  <tr>   
                  <th scope="row">
                      <td>	SE-UOB-Lab-JAF</td>
                      </th>
                      <th scope="row">
                      <td>		</td>
                      </th>
                      <th scope="row">
                      <td>	SE-UOB - Mar</td>
                      </th>
                      <th scope="row">
                      <td>		2023-03-01</td>
                      </th>
                      <th scope="row">
                      <td>			2023-08-31</td>
                      </th>
                      <th scope="row">
                      <td>		Ongoing</td>
                      </th>
                    
                      <th scope="row">
                    <td>
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
         Edit
                    </Button>
                    </td>
                    </th>
                    </tr>   
                    <tr>   
                  <th scope="row">
                      <td>	SE-UOB-L-JAF</td>
                      </th>
                      <th scope="row">
                      <td>		</td>
                      </th>
                      <th scope="row">
                      <td>	SE-UOB - Mar</td>
                      </th>
                      <th scope="row">
                      <td>		2023-03-01</td>
                      </th>
                      <th scope="row">
                      <td>			2023-08-31</td>
                      </th>
                      <th scope="row">
                      <td>		Ongoing</td>
                      </th>
                    
                      <th scope="row">
                    <td>
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
         Edit
                    </Button>
                    </td>
                    </th>
                    </tr>   
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
  