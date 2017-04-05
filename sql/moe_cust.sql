DROP TABLE moe_cust;
CREATE TABLE moe_cust(
   --
   cst_no     VARCHAR(6),
   cst_name   VARCHAR(20),
   --
   birth_date DATE,
   -- contact
   phone_1    VARCHAR(20),
   phone_2    VARCHAR(20),
   phone_3    VARCHAR(20),
   -- fisrt time
   first_date DATETIME,
   -- 0 female, 1 male
   gender     VARCHAR(1),
   -- addr
   zip_code   VARCHAR(6),
   addr_1     VARCHAR(2000),
   addr_2     VARCHAR(2000),
   addr_3     VARCHAR(2000),
   PRIMARY KEY (cst_no, cst_name),
   UNIQUE (cst_no)
);