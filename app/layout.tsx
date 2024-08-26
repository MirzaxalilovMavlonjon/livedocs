import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import Provider from './Provider'
import { cn } from '@/lib/utils'

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
})

export const metadata: Metadata = {
	title: 'LiveDocs',
	description: 'You go-to collaborative editor',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<ClerkProvider
			appearance={{
				layout: {
					unsafe_disableDevelopmentModeWarnings: true,
				},
				baseTheme: dark,
				variables: { colorPrimary: '#3371FF', fontSize: '16px' },
			}}
		>
			<html lang='en' suppressHydrationWarning>
				<head />
				<body
					className={cn(
						'min-h-screen font-sans antialiased',
						fontSans.variable
					)}
				>
					<Provider>{children}</Provider>
				</body>
			</html>
		</ClerkProvider>
	)
}
