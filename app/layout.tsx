import "./globals.css";

import { AnalyticsWrapper } from "../components/analytics";
import Footer from "../components/footer";
import Header from "../components/header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head />
			<body>
				<div className=" min-h-screen relative bg-white dark:bg-gray-900 dark:text-light-beige flex flex-col">
					<div className=" flex flex-col flex-grow justify-between mx-auto desktop:max-w-3xl laptop:w-8/12 tablet:w-9/12 phone:w-11/12">
						<div>
							<Header />
							<main>{children}</main>
						</div>
						<Footer />
					</div>
				</div>
				<AnalyticsWrapper />
			</body>
		</html>
	);
}
