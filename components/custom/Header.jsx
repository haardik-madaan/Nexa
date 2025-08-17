import React from 'react'
import CardNav from '../reactBits/CardNav';
import logo from "@/public/logo.png"; 


const Header = () => {
    const items = [
        {
          label: "About",
          bgColor: "#0D0716",
          textColor: "#fff",
          links: [
            { label: "Company", ariaLabel: "About Company" },
            { label: "Careers", ariaLabel: "About Careers" }
          ]
        },
        {
          label: "Projects", 
          bgColor: "#0D0716",
          textColor: "#fff",
          links: [
            { label: "Featured", ariaLabel: "Featured Projects" },
            { label: "Case Studies", ariaLabel: "Project Case Studies" }
          ]
        },
        {
          label: "Contact",
          bgColor: "#0D0716", 
          textColor: "#fff",
          links: [
            { label: "Email", ariaLabel: "Email us" },
            { label: "Twitter", ariaLabel: "Twitter" },
            { label: "LinkedIn", ariaLabel: "LinkedIn" }
          ]
        }
      ];
    
      return (
        <CardNav
        logo={logo}
        logoAlt="Company Logo"
          items={items}
          baseColor="rgba(17, 24, 39, 0.2)"
          menuColor="#ffff"
          buttonBgColor="#111"
          buttonTextColor="#fff"
          ease="power3.out"
        />
      );
}

export default Header