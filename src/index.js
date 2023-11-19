// import libraries
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import theme
// import theme from './assets/js/theme';
import theme from "./assets/js/themebackup";
import "./index.css";
// import "@fontsource/roboto/300.css";
// import "@fontsource/montserrat"; // Specify weight
//import "@fontsource/source-sans-pro"; // Defaults to weight 400
// import store
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<>
		{/* <React.StrictMode> */}
		<Provider store={store}>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				{/* <ThemeProvider theme={theme}> */}
				<CssBaseline />
				<App />
				{/* </ThemeProvider> */}
			</LocalizationProvider>
		</Provider>
		{/* </React.StrictMode> */}
	</>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
