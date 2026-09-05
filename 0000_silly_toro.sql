CREATE TABLE `student_registrations` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`full_name` text NOT NULL,
	`cedula` text NOT NULL,
	`phone` text NOT NULL,
	`email` text NOT NULL,
	`consent_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `idx_student_registrations_cedula` ON `student_registrations` (`cedula`);--> statement-breakpoint
CREATE UNIQUE INDEX `idx_student_registrations_email` ON `student_registrations` (`email`);