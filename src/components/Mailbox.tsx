interface MailboxProps {
  username: string;
  unreadMessages: string[];
}

export default function Mailbox({ username, unreadMessages }: MailboxProps) {
  return (
    <>
      <p>Hello {username}</p>
      <p>
        {unreadMessages.length > 0
          ? `You have ${unreadMessages.length} unread messages`
          : "No unread messages"}
      </p>
    </>
  );
}
