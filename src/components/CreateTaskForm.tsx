'use client';

import { createTaskAction } from '@/app/actions/createTask';
import { useFormStatus } from 'react-dom';

function Button() {
	const { pending } = useFormStatus();
	return (
		<button
			disabled={pending}
			className='py-1 px-4 w-full h-10 rounded-lg text-white bg-zinc-800 hover:bg-zinc-900'
		>
			{pending ? 'Please wait...' : 'Create'}
		</button>
	);
}

export const CreateTaskForm = () => {
	return (
		<form action={createTaskAction}>
			<textarea
				name='description'
				cols={30}
				rows={2}
				className='w-full border rounded-lg mb-2 p-4'
				placeholder='Enter task description'
			/>
			<div className='flex justify-end'>
				<div>
					<Button />
				</div>
			</div>
		</form>
	);
};
