# Entity-Relationship Diagram (ERD)

```mermaid
erDiagram
    User {
        id INT
        email VARCHAR
        username VARCHAR
        password VARCHAR
        gender Gender
        profileImage VARCHAR
        createdAt DateTime
        updatedAt DateTime
    }
    Message {
        id INT
        text VARCHAR
        senderId INT
        receiverId INT
        conversationId INT
        createdAt DateTime
        updatedAt DateTime
    }
    Conversation {
        id INT
        createdAt DateTime
        updatedAt DateTime
    }
    User ||--o- Message : sends
    User ||--o- Message : receives
    User ||--o- Conversation : participates
    Message ||--|- Conversation : belongs to
    Post ||--|- User : created by
    Post {
        id INT
        name VARCHAR
        prompt VARCHAR
        image VARCHAR
        createdAt DateTime
        updatedAt DateTime
    }
```
