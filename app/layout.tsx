import "./globals.css";

import { AnalyticsWrapper } from "../components/analytics";
import Footer from "../components/footer";
import Header from "../components/header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="dark bg-dark-bg">
			<head />
			<body>
				<div className=" min-h-screen bg-white dark:bg-dark-bg dark:text-light-beige flex flex-col items-center transition-colors">
					<div className=" flex flex-col flex-grow justify-start gap-7 desktop:max-w-3xl laptop:w-8/12 tablet:w-9/12 phone:w-11/12">
						<Header />
						<main className=" flex-grow">{children}</main>
						<Footer />
					</div>
				</div>
				<AnalyticsWrapper />
			</body>
		</html>
	);
}
