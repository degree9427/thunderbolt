use assist_imap_client::ImapClient;
use libsql::Connection;

#[derive(Default)]
pub struct AppState {
    pub libsql: Option<Connection>,
    pub imap_client: Option<ImapClient>,
}
