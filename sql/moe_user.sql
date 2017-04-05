-- drop table
DROP TABLE moe_user;
-- create table
CREATE TABLE moe_user (
   usr_no       INT,
   usr_id       VARCHAR(20),
   usr_pwd      VARCHAR(20) NOT NULL,
   --
   usr_name     VARCHAR(50),
   usr_email    VARCHAR(2000),
   --
   signup_date  DATETIME DEFAULT CURRENT_TIMESTAMP,
   quit_date    DATE,
   quit_days    INT  DEFAULT 0,
   last_login   DATETIME,
   PRIMARY KEY (usr_no, usr_id),
   UNIQUE (usr_id)
);
-- insert data
INSERT INTO moe_user (
   usr_no
  ,usr_id
  ,usr_pwd
  ,usr_name
  ,usr_email
  ,signup_date
  ,quit_date
  ,quit_days
  ,last_login
) VALUES (
   1  
  ,'red'
  ,'red'
  ,'林柏宏'  -- usr_name - IN varchar(50)
  ,'peterline123@gmail.com'  -- usr_email - IN varchar(2000)
  ,now()  -- signup_date - IN datetime
  ,null  -- quit_date - IN date
  ,0   -- quit_days - IN int(11)
  ,null  -- last_login - IN datetime
);