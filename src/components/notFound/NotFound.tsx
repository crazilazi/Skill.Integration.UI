import {  Button, Result  } from 'antd';
import { useNavigate } from 'react-router-dom';

const NotFound = () =>{
    const navigate = useNavigate();
  
    const navigateHome = () => {
      navigate('/'); // Navigate to the home page
    };
  
   return(<Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary" onClick={navigateHome}>Back Home</Button>}
    />
  );
} 

export default NotFound;