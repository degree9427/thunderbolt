CREATE TABLE `accounts` (
	`id` text PRIMARY KEY NOT NULL,
	`type` text NOT NULL,
	`imap_hostname` text,
	`imap_port` integer,
	`imap_username` text,
	`imap_password` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `accounts_id_unique` ON `accounts` (`id`);