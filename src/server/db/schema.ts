// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  boolean,
  index,
  pgEnum,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `todoly_${name}`);

export const priorityEnum = pgEnum("priority", ["low", "medium", "high"]);

export const tasks = createTable("task", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }).notNull(),
  completed: boolean("completed").default(false),
  priority: priorityEnum("priority").default(sql`'low'`),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt", { withTimezone: true }).default(
    sql`CURRENT_TIMESTAMP`,
  ),
});
