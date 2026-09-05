import { sql } from "drizzle-orm";
import { integer, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

export const studentRegistrations = sqliteTable("student_registrations", {
  id: integer("id").primaryKey({ autoIncrement: true }), fullName: text("full_name").notNull(),
  cedula: text("cedula").notNull(), phone: text("phone").notNull(), email: text("email").notNull(),
  consentAt: text("consent_at").notNull().default(sql`CURRENT_TIMESTAMP`), createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table) => [uniqueIndex("idx_student_registrations_cedula").on(table.cedula), uniqueIndex("idx_student_registrations_email").on(table.email)]);
