import Layout from "../components/layout";
import {SessionProvider} from "next-auth/react"
import 'swiper/css';
import "swiper/css/pagination";
import "../styles/globals.css";

export default function App({
								Component,
								pageProps: {session, ...pageProps},
							}) {
	return (
		<SessionProvider session={session}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SessionProvider>
	);
}


