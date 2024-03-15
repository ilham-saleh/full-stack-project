# Entity-Relationship Diagram (ERD)

#### User

- **id**: INT
- **email**: VARCHAR
- **username**: VARCHAR
- **password**: VARCHAR
- **gender**: Gender
- **profileImage**: VARCHAR
- **createdAt**: DateTime
- **updatedAt**: DateTime

#### Message

- **id**: INT
- **text**: VARCHAR
- **senderId**: INT
- **receiverId**: INT
- **conversationId**: INT
- **createdAt**: DateTime
- **updatedAt**: DateTime

#### Conversation

- **id**: INT
- **createdAt**: DateTime
- **updatedAt**: DateTime

#### Post

- **id**: INT
- **name**: VARCHAR
- **prompt**: VARCHAR
- **image**: VARCHAR
- **createdAt**: DateTime
- **updatedAt**: DateTime

### Relationships

- **User** has many **Messages** (one-to-many)
- **Message** belongs to one **User** (many-to-one)
- **User** participates in many **Conversations** (many-to-many)
- **Message** belongs to one **Conversation** (many-to-one)
- **Post** is created by one **User** (one-to-many)
