'use client'
import Loader from '@/components/Loader'
import React, { createContext } from 'react'

import { ClientSideSuspense, LiveblocksProvider } from '@liveblocks/react'
import { getClerckUsers } from '@/lib/actions/user.actions'

const Provider = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<LiveblocksProvider
				authEndpoint={'/api/liveblocks-auth'}
				resolveUsers={async ({ userIds }) => {
					const user = await getClerckUsers({ userIds })

					return user;
				}}
			>
				<ClientSideSuspense fallback={<Loader />}>
					{children}
				</ClientSideSuspense>
			</LiveblocksProvider>
		</div>
	)
}

export default Provider
