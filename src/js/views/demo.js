import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<Link to="/">
				<button className="btn btn-success" style={{display: "flex", justifyContent: "right"}}>Add new contact</button>
			</Link>
			
			<ul className="list-group">
				{store.contacts.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}>
							<p>{item.full_name}</p>
							<p>{item.email}</p>
							<p>{item.phone}</p>
							<p>{item.address}</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
