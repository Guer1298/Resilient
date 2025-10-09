import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

export const navBarLinks = [
    {
        id:1,
        title: "Home",
        href: "/"
    },
    {
        id:2,
        title: "Camisas",
        href: "/camisas"
    },
    {
        id:3,
        title: "Contact",
        href: "/contact"
    }
]

export const socialLinks = [
  {
	id: 'instagram',
	href: 'https://instagram.com',
	icon: <FaInstagram size={20} />,
  },
  {
	id: 'facebook',
	href: 'https://facebook.com',
	icon: <FaFacebook size={20} />,
  },
  {
	id: 'twitter',
	href: 'https://twitter.com',
	icon: <FaTwitter size={20} />,
  },
];
    
