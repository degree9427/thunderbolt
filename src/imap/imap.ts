import { invoke } from '@tauri-apps/api/core'

/**
 * Interface for IMAP credentials
 */
export interface ImapCredentials {
  hostname: string
  port: number
  username: string
  password: string
}

/**
 * **ImapClient**
 *
 * The `ImapClient` class serves as the primary interface for
 * communicating with the rust side of the IMAP functionality.
 */
export default class ImapClient {
  /**
   * **initialize**
   *
   * Initializes the IMAP client with the provided credentials.
   *
   * @example
   * ```ts
   * await ImapClient.initialize({
   *   hostname: 'imap.example.com',
   *   port: 993,
   *   username: 'user@example.com',
   *   password: 'password'
   * });
   * ```
   */
  async initialize(credentials: ImapCredentials): Promise<void> {
    await invoke<void>('init_imap')
  }

  /**
   * **listMailboxes**
   *
   * Lists all available mailboxes from the IMAP server.
   *
   * @example
   * ```ts
   * const mailboxes = await ImapClient.listMailboxes();
   * ```
   */
  async listMailboxes(): Promise<Record<string, any>> {
    return await invoke<Record<string, any>>('list_mailboxes')
  }

  /**
   * **fetchInbox**
   *
   * Fetches messages from the inbox.
   *
   * @param count - Optional number of messages to fetch
   *
   * @example
   * ```ts
   * // Fetch the latest 10 messages
   * const messages = await ImapClient.fetchInbox(10);
   *
   * // Fetch all messages
   * const allMessages = await ImapClient.fetchInbox();
   * ```
   */
  async fetchInbox(count?: number): Promise<any[]> {
    return await invoke<any[]>('fetch_inbox', { count })
  }
}
