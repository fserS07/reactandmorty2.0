import React from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Navbar, NavbarBrand} from 'reactstrap';
import Image from 'react-bootstrap/Image';

const defaultEndpoint = "https://rickandmortyapi.com/api/character";

export default function Page500(){

	return( 
		<>
		 <Navbar className="my-2" color="light" width="10%">   
		  <NavbarBrand href="/">
		   <Image src ="https://rickandmortyapi.com/api/character/avatar/19.jpeg" alt="" className="rounded-circle" width="10%"/> 
		  </NavbarBrand>
		 </Navbar>
		 <p className="h1 text-dark text-center">I m sorry Summer but this server  means nothing to me</p>
		</>
	)	
}	
