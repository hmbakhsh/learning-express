import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
export const links = pgTable('links', {
    id: serial('id').primaryKey(),
    created_at: timestamp('created_at'),
    url: text('url'),
    tags: text('tags'),
});
//# sourceMappingURL=schema.js.map