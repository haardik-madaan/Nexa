import React from 'react'
import CardNav from '../../reactBits/CardNav';
const logo = "/logo.png"; 


const Header = () => {
    const items = [
        {
          label: "About Us",
          bgColor: "#00000",
          textColor: "#fff",
          links: [
            { label: "Company", ariaLabel: "About Company", href: "/about" },
            { label: "Pricing", ariaLabel: "About Careers" }
          ]
        },
       
        {
          label: "Contact Us",
          bgColor: "#00000", 
          textColor: "#fff",
          links: [

            { label: "Twitter", ariaLabel: "Twitter" , href: "https://x.com/haardik_madaan" },
            { label: "LinkedIn", ariaLabel: "LinkedIn" , href: "https://www.linkedin.com/in/haardik-madaan-2040ba25b/" }
          ]
        }
      ];
    
      return (
        <CardNav
        logo={logo}
        logoAlt="Company Logo"
          items={items}
          baseColor="rgba(17, 24, 39, 0.2)"
          menuColor="#00000"
          buttonBgColor="#111"
          buttonTextColor="#fff"
          ease="power3.out"
        />
      );
}

export default Header