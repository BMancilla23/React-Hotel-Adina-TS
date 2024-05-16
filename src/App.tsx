import { Footer } from "./common/footer/Footer";
import { Header } from "./common/header/Header";
import { AppRouter } from "./router/AppRouter";

export const App = () => {
	return (
		<>
			<Header></Header>
			<AppRouter />
			<Footer></Footer>
		</>
	)
};
