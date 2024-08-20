import { nanoid } from 'nanoid'
import { liveblocks } from '../liveblocks'
export const createDocument = async ({
	userId,
	email,
}: CreateDocumentParams) => {
	const roomId = nanoid()

	try {
		const metadata = {
			creatorId: userId,
			email,
			title: 'Untitled',
		}

		const usersAccesses:RoomAccesses={
			[email]:['roo']
		}
		
		const room = await liveblocks.createRoom('my-room-id', {
			defaultAccesses: ['room:read', 'room:presence:write'],
			groupsAccesses: {
				'my-group-id': ['room:write'],
			},
			usersAccesses: {
				'my-user-id': ['room:write'],
			},
		})
	} catch (error) {
		console.log(`Error happened while creating a room: ${error}`)
	}
}
