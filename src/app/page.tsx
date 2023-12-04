import { CreateTaskForm } from '@/components/CreateTaskForm';
import { TaskComp } from '@/components/TaskComp';
import { createClient } from '@/utils/createClient';

export default async function Home() {
	const client = createClient();
	const tasks = await client.api.queries.listTask();

	if (tasks.error) {
		return (
			<p className='text-center text-sm mt-6 text-red-600'>
				Error processing request!
			</p>
		);
	}

	return (
		<main className='min-h-screen pt-10 w-full bg-[#fafafa]'>
			<div className='w-full flex justify-center'>
				<div className='w-full lg:w-1/2'>
					<CreateTaskForm />
					<section className='border-t border-t-zinc-200 mt-6 px-2 py-4'>
						{tasks.data?.pageInfo.totalCount < 1 && (
							<p className='text-sm text-zinc-500 text-center'>
								No tasks yet!
							</p>
						)}
						{tasks.data.results.map((task) => (
							<TaskComp key={task.id} task={task} />
						))}
					</section>
				</div>
			</div>
		</main>
	);
}
