use mozilla_assist_lib::imap_client;

fn main() {
    // Handle the Result and Option types
    let messages = imap_client::fetch_inbox_top(Some(3));
    match messages {
        Ok(msgs) => println!("Number of messages: {}", msgs.len()),
        Err(e) => println!("Error fetching messages: {}", e),
    }
}
