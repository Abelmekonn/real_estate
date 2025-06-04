import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import Apartemen from "./Pages/Apartemen";
import List from "./Pages/List";
import Detail from "./Pages/Detail";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/service" element={<Service />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/apartemen" element={<Apartemen />} />
					<Route path="/list" element={<List />} />
					<Route path="/detail" element={<Detail />} />

					{/* Add more routes here */}
				</Route>
			</Routes>
		</>
	);
}

export default App;
