import React, { useContext, useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
	const {store,actions} = useContext(Context)
	const [fullName, setFullName]= useState()
	const [email, setEmail]= useState()
	const [phone, setPhone]= useState()
	const [address, setAddress]= useState()
	
	const onSubmit = () => {
		actions.addNewContact({
			id: store.contacts.length+1,
			full_name: fullName,
			email: email,
			phone: phone,
			address: address
		})
	}
	useEffect(()=>{
		console.log(store.contacts)
	}, [store.contacts])
	return(
	<div style={{backgroundColor: "white"}}>
		<div className="text-center mt-5 main">
			<div className="mb-3 formulario" style={{ padding: "150px" }}>
				<h1 className="title"> ADD A NEW CONTACT</h1>
				<label for="formGroupExampleInput" class="form-label" style={{ display: "flex", justifyContent: "left", marginTop: "20px"}}>Full Name</label>
				<input type="text" class="form-control" id="formGroupExampleInput" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
				<label for="formGroupExampleInput" class="form-label" style={{ display: "flex", justifyContent: "left", marginTop: "20px" }} >Email</label>
				<input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
				<label for="formGroupExampleInput" class="form-label" style={{ display: "flex", justifyContent: "left", marginTop: "20px" }}>Phone</label>
				<input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
				<label for="formGroupExampleInput" class="form-label"style={{ display: "flex", justifyContent: "left", marginTop: "20px" }}>Address</label>
				<input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter address" value={address} onChange={(e) => setAddress(e.target.value)} />
				<div className="d-grid gap-2" style={{ marginTop: "20px" }}>
				<button className="btn btn-primary" type="button" onClick={onSubmit}>Save</button>
				<Link to="/demo" className="botonBack">
				<h1 style={{ textDecoration: "underline", fontSize: "14px", display: "flex", justifyContent: "left"}}>Or get back to contacts</h1>
 				</Link>
				</div>
			</div>
		</div>
	</div>
	)}; 	


	// const [fullName, setFullName] = useState("");
	// const [email, setEmail] = useState("");
	// const [phone, setPhone] = useState("");
	// const [address, setAddress] = useState("") ;

	// const handleSave = () => {
	// 	const newContact = {
	// 	fullName: fullName,
	// 	email: email,
	// 	phone: phone,
	// 	address: address,
	// 	};}