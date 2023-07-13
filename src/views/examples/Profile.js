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
 
  Input,

 


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
                <h3 className="mb-0">User Login Details</h3>
                <br></br>
                <h6 className="mb-0">*level 6:Lecture Login</h6>
                <br></br>
        <tr> <Input placeholder="Search by fullname" type="text" /></tr>
               
              
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Access Level</th>
                    <th scope="col">	Logged in Time</th>
                    <th scope="col">	IP Address</th>
                    <th scope="col">Action</th>
                   
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                    <td>thulaxan</td>
                    </th>
                    <th scope="row">
                    <td>		thulaxan</td>
                    </th>
                    
                    <th scope="row">
                    <td>thulaxan.u@gmail.com</td>
                    </th>
                    
                    <th scope="row">
                    <td>0</td>
                    </th>
                    
                    <th scope="row">
                    <td>2023-07-05 at 19:27:29 pm</td>
                    </th>
                    
                    <th scope="row">
                    <td>::1</td>
                    </th>
                    
            
                    
                    <th scope="row">
                    <td>
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                view location info
                    </Button>
                    </td>
                    </th>

                    
                  </tr>
                  <tr>   
                    
                    
                    
                    <th scope="row">
                    <td>Nayani </td>
                    </th>
                          
                    <th scope="row">
                    <td>Nayani</td>
                    </th>
                    
                          
                    <th scope="row">
                    <td>Nayani.t@gmail.com</td>
                    </th>
                    
                          
                    <th scope="row">
                    <td>0</td>
                    </th>
                    
                          
                    <th scope="row">
                    <td>		2023-07-05 at 16:13:18 pm</td>
                    </th>
                    
                          
                    <th scope="row">
                    <td>	::1</td>
                    </th>
                    
                 
                    <th scope="row">
                    <td>
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      view location info
                    </Button>
                    </td>
                    </th>

                    </tr>
                
                    <tr>   
                    
                    
                    
                    <th scope="row">
                    <td>Irushi </td>
                    </th>
                          
                    <th scope="row">
                    <td>Irushi </td>
                    </th>
                    
                          
                    <th scope="row">
                    <td>Irushi.j@gmail.com</td>
                    </th>
                    
                          
                    <th scope="row">
                    <td>0</td>
                    </th>
                    
                          
                    <th scope="row">
                    <td>	2023-07-05 at 10:17:53 am</td>
                    </th>
                    
                          
                    <th scope="row">
                    <td>	::1</td>
                    </th>
      
                    <th scope="row">
                    <td>
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                     view location info
                    </Button>
                    </td>
                    </th>     
            
                    </tr>
                    <tr>   
                    
                    
                    
                    <th scope="row">
                    <td>Anura </td>
                    </th>
                          
                    <th scope="row">
                    <td>	Anura</td>
                    </th>
                    
                          
                    <th scope="row">
                    <td>Anura.l@gmail.com</td>
                    </th>
                    
                          
                    <th scope="row">
                    <td>0</td>
                    </th>
                    
                          
                    <th scope="row">
                    <td>	2023-07-04 at 09:51:48 am</td>
                    </th>
                    
                          
                    <th scope="row">
                    <td>		::1</td>
                    </th>
                    
                          
                   
                    
                          
                    <th scope="row">
                    <td>
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                    view location info
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
