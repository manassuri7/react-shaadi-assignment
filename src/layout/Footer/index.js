import React, { Component } from 'react';
import {FooterContent, GitHubLogo} from './footerStyle';

class Footer extends Component {
    render() {
        return (
            <FooterContent>
                Designed and Developed by Manas
                <br/>
                <a href="https://github.com/manassuri7">Explore my other Projects</a> | 
                <a href="https://www.linkedin.com/in/manas-suri-032aa4184/">Connect wih me on LinkedIn</a> | 
            </FooterContent>
        );
    }
}

export default Footer;