import { z } from 'zod';

export const RegisterSchema = z
	.object({
		email: z.string().email('Invalid email'),
		password: z.string().min(6, 'Password must be at least 6 characters'),
		// .regex(
		// 	/(?=.*[A-Z])/,
		// 	'Must include at least one uppercase letter'
		// )
		// .regex(/(?=.*[0-9])/, 'Must include at least one number')
		// .regex(
		// 	/(?=.*[!@#$%^&*()_\-+=<>?{}[\]~])/,
		// 	'Must include at least one special character'
		// ),
		confirmPassword: z.string(),
		name: z.string().min(1, 'Name is required'),
		birthday: z.string().refine(
			date => {
				const parsed = new Date(date);
				const now = new Date();
				const minDate = new Date(
					now.getFullYear() - 120,
					now.getMonth(),
					now.getDate()
				);
				const maxDate = new Date(
					now.getFullYear() - 13,
					now.getMonth(),
					now.getDate()
				);

				return (
					!isNaN(parsed.getTime()) &&
					parsed >= minDate &&
					parsed <= maxDate
				);
			},
			{
				message: 'Please enter a valid birthday between 13 and 120 years ago.',
			}
		),
		height: z.coerce.number().min(50, 'Too short').max(300, 'Too tall'),
		weight: z.coerce.number().min(20, 'Too light').max(500, 'Too heavy'),
	})
	.refine(data => data.password === data.confirmPassword, {
		message: 'Passwords must match',
		path: ['confirmPassword'], // focus the error on that field
	});

export type RegisterData = z.infer<typeof RegisterSchema>;
