import Link from 'next/link';
import { Task } from '../../keelClient';

type TaskCompType = {
	task: Task;
};

export const TaskComp = ({ task }: TaskCompType) => {
	return (
		<div className='flex border p-2 rounded-lg mb-2'>
			<div className='ml-4'>
				<p className='text-sm text-zinc-500 mb-2'>{task.description}</p>
				<div className='flex gap-4 items-center'>
					<Link
						href={task.id}
						className='flex items-center border py-1 px-2 rounded-lg hover:bg-zinc-300'
					>
						<p className='text-sm'>Edit</p>
					</Link>
					<button className='flex items-center border py-1 px-2 rounded-lg hover:bg-red-300'>
						<p className='text-sm'>Delete</p>
					</button>
				</div>
			</div>
		</div>
	);
};
