import React from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'

import Form from '../../PageForm/PageFormComponents/Form';
import Label from '../../PageForm/PageFormComponents/Label';
import StyledButton from '../PageFormComponents/Button';
import Input from '../PageFormComponents/Input';
import Textarea from '../PageFormComponents/Textarea'

const WrapperGrid = styled.div`
    ${props => props.full && css`
        
    grid-column: 1 / 3;
    `}
`;

const ContactForm = () => (
    <div>
        <h3>Email Us</h3>
        <Form>
            <WrapperGrid>
                <Label>Name</Label>
                <Input type="text" name="name" />
            </WrapperGrid>
            <WrapperGrid>
                <Label>Company</Label>
                <Input type="text" name="company" />
            </WrapperGrid>
            <WrapperGrid>
                <Label>Email Address</Label>
                <Input type="email" name="email" />
            </WrapperGrid>
            <WrapperGrid>
                <Label>Phone Number</Label>
                <Input type="text" name="phone" />
            </WrapperGrid>
            <WrapperGrid full>
                <Label>Message</Label>
                <Textarea name="message" rows="5"></Textarea>
            </WrapperGrid>
            <WrapperGrid full>
                <StyledButton>Submit</StyledButton>
            </WrapperGrid>
        </Form>
    </div>
)

export default ContactForm