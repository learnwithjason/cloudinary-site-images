import { column, defineDb, defineTable } from 'astro:db';

// https://astro.build/db/config
export default defineDb({
	tables: {
		Upload: defineTable({
			columns: {
				id: column.number({ primaryKey: true }),
				public_id: column.text(),
				alt: column.text(),
			},
		}),
	},
});
