import styled from "styled-components";
import {Button} from 'reactstrap';

export const LoginFormContainer = styled.div`
  background-image: url("${window.location.href}images/background.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 10px;
`;

export const Panel = styled.div`
  > p {
    color: #777777;
    font-size: 14px;
    margin-bottom: 30px;
    line-height: 24px;
  }
`;

export const Logo = styled.img`
  margin-bottom: 5px;
`;

export const DivMain = styled.div`
  background: #ffffff none repeat scroll 0 0;
  border-radius: 2px;
  margin: 10px auto 30px;
  max-width: 38%;
  padding: 50px 70px 70px 71px;
  
  @media (min-width: 320px) and (max-width: 480px) {
    max-width: 100%;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 10px;
`;

export const InputFormControl = styled.input`
  background: #f7f7f7 none repeat scroll 0 0;
  border: 1px solid #d4d4d4;
  border-radius: 4px;
  font-size: 14px;
  height: 50px;
  line-height: 50px;
  width: 100%;
  padding: 10px;
`;

export const LoginFormRow = styled.div`
  text-align: center;
`;

export const LoginButton = styled(Button)`
background: #f0ad4e none repeat scroll 0 0;
  border-color: #f0ad4e;
  color: #ffffff;
  font-size: 14px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  padding: 0;
`;