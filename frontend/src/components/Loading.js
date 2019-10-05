import React from "react";
import { List as LoadingPlaceholder } from "react-content-loader";
import "./Loading.scss";

export function Loading({ count }) {
	const loading = [];
	for (let i = 0; i < count; i++) {
		loading.push(<LoadingPlaceholder ariaLabel="Espere mientras se cargan los resultados de su búsqueda..." key={i} className="loading-placeholder" />);
	}
	return loading;
}
