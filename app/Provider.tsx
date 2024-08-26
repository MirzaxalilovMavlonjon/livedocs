import Loader from '@/components/Loader'
import React, { createContext } from 'react'

import { ClientSideSuspense, LiveblocksProvider } from '@liveblocks/react'

const Provider = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<LiveblocksProvider authEndpoint={'/api/liveblocks-auth'}>
				<ClientSideSuspense fallback={<Loader />}>
					{children}
				</ClientSideSuspense>
			</LiveblocksProvider>
		</div>
	)
}

export default Provider
