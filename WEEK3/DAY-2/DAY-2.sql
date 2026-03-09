CREATE DATABASE EventDb

USE EventDb

CREATE TABLE UserInfo (
    EmailId VARCHAR(100) PRIMARY KEY,
    UserName VARCHAR(50) NOT NULL,
    Role VARCHAR(20) NOT NULL CHECK (Role IN ('Admin','Participant')),
    Password VARCHAR(20) NOT NULL
);

CREATE TABLE EventDetails (
    EventId INT PRIMARY KEY,
    EventName VARCHAR(50) NOT NULL,
    EventCategory VARCHAR(50) NOT NULL,
    EventDate DATETIME NOT NULL,
    Description VARCHAR(255),
    Status VARCHAR(20) CHECK (Status IN ('Active','In-Active'))
);

CREATE TABLE SpeakersDetails (
    SpeakerId INT PRIMARY KEY,
    SpeakerName VARCHAR(50) NOT NULL
);

CREATE TABLE SessionInfo (
    SessionId INT PRIMARY KEY,
    EventId INT NOT NULL,
    SessionTitle VARCHAR(50) NOT NULL,
    SpeakerId INT NOT NULL,
    Description VARCHAR(255),
    SessionStart DATETIME NOT NULL,
    SessionEnd DATETIME NOT NULL,
    SessionUrl VARCHAR(200),
    FOREIGN KEY (EventId) REFERENCES EventDetails(EventId),
    FOREIGN KEY (SpeakerId) REFERENCES SpeakersDetails(SpeakerId)
);

CREATE TABLE ParticipantEventDetails (
    Id INT PRIMARY KEY,
    ParticipantEmailId VARCHAR(100) NOT NULL,
    EventId INT NOT NULL,
    SessionId INT NOT NULL,
    IsAttended BIT CHECK (IsAttended IN (0,1)),
    FOREIGN KEY (ParticipantEmailId) REFERENCES UserInfo(EmailId),
    FOREIGN KEY (EventId) REFERENCES EventDetails(EventId),
    FOREIGN KEY (SessionId) REFERENCES SessionInfo(SessionId)
);

INSERT INTO UserInfo (EmailId, UserName, Role, Password)
VALUES ('jahnavi@gmail.com', 'Jahnavi', 'Admin', 'pass123');

INSERT INTO UserInfo (EmailId, UserName, Role, Password)
VALUES ('janu@gmail.com', 'janu', 'Participant', 'janul123');

INSERT INTO EventDetails (EventId, EventName, EventCategory, EventDate, Description, Status)
VALUES (1, 'AI Conference', 'Technology', '2026-04-10', 'Artificial Intelligence Event', 'Active');

INSERT INTO EventDetails (EventId, EventName, EventCategory, EventDate, Description, Status)
VALUES (2, 'Web Development Workshop', 'Education', '2026-05-15', 'Learn Web Development', 'Active');

INSERT INTO SpeakersDetails (SpeakerId, SpeakerName)
VALUES (101, 'Dr. Anishath');

INSERT INTO SpeakersDetails (SpeakerId, SpeakerName)
VALUES (102, 'Janvi');

INSERT INTO SessionInfo 
(SessionId, EventId, SessionTitle, SpeakerId, Description, SessionStart, SessionEnd, SessionUrl)
VALUES 
(1, 1, 'Introduction to AI', 101, 'Basics of Artificial Intelligence', '2026-04-10 10:00', '2026-04-10 11:00', 'www.ai-session.com');

INSERT INTO SessionInfo 
(SessionId, EventId, SessionTitle, SpeakerId, Description, SessionStart, SessionEnd, SessionUrl)
VALUES 
(2, 2, 'HTML Basics', 102, 'Introduction to HTML', '2026-05-15 09:00', '2026-05-15 10:00', 'www.html-session.com');

INSERT INTO ParticipantEventDetails
(Id, ParticipantEmailId, EventId, SessionId, IsAttended)
VALUES
(1, 'janu@gmail.com', 1, 1, 1);

INSERT INTO ParticipantEventDetails
(Id, ParticipantEmailId, EventId, SessionId, IsAttended)
VALUES
(2, 'janu@gmail.com', 2, 2, 0);

SELECT * FROM UserInfo;
SELECT * FROM EventDetails;
SELECT * FROM SpeakersDetails;
SELECT * FROM SessionInfo;
SELECT * FROM ParticipantEventDetails;