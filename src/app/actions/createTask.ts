'use server';

import { createClient } from '@/utils/createClient';
import { revalidatePath } from 'next/cache';

export const createTaskAction = async (formData: FormData) => {
	const client = createClient();
	const description = String(formData.get('description'));

	if (!description) {
		throw new Error('No description provided.');
	}

	const response = await client.api.mutations.createTask({ description });

	if (response.data) {
		revalidatePath('/');
	} else {
		throw new Error(response.error.message);
	}
};
